// TODO: Obtener en un nuevo array las edades menores a 18.

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const nuevoArray = (array) => {
    let arrayAUX = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 18) {
            arrayAUX.push(array[i])
        }

    }

    return arrayAUX;
}

let resultado = nuevoArray(edades);

console.log(resultado)

//TODO: Obtener en un nuevo array las edades mayor o igual a 18.

const nuevoArrayMayor = (array) => {
    let arrayAUX = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 18) {
            arrayAUX.push(array[i])
        }

    }

    return arrayAUX;
}

let resultado2 = nuevoArrayMayor(edades);

console.log(resultado2)

//TODO: Obtener en un nuevo array las edades igual a 18.

const nuevoArrayIgual = (array) => {
    let arrayAUX = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 18) {
            arrayAUX.push(array[i])
        }

    }

    return arrayAUX;
}

let resultado3 = nuevoArrayIgual(edades);

console.log(resultado3)

//TODO: Obtener el menor.

const buscarMenor = (array) => {
    let aux = array[0];
    for (let i = 0; i < array.length; i++) {
        if (aux > array[i]) {
            aux = array[i]
        }


    }

    return aux
}

console.log(buscarMenor(edades))

//TODO: Obtener el mayor.


const buscarMayor = (array) => {
    let aux = array[0];
    for (let i = 0; i < array.length; i++) {
        if (aux < array[i]) {
            aux = array[i]
        }


    }

    return aux
}

console.log(buscarMayor(edades))


//TODO: Obtener el promedio de edades.

const promedioEdades = (array) => {

    let acum = 0;

    for (let i = 0; i < array.length; i++) {
        acum += array[i]

    }

    return acum / array.length;

}

let result = promedioEdades(edades);

console.log(result)

//TODO: Incrementar en 1 todas las edades.

const incrementarEdadEnUno = (array) => {

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }

    return array;
}

let result2 = incrementarEdadEnUno(edades);

console.log(result2);

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

const edadesMenorTreinta = (arrayCuentas) => {
    let arrayAUX = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular < 30) {
            arrayAUX.push(arrayCuentas[i])
        }
    }

    return arrayAUX;

}

console.log(edadesMenorTreinta(arrayCuentas))


const edadesMayorTreinta = (arrayCuentas) => {
    let arrayAUX = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular > 30) {
            arrayAUX.push(arrayCuentas[i])
        }
    }

    return arrayAUX;

}

console.log(edadesMayorTreinta(arrayCuentas))


const edadesMenorIgualTreinta = (arrayCuentas) => {
    let arrayAUX = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].edadTitular <= 30) {
            arrayAUX.push(arrayCuentas[i])
        }
    }

    return arrayAUX;

}

console.log(edadesMenorIgualTreinta(arrayCuentas))


const encontrarMenorEdad = (arrayCuentas) => {
    let aux = arrayCuentas[0].edadTitular
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (aux > arrayCuentas[i].edadTitular) {
            aux = arrayCuentas[i].edadTitular;
        }
    }
    return aux;
}

console.log(encontrarMenorEdad(arrayCuentas))

const buscarCuenta = (arrayCuentas, menorEdad) => {
    menorEdad = encontrarMenorEdad(arrayCuentas)
    console.log(menorEdad)
    let i = 0;
    while (i < arrayCuentas.length && arrayCuentas[i].edadTitular !== menorEdad) {
        i++;
    } if (i < arrayCuentas.length) {
        return arrayCuentas[i]
    } else {
        return `No existe la cuenta con esa edadTitular`;
    }
}

console.log(buscarCuenta(arrayCuentas, encontrarMenorEdad(arrayCuentas)))

const estaHabilitada = (arrayCuentas) => {
    let arrayAUX = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada === true) {
            arrayAUX.push(arrayCuentas[i])
        }
    }

    return arrayAUX;

}

console.log(estaHabilitada(arrayCuentas))

const estaDesahabilitada = (arrayCuentas) => {
    let arrayAux = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada === false) {
            arrayAux.push(arrayCuentas[i])
        }

    }

    return arrayAux;
}

console.log(estaDesahabilitada(arrayCuentas));

const menorSaldo = (arrayCuentas) => {
    let aux = arrayCuentas[0].saldo;
    console.log(aux)

    for (let i = 0; i < arrayCuentas.length; i++) {
        if (aux > arrayCuentas[i].saldo) {
            aux = arrayCuentas[i].saldo
        }

    }

    return aux;
}

console.log(menorSaldo(arrayCuentas))

const buscarCuentaMenorSaldo = (arrayCuentas, menorSaldo) => {

    let i = 0;

    while (i < arrayCuentas.length && arrayCuentas[i].saldo !== menorSaldo) {
        i++;
    }
    if (i < arrayCuentas.length) {
        return arrayCuentas[i]
    } else {
        return `No existe la cuenta con ese saldo`;

    }
}

console.log(buscarCuentaMenorSaldo(arrayCuentas, menorSaldo(arrayCuentas)))



const mayorSaldo = (arrayCuentas) => {
    let aux = arrayCuentas[0].saldo;
    console.log(aux)

    for (let i = 0; i < arrayCuentas.length; i++) {
        if (aux < arrayCuentas[i].saldo) {
            aux = arrayCuentas[i].saldo
        }

    }

    return aux;
}

console.log(mayorSaldo(arrayCuentas))

const buscarCuentaMayorSaldo = (arrayCuentas, mayorSaldo) => {

    let i = 0;

    while (i < arrayCuentas.length && arrayCuentas[i].saldo !== mayorSaldo) {
        i++;
    }
    if (i < arrayCuentas.length) {
        return arrayCuentas[i]
    } else {
        return `No existe la cuenta con ese saldo`;

    }
}

console.log(buscarCuentaMayorSaldo(arrayCuentas, mayorSaldo(arrayCuentas)))


// ! Extras:

// TODO: Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y agregue a cada elemento 
// TODO: (objeto literal) una propiedad llamada id con un valor Numérico.

const generarID = (arrayCuentas) => {
    let id = 0;
    for (let i = 0; i < arrayCuentas.length; i++) {
        arrayCuentas[i].id = i;

    }

    return arrayCuentas;
}

console.log(generarID(arrayCuentas))

// TODO: Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, 
// TODO: en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null


const buscarPorID = (arrayCuentas, id) => {
    let i = 0;

    while (i < arrayCuentas.length && arrayCuentas[i].id !== id) {
        i++;
    }
    if (i < arrayCuentas.length) {
        return arrayCuentas[i]

    } else {
        throw new Error(`No existe la cuenta con id ${id}`);
    }
}

console.log(buscarPorID(arrayCuentas, 1))

//TODO: Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), 
//TODO: deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro

const filtrarPorSaldos = (arrayCuentas, saldo) => {
    let arrayAUX = []

    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].saldo < saldo) {
            arrayAUX.push(arrayCuentas[i])
        }
    }

    return arrayAUX;

}

console.log(filtrarPorSaldos(arrayCuentas, 1700))

// TODO: Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
// TODO: Reutilizando la función  buscarPorId 

const incrementarSaldo = (arrayCuentas, id, saldo) => {
    let arrayAUX = buscarPorID(arrayCuentas, id)
    if (arrayAUX !== null) {
        arrayAUX.saldo = arrayAUX.saldo + saldo;
        return arrayAUX;

    } else {
        throw new Error(`La cuenta no existe`)
    }

}

console.log(incrementarSaldo(arrayCuentas, 5, 10))

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numeros = {
    pares: [],
    impares: []
}

const llenarNumerosConArray = arrayNumeros => {

    for (let i = 0; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] % 2 === 0) {
            numeros.pares.push(arrayNumeros[i])
        }else{
            numeros.impares.push(arrayNumeros[i])
        }

    }

    return numeros;
}

console.log(llenarNumerosConArray(arrayNumeros))




