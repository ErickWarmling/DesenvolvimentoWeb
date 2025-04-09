var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Exercício 10
var Person = /** @class */ (function () {
    function Person(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Person.prototype.imprimirDetalhes = function () {
        console.log("Nome: ".concat(this.nome, ", Idade: ").concat(this.idade));
    };
    return Person;
}());
// Exercício 11
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(nome, idade, nota) {
        var _this = _super.call(this, nome, idade) || this;
        _this.nota = nota;
        return _this;
    }
    Student.prototype.imprimirDetalhes = function () {
        console.log("Nome: ".concat(this.nome, ", Idade: ").concat(this.idade, ", Nota: ").concat(this.nota));
    };
    return Student;
}(Person));
// Exercício 12
var pessoa1 = new Person('Erick Augusto Warmling', 20);
var estudante1 = new Student('Carla Warmling', 25, 10);
pessoa1.imprimirDetalhes();
estudante1.imprimirDetalhes();
var Retangulo = /** @class */ (function () {
    function Retangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Retangulo;
}());
var Circulo = /** @class */ (function () {
    function Circulo(raio) {
        this.raio = raio;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * (Math.pow(this.raio, 2));
    };
    return Circulo;
}());
var retangulo = new Retangulo(5, 4);
console.log('Área do Retângulo: ', retangulo.calcularArea());
var circulo = new Circulo(6);
console.log('Área do Círculo: ', circulo.calcularArea());
