// Ejercicio 1
// Dado un array con los datos de una encuesta realizada sobre los temas musicales
// más populares —lo que se tiene en el array son objetos definidos con el nombre de
// un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
// temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
// cada uno.
// Los votos obtenidos están desordenados.
// Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
// a) Resolverlo aplicando búsqueda lineal.
// b) Resolverlo aplicando búsqueda binaria.

let datosMusicales = [
    {
        nombre: "Valio loa pena",
        cantidadVotos: 45
    },
    {
        nombre: "Gangsta Paradise",
        cantidadVotos: 307
    },
    {
        nombre: "NachoNacho",
        cantidadVotos: 76
    },
    {
        nombre: "Yea",
        cantidadVotos: 800
    },
    {
        nombre: "Breve",
        cantidadVotos: 450
    }
]

// La busqueda lineal no requiere que este ordenado

let busquedaLinealPorTema = (datosMusicales, nombreCancion) => {
    let i = 0;
    while (i < datosMusicales.length && datosMusicales[i].nombre !== nombreCancion) {
        i++;
    } if (i < datosMusicales.length) {
        return datosMusicales[i]
    } else {
        throw new Error(`El nombre buscado no existe`)
    }

}

let result = busquedaLinealPorTema(datosMusicales, "Breve")

console.log(result)

// Primero debemos ordenarlo para despues hacer la busqueda binaria

let ordenamientoPorCantidadDeVotos = (datosMusicales) => {
    let aux = 0;
    for (let i = 0; i < datosMusicales.length; i++) {
        for (let j = 0; j < datosMusicales.length - 1 - i; j++) {
            if (datosMusicales[j].cantidadVotos < datosMusicales[j + 1].cantidadVotos) {
                aux = datosMusicales[j].cantidadVotos
                datosMusicales[j].cantidadVotos = datosMusicales[j + 1].cantidadVotos
                datosMusicales[j + 1].cantidadVotos = aux
            }

        }
    }

    return datosMusicales
}

let arrayOrdenado1 = ordenamientoPorCantidadDeVotos(datosMusicales);

console.log(arrayOrdenado1)

let busquedaBinarySearch = (array, left, right, texto) => {

    if (left > right) return false

    let mitad = Math.floor((left + right) / 2)

    if (array[mitad].cantidadVotos === texto) return array[mitad]

    if (array[mitad].cantidadVotos > texto) {
        return busquedaBinarySearch(array, mitad + 1, right, texto)
    } else {
        return busquedaBinarySearch(array, left, mitad - 1, texto)
    }


}


console.log(busquedaBinarySearch(datosMusicales, 0, datosMusicales.length - 1, 800))

let arrayPersonas = [
    {
        nombre: "Tito",
        edad: 22
    },
    {
        id: 6,
        nombre: "Marina",
        edad: 76
    },
    {
        id: 7,
        nombre: "Susy",
        edad: 35
    },
    {
        id: 8,
        nombre: "John",
        edad: 25
    },
]


// Realizar lo siguiente:

// Ordenar la colección de menor a mayor utilizando bubble sort.

let ordenamientoPorEdad = (arrayPersonas) => {
    let aux = 0;
    for (let i = 0; i < arrayPersonas.length; i++) {
        for (let j = 0; j < arrayPersonas.length - 1 - i; j++) {
            if (arrayPersonas[j].edad < arrayPersonas[j + 1].edad) {
                aux = arrayPersonas[j].edad
                arrayPersonas[j].edad = arrayPersonas[j + 1].edad
                arrayPersonas[j + 1].edad = aux
            }

        }
    }

    return arrayPersonas
}

let arrayOrdenado2 = ordenamientoPorEdad(arrayPersonas);

console.log(arrayOrdenado2)

// Crear una función buscarNombre que recibe como parámetros la colección de personas y una edad, y como resultado deberá imprimir por consola el nombre correspondiente a la persona cuya edad fue pasada como parámetro.
// Para realizar la búsqueda en la colección de personas, utilizar el algoritmo de búsqueda binaria.

let busquedaBinarySearch2 = (array, left, right, texto) => {

    if (left > right) return false

    let mitad = Math.floor((left + right) / 2)

    if (array[mitad].edad === texto) return array[mitad]

    if (array[mitad].edad > texto) {
        return busquedaBinarySearch2(array, mitad + 1, right, texto)
    } else {
        return busquedaBinarySearch2(array, left, mitad - 1, texto)
    }


}

console.log(busquedaBinarySearch2(arrayOrdenado2,0,arrayOrdenado2.length-1,22))
