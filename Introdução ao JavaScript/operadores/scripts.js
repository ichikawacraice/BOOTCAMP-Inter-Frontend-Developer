const btnAdd = document.querySelectorAll('.btnAdd');
const inputAdd1 = document.querySelector('.inputAdd1');
const inputAdd2 = document.querySelector('.inputAdd2');
const btnSoma = document.querySelector('.soma');
const btnSubtracao = document.querySelector('.subtracao');
const btnMultiplicacao = document.querySelector('.multiplicacao');
const btnDivisao = document.querySelector('.divisao');
const mostrarResultado = document.querySelector(".resultado");
var userData = inputAdd1.value;
var userData2 = inputAdd2.value;

// Ativando botão de add somente quando tiver texto
inputAdd1.onkeyup = () => {
    verificaAdd();
}
inputAdd2.onkeyup = () => {
    verificaAdd();
}

function verificaAdd() {
    userData = inputAdd1.value;
    userData2 = inputAdd2.value;
    
    if (userData.trim() != 0 && userData2.trim() != 0) {
        for (let i = 0, len = btnAdd.length; i < len; i++) {
            btnAdd[i].classList.add("active");
        }
        
    } else {
        for (let i = 0, len = btnAdd.length; i < len; i++) {
            btnAdd[i].classList.remove("active");
        }
    }
}

function soma() {
    if (confere()) {
        return 'Por favor digite um número válido';
    } else {
        let soma = userData + userData2; 
        resultado = `Foi realizado uma <b>SOMA</b>. <br>`;
        return imprime(soma);
    }
}

function subtracao() {
    if (confere()) {
        return 'Por favor digite um número válido';
    } else {
        let soma = userData - userData2; 
        resultado = `Foi realizado uma <b>SUBTRAÇÃO</b>. <br>`;
        return imprime(soma);
    }
}

function multiplicacao() {
    if (confere()) {
        return 'Por favor digite um número válido';
    } else {
        let soma = userData * userData2; 
        resultado = `Foi realizado uma <b>MULTIPLICAÇÃO</b>. <br>`;
        return imprime(soma);
    }
}

function divisao() {
    if (confere()) {
        return 'Por favor digite um número válido';
    } else {
        let soma = userData / userData2; 
        resultado = `Foi realizado uma <b>DIVISÃO</b>. <br>`;
        return imprime(soma);
    }
}

function confere() {
    if (isNaN(userData) || isNaN(userData2)) {
        return true;
    } else {
        userData = Number(userData);
        userData2 = Number(userData2);
        return false;   
    }     
}

function imprime(soma) {
    resultado += `O resultado é igual a <b>${soma}</b>. <br> `; 
    resultado += ((userData === userData2) ? `Os números <b>${userData}</b> e <b>${userData2}</b> são iguais. <br>` : `Os números <b>${userData}</b> e <b>${userData2}</b> são diferentes. <br>`);
    
    if ((soma > 10) ? resultado += 'O número é maior que 10 ' : resultado += 'O número é menor que 10 ');
    
    if ((soma < 20) ? resultado += 'e é menor que 20. ' : resultado += 'e é maior que 20. ');

    mostrarResultado.innerHTML = resultado;
    inputAdd1.value = "";
    inputAdd2.value = "";
}