
let num1 = (2)
let num2 = (3)
let num3 = (4)

const deTresNum = (num1, num2, num3) => {
    if (num1 % 1 === 0 && num2 % 1 === 0 && num3 % 1 === 0) {
        if (num1 > num2) {
            return num2 * num3;
        } else if (num2 % 2 === 0) {
            return `El ${num2}es par`
        } else if ((num1 + num2 + num3) % 3 === 0) {
            return `La suma de estor tres numeros es multiplo de 3`
        } else {
            return `No se cumple ninguna ninguna de las condiciones anteirores`
        }

    }else{
        return `No es un numero natural`
    }

}


        let aux = deTresNum(num1, num2, num3);
        console.log(aux);

 

        let empleado = {
            nombre: `Romina`,
            apellido: `Mastropierro`,
            edad: "42",
            estaEmpleado: "true" ,
       
        mayorEdad: function () {
                if (this.edad > 18 && this.estaEmpleado === true) {
                    return `${this.nombre} ${this.apellido} está empleado y es mayor de edad.`
                } else if (this.edad > 18 && this.estaEmpleado === false) {
                    return `${this.nombre} ${this.apellido} NO está empleado`
                } else if (this.edad < 18 && this.estaEmpleado === false) {
                    return `NO está empleado y NO es mayor de edad.`
                } else {
                    return `No se cumple la condicion`
                }
    
            }
            
    
            }

        let reultadoA = empleado.mayorEdad();
    
            console.log(reultadoA);

            //Ejercicio 3:
        //Dado el siguiente array de objetos:

        //Eliminar el último elemento del arreglo usando un método de arrays.
        //Recorrer el array y si el año del auto es mayor a 2019, agregar cada objeto a un nuevo arreglo llamado autosNuevos.


        let autos =[
            {
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
 



console.log(autos)
autos.pop()
console.log(autos)


const verAnioAuto = (array) => {
            let autosNuevos = []

            for (let i = 0; i < array.length; i++) {
                if (array[i].anio > 2019) {
                    autosNuevos.push(array[i])
                }
            }

            return autosNuevos;

        }

let aux2 = verAnioAuto(autos);
        console.log(aux);