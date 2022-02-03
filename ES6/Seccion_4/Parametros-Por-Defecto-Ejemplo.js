/*-----------------------------Parametros-Por-Defecto-Ejemplo----------------------------- */

/*Esto es un parametro opcional */
/*function saludar(fn = function(){console.log("Hola mundo");}) {*/
/*Tambien se pueden mandar objetos */
function saludar(fn = fnTemporal, persona = { nombre: "Mario" }) {
  /*fn no es una funcion error */
  console.log(typeof fn);
  if (typeof fn === "undefined") {
    /*El error esta controlado */
    console.error("No es una funcion");
    return;
  }
  fn();
  console.log(persona);
}

function fnTemporal() {
  console.log("Hola mundo fn");
}

var persona = {
  nombre: "Edith",
};
saludar(fnTemporal, persona);
