/*------------------Clases como parámetros-----------------------*/

class Casa {
  constructor(precio) {
    this.precio = precio;
  }
  getPrecio() {
    return this.precio * this.precio;
  }
}

function imprimirCasa(casa) {
    /*Si no es una instancia de casa */
  if (!(casa instanceof Casa)) {
    console.error("El parametro enviado no es una casa");
    return;
  }
  console.log(casa.getPrecio());
}

/*terreno tiene el constructor del precio y el getPrecio */
// let terreno = new Casa(10);
let terreno = 13232;
/*Cuando la mandamos a la funcion o el metodo de imprimirCasa */
imprimirCasa(terreno);
