// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

let message = "Hello World!"
alert(message)

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = prompt("Digite um valor")
numberOne = Number(numberOne)

let numberTwo = prompt("Digite outro número")
numberTwo = Number(numberTwo)

alert("A soma é: " + (numberOne + numberTwo))

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a 
//    mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let number = "a"

if (typeof number === "number"){
    alert("É um número")
} else {
    alert("Não é um número")
}
console.log(typeof number)

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a 
//    mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let string = 5

if (typeof string === "string"){
    alert("É uma string")
} else {
    alert("Não é uma string")
}
console.log(typeof string)

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a 
// mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let booeleanValue = false

if(typeof booeleanValue === "boolean"){
    alert("É um booleano")
} else {
    alert("Não é um booelano")
}
console.log(typeof booeleanValue)

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.    

let number1 = Number(prompt("Digite um número"))
let number2 = Number(prompt("Digite outro número"))

alert("A subtração é: " + (number1 - number2))

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas

let n1 = prompt("Digite um número")
n1 = Number(n1)

let n2 = prompt("Digite outro número")
n2 = Number(n2)

alert("A multiplicação é: " + (n1 * n2))

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let valueOne = parseFloat(prompt("Digite um número"))
let valueTwo = parseFloat(prompt("Digite outro número"))

alert("A divisão é: " + (valueOne / valueTwo))

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba 
// a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let pair = 6

if(pair % 2 == 0){
    alert("É um número par")
} else {
    alert("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, 
// exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let odd = 7

if(odd % 2 == 1){
    alert("É um número ímpar")
} else {
    alert("Não é um número ímpar")
}

