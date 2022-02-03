/*-----------Cómo los valores por defecto afectan el objeto arguments------------*/

/*Cuando se crea una funcion por defecto se crean los arguments, ya que tiene un arreglo de argumentos */
/*Arguments no recibe ningun valor, de los parametros opcionales */
function sumar (a = 2,b = 3){
    console.log(arguments); 
}

/*Llamare a la funcion, con varios argumentos diferentes*/
/*sumar( 1, 3, 6, 8, 9, "Daniel", {a:2, b:2} ); */
/* Cuando la funcion permite arg tener cuidado con los parametros opcionales*/
sumar(); 
