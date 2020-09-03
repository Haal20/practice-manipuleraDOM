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

//skriver ut mitt namn på documentsidan
document.body.appendChild(nameDiv);
arrayDiv.innerHTML = pushArray();

//funktion att kalla på när jag vill ha min lista
function pushArray() {
  //skapa <ul>
  document.body.insertAdjacentHTML("beforeend", "<ul></ul>");

  //hämta <ul>
  let lista = document.getElementsByTagName("ul")[0];

  //gör en loop för att hitta varje element i arrayen
  for (i = 0; i < myArray.length; i++) {
    lista.insertAdjacentHTML("beforeend", "<li>" + myArray[i] + "</li>");
  }
}
