/*
* Estructura Condicional
*/
// SWITCH
let dia = new Date().getDay();
// let dia = 4;
switch (dia) {
    case 1:
        console.log('LUNES');
        break;
    case 2:
        console.log('MARTES');
        break;
    case 3:
        console.log('MIERCOLES');
        break;
    case 4:
        console.log('JUEVES');
        break;
    case 5:
        console.log('VIERNES');
        break;
    case 6:
        console.log('SABADO');
        break;
    default:
        console.log('DOMINGO');
        break;
}
