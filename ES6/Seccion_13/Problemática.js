/*-----------------------Promesas problemática y su necesidad----------------------*/

/*JS Ha sido sincrono o en secuencia*/
/*Proceso asincrono */
function tareaAsincrona() {
  /*Recibe una funcion*/
  setTimeout(function () {
      
    console.log("Proceso asincrono finalizado");
    /*Proceso sincrono termina finaliza podemos llamar la funcion resolve*/
    /*Resolve en caso de que el proceso asincrono haya finalizado correctamente */
    // resolve();
    /*Reject en caso de que el proceso asincrono haya fallado */
    reject();
    /*Se ejecute despues de 3 segundos */
  }, 3000);
}

/*Poder controlar de como es el flujo, del proceso despues que el proceso asincrono es ejecutado */
tareaAsincrona();
console.log("Codigo secuencial");

function resolve() {
  console.log("Todo ok");
}
function reject() {
  console.log("Todo mal");
}
