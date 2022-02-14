/*------------Usando valores raw (crudos) en templates literales---------------*/

/*Usando valores crudos raw 
Los caracteres especiales cuando realizan algun tipo de cambio en el string,
su comportamiento puede que cambie
*/

let mensaje = `Hola a \n todos \\`,
/*tags*/
mensaje2 = String.raw`Hola a \n todos \\`;

/*Recuerda que los tags solo funcionan con template literales*/
var mensaje3 = String.raw`Hola a \n todos \\`;
console.log("mensaje",mensaje);
console.log("mensaje2",mensaje2);
console.log("mensaje3",mensaje3);

