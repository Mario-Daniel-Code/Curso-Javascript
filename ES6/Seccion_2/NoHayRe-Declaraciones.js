/*--------------------------No hay re-declaraciones----------------------------------*/

/*Solo puede a ver una declaracion por bloque
var mensaje = "Node";
var mensaje = "Jest";
var mensaje = "ReactNative";
var mensaje = "React";
//En este caso imprime la ultima vez que se declaro la varible
console.log(mensaje);
*/

/*En el ES6 la declaracion let obliga, que en el 
bloque exista la variable con ese nombre 

*/
// Este representa el obj global
let mensaje = "React";
//No se cumplio la condicion, asi que es false
//Si la condicion se cumple, lee lo que trae el bloque 
if(7===7){
    let mensaje = "ReactNative";
    console.log(mensaje);
}

console.log(mensaje);
