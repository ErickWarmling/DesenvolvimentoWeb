"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
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
exports.Person = Person;
