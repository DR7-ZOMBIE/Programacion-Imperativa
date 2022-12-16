// * Algortimo de busqueda lineal

let list = [1,2,3,4,5,6,7,8,9]

const busquedaLinealEnLista = (list,elemento) => {

    let i = 0;
    while (i < list.length && list[i] !== elemento) {
        i++;
    }
    if (i<list.length) {
        return `Lo encontro y el elemento es ${list[i]}`
    }else{
        throw new Error(`El elemento busqueda no se encuentra`)
    }
}

let result = busquedaLinealEnLista(list,5);

console.log(result)

const busquedaBianria = (list,elemento) => {
    let left = list[0]
    let right = list[list.length-1]
    
    if (left > right) return -1;
    
    while(left <= right) {
        let mitad = Math.floor((left + right)/2)
        if(list[mitad] === elemento){
            return elemento
        }else if(list[mitad] < elemento){
            left = mitad+1
        }else if(list[mitad] > elemento){
            right = mitad - 1
        }
    }

    return null

}

console.log(busquedaBianria(list, 7))

const busquedaBianriaRecursiva = (list,l,r,elemento) => {
    if (l > r) return -1;

    let mitad = Math.floor((l + r)/2)

        if(list[mitad] === elemento) return elemento
        
        if(list[mitad] < elemento){
           return  busquedaBianriaRecursiva(list,mitad + 1,r,elemento)
        }else{
           return  busquedaBianriaRecursiva(list,l,mitad - 1,elemento)
        }

}

console.log(busquedaBianriaRecursiva(list,0,list.length-1,4))