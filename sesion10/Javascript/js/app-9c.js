/*
* Estructura Repetitiva
*/
// filter (filtrar solo los mayores a 5)
let listaNumeros = [1,2,3,4,5,6,7,8,9,10];
let dataFilter = [];

listaNumeros.forEach(function(item, index){
    if(item > 5){
        dataFilter.push(item);
    }
});

let dataFilter2 = listaNumeros.filter(function(item){
    return item > 5;
})
console.log(dataFilter2);