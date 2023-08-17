console.log('Sesion JS 07 Promise')

/* 
Las promesas es un patron asíncronico que se utiliza
para manejar operaciones asíncronas

Las promesas permite realizar tareas asincronas y 
manejar los resultados (exito o error) en un momento posterior


Las promesas tiene 3 estados:

1.- Pending: estado inicial de una promesa antes de que se resuelva o rechace
2.- Resolve: La promesa se resuleve con un valor
3.- Rejected: La promesa se rechaza con una razon 

Resolve y reject son funciones de callback 
Para crear una promesa se usa el contructor de la clase Promise

sintaxis:
    const pinkyPromise = new Promise( fncCallback);

*/

//const pinkyPromise = new Promise( () => {} );
//const pinkyPromise = new Promise( ( fncCallBackResolve, fncCallBackReject ) => {} );
const pinkyPromise = new Promise( ( fncCallBackResolve, fncCallBackReject ) => {
    const menorEdad = false

    if (menorEdad)
        fncCallBackResolve('Hay que estar siempre juntos')
    else
        fncCallBackReject( { code: 404, message: 'Ni te topo' })
} );


// Consumir las promesas
// Se usa los metodos then, catch y finally 

console.log('---- Promesas -----')
console.log('Antes de consumir la promesa')

/* pinkyPromise
    .then() // Se ejecuta una función de callback si la promesa fue resuelta
    .catch() // se ejecuta una función de callback si la promesa fue rechazada
    .finally(); // se ejecuta una función de callback 
                //después de que la promesa fue resuelta o rechazada
 */
    pinkyPromise
    .then( ( response )=>{ console.log(`Promesa resuelta: ${response}`) } ) 
    .catch( ( error )=>{ console.log(`Promesa rechazada: ${ error.message }`)})
    .finally( ()=>{ console.log(`Se ha terminado de resolver la promesa`)} );


console.log('Despues de consumir la promesa')

const gretting = ( name ) => {
    const firstChar = name.chartAt(0).toLowerCase()
    const myPromise = new Promise( (resolve, reject) => {
        if( firstChar === 'a' )
            
            setTimeout( ()=> resolve( { code: 200 , message: `Soy ${name}, hola a todos!`}), 5000)
        else if( firstChar === 'l')
            resolve({code:201, message: `Soy ${name} Saludos a toda la banda de la ch30,taka taka taka`})
        else 
            reject( {code: 404, message: `No estoy disponible`})
        } );
        return myPromise;
}
/*gretting("Ana")
.then(response => console.log (response.code, response.message));
.catch( error => console.log ( error.code, error.message));
*/

// ---------- Consumir las promesas con async y await ------------ 
/*
Async y Await facilita la escritura y lectura de còdigo asìncrono.
permite escribir còdigo asìncrono de manera similar a como se describiria 
codigo sincrono.
*/

async function grettingCh30( name ){
    console.log("----saludos a la bandita de la ch30-----");
   const result = await gretting("Anneth");
   console.log(result);
   console.log("---fin del saludo-----")
}
const grettingAll = async () => {
  try {
    await grettingCh30("Anneth");
    await grettingCh30("Leonardo");
    await grettingCh30("Mau");
}
catch(error){
    console.table(error)
}
}
grettingCh30();