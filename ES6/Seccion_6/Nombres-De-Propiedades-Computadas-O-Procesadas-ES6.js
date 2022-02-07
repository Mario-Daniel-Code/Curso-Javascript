/*------------------Nombres de propiedades computadas o procesadas ES6 -----------------*/

/*ES6*/
var apellido = "primer apellido";

/*Definir l objeto literal*/
var usuario = {
  "primer nombre": "Arturo",
  [apellido]: "Albarran",
};

console.log(usuario["primer nombre"]);
console.log(usuario[apellido]);

var subFijo = " nombre";
var usuarios = {
  /*Usar las propiedades computadas */
  ["primer" + subFijo]: "Alan",
  ["segundo" + subFijo]: "Andrea",
};
console.log(usuarios["primer nombre"]);
console.log(usuarios["segundo" + subFijo]);
