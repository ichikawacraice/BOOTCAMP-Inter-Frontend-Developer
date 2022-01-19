function verificaErro(arr, num) {
    
    try {
        if (!arr || !num) throw new ReferenceError("Envie os dois parâmetros");
        if (typeof arr !== "object") throw new TypeError("O Array não é um objeto")
        if (typeof num  !== "number") throw new TypeError("Não é um número")

        const arrSize = Object.keys(arr).length;
        if (arrSize !== num) throw new RangeError("O tamanhado enviado é diferente do tamanho do objeto")
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.message);
        } else {
            console.log("Ocorreu um tipo de erro inesperado" + e);
        }
        
    }
    
}


const person = {
    nome:"Gabriel",
    sobrenome: "Ichikawa Craice",
    idade: "34" 
}

console.log(verificaErro(person, 3));