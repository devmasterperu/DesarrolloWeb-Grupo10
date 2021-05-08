/*
* Funciones
*/

function saludar() {
    console.log('Hola! Bienvenido al modulo de JavaScript');
}
saludar();

// definición
function sumar(num1, num2) { // parametros
    // console.log(num1 + num2);
    return num1 + num2;
}
// llamado
console.log(sumar(20, 10)); // argumentos

/*
* Tipos de Funciones
*/
// Funciones Declaradas (Lo que hemos visto hasta ahora)

// Funciones Expresadas (Lo que hemos visto hasta ahora)
let resta = function(num1, num2) { // parametros
    return num1 - num2;
}
console.log(resta(20, 10)); // argumentos