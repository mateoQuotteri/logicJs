function estaONoEsta(array, item) {
    if (array.includes(item)) {
        return 1
    }else return 0
}


function estaRepetido(array, item) {
  let estaIncluidoEnElArray = estaONoEsta(array, item);
  if (estaIncluidoEnElArray == 0) {
    return "Este item ni siquiera esta en el array."
  }

  let indiceDelItem = array.indexOf(item);
  let ultimoIndiceDelItem = array.lastIndexOf(item);

  if (indiceDelItem === ultimoIndiceDelItem) {
    let mensaje = `Este item: ${item} esta solo una vez en el array dado, su posicion es:  ${indiceDelItem}.`;
    return mensaje;
}else {
    let mensaje = `Este item: ${item} esta dos veces en el array dado, en las posiciones:  ${indiceDelItem}
    y ${ultimoIndiceDelItem}.`;
    return mensaje;
}
}

let miArray = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];
let miItem = "z"

console.log(estaRepetido(miArray , miItem));