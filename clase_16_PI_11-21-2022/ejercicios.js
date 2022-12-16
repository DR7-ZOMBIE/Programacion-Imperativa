// 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”. 


const esModuloTresVersiones = () => {
    let arrayAux = []
    for (let i = 0; i <= 100; i++) {
        arrayAux.push(i)
        if(arrayAux[i] % 3 === 0 && arrayAux[i] % 5 === 0 || arrayAux[i] % 15 === 0){
            arrayAux[i] = "fizzbuzz"
        }

        if (arrayAux[i] % 3 === 0) {
            arrayAux[i] = "fizz"
        }else if(arrayAux[i] % 5 === 0){
            arrayAux[i] = "buzz"
        }
    }

    return arrayAux;
}

console.log(esModuloTresVersiones())

// 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;

let array = [1,4,5,6,7,8,9,10]

const busquedaNumero = (array, indice) => {
    if (array[indice] != null) {
        return array[indice]
    }else{
        throw new Error("El indice no sobrepasa el array")
    }
}

console.log(busquedaNumero(array, 2))

// 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.

const mesDigitoSwitch = (mesDigito) => {

    switch  (mesDigito) {
        case 1:
            return 31
            case 2:
                return 29;
                case 3:
                    return 31
                    case 4:
                        return 30
                        case 5:
                            return 31
                            case 6:
                                return 30
                                case 7:
                                    return 31
                                    case 8:
                                        return 31
                                        case 9:
                                            return 30
                                            case 10:
                                                return 31
                                                case 11:
                                                    return 30
                                                    case 12:
                                                        return 31
        default:
            throw new Error(`Solo existen 12 meses los digitos van del 1 al 12`);
    }
}


console.log(mesDigitoSwitch(1))



// 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.

const invertirNumero = (numero) => {
    let aux = []
    for (let i = numero.length-1; i >= 0; i--) {
        aux.push(numero[i])
    }
    console.log(aux)
    return +aux.join("");
}

console.log(invertirNumero("3245"))

let num = 3;


// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

let array2 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100,17,8];

const encontrarRepetidos = (array) => {
    let aux = array[0];
    let repetidos = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (aux === array[j]) {
                repetidos.push(aux)
                console.log(aux)
            }
        }

        aux = array[i];
    }

    return repetidos;
}

console.log(encontrarRepetidos(array2))