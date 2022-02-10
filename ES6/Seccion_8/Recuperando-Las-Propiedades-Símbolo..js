/*------------------Recuperando las propiedades símbolo----------------------*/

/*Simbolo para identificar ese id del objeto y que sea unico*/
let id = Symbol.for("id");
let Activo = Symbol.for("Activo");


let usuario  = {
    [id]:"1",
    [Activo]: true,
    /*Tambien sirve para las conmutaciones*/
    ["Cod"] : "refkjdsbkjfsbfkjs",
    nombre: "Daniel",
    apellido: "Martinez",
    edad: 23
}
/*Devuelve un array cuyos elementos son strings correspondientes a las 
propiedades enumerables que se encuentran directamente en el object */
console.log(Object.keys(usuario));

/*Como traer o recurpar las propiedades de un objeto*/
/*Ciclo for in
for-in itera sobre todas las propiedades enumerables de un objeto que está
codificado por cadenas (ignorando los codificados por Símbolos , incluidas 
las propiedades enumerables heredadas.
*/
for(key in usuario){
console.log(key, usuario[key]);
}

/*ES6 incorporaron algo para poder traer esos simbolos*/

/*Object. getOwnPropertySymbols() regresa una colección de todos las
propiedades de los simbolos encontrados directamente en un objeto dado*/
let simbolos = Object.getOwnPropertySymbols(usuario);
console.log(simbolos);


for(i in simbolos){
/* Symbol.keyFor recupera una clave de símbolo compartida del registro
de símbolo global para el símbolo dado*/
    console.log(simbolos [i], Symbol.keyFor(simbolos[i]));
}
