/*
ESCRIBE UNA FUNCION QUE TOME UNA CADENA Y LA COMPRIMA EN UN FORMATOCOMO "a2b1c5"
 para indicar que "a aparece 2 veces , "b" aparece 1 vez y "C" aparece 5 veces
 */


 function comprensionDeCadenas(cadena) {
    let array= []
   for (let i = 0; i < cadena.length; i++) {
    let indice = cadena[i];
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == indice) {
            contador += 1;
        }
    }
array.push(`${indice + contador}`)    
    
   }
   return array
  
 }


 console.log(comprensionDeCadenas("abcabca"));