// 1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de menor a mayor o no. 
// si están ordenados retornar true
// caso contrario retorna false
// ejemplos de arrays

let array1 = [4, 9, 2, 5, 6, 7, 1, 2] // false

let array2 = [1, 2, 3, 4, 5, 6, 7, 8] // true

const verficarOrenado = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }

    return true
}

let result1 = verficarOrenado(array2)

console.log(result1)


const verficarOrenadoBubble = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                return false
            }
        }
    }
    return true
}

let result2 = verficarOrenadoBubble(array2)

console.log(result2)

// 1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de mayor a menor o no. 
// si están ordenados retornar true
// caso contrario retorna false
// ejemplos de arrays

let array3 = [4, 9, 2, 5, 6, 7, 1, 2] // false

let array4 = [1, 2, 3, 4, 5, 6, 7, 8] // false

let array5 = [10, 9, 8, 7, 6, 5] // true

const verficarOrenado2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1]) {
            return false
        }
    }

    return true
}

let result3 = verficarOrenado2(array5)

console.log(result3)


const verficarOrenadoBubble2 = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] < array[j + 1]) {
                return false
            }
        }
    }
    return true
}

let result4 = verficarOrenadoBubble2(array5)

console.log(result4)

// 2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la cantidad de filas y columnas y retornar con 
// valores secuenciales numéricos.

const construirMatriz = (filas, columnas) => {
    let matriz = []
    let cont = 0
    for (let i = 0; i < filas; i++) {
        matriz[i] = []
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = cont++

        }

    }

    return matriz
}

let result6 = construirMatriz(5, 5)

console.table(result6)

// 3. Dado él siguiente array de personas 

const personas =
    [
        {
            nombre: "Arlene Barr",
            legajo: 3955,
            edad: 33,
        },
        {
            nombre: "Roslyn Torres",
            legajo: 3925,
            edad: 27,
        },
        {
            nombre: "Cleo Lopez",
            legajo: 1965,
            edad: 34,
        },
        {
            nombre: "Daniel Malone",
            legajo: 3925,
            edad: 30,
        },
        {
            nombre: "Ethel Leon",
            legajo: 1915,
            edad: 34,
        },
        {
            nombre: "Harding Mitchell",
            legajo: 1905,
            edad: 25,
        }
    ]


// Desarrollar una función llamada orderAscLegajo que reciba por parámetro él array de personas y 
// realice un ordenamiento de forma ascendente ----> Hacer en papel 

const ordernarAscendentePorLegajo = (array) => {
    let aux = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].legajo > array[j + 1].legajo) {
                aux = array[j + 1].legajo
                array[j + 1].legajo = array[j].legajo
                array[j].legajo = aux
            }

        }

    }

    return array

}

let result7 = ordernarAscendentePorLegajo(personas);

console.log(result7)

// Desarrollar una función llamada orderDescLegajo que reciba por parámetro él array de personas y 
// realice un ordenamiento de forma descendente
// Pensar de qué forma se puede realizar los dos ítems anteriores en una sola función

const ordernarDescendentePorLegajo = (array) => {
    let aux = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].legajo < array[j + 1].legajo) {
                aux = array[j + 1].legajo
                array[j + 1].legajo = array[j].legajo
                array[j].legajo = aux
            }

        }

    }

    return array

}

let result8 = ordernarDescendentePorLegajo(personas);

console.log(result8)

const ordernarAscendenteDescendentePorLegajo = (array, string) => {
    let aux = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].legajo < array[j + 1].legajo && string === "DESC") {
                aux = array[j + 1].legajo
                array[j + 1].legajo = array[j].legajo
                array[j].legajo = aux
            } else if (array[j].legajo > array[j + 1].legajo && string === "ASC") {
                aux = array[j + 1].legajo
                array[j + 1].legajo = array[j].legajo
                array[j].legajo = aux
            }

        }

    }

    return array

}

let result9 = ordernarAscendenteDescendentePorLegajo(personas, "DESC");

console.log(result9)




// Teniendo 3 arrays:

fila1 = [4, 9, 2]
fila2 = [3, 5, 7]
fila3 = [8, 1, 6]


// Realiza las siguientes tareas:
// Crea una matriz con estos tres arrays:

const crearMatrizConArrays = (fila1, fila2, fila3) => {
    let matriz = []
    matriz.push(fila1, fila2, fila3)
    return matriz
}

let resultMatriz = crearMatrizConArrays(fila1, fila2, fila3);

console.table(resultMatriz)

// Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por parámetro y retorne lo solicitado:

// Función que reciba por parámetro la fila y retornar la suma de la misma.

const sumFilaMatriz = (resultMatriz, fila) => {
    let acum = 0;

    for (let i = 0; i < resultMatriz[fila].length; i++) {
        acum += resultMatriz[fila][i];

    }

    return acum;
}

let result11 = sumFilaMatriz(resultMatriz, 0)

console.log(result11)


// Función que retorne en un array la suma de las diagonales y de como resultado [15 , 15], sumando él centro las dos veces


const sumFilaMatrizDiagonales = (resultMatriz) => {
    let diagonalPrincipal = 0;
    let diagonalSecundaria = 0;
    let arrayAux = []
    for (let i = 0; i < resultMatriz.length; i++) {
        diagonalPrincipal += resultMatriz[i][i];
        diagonalSecundaria += resultMatriz[i][resultMatriz.length - 1 - i]
    }
    arrayAux.push(diagonalPrincipal, diagonalSecundaria)

    return arrayAux
}

let result12 = sumFilaMatrizDiagonales(resultMatriz)

console.log(result12)

// Función que retorne en un array los elementos pares ejemplo: [4, 2, 8, 6]

const elementosParesDevolverEnArrayDeUnaMatriz = (resultMatriz) => {
    let arrayAux = []

    for (let i = 0; i < resultMatriz.length; i++) {
        for (let j = 0; j < resultMatriz[i].length; j++) {
            if (resultMatriz[i][j] % 2 === 0) {
                arrayAux.push(resultMatriz[i][j])
            }
        }
    }
    return arrayAux
}

let ressult13 = elementosParesDevolverEnArrayDeUnaMatriz(resultMatriz);

console.log(ressult13)

// Función que retorne en un array los elementos mayores a 5

const elementosMayoresACinco = (resultMatriz) => {
    let arrayAux = []

    for (let i = 0; i < resultMatriz.length; i++) {
        for (let j = 0; j < resultMatriz[i].length; j++) {
            if (resultMatriz[i][j] > 5) {
                arrayAux.push(resultMatriz[i][j])
            }
        }
    }
    return arrayAux
}

let ressult14 = elementosMayoresACinco(resultMatriz);

console.log(ressult14)

// Función que retorne un objeto literal con dos propiedades
// pares : [4, 2, 8, 6], // array de pares
// impares : [9, 3, 5, 7, 1], // array de impares

const RetornarObjetoParesImpares = () => {
    let objeto = {}
    objeto.pares = [4, 2, 8, 6]
    objeto.impares = [9, 3, 5, 7, 1]

    return objeto
}

let result15 = RetornarObjetoParesImpares();

console.log(result15)

// Datos el siguiente array respoder:

const alumnos = [
    {
        id: 0,
        nombre: "Leandro",
        apellido: "Borrelli",
        legajo: 20210308,
        notas: [],
    },
    {
        id: 1,
        nombre: "Esteban",
        apellido: "Piazza",
        legajo: 20210211,
        notas: [],
    },
    {
        id: 2,
        nombre: "Martin",
        apellido: "Cejas",
        legajo: 20210218,
        notas: [],
    },
    {
        id: 3,
        nombre: "Karina",
        apellido: "Borgna",
        legajo: 20210516,
        notas: [],
    },
    {
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [],
    },
];

//   Ejercicio 1
// 1. Revisa el siguiente archivo, identifica sus componentes, vamos a estar
// usándolos a lo largo de este ejercicio.
// a. ¿Qué tipo de dato contiene la variable ‘alumnos’?

// * Es un arreglo de objetos

// b. ¿Qué propiedades tiene la estructura definida en el archivo final.js?

// * Nombre,Apellido,Legajo y un arreglo de notas

// 2. Crear una función que ordene la estructura definida en el archivo final.js
// según la propiedad legajo de forma ascendente.

const ordernarAscendentePorLegajo2 = (array) => {
    let aux = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j].legajo > array[j + 1].legajo) {
                aux = array[j + 1].legajo
                array[j + 1].legajo = array[j].legajo
                array[j].legajo = aux
            }
        }
    }

    return array

}

let result16 = ordernarAscendentePorLegajo2(alumnos)

console.log(result16)


// Ejercicio 2
// Dado el objeto:

let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10, 9, 8, 7, 9]
}

// a. Crear un método que retorne el promedio de notas. (*)

const promedioDeNotas = (objeto) => {
    let acum = 0;
    for (let i = 0; i < objeto.notas.length; i++) {
        acum += objeto.notas[i]
    }

    return acum / objeto.notas.length
}

let result17 = promedioDeNotas(alumno)

console.log(result17)

// b. Crear una función que ordene las notas del alumno de forma  descendente. (*)

const ordernarDescendentePorNotas = (objeto) => {
    let aux = 0;

    for (let i = 0; i < objeto.notas.length; i++) {
        for (let j = 0; j < objeto.notas.length - 1 - i; j++) {
            if (objeto.notas[j] < objeto.notas[j + 1]) {
                aux = objeto.notas[j + 1]
                objeto.notas[j + 1] = objeto.notas[j]
                objeto.notas[j] = aux
            }
        }
    }
    return objeto
}

let result18 = ordernarDescendentePorNotas(alumno)

console.log(result18)

// Ejercicio 3
// A. Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada
// una de sus posiciones.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


// B. Crear una función que retorne la suma de todos los números dentro de la
// matriz que sean múltiplos de 3.

const sumarMultiplosDeTresMatriz = (matriz) => {
    let acum = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 3 === 0) {
                acum += matriz[i][j]
            }
        }
    }

    return acum;
}

let result19 = sumarMultiplosDeTresMatriz(matriz)

console.log(result19)

// C. Crear una función que retorne un valor booleano dependiendo si la suma
// de todos los valores de la matriz es par.

const sumarTodoLosElementosMatrizYVerSiEsPar = (matriz) => {
    let acum = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acum += matriz[i][j]
        }
    }

    if (acum % 2 === 0) {
        return true
    } else {
        return false
    }
}

let result20 = sumarTodoLosElementosMatrizYVerSiEsPar(matriz)

console.log(result20)

// D. Crear una función que retorne la suma de las diagonales de la matriz.
// (*) Deberás mostrar por consola antes y después de función o método que
// implementaste. Utiliza VisualStudio code

console.table(matriz)

const sumDiagonales2 = (matriz) => {
    let diagonalPrincipal = 0;
    let diagonalSecundaria = 0;

    for (let i = 0; i < matriz.length; i++) {
        diagonalPrincipal += matriz[i][i];
        diagonalSecundaria += matriz[i][matriz.length - 1 - i]

    }

    return diagonalPrincipal + diagonalSecundaria;
}

let result21 = sumDiagonales2(matriz)

console.log(result21)

/* 
Dejo algunos ejercicios extras de array bidimensional
Cualquier consulta me etiquetan 
*/

let matriz2 = [
    [14, 11, 15],   // indices --> 0
    [24, 34, 22],  // indices --> 1
    [33, 30, 21]  // indices --> 2
]


/* 
1 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos pares
*/

const returnArregloElementosParesMatriz = (matriz2) => {
    let arrayAux = []
    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2[i].length; j++) {
            if (matriz2[i][j] % 2 === 0) {
                arrayAux.push(matriz2[i][j])
            }

        }

    }

    return arrayAux;
}

let result22 = returnArregloElementosParesMatriz(matriz2);

console.log(result22)

/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/

const returnArregloElementosImparesaresMatriz = (matriz2) => {
    let arrayAux = []
    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2[i].length; j++) {
            if (matriz2[i][j] % 2 !== 0) {
                arrayAux.push(matriz2[i][j])
            }

        }

    }

    return arrayAux;
}

let result23 = returnArregloElementosImparesaresMatriz(matriz2);

console.log(result23)

/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/

const returnArregloElementosMayorAVeinteMatriz = (matriz2) => {
    let arrayAux = []
    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2[i].length; j++) {
            if (matriz2[i][j] > 20) {
                arrayAux.push(matriz2[i][j])
            }

        }

    }

    return arrayAux;
}

let result24 = returnArregloElementosMayorAVeinteMatriz(matriz2);

console.log(result24)

/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/

const returnDiagonalPrincipal = (matriz2) => {
    let arrayAux = new Array()
    for (let i = 0; i < matriz2.length; i++) {
        arrayAux.push(matriz2[i][i])

    }

    return arrayAux
}

let result25 = returnDiagonalPrincipal(matriz2);

console.log(result25)

