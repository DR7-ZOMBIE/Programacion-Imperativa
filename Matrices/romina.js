

let array = [1,2,3];

//2x3

let matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

let posicion = matriz[2][2];

console.log(posicion)

const recorrerPorFila = (matriz) => {
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j])
        }
    }
}

console.log(recorrerPorFila(matriz))



const recorrerPorColumna = (matriz) => {
    
    for (let i = 0; i < matriz[0].length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            console.log(matriz[j][i])
        }
    }
}

console.log(recorrerPorColumna(matriz))

// Ejercicio

let matrizGastos = [
    [56,78,14,12,78,11,12,10],
    [56,78,14,12,78,11,12,11],
    [56,78,14,12,78,11,12,12],
    [56,78,14,12,78,11,12,13]
]

// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera. 

const semanas = (numero) => {
    switch (numero) {
        case 0:
            return `Semana 1`;
            case 1:
                return `Semana 2`;
                case 2:
                    return `Semana 3`;
                    case 3:
                        return `Semana 4`;
        default:
            return `No existe la semana`;
    }
}

console.log(semanas(5))

const dias = (numero) => {
    switch (numero) {
        case 0:
            return `Lunes`
            case 1:
                return `Martes`
                case 2:
                    return `Miercoles`
                    case 3:
                        return `Jueves`
                        case 4:
                            return `Viernes`
                            case 5:
                                return `Sabado`
                                case 6:
                                    return `Domingo`
        default:
            return `No existe la día`;
    }
}

// a)  Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0. \

const gastoPorSemanaEspecifico = (matrizGastos,semanaDigito) => {
    let acum = 0;
    for (let i = 0; i < matrizGastos[0].length; i++) {
            acum += matrizGastos[semanaDigito][i]
            
    }

    return `sus gasto fue en la ${semanas(semanaDigito)} y su valor es de : ${acum}`;
}

console.log(gastoPorSemanaEspecifico(matrizGastos,2))

// b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.

const gastoPorDiaEspecifico = (matrizGastos,diaDigito) => {
    let acum = 0;
    for (let i = 0; i < matrizGastos.length; i++) {
            acum += matrizGastos[i][diaDigito]
            
    }

    return `sus gasto fue en el dia ${dias(diaDigito)} y su valor es de : ${acum}`;
}

console.log(gastoPorDiaEspecifico(matrizGastos,0))


// c) Por último, es necesario tener el total de gastos realizados en el mes.
// Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?
// Opcional

const gastoTotalPorMes = (matrizGastos) => {
    let acum = 0;

    for (let i = 0; i < matrizGastos.length; i++) {
        for (let j = 0; j < matrizGastos[i].length; j++) {
            acum += matrizGastos[i][j]
            
        }
        
    }

    return `sus gasto fue en el mes ${acum}`;
    
}

console.log(gastoTotalPorMes(matrizGastos));

// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
// Posibles matrices para comprobar los resultados. 


const GastoTotalPorSemana = (matrizGastos) => {
    let arrayAux = [];
    let acum = 0;

    for (let i = 0; i < matrizGastos.length; i++) {
        acum = 0;
       for (let j = 0; j < matrizGastos[i].length; j++) {
        acum += matrizGastos[i][j]
       }
       arrayAux.push(acum)
        
    }

    return arrayAux;
}

console.log(GastoTotalPorSemana(matrizGastos))

const mayorGastoPorSemana = (arrayGastos) => {
    let aux = 0;
    let cont = 0;
    for (let i = 0; i < arrayGastos.length; i++) {
        if (aux < arrayGastos[i]) {
            aux = arrayGastos[i]
            cont = i;
        }
       
        
    }

    console.log(cont)

    return `El gastor mayor fue en la ${semanas(cont)} y su gasto fue ${aux}`
}

console.log(mayorGastoPorSemana(GastoTotalPorSemana(matrizGastos)));

const GastoTotalPorDia = (matrizGastos) => {
    let arrayAux = [];
    let acum = 0;

    for (let i = 0; i < matrizGastos[0].length; i++) {
        acum = 0;
       for (let j = 0; j < matrizGastos.length; j++) {
        acum += matrizGastos[j][i]
       }
       arrayAux.push(acum)
        
    }

    return arrayAux;
}

console.log(GastoTotalPorDia(matrizGastos))

const mayorGastoPorDia = (arrayGastos) => {
    let aux = 0;
    let cont = 0;
    for (let i = 0; i < arrayGastos.length; i++) {
        if (aux < arrayGastos[i]) {
            aux = arrayGastos[i]
            cont = i;
        }
        
        
    }

    return `El gastor mayor fue en la ${dias(cont)} y su gasto fue ${aux}`
}

console.log(mayorGastoPorDia(GastoTotalPorDia(matrizGastos)));
