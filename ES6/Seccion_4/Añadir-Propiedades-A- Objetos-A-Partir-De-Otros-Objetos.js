/*---------------Añadir propiedades a objetos a partir de otros objetos--------------*/

/*Todos los objetos son pasados por referencia */

let Usuario1 = {
  id: 1,
  nombre: "Marco",
};

let Usuario2 = {
  /*Como pasar todas esas propiedades a Usuario1 */
  id: 2,
  nombre: "Andy",
  apellido_P: "Garay",
  maneja_tecnologias: true,
};


Usuario1.apellido_P = Usuario2.apellido_P;
/*Aqui si funciona darle otro resultado para usuario2 */
Usuario2.apellido_P = "Gonzales";

/*Pa no estar trayendo todas sus propiedades una por una de usuario2,
 usamos el operador spread para que le pase todas sus propiedades */
Usuario1 = {
    ...Usuario2,
    /*Para que traiga el id y nombre de mi usuario1 */
    ...Usuario1
}

/*Nota: Patron Redux trabaja con objetos o clases que vienen con argumentos de funciones */
console.log(Usuario1);
console.log(Usuario2);
