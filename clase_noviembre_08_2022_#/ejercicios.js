// Cuenta bancaria :

const cuentaBancaria = {

    numero: Number,
    cuenta: "",
    saldo: Number,
    titular: "",

}

console.log(cuentaBancaria.numero = 12112)
//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

  let banco = {
    
    cuentaClientes: arrayCuentas,

    consultarCliente:function(nombreTitular) {
        for (let index = 0; index < this.cuentaClientes.length; index++) {
            if (this.cuentaClientes[index].titularCuenta === nombreTitular) {
                return this.cuentaClientes[index]
            } 
        }
        return `No existe el cliente`;
    },

    deposito:function (nombreTitular,cantidadDinero) {
        if (this.consultarCliente(nombreTitular) !== null) {
            let valorFinal = this.consultarCliente(nombreTitular).saldoEnPesos += cantidadDinero;
            return `Deposito realizado su nuevo saldo es : ${valorFinal}`
        }

    },

    extraer:function (nombreTitular,cantidadDinero) {
        let aux = "";
        if (this.consultarCliente(nombreTitular) !== null) {
            let valorFinal = this.consultarCliente(nombreTitular).saldoEnPesos -= cantidadDinero;
            aux = `Deposito realizado su nuevo saldo es : ${valorFinal}`
            if(valorFinal<= 0){
                aux = `Lo que esta tratando de extraer no es posible, la cuenta quedaria negativa`
            }
        }

        return aux;
    }

  }

  console.log(banco.consultarCliente("Jacki Shurmer"))

  console.log(banco.deposito("Jacki Shurmer",10))

  console.log(banco.extraer("Jacki Shurmer",10))


let arrayEjemplo = [

    {
        nombre: "Leon",
        edad: 10
    },

    {
        nombre: "Pipe",
        edad: 3
    }

]

const propiedadUnica = (arrayObjetos , texto) => {
    let arrayNuevo = [];
    for (let index = 0; index < arrayObjetos.length; index++) {
            arrayNuevo.push({[texto]: arrayObjetos[index][texto]});
        
    }

    return arrayNuevo;

}

console.log(propiedadUnica(arrayEjemplo,"nombre"))

// const propiedadUnica2 = (arrayObjetos , texto) => {
//     let arrayNuevo = [];
//     for (let index = 0; index < arrayObjetos.length; index++) {
//             if (arrayObjetos[index][edad] === texto) {
//                 arrayNuevo.push({[texto] : arrayObjetos[index][texto]})
//                 return arrayObjetos
//             }
        
//     }

//     return arrayNuevo;
// }

// console.log(propiedadUnica2(arrayEjemplo,"edad"))

let alumno = {
    
        nombre: "",
        notas: [],
        cedula: ""
    
}

const asignarValoresAlumno = (nombre,notas,cedula) => {

    alumno.nombre = nombre;
    alumno.notas = [notas];
    alumno.cedula = cedula;

    return alumno;
}

console.log(asignarValoresAlumno("Dennis",notas = [1,3,4],"1017261972"))


const calcularPromedioNotasAlumno = (nombre,notas,cedula) => {
    let arrayAux = [asignarValoresAlumno(nombre,notas,cedula)];
    let acum = 0;
    console.log(arrayAux[0].notas[0].length)

    for (let i = 0; i < arrayAux[0].notas[0].length; i++) {
       acum += arrayAux[0].notas[0].pop();
    }

    return acum/arrayAux[0].notas[0].length;

}

const verificarNotaTotal = (nombre,notas,cedula) => {
    let aux = calcularPromedioNotasAlumno(nombre,notas,cedula);
    let flag = true;
    if (aux >= 8 && aux <=10) {
        flag = flag;
        console.log(flag);
        return `El estudiante aprobo su notas es : ${aux}`
    }else{
        flag = !flag;
        console.log(flag)
        return `El estudiante desaprobo su notas es : ${aux}`
    }
}

console.log(verificarNotaTotal("Dennis",notas = [1,3,10,5,5],"1017261972"))