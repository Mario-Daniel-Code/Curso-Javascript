/*--------------------------Plantillas literales literal templates----------------------------------*/

/*En js hay una funcionalidad limitada en el uso de los strings comparados con otros lenguajes
ES6 se incorporaron los template literal

const nombre = "Mario"; 
No esta concatenando, solo estoy encrustando mi variable nombre
con los backticks y el signo de $
console.log(`Saludos ${nombre}`);
*/

let edad = "26";
let municipio= "Toluca"
/*ES5 */
let datosPersonales1 = "Mi edad es de" + " " + edad + " " +"años y vivo en el municipio de" + " " + municipio;

console.log(datosPersonales1);

/*Usando el template literal, estos `` se pueden trasformar o mutar
La trasformacion de mis variables en con signo de dolar, llaves y dentro mi variable nombre
Lo que lee js es codigo puro
*/
/*ES6 */
let datosPersonales2 = `Tengo ${edad} años y vivo en el municipio de ${municipio}`;
console.log(datosPersonales2);

/*Tambien se puede hacer en una funcion */

function obtenerMunicipio(){
    return "Toluca";
}

let datosPersonales3 = (`Soy originario de ${obtenerMunicipio()}`);
console.log(datosPersonales3);

/*Multilineas
let multilinea = "<h1>Titulo</h1> \n <p>Template literal</p>";
console.log(multilinea);
*/

let multilinea = `<h1 class"center">${obtenerMunicipio()}</h1>
<p>Template literal</p>`;
console.log(multilinea);