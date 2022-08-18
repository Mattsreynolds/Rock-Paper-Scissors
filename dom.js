const rock = document.getElementById("rock");
rock.addEventListener("click", function(e) {
    playerSelection = "rock"
    game()
});
const paper = document.getElementById("paper");
paper.addEventListener("click", function(e) {
    playerSelection = "paper"
    game()
});
const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function(e) {
    playerSelection = "scissors"
    game()
});