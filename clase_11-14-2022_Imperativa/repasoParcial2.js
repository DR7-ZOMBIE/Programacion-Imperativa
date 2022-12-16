// TODO: Objeto con metodo promediar notas

let estudiante = {
    nombre: 'Nombre',
    email: 'Email',
    notas:[1,2,5,4,3,7],

    calcularPromedio:function () {
        let acum = 0;
        for (let i = 0; i < this.notas.length; i++) {
            acum += this.notas[i];
        }
        return acum/this.notas.length;
    }
}

let resultado = estudiante.calcularPromedio();

console.log(resultado)

// TODO: Encontrar el primer elemento que cumpla con la condicion de haber ganado un ticket y
// TODO: que ademas sea mayor a 18 anos o mas debera retornar dicho elemento.


let ganoTicket = true;

let edad = 10;

const primerElemento = (ganoTicket,edad) => {
    if (ganoTicket === true && edad >= 18 ){
        return true;
    }else{
        return false;
    }
        
    
}


let participantes = [
    {
        nombre: 'Alejandro',
        edad:178,
        ganoTicket: false
    },
    {
        nombre: 'Dennis',
        edad:178,
        ganoTicket: true
    },
    {
        nombre: 'David',
        edad:178,
        ganoTicket: true
    }
]

const ganoEdad = (array) => {
    let flag =  true;
    for (let i = 0; i < array.length; i++) {
        if (array[i].ganoTicket === true && array[i].edad >= 18) {
            flag = true;
            return array[i]
        }
    }

    return `No se encontro el participamte con esas condiciones ${!flag}`
    
}

console.log(ganoEdad(participantes))



