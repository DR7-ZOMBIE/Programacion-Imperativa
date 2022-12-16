let arrayCorreosPendientes = [
    "sds@gmail.com",
    "sjkdnskjdsgmail.com"
]

// -1 Es true es indexOF
let arrayAdmitidos = []

let arrayNoAdmitido = []

const verificarCorreos = (array) => {
    console.log(array)
    let flag = true;
    for (let index = 0; index < array.length; index++) {
        if (array[index].includes("@") === true) {
            flag;
            arrayAdmitidos.push(array[index])
        }else{
            !flag
            arrayNoAdmitido.push(array[index])
        }
        
    }
}

console.log(verificarCorreos(arrayCorreosPendientes));
console.log(arrayAdmitidos)
console.log(arrayNoAdmitido)

let productos = [

    {
        nombre: "celular",
        precio: 20,
        cantidad: 30,
        categoria:"Telefonia"
    },
    {
        nombre: "pc",
        precio: 20,
        cantidad: 30,
        categoria:"Computacion"
    },
    {
        nombre: "audifonos",
        precio: 20,
        cantidad: 30,
        categoria:"Computacion"
    },
    {
        nombre: "mac",
        precio: 20,
        cantidad: 30,
        categoria:"Computacion"
    }

]

const precioFinalProductos = (array) => {
    let acumuladorPrecio = 0;
    let acumuladorCantidad = 0;

    for (let i = 0; i < array.length; i++) {
        acumuladorPrecio += array[i].precio;
        acumuladorCantidad += array[i].cantidad;        
    }

    return acumuladorPrecio*acumuladorCantidad;
}

const resultado = precioFinalProductos(productos)

console.log(resultado)


const generadorID = (array) => {

   for (let i = 0; i < array.length; i++) {
    
    array[i].id = i + 1;
    
   }

   return array;
}


console.log(generadorID(productos))

const incrementarPrecio = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].categoria === "Computacion") {
            array[i].precio *= 1.20;
        }
        
    }

    return array
}


console.log(incrementarPrecio(productos))

let arrayTelefonia = []

const arregCategorialoTelefonia = (array) => {
    let filtrados = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].categoria === "Telefonia") {
            filtrados.push(array[i])
        }
    }

    return filtrados
}

const resultado2 = arregCategorialoTelefonia(productos)

console.log(resultado2)

