var pessoas = [
    { nome: "Erick", idade: 20, cidade: "Urubici" },
    { nome: "Edina", idade: 52, cidade: "Urubici" },
    { nome: "Edilcio", idade: 57, cidade: "Urubici" }
];
for (var _i = 0, pessoas_1 = pessoas; _i < pessoas_1.length; _i++) {
    var pessoa = pessoas_1[_i];
    console.log("Nome: ".concat(pessoa.nome, ", idade: ").concat(pessoa.idade, ", cidade: ").concat(pessoa.cidade));
}
