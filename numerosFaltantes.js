/*Números faltantes: 
Escribe una función que encuentre los números faltantes en una secuencia de números del 1 al n.*/

function numerosFaltantes(numeroTope) {
    let numerosYaObtenidos = [2,6,9];
    let numerosPorObtener = [];
    for (let i = 1; i <= numeroTope; i++) {
        if (!numerosYaObtenidos.includes(i)) {
            numerosPorObtener.push(i);
        }
    }
    return numerosPorObtener
}


console.log(numerosFaltantes(10));