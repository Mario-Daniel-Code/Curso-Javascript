/*-----------------------Mapas y sus métodos----------------------*/

/*Como declaramos un mapa */
let mapa = new Map();

/*Como metemos datos al mapa*/
mapa.set("nombre", "Daniel");
mapa.set("edad", 23);
mapa.set("apellido");



console.log(mapa);
console.log(mapa.size);
/**Llave */
console.log(mapa.get("nombre"));
console.log(mapa.get("edad"));
console.log(mapa.has("nombre"));
console.log(mapa.has("apellido"));

/*Borrar una entidad o una entrada de un mapa*/
mapa.delete("nombre");
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));

mapa.set("edad");
console.log(mapa);

/*Si quiero borrame todo el mapa, usamos .clear*/

mapa.clear();
console.log(mapa);



