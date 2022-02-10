/*---------------------Símbolos y propiedades------------------*/

/*Para que nos sirven los simbolos
Son buenos para poner nombre de propiedades y no colisionen entre librerias
*/
/*Symbol Symbol es un tipo de datos cuyos valores son únicos e immutables.
Dichos valores pueden ser utilizados como identificadores (claves) de las
propiedades de los objetos */
/*Los simbolos no tienen constructor */
/*Alias */
let primerNombre = Symbol("primer nombre");
let segundoNombre = Symbol("segundo nombre");

/*objeto */

let usuario = {
  [segundoNombre]: "Martinez",
};

/*Es una forma de ejcutar algo inmediantamente */
usuario[primerNombre] = "Mario";
/*Si denidimos una prpiedad y un objeto como simbolo debe usarse como
una propiedad computada, usando llaves []*/
console.log(usuario[primerNombre]);
console.log(usuario[segundoNombre]);
/*imprimira sus alias */
console.log(primerNombre);
console.log(segundoNombre);

let simbolo1 = Symbol("simbolo");
let simbolo2 = Symbol("simbolo");
/*Para ver si los simbolos son iguales*/
/*Una caracteristica de los simbolos es que siempre son diferentes */
console.log("==========================");
console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));

/*Mi simbolo no lo puedo convertir en un string*/
/*Tampoco se puede usar en los templates*/
