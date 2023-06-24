/*Para practicar la implementación del algoritmo de búsqueda binaria, 
vamos a empezar con un ejemplo simple. Queremos que se familiaricen 
con la sintaxis del mismo, por lo que no haremos énfasis en los datos, sino en la solución.
Dada la siguiente lista:
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
¿Cuál es la posición del número 1?
¿Cuál es la posición del número 5?
¿Cuál es la posición del número 6?
¿Cuál es la posición del número 9?
¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el array, y determinar con un cálculo visual la posición de cada elemento, pero, la propuesta que les hacemos es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 6, y nos indique por consola la posición del mismo. 
*/
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];



const binarySearch = (list, item) => {
    // punto mas bajo
    let low = 0;
    // punto mas alto
    let high = list.length - 1;
    // mientras que low sea menor o igual que high
    while (low <= high) {
      // encontramos la mitad entre low y high
      const mid = Math.floor((low + high) / 2);
      // adivinar si el valor es el de la mitad
      const guess = list[mid];
   // si es asi, retornar esa posiciona
      if (guess === item) {
        return mid;
      }
      // si lo propuesto es mayor que lo
      // que estamos buscando
      if (guess > item) {
        //
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
   
    return null; // si no encontramos nada
   
  };
  

  console.log(binarySearch(list , 10));