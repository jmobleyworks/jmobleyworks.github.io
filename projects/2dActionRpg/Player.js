// Player.js

// Initialize player movement variables
var moveUp = false;
var moveDown = false;
var moveLeft = false;
var moveRight = false;

// Modify the event listener for player movement
window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            moveUp = true;
            playerDirection = 0;
            break;
        case 'ArrowDown':
        case 's':
            moveDown = true;
            playerDirection = 2;
            break;
        case 'ArrowLeft':
        case 'a':
            moveLeft = true;
            playerDirection = 3;
            break;
        case 'ArrowRight':
        case 'd':
            moveRight = true;
            playerDirection = 1;
            break;
    }
});

// Add keyup event listener to stop movement when keys are released
window.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            moveUp = false;
            break;
        case 'ArrowDown':
        case 's':
            moveDown = false;
            break;
        case 'ArrowLeft':
        case 'a':
            moveLeft = false;
            break;
        case 'ArrowRight':
        case 'd':
            moveRight = false;
            break;
    }
});

// Update the updatePlayer function in Player.js
function updatePlayer(ctx) {
    //alert("here");
    // Clear the previous player position
    ctx.clearRect(playerX - playerRadius, playerY - playerRadius, playerRadius * 2, playerRadius * 2);

    // Update the player's position based on the direction
    if (moveUp && !checkCollision(playerX, playerY - speed)) { // Up
        playerY -= speed;
    }
    if (moveRight && !checkCollision(playerX + speed, playerY)) { // Right
        playerX += speed;
    }
    if (moveDown && !checkCollision(playerX, playerY + speed)) { // Down
        playerY += speed;
    }
    if (moveLeft && !checkCollision(playerX - speed, playerY)) { // Left
        playerX -= speed;
    }

    // Draw the player at the new position
    drawPlayer(ctx, playerX, playerY, playerDirection);
}

// Update the updatePlayer function in Player.js
function updatePlayerb(ctx) {
    //alert("here");
    // Clear the previous player position
    ctx.clearRect(playerX - playerRadius, playerY - playerRadius, playerRadius * 2, playerRadius * 2);

    // Update the player's position based on the direction
    if (moveUp) { // Up
        playerY -= speed;
    }
    if (moveRight) { // Right
        playerX += speed;
    }
    if (moveDown) { // Down
        playerY += speed;
    }
    if (moveLeft) { // Left
        playerX -= speed;
    }

    // Draw the player at the new position
    drawPlayer(ctx, playerX, playerY, playerDirection);
}



// Function to draw the player's body
function drawPlayer(ctx, x, y, playerDirection) {
    // Define gradient colors
    const bodyGradient = ctx.createRadialGradient(x, y - 20, 5, x, y - 20, 25);
    bodyGradient.addColorStop(0, 'darkgreen');
    bodyGradient.addColorStop(1, 'green');

    const legGradient = ctx.createLinearGradient(x - 8, y + 5, x - 8, y + 20);
    legGradient.addColorStop(0, 'darkgreen');
    legGradient.addColorStop(1, 'green');

    const feetGradient = ctx.createLinearGradient(x - 10, y + 20, x + 10, y + 20);
    feetGradient.addColorStop(0, 'saddlebrown');
    feetGradient.addColorStop(1, 'brown');

    // Draw the player's head (circle)
    ctx.beginPath();
    ctx.arc(x, y - 30, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'lightgrey';
    ctx.fill();

    // Draw the back of the head when looking up or away
    if (playerDirection === 'up' || playerDirection === 'away') {
        ctx.beginPath();
        ctx.moveTo(x - 10, y - 30);
        ctx.lineTo(x + 10, y - 30);
        ctx.strokeStyle = 'lightgrey';
        ctx.stroke();
    }

    // Draw the player's body (rectangle)
    ctx.fillStyle = bodyGradient;
    ctx.fillRect(x - 10, y - 20, 20, 25);

    // Draw the player's legs (rectangle)
    ctx.fillStyle = legGradient;
    ctx.fillRect(x - 8, y + 5, 16, 15);

    // Draw the player's feet (rectangle)
    ctx.fillStyle = feetGradient;
    ctx.fillRect(x - 10, y + 20, 20, 5);

    // Draw the player's arms (lines)
    ctx.strokeStyle = bodyGradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    if (playerDirection === 'left') {
        ctx.moveTo(x - 5, y - 10);
        ctx.lineTo(x - 20, y);
        ctx.moveTo(x + 5, y - 10);
        ctx.lineTo(x - 20, y + 5);
    } else if (playerDirection === 'right') {
        ctx.moveTo(x - 5, y - 10);
        ctx.lineTo(x + 20, y);
        ctx.moveTo(x + 5, y - 10);
        ctx.lineTo(x + 20, y + 5);
    }
    ctx.stroke();

    // Draw additional post-apocalyptic attire based on direction
    if (playerDirection === 'left') {
        // Draw left-facing attire
        // Add your customizations here
    } else if (playerDirection === 'right') {
        // Draw right-facing attire
        // Add your customizations here
    }
}