/*-------------------Problema con los callbacks---------------------*/

/*Arreglo base de datos */

const empleados = [
  {
    id: 1,
    nombre: "Mario",
  },
  {
    id: 2,
    nombre: "Alina",
  },
  {
    id: 3,
    nombre: "Hugo",
  },
];
const salarios = [
  {
    id: 1,
    salario: 50,
  },
  {
    id: 2,
    salario: 60,
  },
];

/*Funciones */

/*Esta funcion recibe mi id y el callback en el que voy a ejecutar
despues de obtener el empleado que corresponde a la id*/
const getEmpleado = (id, callback) => {
  /*Como busco una empleado por su id */
  /* find() devuelve el valor del primer elemento del array que cumple la 
    función de prueba proporcionada */
  /*Esta es la condicion por la cual va a regresar un empleado */
  const EmpleadoBD = empleados.find(empleado => empleado.id === id);
  /*Si el empleado no existe */
  if (!EmpleadoBD) {
    /*Si no llamo al callback */
    callback(`No existe el empleado con el id ${id}`);
  } else {
    callback(null, EmpleadoBD);
  }
};

/*En ves de la id puede recibir el empleado */
const getSalario = (empleado, callback) => {
  const salarioDB = salarios.find( salario => salario.id === empleado.id);
  if (!salarioDB) {
    callback(`No se encontro el salario para el empleado: ${empleado.nombre}`);
  } else {
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id,
    });
  }
};

/*Como utilizariamos esa funcion, llamamos getEmpleado */
getEmpleado(3, (err, empleado) => {
  /*Si no tiene err se sale y sigue */
  if (err) {
    return console.log(err);
  }
  /*Si existe el empleado que recibo del callback*/
  //   console.log("empleado", empleado)
  getSalario(empleado, (err, resp) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El salario de ${resp.nombre}, es de ${resp.salario}`)
  });
});
