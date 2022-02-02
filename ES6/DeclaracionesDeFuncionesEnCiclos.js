/*-----------------------------DeclaracionesDeFuncionesEnCiclos-----------------------------*/

/*Un arreglo es una colección de variables del mismo tipo que son referidas por un nombre*/

var Funciones = [];

/*Ciclo for*/
/*i es una variable var que es compartida por todas las funciones */
for (let i = 0; i < 7; i++) {
  /*En el EC6 gracias al let nos podemos ahorrar varias lineas*/
  /*El método push() añade uno o más elementos al final de un array*/
  Funciones.push(function () {
    console.log(i);
  });

  /*Funciones.push(
    // Invocar la misma funcion para poder cambiar el valor de i
    function(valor){
        return function(){
            console.log(valor);
        }} (i)
        );
        */
}

/*El bucle foreach ejecuta la función callback una vez por cada elemento del array*/
Funciones.forEach(function (fucn) {
  /*Alias de las funciones que fueron creadas*/
  fucn();
});
