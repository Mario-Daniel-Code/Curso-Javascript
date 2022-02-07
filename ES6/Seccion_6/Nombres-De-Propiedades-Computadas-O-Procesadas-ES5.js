/*------------------Nombres de propiedades computadas o procesadas -----------------*/

/*ES5*/
var usuario = {};

var apellido_p = "apellido_p";

/*Como decir un nombre y la propiedad*/
/*Si quiero utilizar el nombre de esta variable de apellido lo puedo hacer con [] */
usuario[apellido_p] = "Apolinar";
usuario["Primer nombre"] = "Mario";

console.log(usuario["Primer nombre"]);
console.log(usuario[apellido_p]);


/*Ejemplo mas sensillo*/

var usuario = {
    "Primer nombre": "Marco"
}
console.log(usuario["Primer nombre"]);

