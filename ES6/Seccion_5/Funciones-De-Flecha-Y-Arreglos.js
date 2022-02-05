/*--------------------Funciones de Flecha y Arreglos---------------------*/


/*ES5*/
/*Fn de flecha son ideales para trabajar con las fn predefenidas que tiene js*/
var arreglo = [5,434,3,1];
/*El método sort() ordena los elementos de un arreglo (array) localmente
 y devuelve el arreglo ordenado. */
var ordenado = arreglo.sort(function(a,b){
    /*Diferencia que sea mayor a - b */
    return a-b;
});
console.log(ordenado);

/*ES6 es mas sensillo */
let ordenadoES6 = arreglo.sort((a, b) => a-b );
console.log(ordenadoES6);
