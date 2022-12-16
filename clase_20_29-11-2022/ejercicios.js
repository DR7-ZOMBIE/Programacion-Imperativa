// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

const bubbleDescendente = (array) => {
    let aux = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] < array[j + 1]) {
                aux = array[j + 1]
                array[j + 1] = array[j]
                array[j] = aux
            }

        }

    }

    return array;
}




let usuarios = [
    {
        nombre: "Dennis",
        apellido: "Juilland",
        likes: 1000
    },
    {
        nombre: "Dionete",
        apellido: "Ruiz",
        likes: 200
    },
    {
        nombre: "Jorje",
        apellido: "Duje",
        likes: 500
    },
    {
        nombre: "Maximiliano",
        apellido: "Zbiden",
        likes: 978
    },
    {
        nombre: "Mariana",
        apellido: "Torres",
        likes: 250
    },
    {
        nombre: "Facundo",
        apellido: "Cortez",
        likes: 350
    },
    {
        nombre: "Matias",
        apellido: "Stamn",
        likes: 245
    },
    {
        nombre: "Ignacio",
        apellido: "Riveros",
        likes: 247
    },
    {
        nombre: "Matias",
        apellido: "Ramirez",
        likes: 760
    },
    {
        nombre: "Franco",
        apellido: "Garmendia",
        likes: 700
    },
    {
        nombre: "Enrique",
        apellido: "Gonzales",
        likes: 127
    },
    {
        nombre: "Felipe",
        apellido: "Taborda",
        likes: 130
    },
    {
        nombre: "Romina",
        apellido: "Campero",
        likes: 150
    },
    {
        nombre: "Ivan",
        apellido: "Gomez",
        likes: 298
    },
    {
        nombre: "Pablo",
        apellido: "Ambrojio",
        likes: 275
    }
]


const cantidadLikesDescendente = (array) => {
    let aux = 0
    let arrayAux = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].likes < array[j + 1].likes) {
                aux = array[j + 1].likes
                array[j + 1].likes = array[j].likes
                array[j].likes = aux
            }

        }
        arrayAux.push(array[i].likes)

    }

    return arrayAux;
}


console.log(cantidadLikesDescendente(usuarios))


            
        



// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let termometro = {
    dia: 23,
    mes: 7,
    temperaturas: [1, 54, 32, 90, 67]
}

// a) Ordenar por temperatura mínima de menor a mayor.


const tamperaturaAscendente = (termometro) => {
    let aux = 0

    for (let i = 0; i < termometro.temperaturas.length; i++) {
        for (let j = 0; j < termometro.temperaturas.length - 1 - i; j++) {
            if (termometro.temperaturas[j] > termometro.temperaturas[j + 1]) {
                aux = termometro.temperaturas[j + 1]
                termometro.temperaturas[j + 1] = termometro.temperaturas[j]
                termometro.temperaturas[j] = aux
            }

        }

    }

    return termometro;
}

console.log(tamperaturaAscendente(termometro))

// b) Ordenar por temperatura máxima de mayor a menor.


const tamperaturaDescendente = (termometro) => {
    let aux = 0

    for (let i = 0; i < termometro.temperaturas.length; i++) {
        for (let j = 0; j < termometro.temperaturas.length - 1 - i; j++) {
            if (termometro.temperaturas[j] < termometro.temperaturas[j + 1]) {
                aux = termometro.temperaturas[j + 1]
                termometro.temperaturas[j + 1] = termometro.temperaturas[j]
                termometro.temperaturas[j] = aux
            }

        }

    }

    return termometro;
}

console.log(tamperaturaDescendente(termometro))