/*const button = document.querySelector(".check")
const input = document.getElementById("guess")
const errorNotNumber = document.getElementById("error-not-a-number")
const errorNumeroMayor = document.getElementById("error-higher");
const errorNumeroMenor = document.getElementById("error-lower");
const ganaste = document.getElementById("win")
const span = document.getElementById("span")
const sectionVidas = document.getElementById("section-vidas")
let numeroAleatorio;

let contador = 0;
let vidasValidas = [0,1,2,3,4,5,6,7,8,9]
function quitarVidas() {
  if (vidasValidas.includes(contador)) {
    crearUnNuevoCorazonRoto();
    contador++
  }
  
  function crearUnNuevoCorazonRoto() {
    let newDiv= document.createElement("div")
    newDiv.classList.add("div-vida")
    sectionVidas.appendChild(newDiv)
  }
  function comparando(numero) {
    if (numero > numeroAleatorio) {
    ganaste.classList.add("none")
    errorNumeroMayor.classList.add("none")
    errorNumeroMenor.classList.remove("none")
    quitarVidas()
  } else if (numero < numeroAleatorio) {
    ganaste.classList.add("none")
    errorNumeroMenor.classList.add("none")
    errorNumeroMayor.classList.remove("none")
    quitarVidas()
  } else {
    errorNumeroMenor.classList.add("none")
    errorNumeroMayor.classList.add("none")
    ganaste.classList.remove("none")
  }
}
button.addEventListener("click",()=> {
  let numeroSeleccionado = parseInt(input.value);

  if (isNaN(numeroSeleccionado)) {
      errorNotNumber.classList.remove("none")
      return
  }else  {
    console.log(numeroSeleccionado);
    comparando(numeroSeleccionado)
  }     
})



window.onload = ()=> {
 
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  console.log(numeroAleatorio);
}


function comparar(numero) {
  if (numero > numeroAleatorio) {
    ganaste.classList.add("none")
    errorNumeroMayor.classList.add("none")
        errorNumeroMenor.classList.remove("none")
        quitarVidas()
      } else if (numero < numeroAleatorio) {
        ganaste.classList.add("none")
        errorNumeroMenor.classList.add("none")
        errorNumeroMayor.classList.remove("none")
        quitarVidas()
      } else {
        errorNumeroMenor.classList.add("none")
        errorNumeroMayor.classList.add("none")
        ganaste.classList.remove("none")
      }
  }




  
}*/
window.onload = () => {
  // Tu código aquí
  const button = document.querySelector(".check");
  const input = document.getElementById("guess");
  const errorNotNumber = document.getElementById("error-not-a-number");
  const errorNumeroMayor = document.getElementById("error-higher");
  const errorNumeroMenor = document.getElementById("error-lower");
  const ganaste = document.getElementById("win");
  const span = document.getElementById("span");
  const sectionVidas = document.getElementById("section-vidas");
  let numeroAleatorio;

  let contador = 0;
  let vidasValidas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  
  function quitarVidas() {
    if (vidasValidas.includes(contador)) {
      crearUnNuevoCorazonRoto();
      contador++
    }
    
    function crearUnNuevoCorazonRoto() {
      let newDiv= document.createElement("div")
      newDiv.classList.add("div-vida")
      sectionVidas.appendChild(newDiv)
    }
    function comparando(numero) {
      if (numero > numeroAleatorio) {
      ganaste.classList.add("none")
      errorNumeroMayor.classList.add("none")
      errorNumeroMenor.classList.remove("none")
      quitarVidas()
    } else if (numero < numeroAleatorio) {
      ganaste.classList.add("none")
      errorNumeroMenor.classList.add("none")
      errorNumeroMayor.classList.remove("none")
      quitarVidas()
    } else {
      errorNumeroMenor.classList.add("none")
      errorNumeroMayor.classList.add("none")
      ganaste.classList.remove("none")
    }
  

  button.addEventListener("click", () => {
    let numeroSeleccionado = parseInt(input.value);

    if (isNaN(numeroSeleccionado)) {
      errorNotNumber.classList.remove("none");
      return;
    } else {
      console.log(numeroSeleccionado);
      comparando(numeroSeleccionado);
    }
  });

  // Resto de tu código aquí

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  console.log(numeroAleatorio);
}}}
