/*-------------------Extensiones de objetos literales-------------------*/

/*ES5 objetos literales son colecciones de pares */

var objeto = {
/*Nombre de la propiedad y el valor de la propiedad */
  nombre: "Luis",
};

/*ES6*/

function crearUsuario(nombre, apellido, edad) {
/*Regresar un obj literal */
/*ES5 
 return {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  };
*/
/*ES6 lo puedo simplificar de eta manera  */
return {
    nombre,
    apellido,
    edad,
  };
 
}

var Carmen = crearUsuario("Carmen", "Gonzales", 24);
console.log(Carmen);
