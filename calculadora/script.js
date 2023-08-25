const todosLosBotones = document.querySelectorAll(".button")
const numeros = ["1", "2", "3","4","5","6","7","8","9"];
const operadores =["+", "-", "/" , "*"];
const input = document.getElementById("display")

let collectingArray = [];
window.onload = (e)=> {
    
    let initialArray
    let primerNumero ;
input.value = ""
    todosLosBotones.forEach(button => {
        button.addEventListener("click", (e)=> {
            const value = button.textContent;
            if (numeros.includes(value) ) {
                input.value += value
            }else if (operadores.includes(value)) {
                let numeroSeleccionado = input.value;
                input.value = ""
                if (numeroSeleccionado) {
                    if (!initialArray) {
                        primerNumero = numeroSeleccionado;
                        localStorage.setItem("primerNumero", primerNumero)
                        initialArray=value
                    }else{
                        let segundoNumero = numeroSeleccionado;
                        let signo = initialArray
                        let resultado = `${localStorage.getItem("primerNumero")}  ${signo}  ${numeroSeleccionado} `
                        input.value = eval(resultado);
                        localStorage.removeItem("primerNumero")



                    }
                }
            }
            }
            
        )
    });
}

/*const todosLosBotones = document.querySelectorAll(".button")
const numeros = ["1", "2", "3","4","5","6","7","8","9"];
const operadores =["+", "-", "/" , "*"];


let collectingArray = [];
window.onload = (e)=> {
    todosLosBotones.forEach(button => {
        button.addEventListener("click", (e)=> {
            const initialArray = [];
            const value = button.textContent;
            if (!localStorage.getItem("colectingArray")) {
               
    
    
                if (numeros.includes(value)) {
                    // Si es un número, agregarlo al array de recolección
                    collectingArray.push(value);
                }else if(operadores.includes(value)){
                    //si no existe un item en el local storage
                   if (!localStorage.getItem("storedArray")) {
                    // lo creamos y le asignamos el valor que el usuario fue seleccionando
                    localStorage.setItem('storedArray', JSON.stringify(collectingArray));
                   }
                   //si existe:
                   else {
                    //creamos otro item, sin modificar el ya preexistente y 
                    //le asignamos el valor que el usuario fue seleccionando
                    localStorage.setItem('storedArray2', JSON.stringify(collectingArray));
                   }
                    collectingArray = [];
                    let primerOperador = value;

                    //si el usuario aun no ha clickeado su primer operador
                    if (!localStorage.getItem('primerOperador')) {
                        localStorage.setItem('primerOperador', JSON.stringify(primerOperador));
                }
              }else{   
                let item1= localStorage.getItem("storedArray");
                let item2= localStorage.getItem("storedArray2");
                let operador = localStorage.getItem("primerOperador");

                var numero1 = item1.join(""); // Esto combina los elementos del array en una sola cadena
                var numero2 = item2.join(""); // Esto combina los elementos del array en una sola cadena

                console.log(item1 , " ", operador, " ", item2);

                console.log(typeof(numero2));

              }
            }
                
            }
            
        )
    });
}*/