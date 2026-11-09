const numero = require('readline-sync')

let num1 = Number(numero.question('Digite um numero:'));
let num2 = Number(numero.question('Digite mais um numero:'));

const resto = num1 % num2;
console.log('resto da divisão', resto)

