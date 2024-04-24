//PlayerAttack.js

// Function to draw the attack
function drawAttack(playerX, playerY, ctx) {
    // Set the length of the sword
    let swordLength = 40;

    // Calculate the end point of the sword based on player direction and attack angle
    let swordX, swordY;
    if (playerDirection !== -1) {
        swordX = playerX + Math.cos(attackAngle) * swordLength;
        swordY = playerY + Math.sin(attackAngle) * swordLength;
    } else {
        switch (Math.floor(attackAngle / (Math.PI / 2))) {
            case 0: // Up
                swordX = playerX;
                swordY = playerY - swordLength;
                break;
            case 1: // Right
                swordX = playerX + swordLength;
                swordY = playerY;
                break;
            case 2: // Down
                swordX = playerX;
                swordY = playerY + swordLength;
                break;
            case 3: // Left
                swordX = playerX - swordLength;
                swordY = playerY;
                break;
        }
    }

    // Flip the sword position based on playerDirection
    if (playerDirection === 1 || playerDirection === 3) {
        let deltaX = swordX - playerX;
        swordX = playerX - deltaX;
    }

    // Flip the sword position for upward and downward swings
    if (playerDirection === 0 || playerDirection === 2) {
        let deltaY = swordY - playerY;
        swordY = playerY - deltaY;
    }

    // Draw the sword
    ctx.beginPath();
    ctx.moveTo(playerX, playerY);
    ctx.lineTo(swordX, swordY);
    ctx.strokeStyle = 'white';
    ctx.stroke();
}




// Add an event listener for the attack key press to start and stop the attack animation
window.addEventListener('keydown', function (event) {
    if ((event.key === 'Control' || event.key === ' ') && !isAttacking) {
        // Start the attack
        isAttacking = true;
        attackAngle = playerDirection * Math.PI / 2; // Use playerDirection to determine attack direction
    }
});

// Add an event listener for the attack key release to stop the attack animation
window.addEventListener('keyup', function (event) {
    if (event.key === 'Control' || event.key === ' ') {
        // Stop the attack
        isAttacking = false;
        attackAngle = 0; // Reset attack angle
    }
});

// Update the attack in your game loop
function updateAttack(playerX, playerY, ctx) {
    // If an attack is in progress
    if (isAttacking) {
        // Draw the attack
        drawAttack(playerX, playerY, ctx);

        // Increase the attack angle
        attackAngle += Math.PI / 30;
    }
}

