/*--------------------------Templates con tags----------------------------------*/

/*Siempre recibe parametros aunque no los veamos
Si no se envia nada, por defecto es undefined
Mi tamplate literal puede cambiar antes de asignarlo a la variable mensaje
*/
function etiqueta(literales, ...substituciones) {
/*En arreglo de arreglo que contiene los literales
Un string vacio para asegurar que la primera posicion sea una cadena de texto
Plumas cuestan con 2 espacios a los lados 
Pesos con un espacio a la izquierda
Spread corresponde a un operador el cuál distribuye los elementos
de un arreglo u objeto, para asignarlos a alguna variable/constante/función.
*/
//   console.log(arguments);
let resultado = "";
console.log(literales);
console.log(substituciones);

for(let i=0; i<substituciones.length; i++){
resultado += literales[i];
resultado += substituciones[i];

}

  return resultado;
}

let unidades = 4;
let costo_unitario = 7;
/*Etiqueta tag funcion que se dispara justo cuando se construye mi template literal*/
let mensaje = etiqueta`${unidades} plumas cuestan ${
  unidades * costo_unitario
} pesos`;

console.log(mensaje);
