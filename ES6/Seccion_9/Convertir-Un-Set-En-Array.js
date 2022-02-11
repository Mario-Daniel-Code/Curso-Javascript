/*----------------Convertir un Set en Array------------------*/

/*Arreglo de colores*/

let colores = ["rojo","gris", "azul", "gris", "azul","morado"];

/*Si quiero recuperar este set*/
/*console.log(setColores);*/

/*Como retornar mi set como un arreglo*/
/*Spread corresponde a un operador el cuál distribuye los elementos
de un arreglo u objeto, para asignarlos a alguna variable/constante/función.*/
/*let arrayColores = [...setColores];*/

let arrayColores = eliminaDuplicados(colores);
console.log(arrayColores);

/*Que recibe una coleccion de items */
function eliminaDuplicados(items){
    /*Convertir los items en un set */
    /*Quiero regresar un arreglo de items sin duplicados */
    /*Una sola liena de cod para eliminar duplicados */
    return [... new Set(items)];
}