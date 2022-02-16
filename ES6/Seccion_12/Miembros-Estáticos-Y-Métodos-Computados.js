/*------------------------Miembros estáticos y métodos computados--------------------------------*/

/*Varibales computadas ejemplo*/
/*Son metodos cuyo nombre se puede definir atraves de una variable */
let nombreMetodo = "gritarNombre";
/*Dentro de las clases puedo definir ese metodo computado*/

/*Mi objeto usuario*/
class Usuario {
  constructor(nombre) {
    /*Inicializar una varibale dentro de la clase*/
    this.nombre = nombre;
  }
  /*Metodo*/
  decirNombre() {
    console.log(this.nombre);
  }
  /*Dentro de las clases puedo definir ese metodo computado, definimos el nombre de la variable*/
  [nombreMetodo]() {
    console.log(this.nombre.toUpperCase());
  }

  /*Métodos estáticos son llamados sin instanciar su clase. Son habitualmente utilizados para crear funciones
para una aplicación */

  /*Metodos estaticos nos permite ejecutar alguna funcion que este dentro de mi clase sin instanciar la clase */
  /*Vamos a ejecutar el decirNombre fuera de la clase*/

  /*Definir un metodo estatico para una clase y como declararlo*/
  /*Los metodos estaticos nos funcionan solo para llamarlos desde fuera de la clase */
  static crear(nombre) {
    /*El meyodo estatico creara otra instancia del Usuario*/
    return new Usuario(nombre);
  }
}

/*Como usuamos el metodo estatico*/
let yoMismo = Usuario.crear("Mario");
console.log(yoMismo);
