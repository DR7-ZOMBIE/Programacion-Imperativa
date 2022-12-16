// 1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de menor a mayor o no. 
// si están ordenados retornar true
// caso contrario retorna false
// ejemplos de arrays



let array1 = [4,9,2,5,6,7,1,2] // false

let array2 = [1,2,3,4,5,6,7,8] // true

const verificarMenorAMayor = (array) => {
  let i = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1] ){
      return false
    }
    
  }

  return true;
}

let result1 = verificarMenorAMayor(array1)
console.log(result1)

// 1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de mayor a menor o no. 
// si están ordenados retornar true
// caso contrario retorna false
// ejemplos de arrays



let array3 = [4,9,2,5,6,7,1,2] // false

let array4 = [1,2,3,4,5,6,7,8] // false

let array5 = [10,9,8,7,6,5] // true

const verificarMayorAMenor = (array) => {
  let i = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i+1] ){
      return false
    }
    
  }

  return true;
}

let result2 = verificarMayorAMenor(array4)
console.log(result2)


// 2. Desarrollar una función que genere una matriz, deberá recibir por parámetros la cantidad de filas y columnas y retornar con 
// valores secuenciales numéricos.
 
const generarMatriz = (filas,columnas) => {
    let matriz = new Array()
    let cont = 0;
    for (let i = 0; i < filas; i++) {
      matriz[i] = new Array()
      for (let j = 0; j < columnas; j++) {
        matriz[i][j] = cont++
        
      }
      
    }

    return matriz;
}

let result6 = generarMatriz(5,5)

console.log(result6)
 
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
// realice un ordenamiento de forma ascendente

const ordenAscendenteLegajo = (array) => {
  let aux = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1-i; j++) {
      if (array[j].legajo > array[j+1].legajo) {
        aux = array[j+1]
        array[j+1] = array[j]
        array[j] = aux
      }
      
    }
    
  }

  return array
}

let arrayAscendente = ordenAscendenteLegajo(personas);

console.log(arrayAscendente)

// Desarrollar una función llamada orderDescLegajo que reciba por parámetro él array de personas y 
// realice un ordenamiento de forma descendente
// Pensar de qué forma se puede realizar los dos ítems anteriores en una sola función

const ordenDescendenteLegajo = (array) => {
  let aux = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1-i; j++) {
      if (array[j].legajo < array[j+1].legajo) {
        aux = array[j+1]
        array[j+1] = array[j]
        array[j] = aux
      }
      
    }
    
  }

  return array
}

let arrayDecscendente = ordenDescendenteLegajo(personas);

console.log(arrayDecscendente)

// Teniendo 3 arrays:

fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]


// Realiza las siguientes tareas:
// Crea una matriz con esta forma una matriz:

const generarMatriz2 = (fila1,fila2,fila3) => {
  let matriz = new Array()
  
  matriz.push(fila1,fila2,fila3)

  return matriz
  
}

let genMatriz = generarMatriz2(fila1,fila2,fila3);

console.log(genMatriz)

// Luego, a partir de esta matriz, desarrollar una función que reciba la matriz por parámetro y retorne lo solicitado:

// Función que reciba por parámetro la fila y retornar la suma de la misma.

const calcularSumaFila = (genMatriz , fila) => {
  
  let acum = 0;

  for (let i = 0; i < genMatriz[fila].length; i++) {
   
     acum += genMatriz[fila][i]

  }

  return acum
}

let sumFila = calcularSumaFila(genMatriz,1)

console.log(sumFila)

// Función que retorne en un array la suma de las diagonales [15 , 15], sumando él centro las dos veces

const sumDiagonales = (genMatriz) => {
  
  let diagonalPrincipal = 0;
  let diagonalSecundaria = 0;
  let arrayAux = new Array()

  for (let i = 0; i < genMatriz.length; i++) {
    diagonalPrincipal += genMatriz[i][i]
    diagonalSecundaria += genMatriz[i][genMatriz.length-1-i]
    
  }

  arrayAux.push(diagonalPrincipal,diagonalSecundaria)

  return arrayAux
}

let sumDiag = sumDiagonales(genMatriz);
console.log(sumDiag)

// Función que retorne en un array los elementos pares ejemplo [4, 2, 8, 6]

const elementosParesMatriz = (genMatriz) => {

  let arrayAux = []

  for (let i = 0; i < genMatriz.length; i++) {
   for (let j = 0; j < genMatriz[i].length; j++) {
   if (genMatriz[i][j] % 2 === 0) {
    arrayAux.push(genMatriz[i][j])
   }
    
   }
    
  }

  return arrayAux
}

let pares = elementosParesMatriz(genMatriz);

console.log(pares)

// Función que retorne en un array los elementos mayores a 5


const elementosMayorCinco = (genMatriz) => {

  let arrayAux = []

  for (let i = 0; i < genMatriz.length; i++) {
   for (let j = 0; j < genMatriz[i].length; j++) {
   if (genMatriz[i][j] > 5) {
    arrayAux.push(genMatriz[i][j])
   }
    
   }
    
  }

  return arrayAux
}

let mayorACinco = elementosMayorCinco(genMatriz);

console.log(mayorACinco)


// Función que retorne un objeto literal con dos propiedades
// pares : [4, 2, 8, 6], // array de pares
// impares : [9, 3, 5, 7, 1], // array de impares

const elementosImparesMatriz = (genMatriz) => {

  let arrayAux = []

  for (let i = 0; i < genMatriz.length; i++) {
   for (let j = 0; j < genMatriz[i].length; j++) {
   if (genMatriz[i][j] % 2 !== 0) {
    arrayAux.push(genMatriz[i][j])
   }
    
   }
    
  }

  return arrayAux
}

let Impares = elementosImparesMatriz(genMatriz);

console.log(Impares)




const objetoParesImpares = (arrayPares,arrayImpares) => {
  let objeto = {}

  objeto.pares = arrayPares;
  objeto.impares = arrayImpares;

  return objeto;
}

let objeto = objetoParesImpares(elementosParesMatriz(genMatriz),elementosImparesMatriz(genMatriz))

console.log(objeto)