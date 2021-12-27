// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
// turn to alternate between X and O
let turn = 0;
// Filling button with X or O and increasing the turn counter if the operation is successful
function fillButton(index, text) {
  // This function fills
  if (
    document.getElementById(index).innerHTML == "X" ||
    document.getElementById(index).innerHTML == "O"
  ) {
    alert(`invalid input`);
  } else {
    document.getElementById(index).innerHTML = text;
    turn++;
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNUCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);

  if (turn <= 8) {
    fillButton(index, checkPlayer());
    checkWinner();
  } else {
    alert(`It is a draw`);
    restartGame();
  }
}

// in this function you should check if the player is X or O
// ....
function checkPlayer() {
  if (turn % 2 == 0) {
    return "X";
  }
  return "O";
}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner
function checkWinner() {
  //checking if X is winning
  let r1 =
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(2).innerHTML == "X" &&
    document.getElementById(3).innerHTML == "X";
  let r2 =
    document.getElementById(4).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(6).innerHTML == "X";
  let r3 =
    document.getElementById(7).innerHTML == "X" &&
    document.getElementById(8).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X";
  let c1 =
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(4).innerHTML == "X" &&
    document.getElementById(7).innerHTML == "X";
  let c2 =
    document.getElementById(2).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(8).innerHTML == "X";
  let c3 =
    document.getElementById(3).innerHTML == "X" &&
    document.getElementById(6).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X";
  let d1 =
    document.getElementById(1).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(9).innerHTML == "X";
  let d2 =
    document.getElementById(7).innerHTML == "X" &&
    document.getElementById(5).innerHTML == "X" &&
    document.getElementById(3).innerHTML == "X";
  if (r1 | r2 | r3 | c1 | c2 | c3 | d1 | d2) {
    winningAlert("X");
  }
  //Checking if O is winning
  r1 =
    document.getElementById(1).innerHTML == "O" &&
    document.getElementById(2).innerHTML == "O" &&
    document.getElementById(3).innerHTML == "O";
  r2 =
    document.getElementById(4).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(6).innerHTML == "O";
  r3 =
    document.getElementById(7).innerHTML == "O" &&
    document.getElementById(8).innerHTML == "O" &&
    document.getElementById(9).innerHTML == "O";
  c1 =
    document.getElementById(1).innerHTML == "O" &&
    document.getElementById(4).innerHTML == "O" &&
    document.getElementById(7).innerHTML == "O";
  c2 =
    document.getElementById(2).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(8).innerHTML == "O";
  c3 =
    document.getElementById(3).innerHTML == "O" &&
    document.getElementById(6).innerHTML == "O" &&
    document.getElementById(9).innerHTML == "O";
  d1 =
    document.getElementById(1).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(9).innerHTML == "O";
  d2 =
    document.getElementById(7).innerHTML == "O" &&
    document.getElementById(5).innerHTML == "O" &&
    document.getElementById(3).innerHTML == "O";
  if (r1 | r2 | r3 | c1 | c2 | c3 | d1 | d2) {
    winningAlert("O");
  }
}
// function restart game
function restartGame() {
  location.reload();
}
// premade a function. You can use this function to present an alert to say somene wins
function winningAlert(winner) {
  alert(`Horraaay, ${winner} wins!`);
  restartGame();
}
