/*
* Hoisting
*/
// Llamada
saludar();
console.log(valorA);

var valorA = 'Hello World';

// Definicion
function saludar(){
    console.log('Hola, te estoy saludando');
}
