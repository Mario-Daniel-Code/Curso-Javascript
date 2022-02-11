/*------------------forEach() De los mapas---------------------*/

/*Barrido en los mapas*/

let mapa = new Map([
  ["Edad", 25],
  ["Status", 1],
]);

/*Por cada 1 */
/*Tambien se puede hacer con funcion de flecha */
mapa.forEach((valor, llave) =>
  console.log(`Llave: ${llave}, Valor: ${valor}`)
);
/*
mapa.forEach(function (valor, llave, mapaOrigen) {
    console.log(`Llave: ${llave}, Valor: ${valor}`);
    console.log(mapaOrigen);
})
*/
