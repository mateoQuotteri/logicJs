/*Buscar anagramas: Escribe una función que reciba dos cadenas de caracteres y 
determine si son anagramas, es decir, si contienen exactamente 
las mismas letras en cualquier orden.
 La función debe devolver true si son anagramas y false en caso contrario.*/


 function segundaComparacion(palabra1, palabra2) {
    let arrayPalabra2= []
    for (let i = 0; i < palabra2.length; i++) {
       arrayPalabra2.push(palabra2[i])
    }
    let arrayContainer = []
    arrayPalabra2.forEach(letra =>{
        if (palabra2.includes(letra)) {
            arrayContainer.push(true)
        }else{
           arrayContainer.push(false)
        }
        return arrayContainer
    })


    // COMPARO SI TODOS LOS DATOS INSERTADOS EN EL ARRAY CONTAINER SON TRUE
    const isEveryTrue = (currentValue) => currentValue === true;
    if(arrayContainer.every(isEveryTrue)) {
        return true
    }else return false
 }

 function buscarAnagramas(palabra1 , palabra2) {
     let word1 = palabra1;
     let word2 =palabra2
     let arrayPalabra1= []
     for (let i = 0; i < palabra1.length; i++) {
        arrayPalabra1.push(palabra1[i])
     }
     let arrayContainer = []
     arrayPalabra1.forEach(letra =>{
         if (palabra2.includes(letra)) {
             arrayContainer.push(true)
         }else{
            arrayContainer.push(false)
         }
         return arrayContainer
     })
     // almaceno el valor por si la segunda palabra tiene todas las mismas letras que la palabra 1 (serie anagrama tmb)
     // ej como palabra uno paso jorgevovich y como dos jorge, deberia retornar true.
     // gracias a la funcion segundaComparacion, lo puedo chequear, sino solo compara ria la primera c la segunda
     let segundaComparacionVariable = segundaComparacion(word1 ,word2)


     // COMPARO SI TODOS LOS DATOS INSERTADOS EN EL ARRAY CONTAINER SON TRUE
     const isEveryTrue = (currentValue) => currentValue === true;
     if(arrayContainer.every(isEveryTrue) || segundaComparacionVariable) {
         return true
     }else return false
 }

 console.log(buscarAnagramas("Jorge", "Jorgevovich"));