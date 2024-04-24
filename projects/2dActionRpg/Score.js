//Score.js

// Initialize the score
let score = 0;

// Function to update the score
function updateScore() {
    document.getElementById('scoreLabel').innerText = 'Score: ' + score;
}

// Call the updateScore function in your game loop
function updateGameScore() {
    // Increase the score over time or when certain events happen
    score += 1;

    // Update the score display
    updateScore();
}
