/*------------------Declaración básica de una clase en ES6-------------------*/

/*Defincion basica de una clase */
class Usuario {
  /*Mi objeto que estoy recibiendo */
  /*Constructor permite hacer todas las inicializaciones de la clase al momento de ser usada*/
  constructor(nombre) {
    this.nombre = nombre;
  }

  /*Esto equivale ha Usuario.prototype.decirNombre() */
  /*Agregar la funcion*/
  decirNombre() {
    console.log(this.nombre);
  }
}
/*Usar la clase */
/*new permite a los desarrolladores crear una instancia de un tipo de objeto definido por 
el usuario o de uno de los tipos de objeto integrados que tiene un función constructora*/
/*Intento llamarla como una funcion sin el new, el constructor de la clase no fue invocado*/
let mario = new Usuario("Mario Daniel");
/*Usar la funcionalidad */
mario.decirNombre();

/*instanceof Verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor*/
console.log(mario instanceof Usuario);
console.log(mario instanceof Object);

/*Esperariamos que sea una clase y sale una funcion */
console.log(typeof Usuario);
console.log(typeof Usuario.prototype.decirNombre);
