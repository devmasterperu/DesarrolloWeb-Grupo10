/*
* Estructura Repetitiva
*/
// forEach
const lista = document.getElementById('frutas');

let listaFrutas = [
    'naranja', 
    'manzana', 
    'platano', 
    'sandia'
];

// template literal (backtick)
let html = ``;
listaFrutas.forEach(function(item, index){
    html += `<li>${item}</li>`;
});
lista.innerHTML = html;


// forIn
let usuario = {
    nombre: 'Jesus',
    apellido: 'Gonzales',
    edad: 29,
    mascota: true
}

for (const key in usuario) {
    console.log(usuario[key])
}

var listaUsuarios = [
    {
        nombre: 'Yuri',
        nota: 20
    },
    {
        nombre: 'Diego',
        nota: 18
    },
    {
        nombre: 'Mathieu',
        nota: 17
    }
];

const registro = document.getElementById('registros');
let html_ = ``;
listaUsuarios.forEach(function(item){
    html_ += `<tr>
        <td>${item.nombre}</td>
        <td>${item.nota}</td>
    </tr>`
});
registro.innerHTML = html_;