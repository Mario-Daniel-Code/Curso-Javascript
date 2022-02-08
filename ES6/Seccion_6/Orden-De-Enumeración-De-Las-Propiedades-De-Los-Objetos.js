/*---------------Orden de enumeración de las propiedades de los objetos-------------------*/

/*El orden de la propiedad de los objetos*/

/*ES6 Reglas
- Todas las llaves en orden acendiente
- Todas las llaves tipo string van ordenadas en la manera que fueron agregadas al objeto
- Todos los simbolos en el orden que fueron agregados al objeto
*/
/*De esta forma se comportan las enumeraciones en los objetos*/

/*Ejemplo*/

var objeto = {
    Z: 1,
    9: 1,
    x: 1,
    12: 1,
    g: 1
}

/*Otras propiedades en timepo de ejcucion*/
objeto.d = 1;
objeto["2"]= 1;
objeto["a"]= 1;

/*getOwnPropertyNames() devuelve un array con todas las propiedades
(numerables o no) encontradas en un objeto dado. */

/*El método join() une todos los elementos de una matriz 
(o un objeto similar a una matriz) en una cadena y devuelve esta cadena*/

/*Las uniremos con un join y que esten separadas por una coma*/
/*Aparecen los numeros ordenados de manera acendiente y las letras como fueron agregadas */
console.log(Object.getOwnPropertyNames(objeto).join(","));


console.log(Object.keys(objeto));
/*El método JSON. stringify() convierte un objeto o valor de JavaScript
 en una cadena de texto JSON */
console.log(JSON.stringify(objeto));


for (i in Object.keys(objeto)){
    console.log(Object.keys(objeto)[i]);
}






