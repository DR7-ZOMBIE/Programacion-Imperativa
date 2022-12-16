// Un arreglo minuscula y pasarlo a mayuscula

let peliculas = ["Hola"]

const pasandoMayuscula = (array) => {
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toUpperCase()
        
    }
    return array;
}

console.log(pasandoMayuscula(peliculas))

// OBJETOS
// Los objetos tienen atributos que lo definen .
// doc notacion es cuando llamamos los metodos del objeto con un punto.

const perro = {

    pelo: "largo",
    color: "Negro",
    edad: 7,

    verificarEdad: function(edad) {
        if (edad === this.edad) {
            return true;
        }
    }


}

console.log(perro.verificarEdad(7)) // doc notation
console.log(perro["color"]) // Brackquet notation

// Todo en javascript es un objeto.
// Los metodos dentro de un objeto solo funcionan con function

perro.edad = 10;



