var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; 
    var elplus = document.getElementsByClassName('adicionar');
    var elminus = document.getElementsByClassName('subtrair');
    
    if (currentNumber >= 10) {
        elplus[0].classList.add('disabled');
        elplus[0].setAttribute('disabled','true');
    } 
    else if (currentNumber < 10 && currentNumber > -10) {
        elminus[0].classList.remove('disabled');
        elminus[0].removeAttribute('disabled');
    }
    
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber; 
    var elplus = document.getElementsByClassName('adicionar');
    var elminus = document.getElementsByClassName('subtrair');

    if (currentNumber <= -10) {
        elminus[0].classList.add('disabled');
        elminus[0].setAttribute('disabled','true');
    } 
    else if (currentNumber > -10 && currentNumber < 10) {
        elplus[0].classList.remove('disabled');
        elplus[0].removeAttribute('disabled');
    }
}