// Exercício 1 - indexOf
console.log("---------- Exercício 1 ----------");
let alunos = ["Ana","Carlos", "Eduardo", "Fabiana", "Lucas"];
console.log(alunos.indexOf("Eduardo"));

// Exercício 2 - forEach
console.log("---------- Exercício 2 ----------");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach(function (num){
    console.log(num);
});

// Exercício 3 - toString()
console.log("---------- Exercício 3 ----------");
let frutas = ["Maçã", "Banana", "Laranja", "Abacaxi", "Melância", "Mamão"];
console.log(frutas.toString());

// Exercício 4 - push() e pop()
console.log("---------- Exercício 4 ----------");
let cores = ["Azul", "Verde", "Amarelo", "Vermelho", "Cinza", "Branco", "Marrom"];
console.log(cores);
cores.push("Rosa");
console.log(cores);
cores.pop();
console.log(cores);

// Exercício 5 - unshift() e shift()
console.log("---------- Exercício 5 ----------");
let animais = ["Elefante", "Boi", "Girafa", "Cachorro"];
console.log(animais);
animais.unshift("Gato");
console.log(animais);
animais.shift();
console.log(animais);

// Exercício 6 - splice()
console.log("---------- Exercício 6 ----------");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Array original: " + numbers);
numbers.splice(2, 1);
console.log("Após remover: " + numbers);
numbers.splice(2, 0, 33);
console.log("Após inserir: " + numbers);

// Exercício 7 - filter()
let estudantes = [
    {nome: "João", idade: 17},
    {nome: "Maria", idade: 20},
    {nome: "Pedro", idade: 18},
    {nome: "Ana", idade: 16}
];

let maiorIdade = estudantes.filter(function(est){
    return est.idade >= 18;
});

console.log("---------- Exercício 7 ----------");
console.log(maiorIdade);

// Exercício 8 - find()
let produtos = [
    {id: 1, nome: "Caderno"},
    {id: 2, nome: "Caneta"},
    {id: 3, nome: "Lápis"},
    {id: 4, nome: "Borracha"}
];

let produto = produtos.find(function(prod){
    return prod.id == 3;
});

console.log("---------- Exercício 8 ----------");
console.log(produto);

// Exercício 9 - every()
let arrayNumeros = [1, 2, 3, 4, 5 , -6];

let verificaNumeroInteiro = arrayNumeros.every(function (num){
    return num >= 0;
});

console.log("---------- Exercício 9 ----------");
console.log(verificaNumeroInteiro);

// Exercício 10 - some()
let palavras = ["Bola", "Armário", "Caixa", "Livro", "Revista"];

let encontraPalavra = palavras.some(function(palavra) {
    return palavra === "Livro";
});

console.log("---------- Exercício 10 ----------");
console.log(encontraPalavra);

// Exercício 11 - map() 
let vetorNumeros = [1, 2, 3, 4, 8, 9, 30, 53];

let numerosMultiplicados = vetorNumeros.map(function (num){
    return num * 3;
});

console.log("---------- Exercício 11 ----------");
console.log(numerosMultiplicados);

// Exercício 12 - reduce()
let somaNumeros = vetorNumeros.reduce(function(total, num) {
    return total + num;
}, 0);

console.log("---------- Exercício 12 ----------");
console.log("Resultado: " + somaNumeros);

// Exercício 13 - concat()
let alimentos = ["Macarrão", "Arroz", "Feijão", "Batata-frita", "Churrasco"];
let bebidas = ["Água", "Coca-Cola", "Suco de Laranja", "Vinho", "Sprite"];

let concatenarArrays = alimentos.concat(bebidas);

console.log("---------- Exercício 13 ----------");
console.log(concatenarArrays);

// Exercício 14 - slice() 
let letras = ["A", "B", "C", "D", "E", "F"];

let resultado = letras.slice(0, 3);

console.log("---------- Exercício 14 ----------");
console.log(resultado);

// Exercício 15 - reverse()
alimentos.reverse();

console.log("---------- Exercício 15 ----------");
console.log(alimentos);

// Exercício 16 - sort()
let objetos = ["Bola", "Panela", "Smartphone", "Televisão", "Controle", "Aeroporto"];
objetos.sort();

console.log("---------- Exercício 16 ----------");
console.log(objetos);

// Exercício 17 - localeComapre()
let nomes = ["Erick", "Edina", "Edilcio", "Clara", "Marco", "Lucas", "Kevin", "Thassyana", "Fernando", "Leonardo", "Luiz", "Diego"];

let comparador = nomes.sort (function (nome1, nome2) {
    return nome1.localeCompare(nome2);
});

console.log("---------- Exercício 17 ----------");
console.log(comparador);