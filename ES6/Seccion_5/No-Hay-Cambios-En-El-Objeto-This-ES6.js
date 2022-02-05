/*-------------------No hay cambios en el objeto "this" en ES6------------------ */

var manejador = {
  id: 123,

  init: function () {

    document.addEventListener("click", event => this.ClickEnPagina(event.type));
    /*document.addEventListener(
      "click",
      function (event) {
        this.ClickEnPagina(event.type);
      }.bind(this),
      false
    );*/

  },
  ClickEnPagina: function (type) {
    console.log("Manejando " + type + " para el id:" + this.id);
  },
};

manejador.init();
