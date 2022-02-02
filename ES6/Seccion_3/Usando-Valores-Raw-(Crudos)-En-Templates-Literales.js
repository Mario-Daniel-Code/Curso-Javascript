/*------------Usando valores raw (crudos) en templates literales---------------*/

/*Usando avlores crudos raw 
Los caracteres especiales cuando realizan algun tipo de cmabio en el string,
su comportamiento puede que cambie
*/

let mensaje = `Hola a \n todos \\`,
/*tags*/
var mensaje2 = String.raw`Hola a \n todos \\`;

/*Recuerda que los tags solo funcionan con template literales*/
mensaje3 = String.raw`Hola a \n todos \\`;
console.log(mensaje);
console.log(mensaje2);
