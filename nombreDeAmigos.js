/*Crea un programa que filtre una lista de cadenas y devuelva una lista con solo los nombres de tus amigos.

Si un nombre tiene exactamente 4 letras, ¡puedes estar seguro de que tiene que ser un amigo tuyo! De lo contrario, puedes estar seguro de que no lo es...

Ejemplo: Entrada = ["Ryan", "Kieran", "Jason", "Yous"], Salida = ["Ryan", "Yous"]

es decir,

amigo ["Ryan", "Kieran", "Mark"] debería ser ["Ryan", "Mark"]

Nota: mantén el orden original de los nombres en la salida.*/


function filtradorDeNombres(array)  {
    
    let arrayResultante = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length == 4) {
            arrayResultante.push(array[i])
        }
        
    }
    return arrayResultante
} 

let array = ["Jorge", "Matias" , "Tomi", "Mate"];
console.log(filtradorDeNombres(array));