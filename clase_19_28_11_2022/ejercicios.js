// Ejercicio 1

// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
// likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
// obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.


let usuarios = [
    {
        nombre: "Andres",
        apellido: "dsfsd",
        likes: 200

    },
    {
        nombre: "Felipe",
        apellido: "dsfsd",
        likes: 100

    },
    {
        nombre: "Carlos",
        apellido: "dsfsd",
        likes: 50

    },
]

const organizarLikes = (array) => {
    let aux = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].likes < array[j + 1].likes) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux;
            }

        }

    }

    return array;
}

console.log(organizarLikes(usuarios))


// Ejercicio 2

// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
// objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
// día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let temperatura = {
    dia: 12,
    mes: 23,
    temperatura: [127, 30, 65, 89, 100]
}

const organizarTemperaturaMenorMayor = (array) => {
    let aux = 0;
    for (let i = 0; i < array.temperatura.length - 1; i++) {
        for (let j = 0; j < array.temperatura.length - 1 - i; j++) {
            if (array.temperatura[j] > array.temperatura[j + 1]) {
                aux = array.temperatura[j]
                array.temperatura[j] = array.temperatura[j + 1]
                array.temperatura[j + 1] = aux;
            }

        }

    }

    return array;
}

console.log(organizarTemperaturaMenorMayor(temperatura))


const organizarTemperaturaMayorMenor = (array) => {
    let aux = 0;
    for (let i = 0; i < array.temperatura.length - 1; i++) {
        for (let j = 0; j < array.temperatura.length - 1 - i; j++) {
            if (array.temperatura[j] < array.temperatura[j + 1]) {
                aux = array.temperatura[j]
                array.temperatura[j] = array.temperatura[j + 1]
                array.temperatura[j + 1] = aux;
            }

        }

    }

    return array;
}

console.log(organizarTemperaturaMayorMenor(temperatura))

let personas = [
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
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];


const edades = [33, 27, 34, 30, 34, 25];


const bubbleAscendente = (array) => {
    let aux = 0;
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if(array[j] > array[j+1]){
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux;
            }
            
        }
        
    }

    return array;
}

console.log(bubbleAscendente(edades))

const bubbleDescendente = (array) => {
    let aux = 0;
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length -1 - i; j++) {
            if(array[j] < array[j+1]){
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux;
            }
            
        }
        
    }

    return array;
}

console.log(bubbleDescendente(edades))

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

console.log(bubbleAscendente(letras))

console.log(bubbleDescendente(letras))

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]


const organizarSaldoDesc = (array) => {
    let aux = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].saldo < array[j + 1].saldo) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux;
            }

        }

    }

    return array;
}

console.log(organizarSaldoDesc(arrayCuentas))


const organizarSaldoAsc = (array) => {
    let aux = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].saldo > array[j + 1].saldo) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux;
            }

        }

    }

    return array;
}

console.log(organizarSaldoAsc(arrayCuentas))