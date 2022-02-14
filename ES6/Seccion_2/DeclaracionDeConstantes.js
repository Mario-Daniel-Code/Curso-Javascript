/*--------------------------Declaracion de constantes----------------------------------*/
/*
const son variables que no van a cambiar o no se van a mutar
Buena practica que las constantes se escriben con mayusculas
Regla, se deben inicializar en el momento que son definidas
 
const IMPUESTO_SV = 16.99;
console.log(IMPUESTO_SV);
*/
//Podemos declarar objetos 
const USUARIO  = {
    nombre: "Mario",
    edad: "22",
};
//Podemos hacer esto, pero no debria de hacerlo
//No es correcto hacer la reinicializacion de el objeto, porque marcara error
USUARIO.nombre="Luis";
console.log(USUARIO);


