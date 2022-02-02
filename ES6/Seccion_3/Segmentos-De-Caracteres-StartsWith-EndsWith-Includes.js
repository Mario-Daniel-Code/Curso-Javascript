/*-----------------Segmentos de caracteres startsWith, endsWith y includes-----------------*/

var saludo = "Hola Mundo";
/*Substr devuelve caracteres del valor cadena que comienzan
desde la posición de caracteres especificada por inicio*/
//Si la palabra es con H mayuscula
console.log( saludo.substr(0,1) === "H");
//Comienza con => startsWith
console.log(saludo.startsWith("Co"));
//Termina con => endsWith
console.log(saludo.endsWith("undo"));
//Pregunta si hay una M
//console.log(saludo.indexOf("z"));
// En ES6 agrego la funcion includes => incluye
console.log(saludo.includes("z"));
//Empezar a contar desde el inicio que tome la segunda palabra del string 
console.log(saludo.startsWith("Mu", 5))
//No lo encuentra en la segunda palabra del string 
console.log(saludo.includes("a", 5));

