/*---------------Compartiendo símbolos - Symbol.for() y Symbol.keyFor()---------------*/



/*ES6 ha creado una pisina de todos los simbolos creados*/
/*El método Symbol. for(key) busca símbolos existentes en 
el runtime global del registro de symbols con la key enviada
cómo argumento y devuelve el symbol si fue encontrada. Sino,
un nuevo symbol es creado en el registro global de symbols con dicha key  */
let userId = Symbol.for("userId");

let objeto = {};

objeto[userId] = "123";

console.log(objeto[userId]);
console.log(userId);

/*Ocupamos hacer referencia a ese archivo*/
/*Lo que sea que hayas usado antes, para ese userId */
let userId2 = Symbol.for("userId");

console.log(userId == userId2);
console.log(userId === userId2);
console.log(Object.is(userId, userId2));

console.log(objeto[userId2]);
console.log(userId);

/*La posibilidad de obtener el mismo alias o la llave que es usada*/


let id = Symbol.for("id unico");
/*Si quiero recuperar ese id unico */
/* Symbol.keyFor recupera una clave de símbolo compartida del registro
de símbolo global para el símbolo dado.*/
console.log(Symbol.keyFor(id));

let id2 = Symbol.for("id unico");
/*Si quiero recuperar ese id unico */
/* Symbol.keyFor recupera una clave de símbolo compartida del registro
de símbolo global para el símbolo dado.*/
console.log(Symbol.keyFor(id2));
console.log(id === id2);

let id3 = Symbol("id unico");
console.log( Symbol.keyFor(id3));


