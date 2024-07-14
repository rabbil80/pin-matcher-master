let generatePin;
let triesLeft = 3;

const generateNum = document.getElementById('generateNum');
const pinGenerate = document.getElementById('generateBtn');
const allButton = document.querySelector('.button');
const buttons = document.querySelectorAll('.button');
const inputPin = document.getElementById('inputPin');
const submitBtn = document.querySelector('.submit-btn');
const tryBtn = document.getElementById('tryBtn');
const tryLeft = document.getElementById('tryLeft');
const notMatch = document.getElementById('not-match');
const match = document.getElementById('match');

function generateRandomPin() {
    return Math.floor(1000 + Math.random() * 9000).toString();
};

pinGenerate.addEventListener('click', function () {
    generateNum.value ='';
    generatePin = generateRandomPin();
    generateNum.value = generatePin;

});

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick)
    function handleButtonClick(params) {
        const buttonValue = params.target.innerText;
        if (buttonValue === 'C') {
            inputPin.value = '';
        } else if (buttonValue === '<'){
            inputPin.value = inputPin.value.slice(0, -1);
        } else{
            inputPin.value += buttonValue
        }
    }
});

submitBtn.addEventListener('click', 
    function submitClick () {
        generateNum.value = '';
       
    if (inputPin.value === generatePin) {
        match.style.display ='block'
       notMatch.style.display = 'none'
       inputPin.value = '';
    } 
    else{
        match.style.display ='none'
        notMatch.style.display = 'block'
        inputPin.value = '';
        triesLeft--;
        if (triesLeft === 0) {
            submitBtn.disabled = true;
            tryBtn.innerHTML =`No tries left`
        } else{
            tryBtn.innerHTML = ` <span>${triesLeft}</span> try left`
        }
    }
});

