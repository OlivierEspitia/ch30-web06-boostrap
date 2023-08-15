console.log("sesión JS06 manipulación del Dom");
/**
 * Modificar un elemento HTML por medio de su ID
 */
const findElementById = () => {
const title = document.getElementById("title");
console.log(title);
console.log(typeof title);
console.log(title.innerHTML); 
//title.innerHTML = `Generation - Sesión JS 06`;
title.innerHTML = ` <span class="text-primary"> generation </span> - Sesión JS 06`;


}
findElementById();


// -------------------- Encontrar elementos por tu etiqueta ---------------
const changeElementsByTagName = () => {
    const unorderList = document.getElementsByTagName("li"); // coleccion de elementos
    console.log(unorderList); //HTML Collection


     for(const listItem of unorderList){
        listItem.innerHTML = `<span class="text-success fs-4"> ${listItem.innerHTML} </span>`
     }
}
changeElementsByTagName();


// ---------------- Uso de selector universal -------------

const findElementByIdByQuerySelector = () => {
    const element = document.querySelector("h1 span"); //Seleccionar por tag 
console.log(element); 
}
findElementByIdByQuerySelector();


// ------------ Crear nuevo elemento HTML ----------------
// appendChild

const newElement = () =>{
    const newElement = document.createElement ("div"); // <div>    </div>

    newElement.innerHTML = `La Ch30 le gusta:
     <ul>
        <li> El Helado </li>
        <li> El Chisme </li>
        <li> Los corridos tumbados </li>
        <li> Escuchar a Mau </li>
        <li> Ser mejores amigos de Anneth </li>
     </ul>
    `;
const descriptionCh30 = document.querySelector("#descriptionCh30");
descriptionCh30.appendChild(newElement);
}
newElement();

const changeColor = (color) => {
    const descriptionCh30 = document.getElementById("descriptionCh30");
    descriptionCh30.style.color = color; 
    descriptionCh30.style.border = `this solid ${color}`;
}
changeColor ("beige");

// --------------- Propiedades de visualización----------
// Desaparecer el elemento 
// display : none (quitar el elemento del DOM)

const getReferenceTitleGeneration = () => {
return document.getElementById("generation");
}

const displayNoneElement = () => {
const generation = document.getElementById("generation");
generation.style.display = "none"; // quitar el elemento
}

const hiddenElement = () => {
    const generation = document.getElementById("generation");
    generation.style.visibility = "hidden"; // quitar el elemento
}

const resetElements = () => {
    const generation = document.getElementById("generation");
    generation.style.visibility = "visible"; // quitar el elemento

}