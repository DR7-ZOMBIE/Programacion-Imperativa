// Algoritmo de bubble sort

//Ordenar de forma ascendente

let numeros = [1,2,5,2,76,45]

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

let resultado = bubbleAscendente(numeros)

console.log(resultado)

//Ordenar de froma descendente

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

let resultado2 = bubbleDescendente(numeros)

console.log(resultado2)


