/*------------------Clases como parámetros-----------------------*/

/*Mandar la definicion completa de una clase como parametro a una funcion*/
/*Mandar e valor de la clase a una funcion */
/*Crear mi funcion */
function creadorClases(definicionClase){
    return new definicionClase();
}

/*Crear mi objeto*/
/*Podemos enbviar una clase como parametro */
/*Defino la clase en timepo de ejecucion y la mandamos a definicionClase */
let objeto = creadorClases(class{
    constructor(){
        this.nombre = undefined;
        this.edad = 24;
    }
    saludar(){
        console.log("Hola!!!")
    }
})

objeto.saludar();