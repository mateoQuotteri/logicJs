/*Palíndromo: Escribe una función que determine si una cadena de
 texto es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda).*/

 function esPalindromo(string) {
    let longitudDelString = string.lenght;
    let arrayAlReves = []
    for (let i = string.length - 1; i >= 0; i--) {
        arrayAlReves.push(string[i])
      }

      let palabraAlReves = arrayAlReves.join("").toLowerCase()
      let stringToLowerCase = string.toLowerCase()
      
      if (stringToLowerCase == palabraAlReves) {
          console.log(palabraAlReves);
        console.log(stringToLowerCase);
        return "Esta es Palindromo"

      }else  {
          console.log(palabraAlReves);
          console.log(stringToLowerCase);
        return "Esta NO es Palindromo"

    }
 }

console.log(esPalindromo("Ana"));
