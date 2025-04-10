let arrayNumeros = [1, 2, 3, 5, 8, 9];

function somaNumerosArray(arrayNumeros : number[]) : number {
    var soma = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i];
    }
    return soma;
}

console.log(somaNumerosArray(arrayNumeros));