let gastos = [
    [1,2,3,4,5,6,1],
    [1,2,3,4,5,6,71],
    [1,1,1,2,2,1,1],
    [1,2,3,4,5,6,17]
]

const gastototalTercerSemana = (gastos,semana) => {

    let acum = 0;

    let pos = semana - 1;

    for (let i = 0; i < gastos[pos].length; i++) {
        acum += gastos[pos][i]
    }

    return acum;
}

let resultado = gastototalTercerSemana(gastos,3);

console.log(resultado);


const gastototalDiaSabado = (gastos,dia) => {

    let acum = 0;

    let pos = dia - 1;

    for (let i = 0; i < gastos.length; i++) {
        acum += gastos[i][pos]
    }

    return acum;
}

let resultado2 = gastototalDiaSabado(gastos,6);

console.log(resultado2);

const totalGastado = (gastos) => {
    
    let acum = 0;
    for (let i = 0; i < gastos.length; i++) {
       for (let j = 0; j < gastos[i].length; j++) {
        if (gastos[i][j] !== undefined) {
            acum += gastos[i][j]
        }
        
       }
        
    }

    return acum;
}

let total = totalGastado(gastos);

console.log(total);

const diaConMasGasto = (matriz) => {
let arrayAux = new Array();
let acum = 0
let comparador = 0;
for (let i = 0; i < matriz[0].length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        acum += matriz[j][i]
        if (comparador < acum) {
            comparador = acum;
        }
    }  
    arrayAux.push(acum)
}

return comparador;
}

console.log(diaConMasGasto(gastos))

const diaConMasGasto2 = (matriz) => {
    let arrayAux = new Array();
    let acum = 0
    let comparador = 0;
    let semana = undefined;
    let dia = undefined;
    for (let i = 0; i < matriz[0].length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            acum = matriz[j][i]
            if (comparador < acum) {
                comparador = acum;
                semana = j;
                dia = i;
            }
        }  
        arrayAux.push(acum)
    }
    console.log(semana+1)
    console.log(dia+1)
    return comparador;
    }

    console.log(diaConMasGasto2(gastos))


    // Diagonal Principal y secundaria

    let matriz = [
        [10,2,3],
        [4,5,6],
        [11,8,9]
    ]

    const calcularDiagonalPrincipal = (matriz) => {
        let acum = 0;
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (j === i){
                    acum += matriz[i][j]
                }
            }
            
        }
        return acum;
    }

    console.log(calcularDiagonalPrincipal(matriz))


    const calcularDiagonalSecundaria = (matriz) => {
        let acum = 0;
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (j === matriz.length - 1 - i){
                    acum += matriz[i][j]
                }
            }
            
        }
        return acum;
    }

    console.log(calcularDiagonalSecundaria(matriz))

    const recorrerDiagonalPrincipalUnFor = (matriz) => {
        let acum = 0;

        for (let i = 0; i < matriz.length; i++) {
            acum += matriz[i][i];
            
        }

        return acum;
    }

    console.log(recorrerDiagonalPrincipalUnFor(matriz))

    const recorrerDiagonalSecundariaUnFor = (matriz) => {
        let acum = 0;

        for (let i = 0; i < matriz.length; i++) {
            acum += matriz[i][matriz.length-1-i];

            
        }

        return acum;
    }

    console.log(recorrerDiagonalSecundariaUnFor(matriz))


    const recorrerXPrincipalSecundaria = (matriz) => {
        let acum = 0;
        let acum2 = 0;
        let resultado = 0;
        for (let i = 0; i < matriz.length; i++) {
            acum += matriz[i][matriz.length-1-i];
            acum2 += matriz[i][i]
            
        }
        resultado = acum + acum2;

        return resultado;
    }

let resultadoTotal = recorrerXPrincipalSecundaria(matriz);

console.log(resultadoTotal);