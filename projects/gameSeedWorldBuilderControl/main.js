import { worldBuildingElements, promptTemplates } from './options.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.createElement('div');
    app.classList.add('app');
    createForm(document.getElementById('WorldSeedBuilder'));
});

function createForm(container) {
    const formContainer = document.createElement('div');
    formContainer.id = 'world-seed-form';

    // Create control header with label
    const controlHeader = document.createElement('h2');
    controlHeader.classList.add('control-header');
    controlHeader.textContent = 'WorldSeed Builder';
    formContainer.appendChild(controlHeader);
    


    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Create short prompt text area
    const shortPrompt = document.createElement('textarea');
    shortPrompt.id = "short-prompt";
    shortPrompt.classList.add('short-prompt');
    shortPrompt.textContent = "Game Prompt";
    buttonContainer.appendChild(shortPrompt);

    // Randomize button
    const randomizeButton = document.createElement('button');
    randomizeButton.classList.add('randomize-button');
    randomizeButton.textContent = 'Randomize';
    randomizeButton.addEventListener('click', randomizeForm);
    buttonContainer.appendChild(randomizeButton);

    // Clear button
    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-button');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', clearForm);
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
    randomizeForm();
}

function updatePrompts() {
    const shortPrompt = document.getElementById('short-prompt');
    const outputString = (Array.from(document.getElementsByClassName('form-group')) || ["None"])
    .reduce((acc, formGroup) => {
        // Extract selected options within the form group
        const selectedOptions = formGroup.querySelectorAll('.option.selected');
        // Check if any options are selected
        if (selectedOptions.length > 0) {
            // Build a string representation of selected options
            const optionValues = Array.from(selectedOptions).map(option => option.textContent);
            const groupValue = `${formGroup.querySelector('.control-header').textContent}: ${optionValues.join(', ')}`;
            return acc + groupValue + '\n';
        } else {
            return acc; // No selected options, skip to next form group
        }
    }, '');
    shortPrompt.textContent = outputString;
  }

function randomizeForm() {
    const form = document.getElementById('world-seed-form');
    const options = form.querySelectorAll('.option'); // Select all option elements

    options.forEach((option) => {
        option.classList.remove('selected'); // Deselect all options first
        if (Math.random() < 0.5) { // Random chance (50%) to select
            option.classList.add('selected');
        }
    });
    updatePrompts();
}

function clearForm() {
    const form = document.getElementById('world-seed-form');
    const options = form.querySelectorAll('.option'); // Select all option elements

    options.forEach((option) => {
        option.classList.remove('selected'); // Deselect all options
    });
}