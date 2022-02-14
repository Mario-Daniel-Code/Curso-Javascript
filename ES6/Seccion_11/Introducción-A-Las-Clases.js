/*-----------------------Introducción a las clases-------------------------*/

/*ES5 clases*/

/*La C mayuscula indicaba que era una clase, recibe parametro materia */
function ClasesOnline(materia) {
  /*Método constructor es un metodo especial para crear e inicializar un objeto
creado a partir de una clase */
  /*Lo primero que se ejecuta cuando se crea la clase*/
  /*La clave para entender el comportamiento de this, es tener claro donde se invoca,
para saber qué objeto le asigna. */
  this.materia = materia;

  /*Puedo meter la defincion de la funcion dentro de la clase */
  this.gritarMateria = function () {
    /*toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada*/
    console.log(this.materia.toUpperCase());
  };
}

/*Expandir funcionalidades de la ClaseOnline, agregar funcion de decir materia*/
/*Objetos en JavaScript heredan características entre sí. ... 
Comprender los prototipos de objetos de Javascript, cómo funciona la cadena de prototype,
y cómo añadir nuevos métodos a la propiedad prototype*/
ClasesOnline.prototype.decirMateria = function () {
  console.log(this.materia);
};
/*Ahora es un undefined*/
let Mario = ClasesOnline("Mario");
// let Mario = new ClasesOnline("Mario");
// Mario.gritarMateria();
// Mario.decirMateria();

/* Verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor*/
/*Usando new es una instancia de ClasesOnline y tambien es una instancia de objeto */
console.log(Mario instanceof ClasesOnline);
console.log(Mario instanceof Object);
