/*Ejercicio 2: Suma de matrices
Escribe una función en JavaScript llamada sumMatrices que 
tome dos matrices como argumentos y devuelva una nueva matriz 
que sea el resultado de sumar elemento por elemento las matrices de entrada. 
Asumiremos que las matrices tienen la misma cantidad de filas y columnas. La 
función debe devolver la matriz resultante.

Ejercicio 3: Producto de matrices
Escribe una función en JavaScript llamada multiplyMatrices que tome dos matrices como argumentos 
y devuelva una nueva matriz que sea el producto de las dos matrices de entrada. 
Asumiremos que el número de columnas de la primera matriz es igual al número de
 filas de la segunda matriz.
 La función debe devolver la matriz resultante.*/


 let matriz = [
 [10, 23, 2 , 7, 89 ],
 [58, 25 , 46 ,2 , 7 ],
 ]

 let matrizTwo = [
    [10, 23, 2 , 7, 89 ],
    [58, 25 , 46 ,2 , 7 ],
  
    ]

 function sumMatrices(matrizUno, matrizDos){
    let result = [] ;
    let lenghtOfMatrizUno = [];
    let lenghtOfMatrizDos = [];
     
    for (let fila = 0; fila < matrizUno.length; fila++) {
    
        for (let columna = 0; columna < matrizUno[fila].length; columna++) {
         
            lenghtOfMatrizUno.push(matrizUno[fila][columna])
           
        }
        
    }
    for (let fila = 0; fila < matrizDos.length; fila++) {
    
        for (let columna = 0; columna < matrizDos[fila].length; columna++) {
         
            lenghtOfMatrizDos.push(matrizDos[fila][columna])
           
        }
        
    }

    let numberOfMatrizUno = lenghtOfMatrizUno.length;
    let numberOfMatrizDos = lenghtOfMatrizDos.length;

    if (matrizUno.lenght === matrizDos.lenght && numberOfMatrizUno === numberOfMatrizDos) {
        
        
        for (let fila = 0; fila < matrizUno.length; fila++) {
    
            for (let columna = 0; columna < matrizUno[fila].length; columna++) {
             
                result.push(matrizUno[fila][columna] + matrizDos[fila][columna])
               
            }
            
        }
        return result
    }else return "Error"

 }

 console.log(sumMatrices(matriz, matrizTwo
    ));