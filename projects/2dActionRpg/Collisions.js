// Collisions.js

// Function to check if a given position collides with a wall in the maze
function checkCollision(x, y) {
    let mazeLength = maze[0].length * 100;
    if (x < -mazeLength || x >= mazeLength || y < -mazeLength || y >= mazeLength) {
        alert("out of bound, player x=" + playerX + " player y =" + playerY);
    }
    if (maze[Math.trunc(y / 100)][Math.trunc(x / 100)] === TILE_WALL) {
        playerCollidingWithWall = true;
    } else playerCollidingWithWall = false;

    return maze[Math.trunc(y / 100)][Math.trunc(x / 100)] === TILE_WALL;
}