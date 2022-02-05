/*-------------------No hay cambios en el objeto "this" en ES5------------------ */

/*ES5*/
/*Las fn d flecha no afectan el obj this */
var manejador = {
  id: 123,
/*Es un estanadar para definir que se puede
ejecutar cuando el objeto es creado */
  init: function () {
/*Método addEventlistener, es un escuchador que indica
al navegador que este atento a la interacción del usuario 
Quiero ejecutar esta fn anonima
*/
    document.addEventListener("click", (function(event){
/*Otra funcion que voy a denfinir ClickEnPagina para llamar mi event*/
/*Event es un objeto predefinido de JavaScript que almacena información
sobre un evento, para cada evento que tiene lugar, como argumento 
a la función o funciones que gestionan el evento*/
/*Type una valor que afecta al tipo de datos que puede almacenar*/
       this.ClickEnPagina(event.type);

/*Error no es una funcion
This no apunta al manejador si no al obj global*/

/* bind() crea una nueva función, que cuando es llamada, asigna a su
operador this el valor entregado, con una secuencia de argumentos
dados precediendo a cualquiera entregados cuando la función es llamada */

    }).bind(this), false);

  }, //Fin del init
  /*Es una fn, recibe un parametro type  */
  ClickEnPagina: function(type){
      console.log("Manejando " + type + " para el id:" + this.id);
  }
};

/*Cargara el init y crara el addEventListener y estara escuchando los clicks en la pagina  */
manejador.init();
