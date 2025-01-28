let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userCount = document.querySelector("#user-count");
const compCount = document.getElementById("computer-count");

const compChoiceGen = () => {
  const options = ["rock", "paper", "scissor"];
  const choose = Math.floor(Math.random() * 3);
  return options[choose];
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userCount.innerText = userScore;
    // console.log("win");
    msg.innerText = `You won the game`;
    msg.style.backgroundColor = "#16C47F";
    msg.style.color = "#fff";
  } else {
    computerScore++;
    compCount.innerText = computerScore;
    // console.log("lose");
    msg.innerText = `you loose the game`;
    msg.style.backgroundColor = "#F93827";
    msg.style.color = "#fff";
  }
};

const drawGame = () => {
  console.log("game was draws");
  msg.innerText = "Game is Draw. play Again";
  msg.style.backgroundColor = "#FFD65A";
  msg.style.color = "#000";
};
const playGame = (userChoice) => {
  // console.log("userChoice = ", userChoice);
  const compChoice = compChoiceGen();
  // console.log("com choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
