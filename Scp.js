class FigurasGeometrica {
    constructor() {
        this.tipo = "Figura Geométrica";
         
    };

    area() {
           
    }

    perimetro() {
       
    }

}
//let area;
//let perimetro;

class Circulo extends FigurasGeometrica {
    constructor(radio) {
        super();
        this.tipo = "Círculo";
        this.radio = radio;
    }

    area() {
        return 3.14 * this.radio ** 2;
    }

    perimetro() {
        return 2 * 3.14 * this.radio;
    }
}

class cuadrados extends FigurasGeometrica {
    constructor(lado) {

        super();

        this.tipo = "Cuadrado";
        this.lado = lado;

    }

    area() {
        return this.lado ** 2;
    }

    perimetro() {
        return 4 * this.lado;
    }
}

class Rectangulo extends FigurasGeometrica {
    constructor(base, altura) {

        super();
        this.tipo = "Rectángulo";
        this.base = base;
        this.altura = altura;


    }

    area() {
        return this.base * this.altura;
    }

    perimetro() {
        return 2 * (this.base + this.altura);
    }
}


const circulo = new Circulo(2);
const Cuadrados = new cuadrados(8);
const rectangulo = new Rectangulo(5, 16);
console.log(` ${circulo.tipo}`);
console.log(`area es ${circulo.area()}`);
console.log(`perimetro es ${circulo.perimetro()}`);

console.log(` ${Cuadrados.tipo}`);
console.log(`area es ${Cuadrados.area()}`);
console.log(`perimetro es ${Cuadrados.perimetro()}`);

console.log(` ${rectangulo.tipo}`);
console.log(`area es ${rectangulo.area()}`);
console.log(`perimetro es ${rectangulo.perimetro()}`);

