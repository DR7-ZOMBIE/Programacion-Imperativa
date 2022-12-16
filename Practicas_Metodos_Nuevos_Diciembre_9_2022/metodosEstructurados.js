let notas = [4,6];


// Map devuleve un nuevo array modificando cada uno de los valores internos a lo que necesitemos.

let notasModificadas = notas.map(function(numero){
    return numero * 10
});

console.log(notasModificadas)


// Fileter filtra lo que necesitemos dentro del array.

let notasAprobadas = notas.filter(function(numero){
   return numero >= 5
});

console.log(notasAprobadas)

// Reduce lo que ace es acumular lo que necesitemos dentro de un array

let sumNotas = notas.reduce(function(acum,siguiente){
    return acum + siguiente
});

console.log(sumNotas)

// Foreach nos recorre un array y lo imprime

let reccorerArray = notas.forEach(function(numero,indice){
    console.log(indice)
    console.log(numero)
})


let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},

    
]

let aprobados = estudiantes.filter(function(array){
    return array.aprobado === true
})

console.log(aprobados)


let desaprobado = estudiantes.filter(function(array){
    return array.aprobado !== true
})

console.log(desaprobado)

let aprobados2 = estudiantes.filter(function(array){

 return array.promedio>7 
});

console.log (aprobados2)


let desaprobados2 = estudiantes.filter(function(array){

 return array.promedio<=7  
});

console.log(desaprobados2)