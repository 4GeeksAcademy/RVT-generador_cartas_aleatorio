import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 
    function randomSuit() {
    let suit = ["♦", "♥", "♠", "♣"];
    let cardSuit = Math.floor(Math.random() * suit.length);

    return suit[cardSuit];
  }

  
  function randomNumber() {
    let number = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randomNumber = Math.floor(Math.random() * number.length);
    return number[randomNumber];
  }
   function cardRed() {
    let suitCard = document.querySelectorAll(".suit");
    suitCard.forEach(element => {
      if (element.innerHTML === "♦" || element.innerHTML === "♥") {
        element.style.color = "red";
      } else {
        element.style.color = "";
      }
    });
  }
  let resultSuit = randomSuit();

  let suitCard = document.querySelectorAll(".suit");
  suitCard.forEach(item => {
    item.innerHTML = resultSuit;
  });

  let resultNumber = randomNumber();

  let numberCard = document.querySelector(".number");
  numberCard.innerHTML = resultNumber;

  let selectCardRed = cardRed();

  function dealCards() {
    let resultSuit = randomSuit();
    let suitCard = document.querySelectorAll(".suit");
    suitCard.forEach(item => {
      item.innerHTML = resultSuit;
    });
    let resultNumber = randomNumber();

    let numberCard = document.querySelector(".number");
    numberCard.innerHTML = resultNumber;

    let selectCardRed = cardRed();
  }

  let dealButton = document.querySelector("#boton");
  dealButton.textContent = "Repartir";

  dealButton.addEventListener("click", dealCards);

  console.log(aleatorioSuit());
  console.log(aleatorioNumber());
  console.log("Hello Rigo from the console!");
};
