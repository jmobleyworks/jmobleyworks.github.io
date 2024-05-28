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