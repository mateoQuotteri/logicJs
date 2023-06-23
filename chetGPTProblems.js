/*
Ejercicio de ordenamiento de palabras por longitud: 
Escribe una función que reciba una cadena de palabras separadas por espacios y
 las devuelva en orden ascendente según su longitud. En caso de haber palabras con la misma 
 longitud, deben mantener su orden original.
*/

function ordenarPalabrasPorLongitud() {
    let array = [];
    /*ARGUMENTS ME PERMITE "CAPATAR TODOS LOS PARAMETROS QUE SE PASEN POR FUNCION"
     SIN SABER CUENTOS SON EXACTAMENTE */
   for (let i = 0; i < arguments.length; i++) {
    array.push(arguments[i])
    
   }
   array.sort((a,b) => a -b)
   return array

}

console.log(ordenarPalabrasPorLongitud("Kiwi" , "Banana" , "Ferchu", "Futbol"));