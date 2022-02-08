/*-------------------- siMetodosmples o metodos concisos----------------------*/

/*ES6 Ejemplo con objeto literal*/
/*Que es el metodo conciso
Son metodos comunes y corrientes solo podemos omitir la palabra function
*/
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