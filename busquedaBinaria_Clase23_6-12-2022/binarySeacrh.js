// ANCHOR Algoritmo de busqueda binaria


let numeros = [1,4,12,3,17]

// Programacion Funcional

let indice = numeros.indexOf(12)


// Busqueda Lineal

const buscarNumero = (array,numero) => {
    let i = 0;
    while (i<array.length && array[i] !== numero) {
        i++;
    }if(i < array.length){
        return i
    }else{
        return `El numero buscado no existe`
    }
}

let result = buscarNumero(numeros,12)

console.log(result)

// Busqueda Binaria

let numeros2 = [1,2,3,4,5,6]

const buscarBinarySeacrh = (array,numero) => {

    let left = 0
    let right = array.length-1
    

    while(left <= right){
        let mitad = Math.floor((left + right)/2)
        
        if(array[mitad] === numero) return array[mitad]; 
        
        if(array[mitad] < numero){
            left = mitad + 1
        }else{
            right = mitad -1
        }
    
    }

    return null;

}

let resultado2 = buscarBinarySeacrh(numeros2,6)

console.log(resultado2)

const buscarBinarySeacrhRecursivo = (array,left,right,numero) => {

        if(left > right) return false

        let mitad = Math.floor((left + right)/2)
        
        if(array[mitad] === numero) return array[mitad]; 
        
        if(array[mitad] < numero){
            return buscarBinarySeacrhRecursivo(array,mitad+1,right,numero)
        }else{
            return buscarBinarySeacrhRecursivo(array,left,mitad-1,numero)
        }

    
    }



let resultado3 = buscarBinarySeacrhRecursivo(numeros2,0,numeros2.length,5)

console.log(resultado3)

