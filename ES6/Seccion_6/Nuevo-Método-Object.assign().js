/*------------------Nuevo método: Object.assign()-------------------*/

/*Nos permite extraer todas las propiedades de on objeto y
heredarcelas a otra sin usar directamente la herencia*/

/*ES5*/
function mezclar(objReceptor, objDonador) {
  /*Ver todas sus propiedades del objeto donador, para trasmitirselas al objeto receptor */
  /*Object. keys devuelve un array cuyos elementos son strings correspondientes a las 
propiedades enumerables que se encuentran directamente en el object. */
  Object.keys(objDonador).forEach(function (key) {
/*Con el forEach estoy barriendo cada una de las propiedades del obj donador y 
se las estoy asignando al obj receptor */
      objReceptor[key] = objDonador[key];
  });

  return objReceptor;
}

/*Probarlo con 2 objetos literales*/

var objReceptor = {};
var objDonador = {
    // nombre: "Mi-Archivo.js"
    /*En el ES6 han incluido los gets para poder obtener los valores */
    /*Como una funcion*/
    get nombre(){
        return "Mi-Archivo.js"
    }
};

/*console.log(objDonador.nombre);*/

/*Recordemos que mi funcion regresa un objeto*/
/*console.log(mezclar(objReceptor, objDonador));*/
console.log(Object.assign(objReceptor, objDonador));

console.log(objDonador)


