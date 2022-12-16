// Ejercicio 1: 
// Declarar tres variables y asignarles un número entero a las tres.
// Crear una función que reciba tres parámetros, que pregunte:
// Si el primero es mayor que el segundo, debe devolver la multiplicación del segundo por el tercero.
// Si el segundo es par, que devuelva un texto que concatene al segundo número con un texto que diga ‘es par’.
// Si la suma de los tres es múltiplo de 3, debe devolver un texto que diga: la suma de estos tres números es múltiplo de 3.
// Invocar a la función pasándole por parámetros las tres variables declaradas en el punto 1 

let num1 = 30; // * Definimos el valor de la variable 1

let num2 = 27; // * Definimos el valor de la variable 2

let num3 = 27; // * Definimos el valor de la variable 3

// ! Este metodo se utiliza para poder hacer diferentes operaciones con tres numero pasados por parametro,
// ! En este caso serian los tres anteriores para verificar , debemos analizar que si el numero njo es un entero 
// ! Debemos hacer un manejo de excepciones para que el usuario se de cuenta que hay un error.

const operacionesTresNumeros = (num1,num2,num3) => {
    if(num1 % 1 === 0 && num2 % 1 === 0 && num3 % 1 === 0 ){
        if (num1 > num2 ) {
            return num2*num3;
        }else if (num2 % 2 === 0) {
            return `es par : ${num2}`
        }else if((num1+num2+num3) % 3 === 0 ){
            return `La suma de los tres numeros es multiplo de 3 y su suma es : ${num1+num2+num3}`
        }else{
            return `No se cumple ninguna ninguna de las tres condiciones`
        }
    }else{
        throw new Error(`El numero no es un entero`);
    }
  
}

let resultado1 = operacionesTresNumeros(num1,num2,num3); // * Definimos el resultado del metodo en una variable

console.log(resultado1); // * Imprimimos y verificamos todas las posibles condiciones si esta correcto


// Ejercicio 2:
// Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
// nombre 
// apellido
// edad
// estaEmpleado (bool)
// Declarar un función que:
// Si la edad es mayor a 18 años y está empleado, devolverá una frase que diga: [nombre] [apellido] está empleado y es mayor de edad.
// Si es mayor de edad pero no está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y es mayor de edad.
// Si no es mayor ni está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y NO es mayor de edad.


// * Creamos un objeto empleado el cual se compone de cuatro atributos y definimos un metodo llamado 
// * codicionesEmpleado el cual se compone de tres condiciones y una por si no se cumpla ninguna 
// ! Hay un caso en el no se cumple ninguna el cual es cuando sea menor de dad y su estado de emppleado 
// ! Sea igual a true ahi debemos hacer otra verificacion si no nos va a arrojar undefined y no estaria correcto!

let empleado = {
    nombre: 'Dennis',
    apellido: 'Juilland',
    edad: 19,
    estaEmpleado: true,

    condicionesEmpleado: function () {
        if (this.edad > 18 && this.estaEmpleado === true) {
            return `${this.nombre} ${this.apellido} está empleado y es mayor de edad`
        }else if(this.edad > 18 && this.estaEmpleado === false ){
            return `${this.nombre} ${this.apellido} NO está empleado y es mayor de edad`
        }else if(this.edad <= 18 && this.estaEmpleado === false){
            return `${this.nombre} ${this.apellido} NO está empleado y NO es mayor de edad`
        }else{
            return `Ninguna condicion se esta cumpliendo, vuelva a intentarlo`
        }
    }
}

let reultado2 = empleado.condicionesEmpleado();  // * Creamos una variable para almacenar el resultado dentro del metodo del objeto

console.log(reultado2); // * Verficamos todas las condiciones y que si este correcto


// Ejercicio 3:
// Dado el siguiente array de objetos:
 
let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    
    anio: 2019,
    color: 'negro'
}]
 
 

// Eliminar el último elemento del arreglo usando un método de arrays.
// Recorrer el array y si el año del auto es mayor a 2019, agregar cada objeto a un nuevo arreglo llamado autosNuevos.

// ! Dice el primer item que eliminemos la ultima posicion del arreglo con un metodo de array 
// ! Considero que es necesario demostrar que funciona haciendo dos console.log de un antes y un 
// ! Despues de utilizar el metodo pop el cual funciona como una pila ultimo en entrar primero en salir 
// ! Por eso estariamos sacando la ultima posicion del array.

console.log(autos)
autos.pop()
console.log(autos)

// * Este es una funcion para buscar el vehiculo por anio si es mayor a 2019 que los guarde en otro
// * Array y que retorne ese array nueva al final de la funcion flecha.

const buscarAutosPorAnio = (array) => {
    let arrayAux = []

    for (let i = 0; i < array.length; i++) {
        if (array[i].anio > 2019) {
            arrayAux.push(array[i])
        }
    }

    return arrayAux;

}

let resultado3 = buscarAutosPorAnio(autos); // * Alamacenamos el resultado de la funcion en u8na variable

console.log(resultado3); // * Hacemos una verificacion de que si funcione correctamente

