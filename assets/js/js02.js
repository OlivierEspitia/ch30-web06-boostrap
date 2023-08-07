console.log("Sesión JS02 Uso de funciones");

/*
Funcion: es un conjuton den instrucciones que realiza una tarea o calcula un valor.
  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declradas es que tien hoisting.

sintaxis:
function nomreFuncionCamelCase (parametros){
    // cuerpo de la funcion
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( multiplica(4, 3));

function multiplica(a, b){
    return a * b;
}

/*
-------------- Funciones Expresadas -------------
(function expressiones)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anonimas(no tiene nombre).
las funciones expresadas no tienen hoisting, por que no se carga
en mejoria hasta que se utilize 

sinstaxis: 
const nombreVariable = function nombreFuncion  (parametros){
    instrucciones;
}
*/

const sum = function sumatoria (a,b){
return a + b;
}
console.log(`el resultado de 4 + 2 : ${sum(4,2)}`);

let saludo; //undefined 
const localidad = "buenos aires";

if (localidad == "buenos aires"){
    saludo =  function ( name ) { return `holis ${name}`};
}
    else {
        saludos = function (name) {return `Buenos dias ${name}` }
    }

console.log(saludo("Sergio"));
console.log(saludo("David"));