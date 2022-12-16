const verificarNumerosPares = (num) => {
    if (num%1 === 0) {
        if (num%2==0) {
            return `Es par y el numero es : ${num}`
        }else{
            return `Es impar y el nmumero es : ${num}`;
        }
    }else{
        return `El numero es un decimal y el numero es : ${num}`
    }
    
}

console.log(verificarNumerosPares(6))

const pasarEnteroBinario = (num) => {
    let aux = 0;
    let i = 0;
    num += num;
    let array = []
    while(num/2>=1){
        num = Math.trunc(num/2);
        aux = num%2;
        array.unshift(aux)
        i++;
    }
    return array
}

console.log(pasarEnteroBinario(1041))


/*
Falta hacer bien el conteo de los gaps volver a analizar en otro momento :)
*/

const contarGAPS = (array) => {
    let cont = 0; 

        for (let i = 0; i < array.length; i++) {
          if (array[i]===1 && array[i+1]===0) {
            cont = cont + i;
          }
        }
        return cont-1;
    }

  


console.log(contarGAPS(pasarEnteroBinario(1041)))