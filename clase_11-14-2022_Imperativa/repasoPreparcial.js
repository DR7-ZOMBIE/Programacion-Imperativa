const funcionParesImpares = (num1,num2) => {

    if (num1 % 2  === 0 && num2 % 2  === 0){
        return num1/num2;
    }else{
        return num1 + num2;
    }
}

let resultado = funcionParesImpares(5,10);
console.log(resultado)

// Ejercicio 11 a del playground

let deportista = {
    energia:30,
    experiencia:10,
    nombere: "almar",
    entrenarHoras: function(cantidadHoras){
        this.energia-=cantidadHoras*5;
        this.experiencia+=cantidadHoras*2;
        return `Su cantidad de energia es ${this.energia} y su experiencia es ${this.experiencia}`
    }
}

console.log(deportista.energia)
console.log(deportista.experiencia)
console.log(deportista.entrenarHoras(10))

