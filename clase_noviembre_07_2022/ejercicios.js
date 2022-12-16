// Acceder a los elementos especificos de un array

const notas = [1,2,7,1,4]

const accedePosicionEspecifica = (array,valor) => {
    if (array[valor] !== null) {
        return array[valor];
    }else{
        return `La posicion a la que esta tratando de acceder no existe`
    }
}

console.log(accedePosicionEspecifica(notas,2))

const modificarElementosArray = (array,valor,nuevoValor) => {
    if (array[valor] !== null) {
        array[valor] = nuevoValor
        return array;
    }else{
        return `La posicion a la que esta tratando de acceder no existe`
    }
}

console.log(modificarElementosArray(notas,2,4))

const agregarElementosArrayPila = (array,elemento) => {
    array.push(elemento);
    return array
}

console.log(agregarElementosArrayPila(notas,100))

const agregarElementosArrayCola = (array,elemento) => {
    array.unshift(elemento);
    return array
}

console.log(agregarElementosArrayCola(notas,89))

const extraerElementosArray = (array,elemento) => {
    let aux = array[elemento]
    console.log(aux)
    array[elemento] = null;
    for (let index = 0; index < array.length; index++) {
        if (array[index] === null) {
            array[index] = array[array.length-1]
            array.pop();
        } 
    }
    console.log(array)
    return array;
}

console.log(extraerElementosArray(notas,0))


const notas2 = [89,89,89,1,89,89,89]

const compararArreglosEncontrarElementoIgual = (array , array2) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array[i] === array2[j]) {
                return true;
            }
        }
        
    }
}

console.log(compararArreglosEncontrarElementoIgual(notas,notas2))

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
"Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])

let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
console.log(arrayAleatorio[arrayAleatorio.length -1 ])

//Terminar ejercicio completos.

const peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

const mostrarPeliculas = (array) => {
    return array;
}

console.log(mostrarPeliculas(peliculas))

const pasarMayuscula = (array) => {
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toUpperCase();
    }

    return array;
}

console.log(pasarMayuscula(peliculas))

const peliculas2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

const agregarDosArreglosEnUno = (array,array2) => {
    let arregloAux = []
    for (let index = 0; index < (array.length)+(array2.length); index++) {
        arregloAux[index] = array[index];
        if (arregloAux.length>array.length) {
            arregloAux[index] = array2[index-array.length]
        }
    }

    return pasarMayuscula(arregloAux);
}

console.log(agregarDosArreglosEnUno(peliculas,peliculas2))

const corregirUltimaPosicion = (array,valor) => {
    array[array.length-1] = valor;
    return pasarMayuscula(array);
}

console.log(corregirUltimaPosicion(agregarDosArreglosEnUno(peliculas,peliculas2),"Papi"))

const asiaScores = [8, 10, 6];

const euroScores = [8, 10, 6];

const compararPosicionPorPosicion = (array,array2) => {
    let flag = false;
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== array2[index] ) {
            flag = false;
        }else{
            flag = !flag;
        }
    } 
    return flag;
}

console.log(compararPosicionPorPosicion(asiaScores,euroScores))

const arrayInverso = (array) => {
    const arrayAux = [];
    for (let index = array.length-1; index >= 0; index--) {
        console.log(index)
        arrayAux.push(array[index])
    }
    return arrayAux;
}

console.log(arrayInverso(peliculas))

const numeros = [1,2,3,12,3,1]
const summaArray = (array) => {
    let acum = 0;
    for (let index = 0; index < array.length; index++) {
        acum += array[index];
    }

    return acum;
}

console.log(summaArray(numeros))

const arrayExmaple = ["h","o","l","a"];

const arrayJoin = (array) => {
    let aux = "";
   for (let index = 0; index < array.length; index++) {
    aux += array[index];
   }
   return aux;
}

console.log(arrayJoin(arrayExmaple))