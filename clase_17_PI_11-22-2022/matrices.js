// TODO: Matrices

let numeros = [
    [1,2,3,4], // Filas
    [5,6,7,8], // Filas
    [9,10,11,12] //FIlas
    //Columnas
]

// Una matriz es  un arreglo bidimensional.

console.table(numeros);
    // Recorrer Individualmentepor fila

    // Cuando recorro una fila le pido la longitud a esa fila

const recorrerPorFila = (matriz,fila) => {
    let array = []
    for (let i = 0; i < matriz[0].length; i++) {
        array.push(matriz[fila][i])
    }
    return array;
}

console.log(recorrerPorFila(numeros,0))

const recorrerColumna = (matriz,columna) => {
    let array = []
    for (let i = 0; i < matriz.length; i++) {
        array.push(matriz[i][columna])
    }
    return array;
}

console.log(recorrerColumna(numeros,1))

