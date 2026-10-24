let attempts = 0;
let randomNum = Math.floor(Math.random() * 100 + 1);

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptText = document.getElementById("attempts");

function checkGuess(){
    const userValue = Number(guess.value);
    attempts++;

    if(userValue === randomNum){
        hint.textContent = 
        "Congratulations, You Guessed It!";
    } else if(userValue < randomNum){
        hint.textContent = "Too low! try again.";
    } else{
        hint.textContent = "Too high! Try again.";
    }

    attemptText.textContent = "Attempts: " + attempts;  
}

submit.addEventListener("click", checkGuess);




