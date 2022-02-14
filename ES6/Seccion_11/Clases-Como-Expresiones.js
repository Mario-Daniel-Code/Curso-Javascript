/*----------------------Clases como expresiones-----------------------*/

// let miFuncion = function () {
//   console.log("Hola mundo");
// };

// let otraFuncion = miFuncion;
// /*Es una funcion */
// console.log(typeof otraFuncion);
// /*Esta es una funcion hecha con una expresion */
// otraFuncion();

/*Con una clase */
let Usuario = class {
  constructor() {
    this.nombre = "Edith";
    this.edad = 20;
    this.direccion = "Toluca";
  }

  decirNombre() {
    console.log("Hola Mundo");
    console.log(this.nombre);
  }
};
let mario = new Usuario();
mario.decirNombre();
/*Typeof devuelve una cadena que indica el tipo del operando sin evaluarlo, operando
es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo*/
console.log(typeof mario);
/*instanceof Verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor*/
console.log(mario instanceof Usuario);
