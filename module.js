let answer;

// Function to save the user's answer
function saveAnswer() {
    answer = Number(document.getElementById("i1").value);
    alert("Answer saved: " + answer);
}

// Add event listener to the check button
document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.querySelector('button:nth-of-type(2)');
    checkButton.addEventListener('click', checkAnswer);
});

// Function to check if the answer is correct
function checkAnswer() {
    // The answer to the riddle "I am an odd number. If you take away an alphabet from me, I become even" is 7
    // Because "seven" minus "s" becomes "even"
    if (answer === 7) {
        alert("Correct! Seven minus 's' becomes 'even'");
    } 
    else if (answer > 7 && answer <= 10) {
        alert("Your answer is a bit high. Try again!");
    }
    else if (answer > 10) {
        alert("Your answer is too high. Try again!");
    }
    else if (answer < 7 && answer >= 4) {
        alert("Your answer is a bit low. Try again!");
    }
    else if (answer < 4) {
        alert("Your answer is too low. Try again!");
    }
    }