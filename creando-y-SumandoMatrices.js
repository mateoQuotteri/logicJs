/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

// HAY MAS DE UNA VARIABLE LLAMADA MATRIZ, PARA USAR DESCOMENTAR ESTA VARIABLE
 /* let matriz = [
   [1, 5, 7, 3, 1],
   [9, 4, 6, 8, 2],
   [3, 1, 4, 7, 4],
   [6, 3, 9, 2, 5],
   [8, 2, 4, 11, 6]
 ];
*/

 let suma = 0; 

 for(i = 0; i < matriz.length; i++){
   for(j = 0; j < matriz[i].length; j++){
     suma +=matriz[i][j]
   }
 }
 console.log(suma)


// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:
// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100
function CrearMatriz10x10(){
    let matriz = [];
  
  
    for(i = 0; i < 10; i++){
      matriz.push([])
      for(j = 0; j < 10; j++){
       matriz[i].push(i * 10 + j +1);
     }
   }
    return matriz
  }
  
   console.log(CrearMatriz10x10());
  
  
  // 3) Por último, vamos a generar dos funciones:
  // a) Una va a sumar los valores en la diagonal marcada en rojo.
  // b) La otra va a marcar los valores de la diagonal marcada en verde.
  // Ambas funciones deben devolver un resultado único.
  
  let matriz = [
    [1, 5, 7, 3, 1],
    [9, 4, 6, 8, 2],
    [3, 1, 4, 7, 4],
    [6, 3, 9, 2, 5],
    [8, 2, 4, 11, 6]
  ];
  
  
  function sumarDiagonal(matriz){
    let suma = 0;
    for (let fila = 0; fila < matriz.length; fila++) {
  
      for (let columna = 0; columna < matriz[fila].length; columna++) {
         if (columna === fila) {
          suma += matriz[fila][columna]
         }
          
      }
    }
    return suma
  }
  
  
  function sumarDiagonal2(matriz){
    let suma = 0;
    for(i = 0; i < matriz.length; i++){
      for(j = 0; j < matriz.length; j++){
        if(i + j === matriz.length - 1){
          suma += matriz[i][j]
      }
    }
  }
  return suma
  }
  
  // console.log(sumarDiagonal(matriz));
  
  // console.log(sumarDiagonal2(matriz));
  