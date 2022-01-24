const currentNumberWrapper = document.getElementById('currentNumber')
const btnAdicionar = document.querySelector('.adicionar')
const btnSubtrair = document.querySelector('.subtrair')
let currentNumber = 0

btnAdicionar.onclick = () => {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber

  if (currentNumber >= 10) {
    btnAdicionar.classList.add('disabled')
    btnAdicionar.setAttribute('disabled', 'true')
  } else if (currentNumber < 10 && currentNumber > -10) {
    btnSubtrair.classList.remove('disabled')
    btnSubtrair.removeAttribute('disabled')
  }
}

btnSubtrair.onclick = () => {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber

  if (currentNumber <= -10) {
    btnSubtrair.classList.add('disabled')
    btnSubtrair.setAttribute('disabled', 'true')
  } else if (currentNumber > -10 && currentNumber < 10) {
    btnAdicionar.classList.remove('disabled')
    btnAdicionar.removeAttribute('disabled')
  }
}
