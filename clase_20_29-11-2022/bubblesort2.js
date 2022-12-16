// Organizar objetos con el mismo proposito

let num = [1,67,3,56,10]

const bubbleAscendente = (array) => {
    let aux = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1-i; j++) {
            if (array[j] > array[j+1]) {
                aux = array[j+1]
                array[j+1] = array[j]
                array[j] = aux
            }
            
        }
        
    }

    return array;
}

console.log(bubbleAscendente(num))


const bubbleDescendente = (array) => {
    let aux = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1-i; j++) {
            if (array[j] < array[j+1]) {
                aux = array[j+1]
                array[j+1] = array[j]
                array[j] = aux
            }
            
        }
        
    }

    return array;
}

console.log(bubbleDescendente(num))


//Siempre tomar la fila de mas columna

let matriz = [
    [3 , 2 , 5],
    [1 , 5 , 4],
    [3 , 22 , 51]
]

const recorrerPorFila = (matriz , posicionFila) => {

    let newArray = new Array()

    for (let i = 0; i < matriz[posicionFila].length; i++) {
       newArray.push(matriz[posicionFila][i]) ;
       
    }

    return newArray;

}


console.log(recorrerPorFila(matriz,2))

const recorrerPorFilaCambiarFila = (matriz , posicionFila) => {
    

    for (let i = 0; i < matriz[posicionFila].length; i++) {
       matriz[posicionFila][i] = "Hola" ;
       
    }

    return matriz;

}


console.table(recorrerPorFilaCambiarFila(matriz,2))