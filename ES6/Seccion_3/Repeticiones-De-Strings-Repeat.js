/*--------------------Repeticiones de strings repeat------------------------- */

let texto = "Hola";
/*El numero de veces para repetir el texto, repeat => repetir*/
console.log(texto.repeat(5));

/*Espacios de 12 caracteres*/
const ESPACIOS = 12;
/*2 arreglos con datos*/
let nombres = ["Daniel", "Mari", "Mariel"];
let telefonos = ["23454345", "23984673", "11286543"];

/*Para barrer las 3 posiciones*/
for (i in nombres) {
  /*Cuantos caracteres faltan para llegar a 12 en cada nombre
     El largo que tenga ese caracter 
    */
  let diferencia = ESPACIOS - nombres[i].length;
  /*Concatenar los espacios, y repetir la diferencia*/
  console.log(nombres[i] + " ".repeat(diferencia) + "|" + telefonos[i]);
}
