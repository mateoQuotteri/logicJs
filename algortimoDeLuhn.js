function isValidCreditCard(number) {
    // Convertir el número a una cadena y eliminar los espacios en blanco
    const cardNumber = number.toString().replace(/\s/g, '');
  
    // Comprobar si el número contiene solo dígitos
    if (!/^\d+$/.test(cardNumber)) {
      return false;
    }
  
    // Realizar el algoritmo de Luhn
    let sum = 0;
    let shouldDouble = false;
  
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
  
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
      shouldDouble = !shouldDouble;
    }
  
    // Comprobar si el número es válido
    return sum % 10 === 0;
  }
  const creditCardNumber = "4539 1488 0343 6467";
  console.log(isValidCreditCard(creditCardNumber)); // Devolverá true, ya que es un número de tarjeta válido según el algoritmo de Luhn.
    