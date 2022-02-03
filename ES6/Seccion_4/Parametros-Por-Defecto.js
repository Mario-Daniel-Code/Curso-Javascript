/*---------------------Parametros por defecto----------------------*/

/*Recibe 2 parametros, opcionales que cualquier desarrolldor sabra que ese eso  */
function saludo (mensaje= "Hola mundo", tiempo= 1000){
    /*SetTimeout es una funcion que se encarga de ejecutar otra
     función después de un tiempo determinado 
     Si el parametro se llama o no se llama simulando en ES5
     */

    /* mensaje = mensaje || "Hola mundo";
    /*Typeof devuelve una cadena que indica el tipo del operando sin evaluarlo, operando
    es la cadena, variable, palabra clave u objeto para el que se devolverá su tipo.
    /*mensaje = (typeof mensaje !== "undefined" )? mensaje : "Hola mundo2";*/

    /*En ES6 se implemnto los parametros opcionales*/

    setTimeout(function(){
        /*Recuerda que cualquier variable no definida siempre sera un undefined*/
        console.log(mensaje);
    }, tiempo);
}
/*Forma de simular los parametros opcionales */
saludo()