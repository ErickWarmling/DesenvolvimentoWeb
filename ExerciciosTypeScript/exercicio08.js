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
