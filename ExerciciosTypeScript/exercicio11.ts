class Student extends Person {
    nota : number;

    constructor(nome : string, idade : number, nota : number) {
        super(nome, idade);
        this.nota = nota;
    }

    imprimirDetalhes(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Nota: ${this.nota}`);
    }
}