// * Programacion Funcional --> Que queremos o que necesitamos.


// ! Todo son metodos de los Arrays:

// Metodo map: devuelve un array con la misma longitud modificando 
// el valor inhterno.

let numeros = [1, 5, 2, 4]

let arrayModificado = numeros.map((num) => num * 10)

console.log(arrayModificado)

// Metodo filter: Devuleve un array con la longitud de lo que se cumpla
// en la condicion

let filtrar = numeros.filter((numero) => numero >= 4)

console.log(filtrar)

// Metodo find retorna el elemento que se esta buscando

let buscar = numeros.find((array) => array === 4)

console.log(buscar)

// Metodo reduce es un acumulador

let acum = numeros.reduce((accum, numero) => accum + numero)

console.log(acum)

// Metodo foreach imprime un array pero no lo retorna

let imprimir = numeros.forEach((array) => {
    console.log(array)
})

// Metodo Sort Ordena el array de mayor a menor o vicerversa

let ordenandoMayorMenor = numeros.sort((a, b) => b - a)

console.log(ordenandoMayorMenor)

let ordenandoMenorMayor = numeros.sort((a, b) => a - b)

console.log(ordenandoMenorMayor)


