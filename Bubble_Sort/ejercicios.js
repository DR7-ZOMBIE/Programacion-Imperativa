// 1. Crear una función que imprima todos los dígitos decimales, del 0 al 9,
// usando un ciclo For.

const imprimirDecimalesDelCeroAlNueve = () => {

    for (let i = 0; i <= 9; i+= 1/10) {
        console.log(i)
    }

}

let resultado = imprimirDecimalesDelCeroAlNueve();


// 2. Crear una función que imprima los números entre el 5 y el 20, saltando de
// tres en tres.

const imprimirDelTresEnTres = () => {
    for (let i = 8; i < 20; i+= 3) {
        console.log(i)
    }
}

let resultado2 = imprimirDelTresEnTres();


// 3. Crear una función que imprima la sumatoria de todos los números entre el
// 0 y el 100.

const sumatoriaDelCeroAlCien = () => {

    let acum = 0;

    for (let i = 0; i <= 100; i++) {
       acum += i;
       console.log(acum)
        
    }
}

let resultado3 = sumatoriaDelCeroAlCien();


// 4. Crear una función que reciba un string y luego imprimir la cantidad de
// vocales que se encuentran en dicha frase.

let palabra = "aeiou";

const buscarVocales = (palabra) => {
    let cont = 0;
    palabra = palabra.toLowerCase();
    console.log(palabra)
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u') {
        cont++;
    }
    }
  return cont
}

console.log(buscarVocales(palabra))


// 5. Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.

let array = [1,2,3,4,5];

const invertirLista = (array) => {
    let array2 = new Array();

    for (let i = array.length-1; i >= 0; i--) {
        array2.push(array[i])
        
    }

    return array2;
}

console.log(invertirLista(array))

// 6. Realizar una función que escriba una pirámide del 1 al 30 de la siguiente
// forma :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// .......

const piramide = () => {
    let matriz = new Array();
    for (let i = 0; i <= 30; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i)
            matriz.push(i)
        }
    }
   return matriz;
}

console.table(piramide())

const imprimirEscalones = (piramide) => {
    for (let i = 0; i < piramide.length; i++) {
        if(piramide[i] === piramide[i + 1]){
            piramide.concat(',',piramide[i + 1])
        }
        
    }

    return piramide
}

console.table(imprimirEscalones(piramide()))