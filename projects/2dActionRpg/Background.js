// Background.js

// Constants for tile types
const TILE_EMPTY = 0;  // Empty space
const TILE_WALL = 1;   // Wall
const TILE_TREASURE = 2; // Treasure
const TILE_ENEMY = 3;  // Enemy

// Variable to track if the maze has been generated
let mazeGenerated = false;

// Function to generate a maze based on a random seed
function generateMaze(seed, width, height) {
    // Initialize the maze with all walls
    maze = [];
    for (let y = 0; y < height; y++) {
        maze[y] = [];
        for (let x = 0; x < width; x++) {
            maze[y][x] = TILE_WALL;
        }
    }

    // Helper function to recursively generate the maze
    function recursiveBacktrack(x, y) {
        // Mark the current cell as empty
        maze[y][x] = TILE_EMPTY;

        // Directions to move in (up, right, down, left)
        const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];

        // Shuffle the directions randomly
        directions.sort(() => Math.random() - 0.5);

        // Try each direction
        for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            const nx = x + dx * 2;
            const ny = y + dy * 2;

            // Check if the next cell is within bounds and unvisited
            if (nx >= 0 && ny >= 0 && nx < width && ny < height && maze[ny][nx] === TILE_WALL) {
                // Mark the wall between the current and next cell as empty
                maze[y + dy][x + dx] = TILE_EMPTY;
                // Recursively call the function for the next cell
                recursiveBacktrack(nx, ny);
            }
        }
    }


    // Start generating the maze from a random cell
    const startX = Math.floor(Math.random() * (width / 2)) * 2 + 1;
    const startY = Math.floor(Math.random() * (height / 2)) * 2 + 1;
    recursiveBacktrack(startX, startY);

    // Optionally, place treasure and enemies in the maze
    // You can customize this part based on your game's mechanics and rules

    return maze;
}

function generateMazeFromScratch(){
    // Calculate tile sizes for both width and height
    tileSizeX = ctx.canvas.width / playerRadius;
    tileSizeY = ctx.canvas.height / playerRadius;
    // Generate the maze if it hasn't been generated yet
    if (!mazeGenerated) {
        mazeWidth = Math.floor(ctx.canvas.width / tileSizeX);
        mazeHeight = Math.floor(ctx.canvas.height / tileSizeY);
        mazeSeed = Math.random(); // Generate a random seed for the maze
        maze = generateMaze(mazeSeed, mazeWidth, mazeHeight);
        mazeGenerated = true; // Mark the maze as generated
    }
    return maze;
}

// Function to draw the background (maze) on the canvas
function drawBackground(ctx) {
    //const playerSizeMultiplier = playerRadius*1;
    generateMazeFromScratch();



    // Iterate through the maze array and draw each tile based on its type
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            let tile = maze[y][x];
            let xPos = (x) * tileSizeX; // Adding 1 for padding
            let yPos = (y) * tileSizeY; // Adding 1 for padding

            // Draw the tile based on its type
            switch (tile) {
                case TILE_EMPTY:
                    // Draw an empty space
                    ctx.fillStyle = 'white';
                    ctx.fillRect(xPos, yPos, tileSizeX, tileSizeY);
                    break;
                case TILE_WALL:
                    // Draw a wall
                    ctx.fillStyle = 'black';
                    ctx.fillRect(xPos, yPos, tileSizeX, tileSizeY);
                    break;
                case TILE_TREASURE:
                    // Draw treasure
                    ctx.fillStyle = 'gold';
                    ctx.fillRect(xPos, yPos, tileSizeX, tileSizeY);
                    break;
                case TILE_ENEMY:
                    // Draw an enemy
                    ctx.fillStyle = 'red';
                    ctx.fillRect(xPos, yPos, tileSizeX, tileSizeY);
                    break;
                // Add more cases for additional tile types as needed
            }
        }
    }
}
