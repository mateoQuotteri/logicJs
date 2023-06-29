const buttons = document.querySelectorAll(".letter-button")
const word = document.getElementById("word")
const words = [
  {
    word: "HOLA",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "PROGRAMACIÓN",
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
    word: "MURCIÉLAGO",
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
    word: "HIPOPÓTAMO",
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

  
  buttons.forEach(boton => {
    boton.addEventListener("click", (e) => {
     console.log(wordToCompare);
      let letra = boton.textContent;
      console.log(letra);

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
    }
   
  }
  console.log(spansToRemove);
    });
  });
  
  