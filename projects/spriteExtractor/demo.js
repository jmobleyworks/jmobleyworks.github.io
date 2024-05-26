// demo.js
import { generateWorldSeed, synthesizePixelArtPrompt } from './world.js';

// Set up file input event listener
document.getElementById('localUploadButton').addEventListener('click', function() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = handleFileUpload;
    fileInput.click();
});
document.getElementById('dalle3Button').addEventListener('click', generateImageFromDalle3);

    // spriteExtractor.js

// Extract sprites from the uploaded image
function extractSpritesFromImage(image) {
    // Placeholder for sprite extraction logic
    // Replace with actual implementation
    const spriteContainer = document.getElementById('spriteContainer');
    spriteContainer.innerHTML = '<p>Sprites extracted successfully (dummy content).</p>';
    const extractedSprite = document.createElement('img');
    extractedSprite.src = image.src;  // Dummy sprite
    spriteContainer.appendChild(extractedSprite);
}

// Handle file upload
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const image = new Image();
        image.onload = function() {
            extractSpritesFromImage(image);
        };
        image.src = e.target.result;
        document.getElementById('generatedImage').src = image.src;
    };
    reader.readAsDataURL(file);
}



// Placeholder function for DALL-E 3 image generation
function generateImageFromDalle3() {
    // Replace with actual DALL-E 3 API call and image generation logic
    const dummyImageUrl = 'https://via.placeholder.com/150';
    const image = new Image();
    image.src = dummyImageUrl;
    image.onload = function() {
        document.getElementById('generatedImage').src = image.src;
        extractSpritesFromImage(image);
    };
}





// Generate and display world seed with prompt
function generateAndDisplayWorldSeed() {
    const worldSeed = generateWorldSeed();
    const pixelArtPrompt = synthesizePixelArtPrompt(worldSeed);

    const worldSeedDisplay = document.getElementById('worldSeedDisplay');
    worldSeedDisplay.innerHTML = '<h3>Generated World Seed:</h3>';

    const ul = document.createElement('ul');
    for (const key in worldSeed) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${worldSeed[key]}`;
        ul.appendChild(li);
    }
    worldSeedDisplay.appendChild(ul);

    const promptDisplay = document.createElement('div');
    promptDisplay.innerHTML = `<h3>Synthesized Pixel Art Prompt:</h3><p>${pixelArtPrompt}</p>`;
    worldSeedDisplay.appendChild(promptDisplay);
}

// Add event listener to the Generate World Seed button
document.getElementById('generateSeedButton').addEventListener('click', generateAndDisplayWorldSeed);
