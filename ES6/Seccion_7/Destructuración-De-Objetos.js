/*-----------------Destructuración de objetos----------------------*/

/*Permite desempacar valores de arreglos o propiedades de objetos en distintas variables*/
/*Mi objeto con muchas propiedades*/
let ajustes = {
  nombre: "Mario Martinez",
  email: "mario.martinez@gmail.com",
  facebook: "mario.martinez1",
  google: "mario.mtz12",
  premium: true,
};

/*let nombre = ajustes.nombre;
email = ajustes.email;
facebook = ajustes.facebook;*/

/*Aqui viene lo bueno de ES6 Destructuración*/
/*Puedo extraer cada propiedad de mi objeto ajustes*/
/*Si necesito cambiar de nombre alguna variable lo que puedo hacer es premium: dePago */
/*Tambien existe la inicializacion de variables aunque no existan */
/*No importa el orden que vayan colocadas las propiedades del objeto */
let {premium: dePago, instagram: cuentaInsta = "Mario_00" } = ajustes;

console.log(cuentaInsta, dePago);