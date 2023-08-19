/*Ejercicio 12: Encontrar el Único Elemento No Duplicado
Escribe una función que encuentre el único elemento que no se repite en un array dado donde todos los
 demás elementos aparecen al menos dos veces.*/


function enocntrarDuplicado(array) {
    for (let i = 0; i < array.length; i++) {
       let elemento = array[i];
       if (array.lastIndexOf(elemento) == i) {
         return elemento
    }
}}

let array = ["a", "b," ,"c","a", "b,","j" ,"c","a", "b," ,"c","a", "b," ,"c"]
console.log(enocntrarDuplicado(array));