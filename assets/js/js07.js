console.log("Sesion JS 07 Asincronìa");


// ------------- Programación sincrònica (secuencial) -----------

const primerPaso = () => {
    console.log("01 - inicio de mi programa");
}
const segundoPaso = () => {
    console.log("02 - desarrollo de mi programa");
}
const tercerPaso = () => {
    console.log("03 - fin de mi programa");
}
primerPaso();
segundoPaso();
tercerPaso();

// ------------------  Programacion asincrona ------------
/*
setTimeOut()

establece un temporizador que ejecuta una funciòn de callback una vez que expire si el temporador

sintaxis:
setTimeout(fncCallback, tiempo_ms);
setTimeout(()=>{} , tiempo_ms);

*/

   const saludo = (name) => console.log(`Hola ${name}`);

   const pasoAsincronco = (name) => {
    //setTimeout(saludo, 5000, name);
setTimeout((person)=> console.log(`Hola ${name}`), 5000);   
}
   console.log("**********")
   primerPaso(); // 01- Inicio de mi programa
   pasoAsincronco("bby yoda multiverso"); // 5s -> Hola baby yoda
   tercerPaso(); // 03 - Fin de mi programa 