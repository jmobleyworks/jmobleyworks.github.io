// Demo.js
import { createWorldSeedForm, updatePrompts } from './world.js'; // Assuming world.js is in the same directory

document.addEventListener('DOMContentLoaded', () => {
  /*
  const localUploadButton = document.getElementById('localUploadButton');
  const dalle3Button = document.getElementById('dalle3Button');
  const generatedImage = document.getElementById('generatedImage');
  const spriteContainer = document.getElementById('spriteContainer');

  localUploadButton.addEventListener('change', handleLocalUpload);
  dalle3Button.addEventListener('click', generateImageFromDalle3);

  function handleLocalUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        generatedImage.src = e.target.result;
        extractSprites(generatedImage.src);
      };
      reader.readAsDataURL(file);
    }
  }

  function generateImageFromDalle3() {
    // Placeholder function to simulate DALL-E 3 image generation
    const mockImageUrl = 'path/to/mock-image.png'; // Replace with actual DALL-E 3 API call
    generatedImage.src = mockImageUrl;
    extractSprites(mockImageUrl);
  }

  function extractSprites(imageSrc) {
    // Placeholder for sprite extraction logic
    spriteContainer.innerHTML = '';
    const numSprites = 5; // Example number of sprites
    for (let i = 0; i < numSprites; i++) {
      const sprite = document.createElement('div');
      sprite.className = 'sprite';
      sprite.style.backgroundImage = `url(${imageSrc})`;
      sprite.style.backgroundPosition = `${-i * 32}px 0`; // Adjust as needed for sprite sheet
      spriteContainer.appendChild(sprite);
    }
  }
*/
  createWorldSeedForm(); // from world.js
  //updatePrompts(); // from world.js

});
