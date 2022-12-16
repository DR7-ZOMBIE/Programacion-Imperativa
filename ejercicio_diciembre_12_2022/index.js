
// TODO: Generar un archivo .html con al menos una etiqueta <h1>, dos etiquetas <h2>, y 3 etiquetas <p>. 
// *Luego Generar un archivo .js y vincularlo mediante <script> a nuestro archivo HTML para seleccionar 
// *los elementos y cambiar su color mediante el archivo .js



let cambioColorh1 = document.getElementById("h1")

cambioColorh1.style.color = "red"

let cambioColorh2 = document.getElementById("h2")

cambioColorh2.style.color = "yellow"

let cambiandoParrafos = document.querySelectorAll("p")

for (let i = 0; i < cambiandoParrafos.length; i++) {
    cambiandoParrafos[i].style.color = "orange"
    
}

// TODO: Seleccionar el elemento <h2> y modificar su valor por “Bienvenidos a mi página web”. 
// * Luego de esto, analizar qué ha pasado con el segundo <h2> cargado.

cambioColorh2.textContent = "Bienvenidos a mi pagina web"

// Se cargo de inmediato porque no se esta implementando un call back.

// TODO: Modificar el contenido de un solo elemento <p> con textContent y luego con innerHTML. ¿Funciona igual para ambos casos?

let modificarP = document.getElementById("modificarP")

modificarP.textContent = "Soy un nuevo P"

modificarP.innerHTML = "Cambie otra vez"

// Es lo mismo


// TODO: Cambiar el contenido de las etiquetas <p> de forma tal que todas contengan la misma frase. 

    for (let i = 0; i < cambiandoParrafos.length; i++) {
        cambiandoParrafos[i].textContent = "Somo iguales"
        
    }


// TODO: Crear un botón que diga Saludar que con ayuda de .onclick al presionarlo nos muestre un mensaje que diga “Hola!”

let botonSaludar = document.getElementById("button")

botonSaludar.addEventListener("click", () => {
    alert("Hola!")
})

// ----------------------

let primerContenedor = document.getElementById("primerBloque")


let botonOscuro = document.getElementById("Oscuro")

botonOscuro.addEventListener("click", () => {
    primerContenedor.style.background = "green"
    cambioColorh1.style.backgroundColor = "black"
    cambioColorh2.style.backgroundColor = "black"
})

let botonClaro = document.getElementById("Claro")

botonClaro.addEventListener("click", () => {
    primerContenedor.style.background = "brown"
    cambioColorh1.style.backgroundColor = "black"
    cambioColorh2.style.backgroundColor = "black"
})