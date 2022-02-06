/*---------------------Identificando funciones de flecha y otros ejemplos----------------------*/

/*ES5*/

var restar = (a, b) => a - b;

/*De que tipo es restar => function*/
console.log(typeof restar);
/*Instanceof verifica si un objeto en su cadena de prototipos
contiene la propiedad prototype de un constructor. */
console.log(restar instanceof Function);

/*No es posible declarar new en una funcion de flecha */
/*Restar no tiene un constructor, si le quito el new lo hace sin problema*/
/*var restar2 = new restar(1,2);*/

/*Las funciones de flecha no tienen objeto argumets*/
function ejemplo(x, y) {
  /*Funcion anonima de flecha */
  ((a, b) => {
    /*Que me imprima el primer argumento del objeto */
    /*Los arguments buscara el objeto padre, sera la funcion */
    console.log(arguments[1]);
    /*Error los argumentos no estan definidos */
    /*D esta forma s ejecuta inmediantamente ()*/
  })();
}
ejemplo(10,20);