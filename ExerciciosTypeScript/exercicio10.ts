class Person {
    nome : string;
    idade : number;

    constructor(nome : string, idade : number) {
        this.nome = nome;
        this.idade = idade;
    }

    imprimirDetalhes() : void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}