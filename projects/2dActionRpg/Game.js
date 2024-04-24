//Game.js

// Function to start the game
function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.body.style.cursor = 'none';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawDayNightCycle();
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    playerX = canvas.width / 2; // Remove 'let'
    playerY = canvas.height / 2; // Remove 'let'
    playerRadius = 10; // Remove 'let'
    playerDirection = 0; // Remove 'let'
    ctx.beginPath();
    ctx.arc(playerX, playerY, playerRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    function update() {
        time = (time + timeSpeed) % 1; // Keep time within the range of 0 to 1
        //drawDayNightCycle();
        drawBackground(ctx);
        ctx.beginPath();
        ctx.arc(playerX, playerY, playerRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        let hours = Math.floor(time * 24);
        let minutes = Math.floor((time * 24 - hours) * 60);
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ampm;
        document.getElementById('clock').innerText = strTime;
        moveEnemy(canvas);
        drawEnemy(ctx);
        requestAnimationFrame(update);
        updateGameScore();
        updatePlayer(ctx);
        updateAttack(playerX, playerY, ctx);
    }

    update();
}