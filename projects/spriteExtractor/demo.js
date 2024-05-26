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
