import "./style.css";
import { welcomeMessage, goals } from "./messages.js";

const message = document.querySelector("#message");
const goalsList = document.querySelector("#goalsList");
const year = document.querySelector("#year");
const welcomeButton = document.querySelector("#welcomeButton");

message.textContent = welcomeMessage;

goals.forEach((goal) => {
  const goalItem = document.createElement("div");

  goalItem.className = "goal";
  goalItem.textContent = goal;

  goalsList.appendChild(goalItem);
});

year.textContent = new Date().getFullYear();

welcomeButton.addEventListener("click", () => {
  message.textContent = "You just used JavaScript to change this message!";
});