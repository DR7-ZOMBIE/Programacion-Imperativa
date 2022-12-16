// TODO: Modulo 3 algoritmos.

// Crear funcion  que reciba dos numeros y devuelva el mayor

let num1 = 15;
let num2 = 2;

const esMayor = (num1, num2) => {
    if (num1 > num2) {
        return num1
    }else{
        return num2
    }
}

let result = esMayor(num1, num2);

console.log(result)

let num3 = 54;
let num4 = 8;

let mayorTotal = esMayor(esMayor(num1,num2),esMayor(num3,num4))

console.log(mayorTotal);

let numeros = [1,2,3,4,5]

let copiaNumeros = [...numeros] // Expred operator

let mayor = Math.max(...copiaNumeros) // Es para pasar los elementos sueltos 
// sin el array.

console.log(mayor)

let menor = Math.min(...copiaNumeros) 

console.log(menor)

// * Math.floor ----> Para redonder hacia abajo

// * Math.ceil ----> Para redonder hacia arriba

// * Math.round -----> Redondea hacia el mas cercano


// * Console table para imprimir matrices

console.table(
    [
        [1,2,3,4,5],
        [1,2,3,4,5],
        [1,2,3,4,5],
    ]
)

