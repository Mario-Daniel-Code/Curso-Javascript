/*------------------Diferencias entre el "Spread" y el "Rest"-------------------*/

/*---------------Operador REST Ejemplo ... -------------*/
function saludarRest(saludo, ...usuarios) {
  for (i in usuarios) {
    console.log(`${saludo} ${usuarios[i]}`);
  }
}

/*---------------Operador Spread Ejemplo ... -------------*/
function saludarSpread(saludo, ...usuarios) {
  console.log(console.log(`${saludo} ${usuarios}.`));
}

saludarRest("Hola", "Laura", "Noe", "Alina");

let usuarios = ["perla", "eliut", "yazmin"];
saludarSpread("Hola que tal", usuarios);


/*Ejemplo especifico del spread */

let partesAutomovil = ["Suspension", "Carroceria"];
/*Va a unir partesAutomovil a partes de los interiores en su arreglo */
let partesInteriores = ["Volante", "Pantalla", ...partesAutomovil, "Palanca", "Asientos"];


console.log(partesInteriores);
