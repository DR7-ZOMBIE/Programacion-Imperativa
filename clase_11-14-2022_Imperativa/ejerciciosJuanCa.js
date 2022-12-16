// Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
// de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
// forma de representar a los usuarios (cuentas bancarias). Cada una de estas cuentas
// tiene la siguiente información:

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

// 2 -Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.

// 3- Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.
// Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”);



let banco = {
    
    clientes : arrayCuentas,
    
    // consultarCliente: function (titular) {
    //     let i = 0;
    //     while ( i < this.clientes.length && this.clientes[i].titularCuenta !== titular ){
    //         i++;
    //     }if (i < this.clientes.length) {
    //         return this.clientes[i]
    //     }else{
    //         return `No se encontro el cliente`
    //     }
    // }

    consultarCliente: function ( titular ) {
        let arrayAux = []
        for (i = 0 ; i< this.clientes.length ; i++) {
            if ( this.clientes[i].titularCuenta === titular){
                arrayAux[i] = this.clientes[i];
            }
        }

        if(arrayAux != null){
            return arrayAux;
        }else{
            return `No se encontro el cliente`
        }
        

    },
    
}

console.log(banco.consultarCliente("Jarret Lafuente"))