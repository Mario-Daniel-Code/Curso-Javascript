/*-----------------forEach() - en los Sets---------------------*/


let usuario = new Set(["Usuario","SuperUsuario", "Administrador"]);

/*forEach() ejecuta la función callback una vez por cada elemento
del array; a diferencia de map() o reduce() este siempre devuelve
el valor undefined y no es encadenable. */
usuario.forEach(function(valor, llave, setOriginal){
    console.log(valor, llave, setOriginal);
    console.log(usuario === setOriginal);

})