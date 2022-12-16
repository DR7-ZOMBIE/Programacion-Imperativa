const arrayCuentas = [
    {
        nombre:"Den",
        saldo:10
    },
    {
        nombre:"Cami",
        saldo:30
    },
    {
        nombre:"Feli",
        saldo:76
    },
    {
        nombre:"Carlos",
        saldo:120
    }
]


const verificarAscendente = (arrayCuentas) => {

    let i = 0
   
    if(i < arrayCuentas.lenght && arrayCuentas[i].saldo < arrayCuentas[i+1].saldo){
        i++;
    }
    if (i<arrayCuentas.lenght) {
        return true;
    }else{
        return `no esta organizado de forma ascendente`
    }
}

console.log(verificarAscendente(arrayCuentas))


const verificarAscendente2 = (arrayCuentas) => {

   for (let i = 0; i < arrayCuentas.length; i++) {
    for (let j = 0; j < arrayCuentas.length-1-i; j++) {
        if (arrayCuentas[j].saldo > arrayCuentas[j+1].saldo) {
            return false
        }
    }
    
   }

   return true
}

console.log(verificarAscendente2(arrayCuentas))

let matriz = [
    [2,4,3],
    [3,1,5],
    [8,4,9]
]

const guardarFilaMatrizArray = (matriz,fila) => {
    let arrayAux = new Array()
    for (let i = 0; i < matriz[fila].length; i++) {
        arrayAux.push(matriz[fila][i])
        
    }

    return arrayAux;
}

console.log(guardarFilaMatrizArray(matriz,1))

const modificarColumnaMatriz = (matriz,columna) => {
   
    for (let i = 0; i < matriz.length; i++) {
        matriz[i][columna] = "Hola"
        
    }

    return matriz
}

console.table(modificarColumnaMatriz(matriz,0))

let matriz2 = [
    [2,4,3],
    [3,1,5],
    [8,4,9]
]


const multiplicarDiagonalPrincipal = (matriz) => {
    let aux = matriz[0][0];
    for (let i = 1; i < matriz.length; i++) {
        aux *= matriz[i][i]
        
    }

    return aux
}

console.log(multiplicarDiagonalPrincipal(matriz2))

const sumarDiagonalSecundaria = (matriz) => {
    let aux = 0;
    for (let i = 0; i < matriz.length; i++) {
        aux += matriz[i][matriz2.length-1-i]
        
    }

    return aux
}

console.log(sumarDiagonalSecundaria(matriz2))

const cambiarTodosLosELementosPorVacio = (matriz) => {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            matriz[i][j] = {}
            
        }
        
    }

    return matriz
}

console.table(cambiarTodosLosELementosPorVacio(matriz))