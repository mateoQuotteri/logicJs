/**
 * Crear una función que imprima todos
 * los dígitos decimales, del 0 al 9,
 * usando un ciclo For.
 */

function mostrarDecimales() {
        for(let i=0;i<=9;i++){
        for(let j=1;j<=9;j++){
        console.log(i+j/10)
        }}
}
// mostrarDecimales();


/*Crear una función que imprima los números entre el 5 y el 20, saltando de
tres en tres.*/

function delCincoAlVeinte() {
    for (let i = 5; i <= 20; i+= 3) {
        console.log(i);        
        
    }
}

// delCincoAlVeinte()

/*Crear una función que imprima la sumatoria de todos los números entre el
0 y el 100. */
function sumarDelUnoAlCien() {
   let suma = 0;
   for (let i = 0; i <= 100; i++) {
   suma += i
    
   }
   return suma
}

// console.log(sumarDelUnoAlCien());

/*
Crear una función que reciba un string y luego imprimir la cantidad de
vocales que se encuentran en dicha frase. */

function vocalesEnString(string) {
    let vocales = ["a", "e", "i", "o", "u"];
    let cantidadDeVocales = 0;
    for (let i = 0; i < string.length; i++) {
        if (vocales.includes(string[i])) {
            cantidadDeVocales ++
        }
        
    }
    return cantidadDeVocales
}

 // console.log(vocalesEnString("Patricia"));

 /*Realizar una función que, dada una lista, devuelva una nueva lista cuyo
contenido sea igual a la original pero invertida.*/
let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function invertirLista(array) {
    return array.reverse()
}

 // console.log(invertirLista(lista));

 /*Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
forma :
1
22
333
4444
55555
666666*/

function piramide() {
    for (let i = 0; i <= 30 ; i++) {
        for (let j = 0; j < i; j++) {        
            console.log(i);

        }
        console.log("/n")
    }
}

// piramide()

function escribirPiramide() {
    let nivel = "";
    for (let i = 1; i <= 30; i++) {
      nivel += i + " ";
      console.log(nivel);
    }
  }

  escribirPiramide()