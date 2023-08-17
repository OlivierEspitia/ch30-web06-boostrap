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
  // primerPaso(); // 01- Inicio de mi programa
   //pasoAsincronco("bby yoda multiverso"); // 5s -> Hola baby yoda
  // tercerPaso(); // 03 - Fin de mi programa 

   // --------------- setInterval -----------------
   //Ejecuta una función de manera reiterada con un tiempo de retardo fijo
   const pasoConIntervalo = () => {
    setInterval( ()=> console.log("Hola " + new Date().toLocaleString() )  , 3000 );
}
primerPaso();
pasoConIntervalo();
tercerPaso();

// ------------------ iniciar y detenr Setinterval -----------------

const starInterval = document.getElementById("startInterval");
const stopInterval = document.getElementById("stopInterval");
const dateH2 = document.getElementById("dateH2");
let idInterval = [] // la referencia del ID que nos proporciona setInterval

startInterval.addEventListener("click", ()=> {
const id = setInterval(() =>{dateH2.innerHTML = new Date().toLocaleString()}, 1000)
idInterval.push(id);
disableStarButton();
});

stopInterval.addEventListener("click", ()=> {
console.table(idInterval);
    clearInterval(idInterval.pop()); //detener el intervalo
    enableStartButton();
});
const stateButtons = (startButtonState= false, stopButtonState= false)=>{
    startInterval.disabled = startButtonState;
    stopInterval.disabled = stopButtonState;
};

const disableStarButton = () => {
    stateButtons(true,false)
};
const enableStartButton = () => {
    stateButtons(false, true);
};
enableStartButton();