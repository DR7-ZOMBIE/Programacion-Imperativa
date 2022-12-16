// ! 1) Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro
// ! de una matriz.

let numeros = [
    [1, 2, 3, 4], // Filas
    [5, 6, 7, 8], // Filas
    [9, 10, 11, 12] //FIlas
    //Columnas
]

const sumarElementosDeUnaMatriz = (matriz) => {

    let acum = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            acum += matriz[i][j];

        }

    }

    return acum;
}

let resultado = sumarElementosDeUnaMatriz(numeros)

console.log(resultado)


// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:

let matrizNumeros = [
    [1, 2, 3, 4, 5, 6, 7, 8,    9,       10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

const llenarMatriz = () => {
    let matriz = new Array();

    for (let i = 0; i <= 10; i++) {
        matriz[i] = new Array();
        for (let j = 0; j < 10; j++) {
            
            matriz[i][j] =  i + "" + j
        }
        
    }

    return matriz;
}

console.table(llenarMatriz())

const llenarMatriz2 = () => {
    let matriz = [];

    for (let i = 0; i <= 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            
            matriz[i][j] =  i + "" + j
        }
        
    }

    return matriz;
}

console.table(llenarMatriz2())

// * 3) Por último, vamos a generar dos funciones:
// * a) Una va a sumar los valores en la diagonal marcada en rojo.
// * b) La otra va a marcar los valores de la diagonal marcada en verde.
// * Ambas funciones deben devolver un resultado único.

const diagonalPrincipalMatriz = (matriz) => {
    let arrayAux = []
    let acum = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length+1; j++) {
            if (j === i + 1) {
                arrayAux.push(matriz[i][j-1])
                acum += matriz[i][j-1]

            }
        }
        
    }

    return acum;

}

console.log(diagonalPrincipalMatriz(matrizNumeros))

const diagonalSecundariaMatriz = (matriz) => {

    let arrayAux = []
    let arrayAux2 = []
    let acum = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length+1; j++) {
            if (j === matriz.length - i) {
                arrayAux.push(matriz[i][j-1])
                arrayAux2.push(arrayAux.pop())
                acum += matriz[i][j-1]

            }
        }
        
    }

    arrayAux2 = arrayAux2.reverse();
    console.log(arrayAux2)

    return acum;

}

console.log(diagonalSecundariaMatriz(matrizNumeros))

const llenarMatriz4 =()=>{
    let matriz=[]
    let array = []
   
  
    for (let i =0 ; i < 10; i ++){
      matriz[i]= [array] //aca mete el array vacio en el indice i=0 (fila 0)
      //en la proxima lo va a hacer en el 1 y asi hasta el nueve (del 0 al 9 hay diez )
      
      for( let j = 0; j < 10 ; j ++){
        matriz[i][j]= i + "" + j //aca concatena el i en o con el el j q se va moviendo hasta 
        //llegar a i=0j=9 sale del segundo for y entra al primero donde suma uno mas en i
      }
  
    }
    return matriz
  }
  console.table( llenarMatriz4())