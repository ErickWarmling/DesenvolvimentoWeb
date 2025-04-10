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
