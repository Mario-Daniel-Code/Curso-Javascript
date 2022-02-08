/*----------------------Cambiar el prototipo de un objeto-----------------------*/

let lobo = {
  sonido() {
    console.log("Auu!");
  },
  aulla() {
    console.log("Auuu, Auuu!!!");
  }
};

let perro = {
  sonido() {
    console.log("Guau!");
  },
};

/*Una variable que utilice todas las propiedades del lobo */
/*El método Object. create() crea un objeto nuevo, utilizando
un objeto existente como el prototipo del nuevo objeto creado. */

let siberiano = Object.create(lobo);

/*Si tiene el protoptipo de un lobo */
/*El método Object. getPrototypeOf() devuelve el prototipo 
(es decir, el valor de la propiedad interna [[Prototype]] ) del objeto especificado. */

console.log(Object.getPrototypeOf(siberiano) === lobo);

siberiano.sonido();
siberiano.aulla();

/*ES6 a incluido*/
/*El objeto que quiero cambiar el prototipo y de quien quiero agarrar el prototipo*/
Object.setPrototypeOf(siberiano, perro);
console.log(Object.getPrototypeOf(siberiano) === lobo);

siberiano.sonido();
siberiano.aulla();

/*Nota: Los prototipos los podemos cambiar con una sola funcion para no crear
un procedimiento tan grande  */