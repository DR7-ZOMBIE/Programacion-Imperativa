/*Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

let usuarios = [
    {
        nombre: "Dennis",
        apellido: "Juilland",
        likes: 1000
    },
    {
        nombre: "Dionete",
        apellido: "Ruiz",
        likes: 200
    },
    {
        nombre: "Jorje",
        apellido: "Duje",
        likes: 500
    },
    {
        nombre: "Maximiliano",
        apellido: "Zbiden",
        likes: 978
    },
    {
        nombre: "Mariana",
        apellido: "Torres",
        likes: 250
    },
    {
        nombre: "Facundo",
        apellido: "Cortez",
        likes: 350
    },
    {
        nombre: "Matias",
        apellido: "Stamn",
        likes: 245
    },
    {
        nombre: "Ignacio",
        apellido: "Riveros",
        likes: 247
    },
    {
        nombre: "Matias",
        apellido: "Ramirez",
        likes: 760
    },
    {
        nombre: "Franco",
        apellido: "Garmendia",
        likes: 700
    },
    {
        nombre: "Enrique",
        apellido: "Gonzales",
        likes: 127
    },
    {
        nombre: "Felipe",
        apellido: "Taborda",
        likes: 130
    }
]
const ordenar = (array) => {

    let auxiliar = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {

            if (array[j].likes < array[j + 1].likes) {
                auxiliar = array[j + 1].likes
                array[j + 1].likes = array[j].likes
                array[j].likes = auxiliar

            }

        }
    }

    return array

}

let ordenado = ordenar(usuarios)

console.log(ordenado)

const devuelveposiciones = (odenado) => {
   
    let arrayAux = []

    for (let i = 0; i < ordenado.length; i++) {
        arrayAux.push( `su posicion es: ${i} y la cantidad de likes es:` + ordenado[i].likes )
        
    }
    return arrayAux
}
console.log(devuelveposiciones(ordenado, ordenado))


let empleado = {
    nombre: 'Mayerline',
    apellido: 'Bueno',
    edad: 18,
    estaEmpleado: true,

    result: function condicionEmpleado (){
        if (this.edad > 18 && this.estaEmpleado === true) {
            return `${this.nombre} ${this.apellido} está empleado y es mayor de edad`
        }else if(this.edad > 18 && this.estaEmpleado === false ){
            return `${this.nombre} ${this.apellido} No está empleado y es mayor de edad`
        }else if (this.edad <= 18 && this.estaEmpleado === false){
            return `${this.nombre} ${this.apellido} No está empleado y no es mayor de edad`
        }else{
            return 'no aplica'
        }
    }
    
}
    



let resultado2 = empleado.result(18,true);  
console.log(resultado2); 


let condicionesEmpleado = (empleado) => {
    if (this.edad > 18 && this.estaEmpleado === true) {
        return `${this.nombre} ${this.apellido} está empleado y es mayor de edad`
    }else if(this.edad > 18 && this.estaEmpleado === false ){
        return `${this.nombre} ${this.apellido} No está empleado y es mayor de edad`
    }else if (this.edad <= 18 && this.estaEmpleado === false){
        return `${this.nombre} ${this.apellido} No está empleado y no es mayor de edad`
    }else{
        return 'no aplica'
    }
}


let resultado3 = condicionesEmpleado(empleado);  
console.log(resultado2); 

