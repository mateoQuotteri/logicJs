let matriz = [
    [0, 0, 10 ,10, 10],
    [10, 10, 10, 10, 10],
    [10, 10, 45, 0, 10]
]

function cuantoGasteEnSemana(semanaPasada) {
    let semana = semanaPasada -1;
    let gastoSemanal =0;
    matriz[semana].forEach((gasto)=>{
        gastoSemanal += gasto
    })
    return gastoSemanal
}


console.log(cuantoGasteEnSemana(1));


function cuantoGasteEnElMes(matriz) {
    let suma = 0;
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            suma += matriz[fila][columna]
        }
        
    }
    return suma
}
console.log(cuantoGasteEnElMes(matriz));


function enQueSemanaGasteMas(matriz) {
    let sumaGastadaEnSemana = 0;
    let gastoEnSemana = 0;
    for (let fila = 0; fila < matriz.length; fila++) {
        gastoEnSemana = matriz[fila].reduce((acc = 0 , e)=>{
            return acc + e
        })
        if (gastoEnSemana > sumaGastadaEnSemana) {
            sumaGastadaEnSemana = gastoEnSemana
        }
    }
    return sumaGastadaEnSemana
}

console.log(enQueSemanaGasteMas(matriz));