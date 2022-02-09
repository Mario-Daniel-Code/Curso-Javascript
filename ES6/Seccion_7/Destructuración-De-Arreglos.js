/*--------------------Destructuración de arreglos---------------------*/

let computadoras = ["Mac", "Windows", "Linux"];

/*Destructuración con llaves [] */

let [compu_1, compu_2] = computadoras;

console.log(compu_1);
console.log(compu_2);


/*Llamar al elemnto cumpu_3 e ignorando a los otros 2 elementos */
let [,, compu_3] = computadoras;
console.log(compu_3);

/*Se pueden sobre escribir los valores*/

let otraCompu= "deconocida";
[otraCompu] = computadoras;
console.log(otraCompu);

/*ES5 intercambiar el valor de una variable ejemplo variable
 a y b es necesario hacer una variable temporal */
let a = 1;
let b = 2;
let temporal;
/*En ves de esto */
temporal = a;
a = b;
b = temporal;
console.log(a);
console.log(b);

/*Hacemos esto */
[a, b] = [b, a];
console.log(a);
console.log(b);





