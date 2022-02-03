/*------------------------------El operador Spread---------------------------- */

/*Spread distribuye los elementos de un arreglo u objeto,
 para asignarlos a alguna variable/constante/función.
 
 ES6 numero independientes de mi array
 */

/*ES6 */
 let numeros = [1000000, 343, 67, 76575, 32];

 let num1 = 8,
  num2 = 4;

/*Math es un objeto incorporado que tiene propiedades y métodos para 
constantes y funciones matemáticas. Math funciona con el tipo Number */

/*Max = > maximo*/
/*  let max = Math.max(num1, num2);*/
/*El método apply() invoca una determinada función asignando
explícitamente el objeto this y un array o similar (array like object)
 como parámetros (argumentos) para dicha función.*/
 let max = Math.max(...numeros);
console.log(max);
