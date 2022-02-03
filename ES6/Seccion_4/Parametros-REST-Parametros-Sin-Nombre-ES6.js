/*-----------------------Parametros REST Parametros Sin Nombre ES6----------------------- */

/*ES6*/
/*Arreglo de usuarios obligatorio, despues x cantidad de usuarios  */
function agregar_Usuario(arreglo_usuarios, ...Usuarios) {
    console.log(arguments);
    /*Vamos a barrer el arreglos Usuarios */
    for (let i = 1; i < Usuarios.length; i++) {
    
        arreglo_usuarios[0].push(Usuarios[i]);
    }
    
    return arreglo_usuarios;
  }
  
  let usuarios_arr1 = ["Carlos"];
  let usuarios_arr2 = agregar_Usuario(
    usuarios_arr1,
    "Karen",
    "Liz",
    "Eloisa",
    "Ana"
  );
  
  console.log(usuarios_arr2);
  