const alicia = [10, 80, 75];
const bob = [90, 20, 25];

function encontrarGanador(a, b) {
  let puntosAlicia = 0;
  let puntosBob = 0;

  for (let i = 0; i < alicia.length; i++) {
    if (a[i] > b[i]) {
      puntosAlicia += 1;
    } else if (b[i] > a[i]) {
      puntosBob += 1;
    } else if (a[i] === b[i]) {
      console.log("No hay puntos");
    }
  }

  if (puntosAlicia > puntosBob) {
    return `Alicia es la ganadora con un puntaje de ${puntosAlicia}`;
  } else {
    return `Bob es el ganadora con un puntaje de ${puntosAlicia}`;
  }
}

console.log(encontrarGanador(alicia, bob));

const multiplosNumeros1 = (num1) => {
  let arrayMultiplo1 = [];
  let aux = num1;
  for (let i = 1; i <= 100; i++) {
    arrayMultiplo1[i - 1] = aux * i;
  }

  return arrayMultiplo1;
};

const multiplosNumeros2 = (num2) => {
  let arrayMultiplo2 = [];
  let aux = num2;
  for (let i = 1; i <= 100; i++) {
    arrayMultiplo2[i - 1] = aux * i;
  }

  return arrayMultiplo2;
};

console.log(multiplosNumeros1(1));

console.log(multiplosNumeros2(1));

const digitalHouse = (num1, num2) => {
  let cont = 0;
  let arrayAux = [];
  for (let i = 0; i <= 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (multiplosNumeros1(num1)[i] === multiplosNumeros2(num2)[j]) {
        cont++;
        arrayAux[cont - 1] = multiplosNumeros2(num2)[j];
      }
    }
  }
  return `Digital House los multiplos entre los dos numeros son: ${arrayAux}`;
};

console.log(digitalHouse(1, 2));
