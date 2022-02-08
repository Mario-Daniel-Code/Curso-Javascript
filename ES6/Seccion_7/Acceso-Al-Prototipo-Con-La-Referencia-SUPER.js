/*------------------Acceso al prototipo con la referencia "SUPER"------------------*/

/*ES5 Es complicado hacer un llamado de una funcion que
esta heredada de un objeto que viene de prototipo*/

/*Es complicado llamar metodos que vienen herdadados de prototipos*/

let persona = {
  saludar() {
    return "Hola";
  },
};

let amigo = {
  saludar() {
    /*ES5 hacian esto a la referencia de this.saludar de persona*/
    /*return Object.getPrototypeOf(this).saludar.call(this) + ", saludos!!";*/

    /*ES6 tenemos el objeto super que nos permite acceder ha prototipo padre heredado de persona*/
    /*Quiero llamar al objeto saludar porque se que esta heradado*/
    /*Super es usada para acceder y llamar funciones del padre de un objeto */
    return super.saludar() + ", saludos!";
  },
};
/*Heredarr las propiedades de persona a amigo te tienes que aprendr esto =>
El objeto que quiero cambiar el prototipo y de quien quiero agarrar el prototipo
*/

Object.setPrototypeOf(amigo, persona);
console.log(amigo.saludar());

/*Nota: Acceder a los metodos de los objetos que estan siendo herados de otro objeto*/
