const buttons = document.querySelectorAll(".letter-button")
const word = document.getElementById("word")
const words = [
    {
        word: "Hola",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "Programación",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "Elefante",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Supercalifragilisticoespialidoso",
    getlength() {
      return this.word.length;
    },
    dificultad: 10,
  },
  {
    word: "Murciélago",
    getlength() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "Mariposa",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "Python",
    getlength() {
      return this.word.length;
    },
    dificultad: 3,
  },
  {
    word: "Hipopótamo",
    get length() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "Playa",
    get length() {
      return this.word.length;
    },
    dificultad: 2,
  },
  {
    word: "Extraordinario",
    get length() {
      return this.word.length;
    },
    dificultad: 8,
  },
  {
    word: "Elefante",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Sorpresa",
    get length() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "Escritorio",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "Sol",
    getlength() {
      return this.word.length;
    },
    dificultad: 1,
  },
  {
    word: "Desarrollo",
    getlength() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "Guitarra",
    getlength() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "Playa",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "Computadora",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "Elefante",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Fresa",
    getlength() {
      return this.word.length;
    },
    dificultad: 3,
  },
  {
    word: "Dinosaurio",
    getlength() {
      return this.word.length;
    },
    dificultad: 8,
  },
  {
    word: "Cerveza",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Felicidad",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Cafetera",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "Ingeniería",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "Playstation",
    getlength() {
      return this.word.length;
    },
    dificultad: 6,
  },
  {
    word: "Computadora",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "Chocolate",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Astronomía",
    getlength() {
      return this.word.length;
    },
    dificultad: 8,
  },
  {
    word: "Camiseta",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Refrigerador",
    getlength() {
      return this.word.length;
    },
    dificultad: 7,
  },
  {
    word: "Mandarina",
    getlength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "Teléfono",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Escuela",
    getlength() {
      return this.word.length;
    },
    dificultad: 3,
  },
  {
    word: "Ventana",
    gelength() {
      return this.word.length;
    },
    dificultad: 4,
  },
  {
    word: "Avión",
    getlength() {
      return this.word.length;
    },
    dificultad: 2,
  },
  {
    word: "Libro",
    getlength() {
      return this.word.length;
    },
    dificultad: 2,
  },
  {
    word: "Elefante",
    getlength() {
      return this.word.length;
    },
    dificultad: 5,
  },
  {
    word: "Cocodrilo",
    getlength() {
      return this.word.length;
    },
    dificultad: 6,
  },
];
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
  
    let lengthOfWordSelected = wordToSearch.getlength()

    for (let i = 0; i < lengthOfWordSelected; i++) {
      const p = document.createElement("span");
    p.textContent = "_ "; 
    word.appendChild(p)
    }
    let array = wordToSearch.word.split("");
    console.log(wordToSearch.word);
    console.log(array);

    localStorage.setItem("word", JSON.stringify(wordToSearch));
    localStorage.setItem("wordToSearch", JSON.stringify(wordToSearch.word));
    localStorage.setItem("wordToSearchArray", JSON.stringify(array));


  }

  buttons.forEach(boton => {
    boton.addEventListener("click" , (e)=>{
      let letra = boton.textContent;
      console.log(letra);
    })
  });