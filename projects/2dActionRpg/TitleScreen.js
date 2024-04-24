 // Create a new image object
 var titleScreen = new Image();

 // Set the source of the image
 titleScreen.src = 'https://jmobleyworks.github.io/projects/2dActionRpg/Assets/TitleScreen.png';

 // Draw the image on the canvas once it's loaded
 titleScreen.onload = function () {
     let aspectRatio = titleScreen.width / titleScreen.height;
     let newWidth = canvas.height * aspectRatio;
     let newHeight = canvas.height;
     if (newWidth > canvas.width) {
         newWidth = canvas.width;
         newHeight = canvas.width / aspectRatio;
     }
     let xOffset = (canvas.width - newWidth) / 2;
     let yOffset = (canvas.height - newHeight) / 2;
     ctx.fillStyle = 'black';
     ctx.fillRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(titleScreen, xOffset, yOffset, newWidth, newHeight);
 }

 // Log any errors while loading the image
 titleScreen.onerror = function () {
     console.error('Error loading the image.');
 }

 // Add a click event listener to the start button
 document.getElementById('startButton').addEventListener('click', startFullScreen);

 function startFullScreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
    }
    document.body.style.overflow = 'hidden';
    setupGame();
    startGame();
}
