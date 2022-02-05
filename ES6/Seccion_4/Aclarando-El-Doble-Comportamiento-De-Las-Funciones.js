/*---------------Aclarando el doble comportamiento de las funciones---------------*/

/*Declaracion de la funcion*/
function Persona(nombre) {

/*ES5 puedo hacer una validacion para dterminar si la fn fue llamada mediante un new */
/*instanceof verifica si un objeto en su cadena de prototipos
contiene la propiedad prototype de un constructor. */
/*Si this esta una instancia de Persona */
/*if (this instanceof Persona){*/
    if (typeof new.target !== "undefined"){
    this.nombre = nombre;
}else{
    /*Error de la fn no se usa asi */
     throw new Error("Esta fn debe de ser utilizanda con el new");
}

/*this, es tener claro donde se invoca, para saber qué objeto le asigna
Apuenta al objeto global window*/
  this.nombre = nombre;
}

/*Metodo con new
Se manda a llamar la funcion,se crea una nueva
instancia del objeto y retorna a la variable persona
*/
var persona = new Persona("Si soy Mario");
/*Metodo sin new 
Se manda a llamar la funcion y la fn no retorna nada, regresaria un undefined
*/
/*Cuando la fn no es declrada con un new  y pasa por un this, apunta al obj global*/
/*call permite que una función/método que pertenece a un objeto, ser asignada
y llamada para un objeto diferente */
var noEsPersona = Persona.call(persona, "No soy Mario");

/*Nota: ES6 new.target te permite detectar si una función o constructor
fue llamado usando el operador new.
Esto asegura que los obj siempre, sean declarados con el obj new
*/