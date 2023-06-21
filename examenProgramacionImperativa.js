/*
EJERCICIO 1*/

const variable1 = 10;
const variable2 = 8;
const variable3 = 11;

function conditionalOperations(num1, num2, num3) {
    const suma = num1 + num2 + num3;
    let esMayor;
    let esPar;
    let laSumaEsImpar;
    let resultado = []

    if (num1 > num2) {
        esMayor = num2 * num3;
        resultado.push(esMayor)
    } 
    if (num2 % 2 === 0) {
        let frase = num2 + " es par"
        esPar = frase;
        resultado.push(esPar)
    }
     if (!(suma % 2 === 0)) {
        laSumaEsImpar = "La suma de estos tres números es impar."
        resultado.push(laSumaEsImpar)
    }
    return resultado
}

console.log(conditionalOperations(variable1 , variable2, variable3));


/* EJERCICIO 2 */

 const persona =  {
    nombre : "Mateo",
    apellido: "Quotteri",
    edad: 16 , 
    estaEmpleado : false,
 }

 function employmentSituation(objeto) {
     let nombre = objeto.nombre;
     let apellido = objeto.apellido;
     let estaEmpleado = objeto.estaEmpleado;
    if (objeto.edad > 18 && estaEmpleado) {
        let fraseFinalPositiva = nombre + " " + apellido + " está empleado y es mayor de edad."
        return fraseFinalPositiva
    }else if (objeto.edad > 18 && estaEmpleado === false) {
        let fraseFinalNegativa = nombre + " " + apellido + " NO está empleado y es mayor de edad."
        return fraseFinalNegativa
    }else if (objeto.edad < 18 && estaEmpleado === false) {
        let fraseNingunaDeLasDos = nombre + " " + apellido + " NO está empleado y  NO es mayor de edad."
        return fraseNingunaDeLasDos;
        
    } 
 }


 console.log(employmentSituation(persona));



 /*EJERCICIO 3 */

let autos = [{
    marca: 'Toyota',
    anio: 2023,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2022,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2018,
    color: 'rojo'
},
{
    marca: 'Fiat',
    anio: 2017,
    color: 'negro'
}]


const autoeEliminado = autos.pop()
let autosNuevos = [];


autos.forEach(function (auto) {
    if (auto.anio >= 2022) {
        autosNuevos.push(auto)
    }
})

console.log(autoeEliminado);
console.log(autosNuevos);




