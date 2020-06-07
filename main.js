var Calculadora = require("./utils");

console.log(`Soma: ${Calculadora.somar("00000001", "00000011") == 100}`); //100
console.log(`Subtração: ${Calculadora.subtrair("00000010", "00000001") == 1}`); //1
console.log(`Multiplicação: ${Calculadora.multiplicar("00000001", "00000011") == 11}`); //11
console.log(`Divisão: ${Calculadora.dividir("00010100", "00000011") == 110}`); //110
console.log(`Resto: ${Calculadora.calcularResto("00010100", "00000011") == 10}`);
