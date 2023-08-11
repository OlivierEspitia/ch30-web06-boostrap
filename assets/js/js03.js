let firstname = "Sergio";
const lastname = "Torres";
var age = "30";
// let y const no se pueden redeclarar
//let firstname = "Lalo";
//cons lastname = "Garcia";
var age = "24";

{
    let firstname = "Mau";
    const lastname = "Peniche";
    var age = "27";
    const colorFavorito = "azul";
    var comidaFavorita = "Pozole";
console.log(`${firstname} ${lastname}`); //Sergio torres
console.log(age); //30
console.log(colorFavorito); //azul 
console.log(comidaFavorita); //pozole
}
{
    colorFavorito = "morado";
    console.log(colorFavorito);// morado
    console.log(firstname); // mau
    {
        console.log(colorFavorito); //morado
        console.log(firstname); //mau
    }
} 
console.log(`${firstname} ${lastname}`); //Sergio Torres
console.log(age); //39
console.log(comidaFavorita); 
/// --------- condicional if-else -------------
/*
Ejecuta una sentencia si una condicion especifica es
evaluada como verdadera.

*/
const temperatura = 25;
let mensaje = "temperatura ideal de";
if(temperatura === 22){
    mensaje += ` ${temperatura} grados centigrados`;
}
else if (temperatura >= 15 && temperatura<= 21){
    mensaje += ` ${temperatura} grados centigrados es frio`;
}
else if(temperatura >= 23 && temperatura <= 30 ){
    mensaje += ` ${temperatura} grados centigrados es calurosa`

}

else {
    mensaje = `La de ${temperatura} grados centigrados no es ideal =(`;
}

console.log (mensaje);


//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }
*/

/**
 * Establece la velocidad de un ventilador
 * @param {number} velocidad del ventilador 
 * @return {number} mensaje de la velocidad establecida del ventilador 
 * 
 */

const setVelocidadVentilador = (velocidad = 0) => {
    let mensaje;
// la condicional swtich se utiliza la comparación estrica (===)
switch (velocidad) {
    case 0:
        mensaje = "apagado";
        break;
    case 1:
        mensaje = "Velocidad baja";
        break;
    case 2:
        mensaje = "velocidad media";
        break;
    default:
        mensaje = "el nivel no existe";
        break;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador(1)}`);

const mesesDelaño = parseInt(prompt("ingresa el numero del mes (1-12):"));
let mensaje1 = "Es la estación";

if(mesesDelaño === 12 || mesesDelaño === 1 ||  mesesDelaño === 2){
   alert (" Invierno");
} else if (mesesDelaño >= 3 && mesesDelaño <= 5){
    alert (" Primavera"); 
} else if (mesesDelaño >= 6 && mesesDelaño <= 8){
   alert (" Verano");
} else if (mesesDelaño >= 9 && mesesDelaño <= 11){
    alert (" otoño");
} else {
    alert("te dije que del 1 al 12");
}

var mes = parseInt(prompt("Ingresa el número de mes (1-12):"));

switch (mes) {
    case 12:
    case 1:
    case 2:
        alert("Invierno");
        break;
    case 3:
    case 4:
    case 5:
        alert("Primavera");
        break;
    case 6:
    case 7:
    case 8:
        alert("Verano");
        break;
    case 9:
    case 10:
    case 11:
        alert("Otoño");
        break;
    default:
        alert("No existen mas de 12 meses.");
}
// ------------ Operador ternario ---------------
/* 
es el unico operador de javaSceipt que tiene 3 operandos
generalmente se utiliza como opcion a la sentencia if-else.

Sinstaxis: 
 condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa;

 */
const pagoTarjetaCredito = true;

/*let msj;
if(pagoTarjetaCredito === true) msj= "A realizado el pago de su TC";
else msj= "No ha realizado  el pago TC";
*/
const msj = pagoTarjetaCredito === 0 ? "A realizado el pago de TC" : "No ha realizado el pago de TC"
console.log(`El usuario ${msj}`);