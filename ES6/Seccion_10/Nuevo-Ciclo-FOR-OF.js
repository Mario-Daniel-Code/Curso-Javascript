/*--------------------Nuevo ciclo - FOR-OF-----------------------*/

/*for...of ejecuta un bloque de código para cada elemento de un objeto iterable, 
como lo son: String , Array , objetos similares a array (por ejemplo, arguments or NodeList ),
TypedArray , Map , Set e iterables definidos por el usuario. */

/*--------------------------------------------Ejemplo 2---------------------------------------------*/
/*Arreglo dentro de ellos mis objetos o grupos */
/*
let telefonosColor = [
    {Huawei: "Azul", precio : 8500},
    {Huawei: "Rojo", precio : 5000},
    {Huawei: "Negro", precio : 20000},
    {Huawei: "Gris", precio : 4000},
];
*/

/*Barrer cada u no de mis elementos*/
/*Alias el nombre que sea */
/*
for (TelColor of telefonosColor){
console.log(TelColor.Huawei, TelColor.precio);
}
*/
/*-------------------------------------------Ejemplo 3---------------------------------------------*/
/*Con un set */
/*let telefonosColor = new Set();*/
/*Con un Map */
/*Resultado ultimo dato, porque los mapas no tienen nombres de propiedades repetidas */
let telefonosColor = new Map([["Motorola", "Gris"], ["Color", "Rojo"]]);
/*
telefonosColor.add({Iphone:"Gris", precio: 12000});
telefonosColor.add({Iphone:"Rojo", precio: 17000});
telefonosColor.add({Iphone:"Negro", precio: 20000});
*/
/*Tambien pueden ser con registros esto en el Set*/
/*
telefonosColor.add("Rosa");
telefonosColor.add("Verde");
telefonosColor.add("Blanco");
*/


for (let TelColor of telefonosColor){
    /*TelColor es el valor que tiene el Set */
    console.log(TelColor);
}
console.log(TelColor);





/*-------------------------------------------Ejemplo 1----------------------------------------------*/
/*let numeros = [12, 45, 88, 7, 56, 78];*/
/*Imprimir cada uno de esos valores en consola*/
/*Length es la propiedad de una función objeto, e indica
el número de argumentos que una función requiere */

/*1ra Forma */
/*
for(let i = 0; i<numeros.length; i++){
    console.log(numeros[i]);
}
*/

/*Segunda forma*/
/*
for (let i in numeros) {
  console.log(numeros[i]);
}
*/

/*Tercera forma con for of y la mas sensilla*/
/*
for (let i of numeros){
    console.log(i);
}
*/

