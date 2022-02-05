/*------------------Ejemplos de funciones de flecha------------------*/

/*Funcion normal de js*/
var miFuncion2 = function (valor) {
  return valor;
};
/*Funcion de flecha mas compacta ,mi valor de entra y mi valor de mi fn*/
let miFuncion1 = (valor) => valor;

/*console.log(miFuncion1());
console.log(miFuncion2());*/

/*Funcion normal, cuando hay 2 parametros de js en ES5*/
var restar2 = function (num1, num2) {
  return num1 - num2;
};
console.log(restar2(6, 2));

/*Funcion de flecha*/
let restar1 = (num1, num2) => num1 - num2;
console.log(restar1(15, 9));

/*En caso de no tener ningun parametro ES5*/
var saludo2 = function () {
  return "Hola";
};

/*Funcion de flecha*/
let saludo1 = () => "Hola";

/*ES5 */
var saludoUsuario2 = function (nombre) {
  var salida = "Hola, " + nombre;
  return salida;
};
/*Este es su homologo de la funcion de arriba, tiene cosas en comun*/
let saludoUsuario1 = (nombre) => {
  /*Varias lineas lo uso como el anterior*/
  let salida = `Hola, ${nombre}`;
  return salida;
};

console.log(saludoUsuario2("Daniel"));
console.log(saludoUsuario1("Cris"));

/*Quiero regresar un objeto literal ES5*/
var obtenerCurso1 = function (costo) {
  /*Objeto */
  return {
    costo: costo,
    nombre: "JavaScript: ECMAScript 6 y todos sus detalles",
  };
};
console.log(obtenerCurso1());

/*ES6 funcion de flecha, pongo parentesis para que me retorne mi objeto literal*/
let obtenerCurso2 = (costo) => ({
  costo: costo,
  nombre: "JavaScript: ECMAScript 6 y todos sus detalles",
});
console.log(obtenerCurso2());