// Exercício 01
var numero = 5;
console.log(numero);
// Exercício 02
var mensagem = "Olá, TypeScript!";
console.log(mensagem);
// Exercício 03
var amizade = true;
console.log(amizade);
// Exercício 04
function soma(num1, num2) {
    return num1 + num2;
}
console.log(soma(3, 3));
console.log(soma(15, 10));
console.log(soma(6, 4));
// Exercício 05 
function calcularComprimento(palavra) {
    return palavra.length;
}
console.log(calcularComprimento("Erick"));
console.log(calcularComprimento("Fernando"));
console.log(calcularComprimento("Otarrinolaringologista"));
// Exercício 06
var arrayNumeros = [1, 2, 3, 5, 8, 9];
function somaNumerosArray(arrayNumeros) {
    var soma = 0;
    for (var i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i];
    }
    return soma;
}
console.log(somaNumerosArray(arrayNumeros));
// Exercício 07
var matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (var i = 0; i < matrizA.length; i++) {
    for (var j = 0; j < matrizA[i].length; j++) {
        console.log(matrizA[i][j]);
    }
}
// Exercício 08
var matrizB = [
    [3, 4, 5],
    [9, 7, 1],
    [2, 5, 8]
];
var lin = 0;
var col = 0;
while (lin < matrizB.length) {
    console.log(matrizB[lin][col]);
    col++;
    if (col >= matrizB[lin].length) {
        col = 0;
        lin++;
    }
}
var pessoas = [
    { nome: "Erick", idade: 20, cidade: "Urubici" },
    { nome: "Edina", idade: 52, cidade: "Urubici" },
    { nome: "Edilcio", idade: 57, cidade: "Urubici" }
];
for (var _i = 0, pessoas_1 = pessoas; _i < pessoas_1.length; _i++) {
    var pessoa = pessoas_1[_i];
    console.log("Nome: ".concat(pessoa.nome, ", idade: ").concat(pessoa.idade, ", cidade: ").concat(pessoa.cidade));
}
