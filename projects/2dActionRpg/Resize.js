function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}// Function to resize the canvas
resizeCanvas(); // Resize the canvas initially
window.addEventListener('resize', resizeCanvas);// Resize the canvas whenever the window is resized