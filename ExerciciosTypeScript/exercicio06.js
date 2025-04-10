var arrayNumeros = [1, 2, 3, 5, 8, 9];
function somaNumerosArray(arrayNumeros) {
    var soma = 0;
    for (var i = 0; i < arrayNumeros.length; i++) {
        soma += arrayNumeros[i];
    }
    return soma;
}
console.log(somaNumerosArray(arrayNumeros));
