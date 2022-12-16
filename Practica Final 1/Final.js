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

// * Lo primero es que no es una variable es un arreglo de objetos de tipo alumnos
// * Contiene como atributos de cada objeto un id,nombre,apellido,legajo, un arreglo de notas


// b. ¿Qué propiedades tiene la estructura definida en el archivo final.js?

// * Contiene como atributos o  propiedades de cada objeto un id,nombre,apellido,legajo, un arreglo de notas
// * Para un total de 5 objetos de tipo alumno dentro del array

// 2. Crear una función que ordene la estructura definida en el archivo final.js
// según la propiedad legajo de forma ascendente. (*)

const ordenarDeFormaAscendenteLegajo = (array) => {
    let aux = 0;

    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1-i; j++) {
            if (array[j].legajo > array[j+1].legajo) {
                aux = array[j+1]
                array[j+1]  = array[j]
                array[j] = aux
            }
            
        }
        
    }

    return array;
}

let arrayAlumnosAscendete = ordenarDeFormaAscendenteLegajo(alumnos);

console.log(arrayAlumnosAscendete[0])

// Ejercicio 2
// Dado el objeto:

let alumno = {
id: 5,
nombre: "Javier",
apellido: "Riera",
legajo: 20220125,
notas: [10,9,8,7,9]
}

// a. Crear un método que retorne el promedio de notas. (*)

const promedioNotas = (alumno) => {
    let acum = 0;
    for (let i = 0; i < alumno.notas.length; i++) {
        acum += alumno.notas[i]
        
    }

    return acum/alumno.notas.length;
}

let promedio = promedioNotas(alumno);

console.log(promedio)

// b. Crear una función que ordene las notas del alumno de forma  descendente. (*)

    const ordenarNotasFormaDescendente = (alumno) => {
        let aux = 0;
        for (let i = 0; i < alumno.notas.length; i++) {
            for (let j = 0; j < alumno.notas.length -1 -i; j++) {
                if(alumno.notas[j] < alumno.notas[j+1]){
                aux = alumno.notas[j+1]
                alumno.notas[j+1] = alumno.notas[j]
                alumno.notas[j] = aux;
                
                }
                
            }
            
        }

        return alumno
    }

let alumnoNotasOrganizadas = ordenarNotasFormaDescendente(alumno);

console.log(alumnoNotasOrganizadas)



// Ejercicio 3
// A. Crea una matriz de 3x3, cuadrada, con números enteros positivos en cada
// una de sus posiciones.

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


// B. Crear una función que retorne la suma de todos los números dentro de la
// matriz que sean múltiplos de 3.


const sumarMultiplosDeTresMatriz = (matriz) => {
    let acum = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] % 3 === 0){
                acum += matriz[i][j]
            }
            
        }
    }
    return acum;
}

let acumMultiplosDeTres = sumarMultiplosDeTresMatriz(matriz);

console.log(acumMultiplosDeTres)

// C. Crear una función que retorne un valor booleano dependiendo si la suma
// de todos los valores de la matriz es par.

const verificarAcumEsParTotal = (matriz) => {
    let acum = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
                acum += matriz[i][j]
        }
    }

    if (acum % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

let verificarPar = verificarAcumEsParTotal(matriz);

console.log(verificarPar)

// D. Crear una función que retorne la suma de las diagonales de la matriz.
// (*) Deberás mostrar por consola antes y después de función o método que
// implementaste. Utiliza VisualStudio code

console.table(matriz)

const retornarDiagonalesMatriz = (matriz) => {

    let diagonalPrincipal = 0

    let diagonalSecundaria = 0

    for (let i = 0; i < matriz.length; i++) {
        diagonalPrincipal += matriz[i][i]
        diagonalSecundaria += matriz[i][matriz.length-1-i]
     }

     return diagonalPrincipal + diagonalSecundaria;
}

let sumDiagonales = retornarDiagonalesMatriz(matriz)

console.log(sumDiagonales)

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

const devolverElementosParesArray = (matriz2) => {

    let arrayAux = new Array();

    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2[i].length; j++) {
            if (matriz2[i][j] % 2 === 0) {
                arrayAux.push(matriz2[i][j])
            }
            
        }
    }

    return arrayAux;
}

let result1 = devolverElementosParesArray(matriz2);
console.log(result1)

/* 
2 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos impares
*/

const devolverElementosImparesArray = (matriz2) => {
    let arrayAux = new Array();

    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2[i].length; j++) {
            if (matriz2[i][j] % 2 !== 0) {
                arrayAux.push(matriz2[i][j])
            }
            
        }
    }

    return arrayAux;
}

let result2 = devolverElementosImparesArray(matriz2);
console.log(result2)

/* 
3 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos mayor a 20
*/

const devolverElementosMayoresAVeinteArray = (matriz2) => {
    let arrayAux = new Array();

    for (let i = 0; i < matriz2.length; i++) {
        for (let j = 0; j < matriz2[i].length; j++) {
            if (matriz2[i][j] > 20) {
                arrayAux.push(matriz2[i][j])
            }
            
        }
    }

    return arrayAux;
}

let result3 = devolverElementosMayoresAVeinteArray(matriz2);
console.log(result3)

/* 
4 - Desarrollar una funcion que reciba una matriz cuadrada por parametro
* debe retornar un array con los elementos de la primer diagonal
*/

const devolverElementosPrimerDiagonal = (matriz2) => {
    let arrayAux = new Array();

    for (let i = 0; i < matriz2.length; i++) {
        arrayAux.push(matriz2[i][i])

}
    return arrayAux;
}

let result4 = devolverElementosPrimerDiagonal(matriz2);
console.log(result4);
