/*
* Estructura Condicional
*/
// IF ELSE
let edad = prompt('Cual es tu edad?');
console.log(typeof(Number(edad)))

if(Number(edad) > 17) {  // si eres mayor de edad ejecuta esto
    // console.log('Eres mayor de edad, puedes ingresar');
    window.location.href = 'bienvenido.html';
}else { // caso contrario
    console.log('Eres menor de edad, no puedes ingresar!')
}
