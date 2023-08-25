const todosLosBotones = document.querySelectorAll(".button")
const numeros = ["1", "2", "3","4","5","6","7","8","9"];
const operadores =["+", "-", "/" , "*", "="];


let collectingArray = [];
window.onload = (e)=> {
    todosLosBotones.forEach(button => {
        button.addEventListener("click", (e)=> {
            const initialArray = [];
            if (!localStorage.getItem('colectingArray')) {
               
    
                const value = button.textContent;
    
                if (numeros.includes(value)) {
                    // Si es un número, agregarlo al array de recolección
                    collectingArray.push(value);
                } else {
                    // Si es un operador, reemplazar el array en el localStorage y reiniciar el de recolección
                   
                    localStorage.setItem('storedArray', JSON.stringify(collectingArray));
                    collectingArray = [];
                    let primerOperador = value;
                    if (!localStorage.getItem('primerOperador')) {
                        localStorage.setItem('primerOperador', JSON.stringify(primerOperador));

                }
              }
            }
                
            }
            
        )
    });
}