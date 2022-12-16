
const loopPares = (numero) => {
    let acum = 0;
    let arrayAux = [];
    for (let i = 0; i <= 100; i++) {
        acum += i;
        if (acum % 2 === 0) {
            arrayAux.push(acum);
        }
    }

    return `Los pares en un acumulador del cero a 100 son ${arrayAux}`;
};

console.log(loopPares(1));

const loopImpares = (numero) => {
    let acum = 0;
    let arrayAux = [];
    for (let i = 0; i <= 100; i++) {
        acum += i;
        if (acum % 2 !== 0) {
            arrayAux.push(acum);
        }
    }

    return `Los impares en un acumulador del cero a 100 son ${arrayAux}`;
};
console.log(loopImpares(1));

const sumatoria = (numero) => {
    let acum = 0;
    for (let i = 0; i <= numero; i++) {
        acum += i;
    }

    return acum;
};

console.log(sumatoria(3));

let nuevoArreglo = [5];

const llenarArreglo = (nuevoArreglo) => {
    let aux = nuevoArreglo[0];
    for (let i = 0; i < aux; i++) {
        nuevoArreglo[i] = i + 1;
    }
    return nuevoArreglo;
};

console.log(llenarArreglo(nuevoArreglo));

let nuevoArregloString = ["h", "o", "l", "a"];

const simularSplit = (nuevoArregloString) => {
    console.log(nuevoArregloString);
    let auxString = "";
    for (let i = 0; i < nuevoArregloString.length; i++) {
        if (nuevoArregloString[i] !== ",") {
            auxString += nuevoArregloString[i];
        }
    }

    return auxString;
};

console.log(simularSplit(nuevoArregloString));

let palabra2 = "HolaMundo"

const simularSplit2 = (palabra2) => {
    let arrayAux = []
    for (let i = 0; i < palabra2.length; i++) {
        arrayAux.push(palabra2[i]);
    }
    return arrayAux;

}

console.log(simularSplit2(palabra2))

let array1 = [1, 2, 3, 4];

let array2 = ["h", "o", "l", "a"];

const arrayHandler = (array1, array2) => {
    let aux = ""
    for (let i = 0; i < array1.length; i++) {
        console.log(`soy ${array1[i]} y yo soy ${array2[i]}`);
        aux += `soy ${array1[i]} y yo soy ${array2[i]} `;
    }
    return aux;
};

console.log(arrayHandler(array1, array2));

let palabra = "anilina"

const palindrome = (palabra) => {
    let aux = palabra.toUpperCase();
    let aux2 = [];
    let flag = true;

    for (let index = 0; index < aux.length; index++) {
        aux2[index] = aux[aux.length - index - 1]
        if (aux2[index] === aux[index]) {
            return `Es palindrome y su valor es ${flag}`;
        } else {
            ;
            return `No es palindrome y su valor es ${!flag}`;
        }
    }
}

console.log(palindrome(palabra));



/*-------------------------------------------------------------------------*/

// TODO: Completar ejercicios de discord:

// ! Dejo Desafío para quien quiera practicar, Martín                                                                                                                                                                                                                                                                           - En caso de resolverlo sin problemas reaccionar con :white_check_mark: ,                                                                                                                                                                                                                        - Caso  contrario,  consultar en este canal la duda acompañada con algo  código, *`Buen código`*```js

//! A - Nivel 1


//* 1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos

let num1 = 5;

let num2 = 6;

const sumaNumeros = (num1, num2) => {
    return num1 + num2;
}

let resultado = sumaNumeros(num1, num2);

console.log(resultado);

//* 2 - Desarrollar una función que reciba 2 numeros y 
//*      retorne la suma de ambos, si el primer parametro es mayor, 
//*      caso contrario retornar la resta.

const esMayorRestar = (num1, num2) => {
    if (num1 > num2) {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
}

let resultado2 = esMayorRestar(num1, num2);

console.log(resultado2);


//* 3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
//*      si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
//*      caso contrario retornar 'otra chance '.

let num3 = 4;

let num4 = 6;

const aprobado = (num1, num2, num3, num4) => {
    let acum = num1 + num2 + num3 + num4;

    if (acum > 7) {
        return `Aprobado`
    } else {
        return `Otra chance`
    }
}

let resultado3 = aprobado(num1, num2, num3, num4);

console.log(resultado3);

//* 4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
//*      si el el resultado es par, retornar la mitad del total,  
//*      caso contrario retornar el doble del total.

const esParDoble = (num1, num2, num3, num4) => {
    let acum = num1 + num2 + num3 + num4;

    if (acum % 2 === 0) {
        return acum / 2;
    } else {
        return acum * 2;
    }
}

let resultado4 = esParDoble(num1, num2, num3, num4);

console.log(resultado4);




//! B  Nivel 2
//* - Declarar 3 arrays de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:



//* 5 - Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario
//* 6 - Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
//*    {
//*       edadesMenor : "// edades menor a 18",  
//*       edadesMayor : "// edades menor a 18"
//*    }

//* 1 - Funcion que reciba un array de edades y retorne el promedio 

let array = [0, 10, 8, 22, 55, 80, 5, 1, 2, 9];

const promedioArray = (array) => {
    let acum = 0;
    for (let i = 0; i < array.length; i++) {
        acum += array[i]

    }

    return acum / array.length;
}

let resultado5 = [promedioArray(array)];

console.log(resultado5);

//* 2 - Funcion que reciba un array de edades y retorne el mayor elemento // 80

const mayorElementoArray = (array) => {
    let aux = 0;
    for (let i = 0; i < array.length; i++) {
        if (aux < array[i]) {
            aux = array[i]
        }

    }

    return aux;

}

let resultado6 = mayorElementoArray(array);

console.log(resultado6);

//* 3 - Funcion que reciba un array de edades y retorne el menor elemento // 5

const menorElementoArray = (array) => {
    let aux = array[0];
    for (let i = 1; i < array.length; i++) {
        if (aux > array[i]) {
            aux = array[i]

        }
    }

    return aux;
}

resultado8 = menorElementoArray(array)

console.log(resultado8);

//* 4 - Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario

const trueElementoArray = (array) => {
    let aux = array[0];
    console.log(aux)
    let flag = false;

    for (let i = 0; i < array.length; i++) {
        console.log(aux)
        for (let j = i; j < array.length; j++) {
            if (aux === array[j + 1]) {
                console.log(aux)
                flag = true;
            }
        }

        aux = array[i + 1];
    }

    return flag === true ? true : false;

}

let resultado9 = trueElementoArray(array);

console.log(resultado9);


//! C  Nivel 3

//* 1 - Desarrollar un objeto literal que contenga 5 propiedades que sean del siguiente tipo:
//*    - 2 String   
//*    - 1 Boolean
//*    - 1 Number
//*    - 1 Array
//*    - 1 Metodo que retorne un saludito
//     * por ejemplo:

//*      let canHijo = {
//*        nombre : 'Negrito',
//*        color  : 'Negrito',
//*        estaVacunado : true,
//*        edad : 10,
//*        vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
//*        saludo: function(){
//*            return 'wouf wouf wouf..'
//*        } 
//*      }

//*   - Luego desarrollar una funcion que liste individualmente los elementos de la propiedad del tipo Array 

let persona = {
    nombre: 'Negrito',
    color: 'Negrito',
    estaVacunado: true,
    edad: 10,
    vacunas: ['Leptospirosis', 'Hepatitis', 'Parvovirus'],

    saludo: function () {
        return 'Hola como estas'
    },

    listar: function () {
        return this.vacunas;
    }

}

let resultado11 = persona.listar();

console.log(resultado11);

//* 2 - Dado el Siguiente array de personas desarrollar funciones:

personas = [
    {
        "id": 0,
        "isProgrammer": true,
        "age": 28,
        "name": "Harrington Curry",
        "company": "TRANSLINK",
        "favoriteFruit": "strawberry"
    },
    {
        "id": 1,
        "isProgrammer": false,
        "age": 38,
        "name": "Greta Morton",
        "company": "PYRAMI",
        "favoriteFruit": "apple"
    },
    {
        "id": 2,
        "isProgrammer": false,
        "age": 32,
        "name": "Hester Bowen",
        "company": "TURNABOUT",
        "favoriteFruit": "apple"
    },
    {
        "id": 3,
        "isProgrammer": false,
        "age": 25,
        "name": "Melendez Mcfarland",
        "company": "XSPORTS",
        "favoriteFruit": "strawberry"
    },
    {
        "id": 4,
        "isProgrammer": false,
        "age": 31,
        "name": "Kimberly Matthews",
        "company": "KNOWLYSIS",
        "favoriteFruit": "banana"
    },
    {
        "id": 5,
        "isProgrammer": false,
        "age": 36,
        "name": "Hardin Sims",
        "company": "SEALOUD",
        "favoriteFruit": "banana"
    },
    {
        "id": 6,
        "isProgrammer": false,
        "age": 29,
        "name": "Natalia Huff",
        "company": "ENERSOL",
        "favoriteFruit": "apple"
    }
]


// Tips

// * Es para que practiquen sintaxis ademas del pensamiento computacional, piensen tipo de datos posibles.
// * Desarrollen y lean enunciados en voz alta, utilicen abstracción, vean las alternativas de llegar al mismo resultado de diferentes formas


// nota : Se recomienda utilizar estructuras y conceptos vistos en la materia

//*   - Funcion que reciba el array de personas y liste el nombre de cada una. 

const imprimirNombresArrayPersona = (array) => {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i].name);
    }

    return resultado;
}

console.log(imprimirNombresArrayPersona(personas))

//*   - Funcion que reciba el array de personas y retorne en un array los que son programadores.

const esProgramador = (array) => {
    let arrayAux = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].isProgrammer === true) {
            arrayAux[i] = array[i]
        }

    }

    return arrayAux;

}

console.log(esProgramador(personas))


//*   - Funcion que reciba el array de personas y un id a buscar, 
//*        retorne la persona en caso de encontrar, 
//*        caso contrario retorne null

const busquedaPorID = (id, array) => {
    let i = 1;
    while (i < array.length && array[i].id < id) {
        i++;
    } if (i < array.length) {
        console.log(array[i].name)
        return array[i];
    } else {
        throw new Error("No se encuentra persona con ese id")
    }
}

console.log(busquedaPorID(3, personas))








