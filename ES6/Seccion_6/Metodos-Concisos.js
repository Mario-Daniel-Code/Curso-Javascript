/*-------------------- siMetodosmples o metodos concisos----------------------*/

/*ES6 Ejemplo con objeto literal*/

var Usuario = {
nombre: "Osiel",
/*Metodo es una fn */
/*No es necesario poner getNombre: function(), ES6 entendera que es una funcion */
getNombre(){
    console.log(this.nombre)
}
}
/*Llamemos el metodo */
Usuario.getNombre();