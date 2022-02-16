/*-----------------------Promesas ES6----------------------*/

function tareaAsincrona() {
  /*Declarar la promesa*/
  /*Promise es un objeto que representa la terminación o el fracaso de una operación asíncrona */
  /*Espera 2 argumetos 
- Resolve funcion que se ejecuta cuando todo sucede correctamente
- Reject lo que quiero ejecutar y algo falla 
*/
  let promesa = new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Proceso asincrono finalizado");
      /*Tenemos en duro en reject */
      resolve();
    }, 3000);
  });
  /*Hace el return de la tareaAsincrona */
  return promesa;
}
/*Diferencia 
- Estoy definiendo la tareaAsincrona yo puedo definir esta funcion anonima que estoy mandando
        function () {
            console.log("Todo bien");
            }
*/
/*Ejecutar algo cuando esto termine */
/*then() retorna una Promesa . ... Si el primer argumento es omitido o se provee
 una no-función, el nuevo Promise que es creado simplemente adopta el estado cumplido*/
tareaAsincrona().then(
  function () {
      console.log("Todo bien");
    }
    ,
    function () {
    console.error("Todo mal");
    }
);
console.log("Codigo secuencial");

//   function resolve() {
//     console.log("Todo ok");
//   }
//   function reject() {
//     console.log("Todo mal");
//   }
