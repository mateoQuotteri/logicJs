/*MATRICES */

let matriz = [
    [10, 20, 30 ,40, 50],
    [58, 8, 12, 13, 8],
    [7, 89, 75, 46, 41]
]

/*recorro la fila con inidce  1 (la segunda) */
for (let index = 0; index < matriz[1].length; index++) {
    console.log(matriz[1][index]);
    
}

/*recorro la columna con indice 1 (la segunda) */
for (let index = 0; index < matriz.length; index++) {
    console.log(matriz[index][1]);
    
}


/* RECORRO TODO*/
for (let fila = 0; fila < matriz.length; fila++) {

    for (let columna = 0; columna < matriz[fila].length; columna++) {
        console.log(matriz[fila][columna]);
        
    }
    
}

