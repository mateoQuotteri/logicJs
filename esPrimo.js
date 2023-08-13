function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  // Ejemplos de uso
  console.log(esPrimo(7));   // Devuelve true, 7 es primo
  console.log(esPrimo(12));  // Devuelve false, 12 no es primo