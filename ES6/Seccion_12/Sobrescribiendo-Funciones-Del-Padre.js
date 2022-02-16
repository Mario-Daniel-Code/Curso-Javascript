/*------------------Sobrescribiendo funciones del padre---------------------*/


class Triangulo {
    constructor(alto, largo) {
     
      this.alto = alto;
      this.largo = largo;
    }
    getArea() {
      return "Triangulo: " + (this.alto * this.largo);
    }
  }
  
  class Cuadrado extends Triangulo {
    constructor(alto) {
      super(alto, alto);
    }
    /*Sobrescribiendo funciones del padre */
    getArea(){
        // return "Cuadrado: " + (this.alto * this.alto);
        /*Como llamar el getArea del Triangulo*/
        /*Super vera de donde extiende del Triangulo y buscara el metodo correspondiente*/
        return super.getArea();
    }
  }
  
  let triangulo = new Triangulo(8, 6);
  let cuadrado = new Cuadrado(6);
//   console.log(cuadrado.getArea());
  console.log(triangulo.getArea());

  
 
  