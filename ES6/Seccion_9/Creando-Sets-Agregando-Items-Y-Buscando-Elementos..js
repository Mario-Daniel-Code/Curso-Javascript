/*----------------Creando sets - agregando items y buscando elementos--------------------*/

/*Meter un arreglo */
let items = new Set([1,2,3,4,5,6,7,7,7]);
/*Queremos saber si el elemento 5 existe*/
/*El método has() retorna un booleano indicando si el elemento
especificado existe en el objeto Set o no. */
console.log(items.has(5));

/*En el arreglo queremos verificar si existe un elemento, normalmente hago un for
for(var i in arreglos){
}
*/


/*Como agregar items a ese elemento*/
/*El método add() añade un nuevo elemento con un valor
específico al final del objeto Set . */
/*items.add(10);
items.add(11);
items.add(12);*/
/*Si intento meter varios elementos duplicados, simplemente los ignorara */
/*items.add(12);
items.add("100000");*/
/*El valor de size es un entero que representa cuantas
entradas tiene el objeto Set */
/*Para ver cuantos elementos tiene el set */
/*console.log(items.size)*/

/*---------------------------------- */

/*Como crear un set a partir de una coleccion de datos*/

/*Valores que pueden tener los sets*/
/*Booleano, strings, objetos etc */

