// A window onload function that initializes that creates a new game class using the RockPaperScissors class constructor
$(() => window.rps = new RockPaperScissors());

class RockPaperScissors {
  // Constructor method for a RockPaperScissors game class
  constructor() {
    // The three possible moves in string form
    this.moves = ["rock", "paper", "scissors"];

    // A matrix to describe the win conditions (needs a little getting your head around, but saves looooooooads of control flow logic. Not expected to use this, but useful to see)
    this.winMatrix = [
      ["draw", "player", "computer"],
      ["computer", "draw", "player"],
      ["player", "computer", "draw"]
    ];

    // Get the buttons that trigger the moves on the page and save them on the object
    this.moveButtons = $(".move-buttons div");

    // Get the scoreboard elements from the page - in this case saved in a scoreboard object to dry the code up later
    this.scoreboard = {
      player: $("#playerScore"),
      computer: $("#computerScore")
    }

    // Get the element that displays text info to the user from the DOM
    this.message = $("#message");

    // store these properties for use later
    this.playerMove;
    this.computerMove;

    // Run the object prototype function to add event listeners to the DOM elements above
    this.addEventListeners();
  }

  // Function that loops through and adds on click event listeners to each move button
  addEventListeners() {
    this.moveButtons.each((i, button) => $(button).click(this.play.bind(this)));
  }

  // The play function that gets run when a button is clicked
  play() {
    this.getMoves();
    this.getWinner();
    this.updatePage();
  }

  // A function that gets both the player and computer move. It uses information from the DOM element clicked (in this case the id) to get the player move. Uses this.moves array to turn the words eg. rock, paper or scissors, into a number for use with the matrix logic
  getMoves() {
    this.playerMove = this.moves.indexOf(event.target.id);
    this.computerMove = Math.floor(Math.random()*3);
  }

  // A function that uses both the moves to calculate who the winner is, using the win matrix.
  getWinner() {
    this.winner = this.winMatrix[this.computerMove][this.playerMove];
  }

  // A function to update the information on the page once the winner has been calculated - different conditions for draw or win/lose.
  updatePage() {
    if (this.winner !== "draw") {
      let currentScore = this.scoreboard[this.winner].html(parseInt(currentScore)+1);
      $(this.message).text(`${this.winner} wins!`);
    } else {
      $(this.message).text("It's a draw!");
    }
  }
}

