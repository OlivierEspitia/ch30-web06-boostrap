console.log("Página en construcción con Patricio Estrella");

function clickPatricio() {
    alert("La mayonesa es un instrumento?");
}

function changeColor( elementHtml, color ) {
    // alert("Que emoción, voy a cambiar mi color")
    console.log(elementHtml);
    console.log(color);
    
    elementHtml.style.color = color;
}

function changeColorWithPromt( elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
    elementHtml.innerHTML
    changeColor( elementHtml, color );
}
function resetColor(){
   const refRedColor = document.getElementById("red-color");
   const refGreenColor = document.getElementById("green-color");
   const refPurpleColor = document.getElementById("purple-color");
   const refUserColor = document.getElementById("user-color");
 
  // refRedColor.style.color = "black"
  changeColor(refGreenColor, "black");
  changeColor(refRedColor, "black");
  changeColor(refPurpleColor, "black");
  changeColor(refUserColor, "black");
} 
function changeTextOfUserColor( element, color ) {
    element.innerHTML = "<h3>Ahora soy <em>" + color + "</em> </h3>";
}
function changeName(){
const userName = prompt("Escribe tu nombre cholo", "machete");
const refGretting = document.getElementById("gretting");
refGretting.innerHTML = `Hola ${userName}, la clika te respalda`;
}
      