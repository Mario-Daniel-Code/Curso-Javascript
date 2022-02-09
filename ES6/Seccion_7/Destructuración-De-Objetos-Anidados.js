/*--------------------Destructuración de objetos anidados--------------------*/


/*Permite desempacar valores de arreglos o propiedades de objetos en distintas variables*/
let autoGuardado = {
  archivo: "app.js",
  cursor: {
    linea: 8,
    columna: 17,
  },
  ultimoArchivo: {
    archivo: "index.html",
    cursor: {
      linea: 9,
      columna: 21,
    },
  },
  /*Mi objeto anidado */
  otroNodo: {
      subNodo: {
          cursor:{
              linea: 555,
              columna: 8888
          }
      }
  }
};
/*Primer cursor de mi objeto */
 let {cursor: cursorActivo}= autoGuardado;
 console.log(cursorActivo);

 /*Segundo cursor de mi objeto */
 /*Llamo a mi ultimoArchivo : y entre llaves a mi cursor :ultimoArchivo */
 let {ultimoArchivo: {cursor:ultimoArchivo}} = autoGuardado;
 console.log(ultimoArchivo);

/*Como hacer el tercer curso de mi objeto anidado*/
let {otroNodo:{subNodo: {cursor:otroSuperNodo}}} = autoGuardado;
console.log(otroSuperNodo);

/*Manera mas sensilla */
let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroSuperNodo2);
