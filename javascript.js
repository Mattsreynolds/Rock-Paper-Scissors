let win = 0;
let lose = 0;
let round = 1;
let won = ('You won the game!');
let tie = ('Tie game')
let lost = ('You lost the game!');
//Loops 5 rounds for a game
function game() {
    
        // Player enters rock, paper or scissors const playerSelection = "rock";
        //let playerSelection = window.prompt('Enter "Rock", "Paper" or "Scissors"');
        //playerSelection = playerSelection.toLowerCase()

        // Computer generates a random rock, paper or scissors
        function getRandomInt(max) {
        return Math.floor(Math.random() * max);
        }
        let computerSelection = getRandomInt(3);
        
        if (computerSelection == 0) {
            computerSelection = 'rock';
        } else if (computerSelection == 1) {
            computerSelection = 'paper';
        } else
            computerSelection = 'scissors';

        // Compare player choice to computer choice
        function playRound(w, l, t) {
            if (playerSelection == computerSelection) {
                return t;
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                ++win;
                return w + ' Rock beats scissors';
            } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                ++lose;
                return l + ' Paper beats rock';
            } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                ++win;
                return w + ' Paper beats rock';            
            } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                ++lose;
                return l + ' Scissors beat paper';            
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                ++win;
                return w + ' Scissors beat paper';            
            } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                ++lose;
                return l + ' Rock beats scissors';            
            }

        } 
        
        //Call the function playRound to determine winner of a round  
        let result = playRound('You win!', 'You lose!', 'It\'s a tie');
        
        //Display results of each round
        document.getElementById("round").innerHTML = "Round  " + round;
        document.getElementById("result").innerHTML = result;
        console.log(playerSelection);
        console.log(result);
        console.log(computerSelection); 
        document.getElementById("human").innerHTML = "Human  " + win;
        console.log(win);
        document.getElementById("computa").innerHTML = "Computer  " + lose;
        console.log(lose);

        round++;
    //}
 
//game()

// Display who won
        if (round == 6)
            if (win > lose) {                
                document.getElementById("result").innerHTML = won;
                } else if (win == lose ) {   
                    document.getElementById("result").innerHTML = tie;
                } else 
                    document.getElementById("result").innerHTML = lost;

        if (round ==7) {
            document.location.reload();
        }
                    

}