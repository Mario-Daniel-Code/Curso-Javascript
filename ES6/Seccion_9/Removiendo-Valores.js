/*------------------Removiendo valores---------------------*/

let items = new Set([1,2,3,4,5,6]);
/*Como borrar un elemento*/
console.log(items.size);

/*El operador delete elimina una propiedad de un objeto*/
items.delete(5);
console.log(items.size);
console.log(items);

/*El método clear() remueve todos los elementos de un objeto Set . */
items.clear();
console.log(items.size);
console.log(items);

/*
Es como si hiciera esto
if(items.has(3)){
    items.delete
}
*/
