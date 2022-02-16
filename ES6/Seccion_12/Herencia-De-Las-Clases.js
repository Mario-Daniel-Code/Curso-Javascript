/*----------------------Herencia de las Clases-------------------------*/

/* Herencia Trasferir metodos y propiedades a un hijo desde la clase padre*/

class Triangulo {
  constructor(alto, largo) {
    /*Inicializar una varibale dentro de la clase usamos*/
    this.alto = alto;
    this.largo = largo;
  }
  getArea() {
    return this.alto * this.largo;
  }
}

let triangulo = new Triangulo(8, 6);
console.log(triangulo.getArea());

/*Definir la clase, pero sin hacer el constructor ni sus metodos*/

/*Extends se puede usar para crear una subclase a partir de clases 
personalizadas, así como sus objetos incorporados */
class Cuadrado extends Triangulo {
  constructor(alto) {
    /*super hace referencia a lo que ha heradado, es usada para acceder y llamar funciones del padre de un objeto*/
    super(alto, alto);
    /*Para que obtenga las propiedades y metodos*/
  }
}

let cuadrado = new Cuadrado(6);
console.log(cuadrado.getArea());

/*Validaciones*/

console.log(cuadrado instanceof Cuadrado);
/*True por que se heredo del rectangulo */
console.log(cuadrado instanceof Triangulo);
