let playerWins = 0;
let computerWins = 0;

function game(option) {
    userChoice = option;
    // Generates computers choice by using Math.random();
    var compChoice = Math.random();
    // assigning 1/3 to each of the choices
    if (compChoice < .34) {
        compChoice = "rock";
    }
    else if (compChoice < .66) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }

    function winner() {
        playerWins++;
        $("#playerwins").html(playerWins);
        $('#results').html("You win");
    }

    function CompWin() {
        computerWins++;
        $("#computerwins").html(computerWins);
        $('#results').html("Computer wins");
    }
    // comparing the user choice and computer choice    
    result = compare(userChoice, compChoice);

    function compare(userChoice, compChoice) {
        if (userChoice === compChoice) {
            $('#results').html("It's a draw");
        } else {
            if (userChoice == 'rock') {
                if (compChoice == 'scissors') {
                    winner();
                } else {
                    CompWin();
                }
            } else {
                if (userChoice == 'paper') {
                    if (compChoice == 'rock') {
                        winner();
                    } else {
                        CompWin();
                    }
                } else {
                    if (userChoice == 'scissors') {
                        if (compChoice == 'paper') {
                            winner();
                        }
                        else {
                            CompWin();
                        }
                    }
                }
            }
        }
    }
}