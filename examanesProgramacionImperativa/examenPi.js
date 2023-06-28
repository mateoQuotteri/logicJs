let matrizNumeros = [
    [1, 4, 7, 4],
    [5, 7, 6, 2],
    [6, 2, 3, 3],
    [2, 6, 8, 1],
]
/*Crear una función que reciba por parámetros la matriz 
y la posición de una columna determinada (puedes utilizar el índice de la columna).
La función debe retornar un arreglo con todos los elementos de esa columna.**/

function buscarColumna(matriz, columnaBuscada) {
    let result = [];
for (let index = 0; index < matriz.length; index++) {
    result.push(matriz[index][columnaBuscada - 1])
}
return result
}
 // console.log(buscarColumna(matrizNumeros , 1));

/*
La siguiente matriz representa la disposición de los asientos en un colectivo.*/
let matrizAsientos = [
["X", "X", "O", "X"],
["X", "O", "X", "X"],
["O", "X", "O", "X"],
["X", "X", "O", "O"],
["O", "O", "X", "O"],
["X", "O", "X", "X"],
["X", "X", "X", "X"],
["X", "O", "O", "X"]
]
/*En la matriz, el carácter "X" representa un asiento ocupado. 
El carácter "O" representa un asiento libre.
Debes implementar una función llamada contarAsientosLibres 
que tome la matriz de asientos como parámetro y devuelva la cantidad de asientos libres.*/

function  contarAsientosLibres(matriz) {
    let contador = 0;
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            if (matriz[fila][columna] === "O") {
                contador += 1;
            }
        }
        
    }
    return contador
}

 // console.log(contarAsientosLibres(matrizAsientos));

let arrayDeNumeros = [10, 22, 3, 8, 9, 104, 5, 6, 7, 15];
/*
Crea una función llamada bubbleSort que reciba como parámetros el array y 
un string que represente el sentido de ordenamiento, 
la función deberá realizar un ordenamiento interno del array según el orden indicado 

“ASC” lo ordenará ascendente
“DESC” lo ordenará descendente	
Para analizar el correcto funcionamiento, imprimir por consola el array antes y
 después de ejecutar la función. 

*/ 

function bubbleSort(array , orden) {
    if (orden === "ASC") {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
              if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
              }
            }
          }
    }else {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
              if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
              }
            }
          }
    }
}

bubbleSort(arrayDeNumeros, "DESC")
console.log(arrayDeNumeros);
