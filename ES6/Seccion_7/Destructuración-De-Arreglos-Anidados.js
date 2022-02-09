/*----------------Destructuración de arreglos anidados----------------*/

let generosMusica = ["Pop",["Rock","Bachata"], "Rap", "Salsa"];


let [genero1, [genero2]] = generosMusica;
console.log(genero1);
console.log(genero2);


let marcasTennis = ["DC","Vans","Puma","Supra"];

/*Como cortar las demas posiciones y las colocara en demasMarcas,
si quito los demas elemtos del arreglo el objeto estara vacio
ES6 que nos permite evitar el trabajo repetitivo en los parámetros*/
let [marca1, ...demasMarcas] = marcasTennis;
console.log(marca1);
console.log(demasMarcas);
