/*-------------------Coerción de los símbolos---------------------*/


/*Coercion en jsEs la conversión automática o implicita de valores de un tipo de 
dato a otro (Ejemplo: de cadena de texto a número)*/

/*En los simbolos la coercion es inflexible*/

let id = Symbol("id");
let numero = 10;
let texto = "10";
let bool = true;
let notAtNumber = NaN;


/*console.log(numero + Number(texto));*/
console.log(numero + texto);
/*Convierte arepresentacion numerica 1 y 1 = 2*/
console.log(bool + !bool);
/*No puede convertir un simbolo a string*/
/*console.log(texto + id);*/
/*Llamado normal */
console.log(id);
/*Si quiero convertir mi id en string */
console.log("mi simbolo es:", String(id));

/*Nota: Sirven para identificar de forma unica (key)*/


