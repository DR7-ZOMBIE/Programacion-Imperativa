

// TODO: Metodos de ordenamiento:

// ! Bubble Sort:

let array = [1, 3, 4, 8, 1, 2];

const ordenarArregloMenorMayorBubbleSort = (array) => {
  let aux = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        aux = array[j + 1];
        array[j + 1] = array[j];
        array[j] = aux;
      }
    }
  }

  return array;
};

console.log(ordenarArregloMenorMayorBubbleSort(array));

const ordenarArregloMayorMenorBubbleSort = (array) => {
  let aux = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] < array[j + 1]) {
        aux = array[j + 1];
        array[j + 1] = array[j];
        array[j] = aux;
      }
    }
  }

  return array;
};

console.log(ordenarArregloMayorMenorBubbleSort(array));

// ! Selection Sort:

const selectionSortMenorMayor = (array) => {
  let aux = 0;
  for (let i = 0; i < array.length; i++) {
    let menor = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[menor]) {
        aux = array[menor];
        array[menor] = array[j];
        array[j] = aux;
      }
    }
  }

  return array;
};

console.log(selectionSortMenorMayor(array));

const selectionSortMayorMenor = (array) => {
  let aux = 0;
  for (let i = 0; i < array.length; i++) {
    let menor = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] > array[menor]) {
        aux = array[menor];
        array[menor] = array[j];
        array[j] = aux;
      }
    }
  }

  return array;
};

console.log(selectionSortMayorMenor(array));

// ! Inserttion Sort:

// const insertionSortMenorMayor = (array) => {

//     for (let siguiente = 1; siguiente < array.length; siguiente++) {
//         let insercion = array[siguiente]; // valor a insertar
//         let moverElemento = siguiente; // posición en donde se va a colocar el elemento

//         // busca un lugar para colocar el elemento actual
//         while (moverElemento > 0 && array[moverElemento + 1] > insercion) {
//             // desplaza el elemento una posición a la derecha
//             array[moverElemento] = array[moverElemento + 1];
//             moverElemento++;
//         }
//     }

//     return array;
// }

//     console.log(insertionSortMenorMayor(array))

// * Ordenar coleccion de personas por estatrura.

let personas = [
  {
    nombre: "Rafael",
    apellido: "Pipe",
    Altura: 1.2,
  },

  {
    nombre: "Andrea",
    apellido: "Ramirez",
    Altura: 1.4,
  },

  {
    nombre: "Dennis",
    apellido: "Juilland",
    Altura: 1.87,
  },

  {
    nombre: "Agustin",
    apellido: "Eooo",
    Altura: 1.67,
  },
];

const ordenarAlturaMayorAMenor = (personas) => {
  let aux = 0;
  for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length - 1; j++) {
      if (personas[j].Altura < personas[j + 1].Altura) {
        aux = personas[j];
        personas[j] = personas[j + 1];
        personas[j + 1] = aux;
      }
    }
  }

  return personas;
};

console.log(ordenarAlturaMayorAMenor(personas)[0]);

const ordenarAlturaMenorAMayor = (personas) => {
  let aux = 0;
  for (let i = 0; i < personas.length; i++) {
    for (let j = 0; j < personas.length - 1; j++) {
      if (personas[j].Altura > personas[j + 1].Altura) {
        aux = personas[j];
        personas[j] = personas[j + 1];
        personas[j + 1] = aux;
      }
    }
  }

  return personas;
};

console.log(ordenarAlturaMenorAMayor(personas)[0]);

// // * Casos de prueba :

// describe("Ordenar Altura Menor a Mayor", function() {
//     it("Deberia ORdenar de menor a mayor",  function() {
//         const resultado = ordenarAlturaMenorAMayor(personas);

//         const esperado = resultado

//         expect(resultado).toBe(esperado);
//     });
// });

