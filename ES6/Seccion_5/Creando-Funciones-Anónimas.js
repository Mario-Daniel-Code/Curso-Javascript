/*-----------------Creando funciones anónimas-------------------*/

/*ES5 son fn que son ejecutadas inmediantamente que son creadas*/
/*Funcion normal*/
var saludo1 = function (nombre) {
    return "Hola, " + nombre;
}("Mario");
console.log(saludo1);

/*Fn de flecha, en caso de necesitan fn que se 
ejecuten indemediatamente colocamos parentesis ()*/
var saludo2 = (nombre => `Hola, ${nombre}`) ("Anabel")
console.log(saludo2);