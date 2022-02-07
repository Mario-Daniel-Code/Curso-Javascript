/*----------------Nuevo método: Object.is()--------------*/

/*Estos operadores logicos tienen distinto valor
== Igual
=== Estrictamente igual
*/
console.log("======");
console.log( +0 == -0);
console.log( +0 === -0);

/*El método Object.is() determina si dos valores son iguales*/
console.log( Object.is(+0 -0));

console.log("======");
console.log(NaN == NaN);
console.log(NaN === NaN);

console.log("======");
/*Estamos preguntando si los objetos no son numeros*/
console.log(Object.is(NaN, NaN));

console.log("======");

console.log(5 == 5);
console.log(5 == "5");

console.log("======");

console.log(5 === 5);
console.log(5 === "5");

console.log("======");
console.log(Object.is(5,5));
/*Sabemos que 5 no es igual a un string*/
console.log(Object.is(5,"5"));



