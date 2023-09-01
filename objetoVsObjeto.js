/*b) Implementa una función calculadora que acepte un número y devuelva un objeto
 con métodos para sumar, restar, multiplicar y dividir ese número por otro número dado.*/


 function calculadora(num) {
    let obj = {
        sumarNum(num2) {
            num += num2;
          } ,
          restarNum(num2) {
            num -= num2;
          } ,
          dividirNum(num2) {
            return num / num2;
          } ,
          multiplicarNum(num2) {
            return num * num2;
          } ,

          porcentajeNum(num2) {
            return num * num2 / 100;
          } ,
          
          
     }


     return obj
 }

 console.log(calculadora(2).multiplicarNum(3));