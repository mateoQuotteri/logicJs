const buttons = document.querySelectorAll(".letter-button")
const word = document.getElementById("word")
const dificultad = document.getElementById("dificultad")
const letraNoApareceAviso = document.getElementById("letraNoAparece")
const x = document.querySelector(".x")
const head = document.querySelector(".headHangMan")
const body = document.querySelector(".body")
const legs = document.querySelector(".legs")
const rightLeg = document.querySelector(".right-leg")
const leftLeg = document.querySelector(".left-leg")
const leftArm = document.querySelector(".leftArm")
const rightArm = document.querySelector(".rightArm")
const torso = document.querySelector(".torso")
const tablero = document.getElementById("letters")
const advice = document.getElementById("advice")
const palabraOculta = document.getElementById("palabraOculta")
const adviceWin = document.getElementById("advice-win")
const palabraOcultaWin = document.getElementById("palabraOcultaWin")

const words = [
  {
    word: "HOLA",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "PROGRAMACION",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "ELEFANTE",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "SUPERCALIFRAGILISTICOESPIALIDOSO",
    getlength() {
      return this.word.length;
    },
    dificultad: 10,
  },
  {
    word: "MURCIELAGO",
    getlength() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "MARIPOSA",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "PYTHON",
    getlength() {
      return this.word.length;
    },
    dificultad: 3,
  },
  {
    word: "HIPOPOTAMO",
    get length() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "PLAYA",
    get length() {
      return this.word.length;
    },
    dificultad: 2,
  },
  {
    word: "EXTRAORDINARIO",
    get length() {
      return this.word.length;
    },
    dificultad: 8,
  },
  {
    word: "ELEFANTE",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "SORPRESA",
    get length() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "ESCRITORIO",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "SOL",
    getlength() {
      return this.word.length;
    },
    dificultad: 1,
  },
  {
    word: "DESARROLLO",
    getlength() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "GUITARRA",
    getlength() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "PLAYA",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "COMPUTADORA",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "ELEFANTE",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "FRESA",
    getlength() {
      return this.word.length;
    },
    dificultad: 3,
  },
  {
    word: "DINOSAURIO",
    getlength() {
      return this.word.length;
    },
    dificultad: 8,
  },
  {
    word: "CERVEZA",
    getlength() {
      return this.word.length;
    },
    dificultad : 6
  },
];

let wordToCompare;
window.onload = (e)=>{
    let random = Math.round(Math.random() * 10)
    let random2 = Math.random() 
    let random3= Math.random() 

    if (random2 >= 0.5) {
        random += 10
    }else if (random2 >= 0.5 && random3 < 0.4) {
        random -= 1;
    }

    let wordToSearch = words[random];
    wordToCompare = wordToSearch.word
    dificultad.textContent = "Dificultad:" + wordToSearch.dificultad + "/10"
    let lengthOfWordSelected = wordToSearch.getlength()
    for (let i = 0; i < lengthOfWordSelected; i++) {
      const span = document.createElement("span");
      span.classList.add("span")
      span.id = i;
    span.textContent = "_ "; 
    word.appendChild(span)
    }
    let array = wordToSearch.word.split("");
    if (localStorage.getItem("word")) {
      localStorage.removeItem("word");
      localStorage.removeItem("word");
      localStorage.removeItem("word");

      localStorage.setItem("word", wordToSearch);
      localStorage.setItem("wordToSearch", wordToSearch.word);
      localStorage.setItem("wordToSearchArray", JSON.stringify(array));
    }

    console.log(wordToSearch.word);
    
    
  }
  
  
  let contador = 0;

  buttons.forEach(boton => {
    boton.addEventListener("click", (e) => {
      console.log(wordToCompare);
      let letra = boton.textContent;
      
      if (wordToCompare.includes(letra)) {
      let array = []
     for (let i = 0; i < wordToCompare.length; i++) {
      if (wordToCompare[i] == letra) {
        array.push(i)
      }
   
      let arrayOfSpans = []
      array.forEach( indice => {
        arrayOfSpans.push(document.getElementById(indice))
      });

      arrayOfSpans.forEach(element => {
        element.textContent = letra
      });

      let allSpans = document.querySelectorAll(".span")
      let isALetterArray = [];
      let todasLasLetras =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
       'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      allSpans.forEach(element => {
        if(todasLasLetras.includes(element.textContent)){
        isALetterArray.push(true)
      }else{
        isALetterArray.push(false)
      }
      });

      if (isALetterArray.includes(false)) {
        console.log(isALetterArray);
      }else{
       adviceWin.classList.remove("none-display")
       tablero.classList.add("none-display")
       palabraOcultaWin.textContent = wordToCompare;
      }
     
      
     
    }
   
  }else {
    letraNoApareceAviso.classList.remove("none")
    letraNoApareceAviso.textContent = "La letra " + letra + " no es contenida por la palabra oculta."
    if (contador == 0) {
      console.log(head);
      head.classList.remove("none")
    }else if(contador == 1) {
      body.classList.remove("none")
      torso.classList.remove("none")
    }
    else if (contador == 2) {
      legs.classList.remove("none")
      leftLeg.classList.remove("none")
    }  else if (contador == 3) {
      rightLeg.classList.remove("none")
    }else if (contador == 4) {
      rightArm.classList.remove("none")
    }else if (contador == 5) {
      leftArm.classList.remove("none")
    }else if(contador == 6){
      x.classList.remove("none-display")
      tablero.classList.add("none-display")
      advice.classList.remove("none-display")
      palabraOculta.textContent = wordToCompare;
    }
   
    contador += 1
  }
    });
  });
  
  