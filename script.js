//skapa alla element som behöver vara på sidan
let nameDiv = document.createElement("div");
let arrayDiv = document.createElement("div");
let nameParagraf = document.createElement("p");
//skapa sträng variable med mitt namn
let myName = document.createTextNode("Alma");
//skapa och lägga till element i array
let myArray = ["Programmera", "Måla", "Ju-jutsu", "Hjälpa andra"];

//appendade mitt namn till <p>
nameParagraf.appendChild(myName);
//appendar <P> till <div>
nameDiv.appendChild(nameParagraf);

document.body.appendChild(nameDiv);
document.body.appendChild(arrayDiv);

console.log();
