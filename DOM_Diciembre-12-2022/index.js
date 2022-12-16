// TODO: Tres formas mas usadas para acceder a 
// * Los elementos de javascript:

let contenedor = document.getElementById("container")

// document.getElementsByClassName()

// contenedor.style.backgroundColor = "red"

let titulo = document.querySelector("h1")

console.log(titulo)

titulo.textContent = "Otra"

// let containerVacio = document.getElementById("container2")

// containerVacio.innerHTML = "<h4>otra cosa</h4>"

let parrafo = document.querySelectorAll("p")

//query selector se queda con el primer elemento con etiqueta p

console.log(parrafo)



// CALLBACK : Es una funcion que se pasa como argumento a otra funcion
// Se utiliza cuando queremos que se ejecute despues de renderizar.

const cambiarColorParrafos = (array) => {

    for (let i = 0; i < array.length; i++) {
        array[i].style.color = "green"
    }
}

let boton = document.getElementById("boton");

boton.addEventListener("mouseleave", () => {
    cambiarColorParrafos(parrafo)
})

let butonMagico = document.getElementById("mouse");

butonMagico.addEventListener("mouseleave",() => {
    titulo.style.color = "red"
})

