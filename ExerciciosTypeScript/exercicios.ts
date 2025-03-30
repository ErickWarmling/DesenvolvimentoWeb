// Exercício 01
let numero : number = 5;
console.log(numero);

// Exercício 02
let mensagem : string = "Olá, TypeScript!";
console.log(mensagem);

// Exercício 03
let amizade : boolean = true;
console.log(amizade);

// Exercício 04
function soma(num1 : number, num2 : number) : number {
    return num1 + num2;
}

console.log(soma(3, 3));
console.log(soma(15, 10));
console.log(soma(6, 4));

// Exercício 05 
function calcularComprimento(palavra : string) : number {
    return palavra.length;
}

console.log(calcularComprimento("Erick"));
console.log(calcularComprimento("Fernando"));
console.log(calcularComprimento("Otarrinolaringologista"));

// Exercício 06
let arrayNumeros = [1, 2, 3, 5, 8, 9];

function somaNumerosArray(arrayNumeros : number[]) : number {
    var soma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i];
    }
    return soma;
}

console.log(somaNumerosArray(arrayNumeros));

// Exercício 07
let matrizA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrizA.length; i++) {
    for (let j = 0; j < matrizA[i].length; j++) {
        console.log(matrizA[i][j]);
    }
}

// Exercício 08
let matrizB = [
    [3, 4, 5],
    [9, 7, 1],
    [2, 5, 8]
];

let lin = 0;
let col = 0;

while (lin < matrizB.length) {
    console.log(matrizB[lin][col]);
    col++;

    if (col >= matrizB[lin].length){
        col = 0;
        lin++;
    }
}

// Exercício 09
type Pessoa = {
    nome : string,
    idade : number,
    cidade : string
};

const pessoas : Pessoa[] = [
    {nome: "Erick", idade: 20, cidade: "Urubici"},
    {nome: "Edina", idade: 52, cidade: "Urubici"},
    {nome: "Edilcio", idade: 57, cidade: "Urubici"}
];

for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, cidade: ${pessoa.cidade}`);
}