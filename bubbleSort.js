
/*ORDENAR PERSONAS SEGUN ESTATURA */
let personas = [
    {
        nombre: "Taylor",
        apellido: "Swift",
        ocupacion: "cantante",
        estatura: 180
    },
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
];

for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length - 1; j++) {
        if (personas[j].estatura > personas[j + 1].estatura) {
            let temp = personas[j];
    
            personas[j] = personas[j + 1];
            personas[j + 1 ] = temp;
        }
        
    }
}

console.log(personas);

// METODO SORT EN ARRAYS "ORDENA DE MENOR A MAYOR SIN ALTERAR EL ARRAY ORIGINAL"
let numeros = [10, 69, 52, 7, 8]

console.log(numeros.sort());