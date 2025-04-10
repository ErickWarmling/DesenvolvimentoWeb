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