let matriz = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]];

const recorrerMatrizPorFila = (matriz, fila) => {
    let result = [];
    for (let i = 0; i < matriz[fila].length; i++) {
        result.push(matriz[fila][i]);

    }

    return result;
}

console.log(recorrerMatrizPorFila(matriz, 2))

const recorrerMatrizPorColumna = (matriz, columna) => {
    let result = [];
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz.length)
        result.push(matriz[i][columna]);

    }
    return result;
}

console.log(recorrerMatrizPorColumna(matriz, 0))

const recorrerMatrizPorFilaCompleta = (matriz) => {
    let result = [];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            result.push(matriz[i][j])
        }

    }

    return result;

}

console.log(recorrerMatrizPorFilaCompleta(matriz))

const recorrerMatrizPorColumnaCompleta = (matriz) => {
    let result = [];

    for (let i = 0; i < matriz[0].length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            result.push(matriz[j][i])
        }

    }

    return result;

}

console.log(recorrerMatrizPorColumnaCompleta(matriz))

let gastoSemanaDia = [
    [1, 2, 3, 4, 5, 6, 7],
    [12, 2, 3, 4, 5, 6, 7],
    [20, 2, 3, 4, 5, 6, 7],
    [50, 2, 3, 4, 5, 6, 7],

]


// TODO: a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, 
// TODO: es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan 
// TODO: siempre en posición 0. 

const gastosPorSemana = (matriz, semana) => {
    let result = 0;
    for (let i = 0; i < matriz[0].length; i++) {
        result += matriz[semana][i]
    }

    return result;

}

console.log(gastosPorSemana(gastoSemanaDia, 3))

// TODO: b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular,
// TODO: por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan
// TODO: en 0.

const gastoPorDia = (matriz, dia) => {

    let result = 0;

    for (let i = 0; i < matriz.length; i++) {
        result += matriz[i][dia]

    }

    return result;
}

console.log(gastoPorDia(gastoSemanaDia, 1))

// * c) Por último, es necesario tener el total de gastos realizados en el mes.
// * Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?

const gastosTotalesPorMes = (matriz) => {
    let result = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {

            result += matriz[i][j];


        }
    }

    return result;
}

console.log(gastosTotalesPorMes(gastoSemanaDia))

const asignarSemana = (digito) => {
    switch (digito) {
        case 1:
            return `Semana ${digito}`;
        case 2:
            return `Semana ${digito}`;
        case 3:
            return `Semana ${digito}`;
        case 4:
            return `Semana ${digito}`;
        default:
            return `No existe la semana `
    }
}

console.log(asignarSemana(1))

const asignarDia = (digito) => {
    switch (digito) {
        case 1:
            return `Lunes`;
        case 2:
            return `Martes`;
        case 3:
            return `Miercoles`;
        case 4:
            return `Jueves`;
        case 5:
            return `Viernes`;
        case 6:
            return `Sabado`;
        case 7:
            return `Domingo`;

        default:
            return `No existe el dia `
    }
}

console.log(asignarDia(7))

const gastosPorSemanaEnArray = (matriz) => {
    let result = [];
    let acum = 0;
    for (let i = 0; i < matriz.length; i++) {
        acum = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            acum += matriz[i][j];
        }
        result[i] = acum;
    }

    return result;
}

console.log(gastosPorSemanaEnArray(gastoSemanaDia))

const encontrarElmayorPorSemana = (array) => {
    let result = 0;
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (result < array[i]) {
            result = array[i]
            cont += 1;
        }
    }

    return `El mayor gasto es en la ${asignarSemana(cont)} y su resultado es ${result}`;

}

console.log(encontrarElmayorPorSemana(gastosPorSemanaEnArray(gastoSemanaDia)))

const gastosDiaEnArray = (matriz) => {
    let result = [];
    let acum = 0;
    for (let i = 0; i < matriz[0].length; i++) {
        acum = 0;
        for (let j = 0; j < matriz.length; j++) {
            acum += matriz[j][i];
        }
        result[i] = acum;
    }

    return result;
}

console.log(gastosDiaEnArray(gastoSemanaDia))

const encontrarElmayorPorDia = (array) => {
    let result = 0;
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (result < array[i]) {
            result = array[i]
            cont += 1;
        }
    }

    return `El mayor gasto es en el ${asignarDia(cont)} y el resultado es: ${result}`;

}

console.log(encontrarElmayorPorDia(gastosDiaEnArray(gastoSemanaDia)))

