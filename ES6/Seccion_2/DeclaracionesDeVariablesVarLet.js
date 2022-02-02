/*-------------------------------Declaraciones de variables var vs let ------------------------------------*/
/* Como saber en que scope estas trabajando
* Si no estamos trabajando dentro de una funcion estamos en scope global
* Si no estamos en una funcion el scope de una funcion

GlobalScope he declarado la variable, la cual se encuentra en mi obj window
JS lo va leyendo linea x linea hacia abajo
ES6 tiene un nuevo tipo de inicializacion de variables
Interprete lee var lo puede leer como un undefined
En caso del let lo obliga js antes de ser usada, la variable debe de existir
previamnete

let mensaje = "Hola Mundo";
console.log(mensaje);
*/

// Ejemplo
let mensaje = "12";

if(2===4){
      mensaje = "Hola  mundo";
}
console.log(mensaje);




