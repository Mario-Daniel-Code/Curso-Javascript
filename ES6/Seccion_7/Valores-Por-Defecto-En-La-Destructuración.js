/*-----------------Valores por defecto en la destructuración--------------------*/

/*Digamos que si tiene un valor por defecto */
let simbolosZodiacales = ["Sagitario", "Picis"];
/*Su valor definido*/
let [Simbolo1, Simbolo2 = "Leo"] = simbolosZodiacales;
console.log(Simbolo1);
console.log(Simbolo2);


let opciones = {
    edad: 12,
    apellido: "Vazquez"
}
let {edad, apellido = "Reyes"} = opciones;
console.log(edad, apellido);