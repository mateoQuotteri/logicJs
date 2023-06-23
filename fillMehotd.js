/*
Ejercicio de creación de matriz: Escribe una función que reciba dos números enteros rows
 y cols y devuelva una matriz de 
 rows filas y cols columnas, donde todos los elementos estén llenos con el valor null.*/

 function crearMatriz(numerosFilas, numeroColumnas) {
    let matriz = []
    for(i = 0; i < numerosFilas; i++){
        matriz.push([])
        for(j = 0; j < numeroColumnas; j++){
         matriz[i].push(null);
       }
     }
      return matriz
    }
 

    console.log(crearMatriz(2,3));


    /*El método fill() en JavaScript se utiliza para llenar todos 
    los elementos de un arreglo con un valor específico. 
    Este método modifica el arreglo original y devuelve el arreglo modificado.

El método fill() acepta hasta tres parámetros: el valor con el que se 
llenarán los elementos, el índice de inicio (opcional) y el índice de fin (opcional). 
Si no se proporcionan los índices de inicio y fin, fill() llenará todo el arreglo 
con el valor especificado. Si se proporcionan los índices de inicio y fin, fill() 
llenará solo los elementos dentro del rango especificado con el valor dado.*/

/*Ejercicio de reemplazo selectivo: Escribe una función que reciba un arreglo de números y
 reemplace todos los números impares con el valor 1 y todos los números pares con el valor 2. */

 function reemplazandoNumerosDeArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] % 2 == 0 ? array[i] = 2 : array[i] = 1
    }
    return array
 }

 console.log(reemplazandoNumerosDeArray([10, 5, 7, 8, 9, 20]));