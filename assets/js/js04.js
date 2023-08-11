// -------uso de for... of--------
/*
Ejecuta una sentencia por cada elemento en un objeto iterable(array, colección. string).
sintaxis:
for (const iterator of object){

}
*/
console.table(personasEnCh30);

const myPet = "Kraken";
for (const character of myPet) {
    console.log(character);
}
for (const equipo of personasEnCh30) {
    console.log(equipo);
    for (const persona of equipo) {
        console.log(equipo);
    
    }
}
/* -----------------For each---------------

Metodo que se utiliza para iterar coleccones, arreglos
permiote ejecutar una funcion por cada elemento del arreglo.


*/
/*
console.table(personasEnCh30);

function iterarEquipos(equipo, indice, arreglo){
    console.log(`Indice ${indice}: ${equipo}`)
    equipo.forEach(iterarPersonas);
    return equipo; //arreglo de cada equipo integrador
}
personasEnCh30.forEach(iterarEquipos);
*/

