/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suit = ["♦", "♥", "♠", "♣"];
  let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomNumber = number[Math.floor(Math.random() * number.length)];

  if (randomSuit == "♥" || randomSuit == "♠") {
    document.querySelector(".container-fluid").style.color = "red";
  }
  document.querySelector(".topSuit").innerHTML = randomSuit;
  document.querySelector(".bottomSuit").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = randomNumber;
};
