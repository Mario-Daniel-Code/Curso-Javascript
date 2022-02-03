/*-----------------------Parametros-REST-Parametros-Sin-Nombre----------------------- */

/*ES5*/
function agregar_Usuario() {
  console.log(arguments);
  /*Empezaremos en la primera posicion */
  for (var i = 1; i < arguments.length; i++) {
    /*Para anadir un objeto al arreglo */
    arguments[0].push(arguments[i]);
  }
  /*Primero recibira el arreglo, despues una serie de usuarios
que seran añadidos mediante esta fn*/

  return arguments[0];
}
/*Problemas en ES5 como sabemos que que recibe un parametro inicial y una seire de parametros opcionales */
var usuarios_arr1 = ["Carlos"];
var usuarios_arr2 = agregar_Usuario(
  usuarios_arr1,
  "Karen",
  "Liz",
  "Eloisa",
  "Ana"
);

console.log(usuarios_arr2);
