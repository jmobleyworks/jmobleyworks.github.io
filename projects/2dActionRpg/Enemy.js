//Enemy.js

// Define the enemy's properties
let enemyX = Math.random() * window.innerWidth;
let enemyY = Math.random() * window.innerHeight;
let enemyRadius = 10;
let enemySpeed = 2;

// Function to move the enemy
function moveEnemy(canvas) {
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    enemyX += dx * enemySpeed;
    enemyY += dy * enemySpeed;
    // Keep the enemy within the bounds of the canvas
    enemyX = Math.max(Math.min(enemyX, canvas.width - enemyRadius), enemyRadius);
    enemyY = Math.max(Math.min(enemyY, canvas.height - enemyRadius), enemyRadius);
}

// Function to draw the enemy
function drawEnemy(ctx) {
    ctx.beginPath();
    ctx.arc(enemyX, enemyY, enemyRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'red';
    ctx.fill();
}
