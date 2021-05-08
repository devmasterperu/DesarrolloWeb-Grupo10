/*
* Estructura Repetitiva
*/
// for
const lista = document.getElementById('frutas');

let listaFrutas = [
    'naranja', 
    'manzana', 
    'platano', 
    'sandia'
];
console.log(listaFrutas.length);

// template literal (backtick)
let html = ``;
for (let index = 0; index < listaFrutas.length; index++) {
    html += `<li>${listaFrutas[index]}</li>`;
    // html += '<li>'+ listaFrutas[index] +'</li>';
}
lista.innerHTML = html;

