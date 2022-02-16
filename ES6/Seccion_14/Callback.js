/*-----------------Callback-------------------*/

/*callback es una función que se pasa a otra función como un argumento, que luego
se invoca dentro de la función externa para completar algún tipo de rutina o acción*/

/*
- Callback la forma tradicional de hacer tarea a destiempo
- Realmente no son asincronos al menos que tenga una tarea asincona a dentro
- Simplemete demora la accion de una funcion, hasta que se realize una tarea antes
*/

/*Ejemplo */

const getUsuarioById = (id, callback) => {
  /*objeto usuario*/
  const usuario = {
    nombre: "Mario",
    id,
  };
  /*De esa manera se llama dicha funcion, espera una serie de argumentos error y un objeto que estamos esperando*/
  // callback(null, usuario)

  /*Simular el error*/
  /*Si no existe */
  if (id === 20) {
    callback(`El usuario con el id ${id}, no existe`);
  } else {
    /*Pero si existe */
    callback(null, usuario);
  }

};

/*Esto no es de ES6, es tradicional de javascript */
/*Como usar esa funcion que trabaja con callback*/
/*Llamo el id y una funcion comun y corriente */
getUsuarioById(11, (err, user) => {
  if (err) {
    /*Me salgon, no manda error porque es nulo*/
    return console.log(err);
    
  }
  console.log("Usuario de base de datos", user);
});
