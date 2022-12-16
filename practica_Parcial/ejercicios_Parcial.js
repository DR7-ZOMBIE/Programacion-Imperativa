//TODO: Parcial numero 1 :


//* 1º Deberás escribir un objeto literal llamado estudiante que contenga las siguientes propiedades que deberás completar con tus datos:
//* a. nombre
//* b. apellido
//* c. camada
//* d. esParcial (VERDADERO)

let estudiante = {
    nombre: "Dennis",
    apellido: "Juilland",
    camada: "C2",
    esParcial: true,
};

//* 1º b Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno: 
//* NOTA < 4 : desaprobado
//* 4 <= NOTA < 7 : debe rendir examen final
//* NOTA >= 7 : promocionado.
//* La función deberá retornar la condición final del alumno (solo retorna la palabra).
//* Al momento de llamar a la función, deberás mostrar la siguiente frase:
//* “El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]”

let nota = 10;

const calcularNota = (nota) => {
    if (nota >= 1 && nota <= 10) {
        if (nota < 4) {
            return `desaprobado su nota es de: ${nota}`;
        } else if (nota >= 4 && nota < 7) {
            return `Debe rendir exameen final su nota es de: ${nota}`;
        } else {
            return `Promocionado su nota es de: ${nota}`;
        }
    } else {
        return `Su nota no se puede calificar supera el limite condicionado`;
    }
};

let resultadoNotas = calcularNota(nota);

console.log(resultadoNotas);

//* 2º Crea 1 array llamado clase. 
//* Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros.
//* Esteban Piazza 1 - Leandro Borrelli 1 - Martín Cejas 1
//* a. Agrega estos 3 objetos al array llamado clase.
//* b. Imprimir el array para ver que contenga esos objetos.

let clase = [
    {
        nombre: "Esteban",
        apellidos: "Piazza",
        bimestre: 2,
    },

    {
        nombre: "Leandro",
        apellidos: "Borrelli",
        bimestre: 2,
    },

    {
        nombre: "Martín",
        apellidos: "Cejas",
        bimestre: 2,
    },
];

const imprimir_Array = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return array;
};

let imprimir_Array_Var = imprimir_Array(clase);
console.log(imprimir_Array_Var);

//* Crea una función que reciba el array clase como parámetro e incremente en 1 el número
//* de bimestre de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una
//* estructura de repetición.
//* Deberás hacer el correcto llamado de la función mostrando el array clase antes y
//* después de llamar a siguienteCursada.

const increment_array = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i].bimestre = array[i].bimestre + 1;
    }
    return array;
};

let arrayResultante = increment_array(clase);

console.log(arrayResultante);

//*  3º Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su
//* progreso completo en PlayGround (true, false). 
//* Para ello deberán:
//* - Crear una constante asistenciaMinima que almacene el número mínimo de
//* asistencias permitidas para la aprobación de la materia, en este caso serán
//* 23 asistencias mínimas.
//* - La función deberá recibir como parámetros la cantidad de asistencias y la
//* condición final ante PlayGround del alumno.
//* - Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su
//* progreso final está completo. Si alguna de estas opciones no se cumple, el
//* alumno será automáticamente desaprobado.
//* - Deberá retornar un string aprobado o desaprobado según corresponda 

const asistenciaMinima = 23;

const completoPLayground = true;

const verificarSiAprobo = (asistenciaMinima, completoPLayground) => {
    if (asistenciaMinima >= 23 && completoPLayground === true) {
        return `Esta aprobado`;
    } else {
        return `Esta desaprobado`;
    }
};

let resultado = verificarSiAprobo(asistenciaMinima, completoPLayground);

console.log(resultado);

//TODO: Parcial numero 2:

//! Ejercicio 1:
//! Desarrollar una función para cada uno de las siguientes apartados:
//! Que reciba por parámetro dos números, los multiplique, y si ese resultado es par, retorne ‘El resultado
//! de multiplicar [num1] y [num2] es: [resultado] y es par’, caso contrario retornará ‘El resultado de
//! multiplicar [num1] y [num2] es: [resultado] y es impar’

let num1 = 5;

let num2 = 3;

const productoVerificarParImpar = (num1, num2) => {
    let resultado = num1 * num2;
    if (resultado % 1 === 0) {
        if (resultado % 2 === 0) {
            return `El resultado de multiplicar ${num1} y ${num2} es: ${resultado} y es par`
        } else {
            return `El resultado de multiplicar ${num1} y ${num2} es: ${resultado} y es impar`
        }
    } else {
        return `El numero no es un natural`
    }

};

let result1 = productoVerificarParImpar(num1, num2);

console.log(result1);

//! -----------------------------------------------------------------------------------------------------------------
//! Ejercicio 2:
//! Deberás escribir un objeto literal llamado empleado que contenga las siguientes propiedades que deberás completar con tus datos:
//! nombre string
//! empresa string
//! sueldos array de 12 números
//! ---------------------------------------------------------
//! teniendo en cuenta los datos del punto número 1:
//! Crear un método del objeto que calcule el sueldo mayor del empleado y si supera los 80.000 retornará:
//!  ‘El mayor sueldo de [nombre] en [empresa] es [sueldoMayor] por lo tanto pagará impuesto a las ganancias’
//!  , y sino retornará:  ‘El mayor sueldo de [nombre] en [empresa] es [sueldoMayor] por lo tanto NO pagará impuesto a las ganancias’
//! -----------------------------------------------------------------------------------

let empleado = {
    nombre: "Dennis Patrick Juilland Prada",
    empresa: "EIA",
    sueldos: [1, 12, 3, 4, 5, 6, 25, 8, 9, 10, 11, 12]
}

const calcularSueldoMAyor = (objeto) => {
    objeto.sueldos.sort(function (a, b) { return b - a });
    let aux = objeto.sueldos.shift()
    if (aux > 80) {
        return `El mayor sueldo de ${objeto.nombre} en ${objeto.empresa} es ${aux} por lo tanto pagará impuesto a las ganancias’`
    } else {
        return `El mayor sueldo de ${objeto.nombre} en ${objeto.empresa} es ${aux} por lo tanto no pagará impuesto a las ganancias’`
    }
}

let sueldoMayor = calcularSueldoMAyor(empleado)

console.log(sueldoMayor)


//! Ejercicio 3:
//! Utilizando el siguiente array de objetos:
//! Utilizando un método de array eliminar el último elemento del array autos.
//! ---------------------------------------------------------------------------------------
//! Imprimir por consola el array antes y después de quitar el elemento para ver las diferencias.


let autos = [{
    año: 2015,
    color: "gris",
    puertas: 5
},
{
    año: 2010,
    color: "rojo",
    puertas: 3
},
{
    año: 2012,
    color: "gris",
    puertas: 4
},
{
    año: 2022,
    color: "rojo",
    puertas: 3
},
{
    año: 2018,
    color: "blanco",
    puertas: 4
}]

console.log(autos)
autos.pop()
console.log(autos)

//! -----------------------------------------------------------------------------------------------------
//! 4. Crear una función que reciba como parámetros el array y un color, y me devuelva un nuevo array con todos
//! los objetos que coinciden con ese color recibido por parámetro
//! -------------------------------------------------------------------------------------------------------------
//! Ejecutar la función y mostrar por consola el nuevo array

const buscarObjetosPorColor = (array, color) => {
    let arrayResultante = []
    console.log(array[4])
    for (let i = 0; i < array.length; i++) {
        if (array[i].color === color) {
            arrayResultante.push(array[i])
        } else {
            return `No existe vehiculos con ese color`
        }
    }

    return arrayResultante;
}

let resultadoArray = buscarObjetosPorColor(autos, "rojos");

console.log(resultadoArray)

let alicia = [10, 80, 25];
let bob = [10, 80, 25];

const encontrarGanador = (a, b) => {

    let contadorAlicia = 0

    let contadorBob = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            contadorAlicia += 1
        } else if(b[i] > a[i]) {
            contadorBob += 1
        }
    }
    console.log(contadorAlicia)
    console.log(contadorBob)
    if (contadorAlicia > contadorBob) {
        return "Gana Alicia"
    } else if (contadorBob > contadorAlicia) {
        return "Gana Bob"
    }else{
        return `Es un empate`
    }
}

console.log(encontrarGanador(alicia, bob))

//! -----------------------------------------------------------------------------------------------------------------
//! Ejercicio 2:
//! Deberás escribir un objeto literal llamado empleado que contenga las siguientes propiedades que deberás completar con tus datos:
//! nombre string
//! empresa string
//! sueldos array de 12 números
//! ---------------------------------------------------------
//! teniendo en cuenta los datos del punto número 1:
//! Crear un método del objeto que calcule el sueldo mayor del empleado y si supera los 80.000 retornará:
//!  ‘El mayor sueldo de [nombre] en [empresa] es [sueldoMayor] por lo tanto pagará impuesto a las ganancias’
//!  , y sino retornará:  ‘El mayor sueldo de [nombre] en [empresa] es [sueldoMayor] por lo tanto NO pagará impuesto a las ganancias’
//! -----------------------------------------------------------------------------------

let empleado2 = {
    nombre: "Dennis Patrick Juilland Prada",
    empresa: "EIA",
    sueldos: [1, 12, 3, 4, 49, 6, 120, 8, 9, 10, 11, 12]
}

const encontratSueldoMayor = (array) => {
    let aux = 0;
    for (let i = 0; i < array.sueldos.length; i++) {
        console.log(array.sueldos[i]);
       if ( aux < array.sueldos[i]) {
        aux = array.sueldos[i]
       }
    }

    if (aux > 80) {
        return `El mayor sueldo de ${array.nombre} en ${array.empresa} es ${aux} por lo tanto pagará impuesto a las ganancias`
    }else{
        return `El mayor sueldo de ${array.nombre} en ${array.empresa} es  por lo tanto No pagará impuesto a las ganancias`
        
    }
}

console.log(encontratSueldoMayor(empleado2))

let canHijo = {
    nombre : 'Negrito',
    color  : 'Negrito',
    estaVacunado : true,
    edad : 10,
    vacunas : ['Leptospirosis', 'Hepatitis', 'Parvovirus'],
    vacuna: function(estaVacunado){
        if(estaVacunado===true){
            return `${this.vacunas}`
        }else{
            return `No esta vacunado`
        }
         
        
    } 
    

  };
console.log(  canHijo.vacuna(canHijo.estaVacunado))