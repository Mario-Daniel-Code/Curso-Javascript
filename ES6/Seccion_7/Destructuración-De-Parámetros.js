/*-------------------Destructuración de parámetros-------------------*/

/*Un programador no va a saber que opciones esta mandando, necesitamos
 desestructurar para que sepa que parametros debe utilizar */
/*Variables destructuradas */
/*Dejarlo como un objeto vacio, o como parametros opcionales */
function crearUsuario(nickname,
    /*Enter, le pondre los valores por defecto */
     { vida, puntos, rol } = { vida: 100, puntos: 56, rol: "francotirador"}
     /*Enter */
     ){
  /* 
  opciones = opciones || {};
  let vida = opciones.vida,
  puntos = opciones.puntos,
  rol = opciones.rol;
  */

  console.log(nickname, vida, puntos, rol);
  /*crearUsuario */
}

crearUsuario("SHERIF", {
  vida: 100,
  puntos: 56,
  rol: "flagger",
});



