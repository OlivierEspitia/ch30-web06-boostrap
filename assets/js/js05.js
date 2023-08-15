console.log("Sesión Js05 Condiciones y expresiones");

// ----------- Opéradores aritmeticos------------
/* Adición + 
multiplicacion *
substracciób - 
division /
resto %
exponencial ** - mat.pow(2,3) 2**3

*/
let operaciones = 5 * 2 + 3 ** 2 - 4; // 15
console.log(operaciones);
console.log(4 % 3);

//----------- Operadores de asignación ------------
/*
Asigna un valor a su operador izquierdo basandose en el valor
de su operando derecho:

asignación = 

operadores abreviados(compuestos) = 

op1 += op2 -> op1 = op1 + op2
op1 -= op2 -> op1 = op1 + op2
op1 *= op2 -> op1 = op1 * op2
*/

/*let asignación = 3;
console.log(asignacion += 3 * (3 **3) + 10);

*/
// ----------- Operadores unarios ----------------
// solo actuan sobre un operando 
// dinero = - numero
 
// conversión numerica
let numero = 3;
let dinero = - numero; // -3

let pago = + dinero; // -3 no se le cambia el signo 
let intereses = "5.23"; //5.23 numerico
console.log(typeof(intereses)); //number
intereses = 3; 
console.log(intereses += 5 + + "3"); //11

//operador logico not 
let isActive = !true; //false

//operador de incremento y decremento en unidad.
/*
operador de pre-incremento y pre-decremento
++ valor 
-- valor 
operador de post-incremento y post-decremento
valor ++ 
valor --
*/
let number = 10;
++ number;
console.log( number ); //11
number ++; // posincremento
console.log(number); //12

number = 20; 
console.log( ++ number); // 21
console.log( number ++); // 21
console.log(number); //22

let index = 0;
for (     ; index < 5; index++) {
    console.log(index); //
}
console.log("valor index: " + index); // 5

let a = 0, b = 0;
for(    ;a < 3; b = a++) {
    console.log(a,b);
}
console.log(a, b); // 3,2

let x = 3;
let y = ++x;
console.log(`x : ${x++} y:${++y}`); //4, 5




const va = true, vb = true, vc = true; // const va, const vb, const vc
const n1 = n2 = n3 = true // const n1, var n2, varn3

console.log(va || vb && vc); // true 
console.log(va && "holi Crayoli"); // true
console.log(vb && "holi Crayoli"); // false
console.log(NaN && "holi Crayoli"); //NaN
console.log(va && "holi Crayoli"); //"Holi Crayoli"
console.log("" && "Activado"); // false 
console.log("Activado" && ""); // ""
console.log("activado" && "" );


// operador de desestructuración




let dataA = 10; 
let dataB = 20; 
console.log(`${dataA}, b: ${dataB}`);
[dataA, dataB] = [dataB, dataA];


const car = {
    model : "Vento",
    year : 2023,
    brand : "VW",
    color: "red",
    price : 320_000,
  }
// console.log(`Modelo : ${ car.model }`); // Vento
// console.log(`Año : ${ car.year}`); // 2023
const carModel = car.model;
const carYear = car.year;
console.log(`Modelo : ${ carModel }`); // Vento
console.log(`Año : ${ carYear}`); // 2023
// ejercicio
/*
   Hacer una función que realice la división de 2 números
   y entregue (return) en entero el cociente y residuo.

   Llamar a la función y mostrar en la consola el resultado.

*/ 
function division(a, b) {
    if (b === 0) {
        return "No se puede por que su valor es 0";
    }
    return [math.floor(a / b), a % b];    //
}

const [cociente, residuo] = division(10, 2);
console.log(`Cociente: ${cociente}, Residuo: ${residuo}`);

 