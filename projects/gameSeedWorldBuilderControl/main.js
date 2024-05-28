import { worldBuildingElements, promptTemplates } from './options.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.createElement('div');
    app.classList.add('app');
    const demoSection = document.createElement('demo-section');
    const promptSection = document.createElement('prompt-section');
    demoSection.appendChild(promptSection);
    app.appendChild(demoSection);
    createForm(demoSection);
    document.body.appendChild(app);
    updatePrompts();
});



function createForm(container) {
    const formContainer = document.createElement('div');
    formContainer.id = 'world-seed-form';

    // Create control header with label
    const controlHeader = document.createElement('h2');
    controlHeader.classList.add('control-header');
    controlHeader.textContent = 'GameSeed WorldBuilder Control';
    formContainer.appendChild(controlHeader);

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Randomize button
    const randomizeButton = document.createElement('button');
    randomizeButton.classList.add('randomize-button');
    randomizeButton.textContent = 'Randomize';
    // Add event listener for randomize button functionality (implementation not provided)
    randomizeButton.addEventListener('click', () => {
        // Add your logic to randomize form selections here
    });
    buttonContainer.appendChild(randomizeButton);

    // Clear button
    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-button');
    clearButton.textContent = 'Clear';
    // Add event listener for clear button functionality (implementation not provided)
    clearButton.addEventListener('click', () => {
        // Add your logic to clear all selections here
    });
    buttonContainer.appendChild(clearButton);

    formContainer.appendChild(buttonContainer);

    // Loop through each category in worldBuildingElements
    for (const category in worldBuildingElements) {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const controlHeader = document.createElement('div');
        controlHeader.classList.add('control-header');
        controlHeader.textContent = category; // Use category name as label
        formGroup.appendChild(controlHeader);

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('options');

        // Loop through options within the current category
        worldBuildingElements[category].forEach((option) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => {
                optionElement.classList.toggle('selected');
            });
            optionsContainer.appendChild(optionElement);
        });

        formGroup.appendChild(optionsContainer);
        formContainer.appendChild(formGroup);
    }

    container.appendChild(formContainer);
}
function updatePrompts() {
    const shortPrompt = document.getElementById('short-prompt');
    shortPrompt.textContent = 'This is a sample prompt.';
}