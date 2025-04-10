interface Shapes {
    calcularArea() : number;
}

class Retangulo implements Shapes {
    
    base : number;
    altura : number;

    constructor(base : number, altura : number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

class Circulo implements Shapes{
    
    raio : number;

    constructor(raio : number) {
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * (this.raio ** 2);
    }
}

const retangulo = new Retangulo(5, 4);
console.log('Área do Retângulo: ', retangulo.calcularArea());

const circulo = new Circulo(6);
console.log('Área do Círculo: ', circulo.calcularArea());