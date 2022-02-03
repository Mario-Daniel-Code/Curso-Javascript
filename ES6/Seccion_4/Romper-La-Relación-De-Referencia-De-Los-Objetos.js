/*----------------------Romper la relación de referencia de los objetos-------------------*/

/*Todos los objetos son pasados por referencia */

let Usuario1 = {
  id: 1,
  nombre: "Marco",
};
/*Con llaves {...Usuario1} quiero todas las propiedades de
 Usuario1 y las va asiganar a Usuario2 y asi podremos valores distintos  */
let Usuario2 = { ...Usuario1 };

/*En js todos los objetos son pasados por referencia
Debes de hacer una asigancion en memoria de Usuario1*/
Usuario2.nombre = "Sara";

console.log(Usuario1);
console.log(Usuario2);
