const title = document.getElementById("title");
const player = document.getElementById("player-select");
const cpu = document.getElementById("cpu-select");
const totalWin = document.getElementById("ganados");
const totalLose = document.getElementById("perdidos");
const total = document.getElementById("total");
const tie = document.getElementById("empates");

// player
document.getElementById("piedra").onclick = () => jugar("piedra");
document.getElementById("papel").onclick = () => jugar("papel");
document.getElementById("tijera").onclick = () => jugar("tijera");

// variabels
let counter = 0;
let win = 0;
let lose = 0;
const options = ["piedra", "papel", "tijera"];

function jugar(selection) {
  player.textContent = emotes(selection);

  // cumpuer selct
  const computer = options[Math.floor(Math.random() * 3)];
  cpu.textContent = emotes(computer);

  // who won !!!
  if (selection == computer) {
    title.textContent = "Emepate !!!";
    actualizer();
    tie.textContent = counter - (win + lose);
    return;
  } else if (
    (selection == "piedra" && computer == "papel") ||
    (selection == "tijera" && computer == "piedra") ||
    (selection == "papel" && computer == "tijera")
  ) {
    title.textContent = "Perdiste !!!";
    actualizer();
    lose++;
    totalLose.textContent = lose;
    return;
  } else {
    title.textContent = "Ganaste !!!";
    actualizer();
    win++;
    totalWin.textContent = win;
    return;
  }
}

function emotes(gesture) {
  switch (gesture) {
    case "papel":
      return "✋";
    case "tijera":
      return "✌";
    default:
      return "✊";
  }
}

// actulizer
function actualizer() {
  counter++;
  total.textContent = counter;
}

// function emotes(gesture) {
//   if ((gesture == "piedra")) {
//     return "✊";
//   } else if ((gesture == "papel")) {
//     return "✋";
//   } else {
//     return "✌";
//   }
// }
