const button = document.getElementById("check")
const input = document.getElementById("guess")
const errorNotNumber = document.getElementById("error-not-a-number")
const errorNumeroMayor = document.getElementById("error-higher");
const errorNumeroMenor = document.getElementById("error-lower");
const ganaste = document.getElementById("win")

let numeroAleatorio;
window.onload = ()=> {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAleatorio);
}
function comparar(numero) {
    if (numero > numeroAleatorio) {
        ganaste.classList.add("none")
        errorNumeroMayor.classList.add("none")
        errorNumeroMenor.classList.remove("none")
      } else if (numero < numeroAleatorio) {
        ganaste.classList.add("none")
        errorNumeroMenor.classList.add("none")
        errorNumeroMayor.classList.remove("none")
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
      comparar(numeroSeleccionado)
    }     
})