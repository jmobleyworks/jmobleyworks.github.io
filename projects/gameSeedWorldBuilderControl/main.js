import { formGroups } from './formData.js';
import './styles/app';
import './styles/promptHeader.css';
import './styles/promptSection.css';
import './styles/demoSection.css';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.createElement('div');
  app.classList.add('app');

  const header = document.createElement('header');
  header.classList.add('header');
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = `GameSeed WorldBuilder Control`;
  header.appendChild(headerTitle);
  app.appendChild(header);

  const description = document.createElement('p');
  description.textContent = 'This world building tool helps game designers generate world seeds for games.';
  app.appendChild(description);

  const whatIsWorldSeed = document.createElement('h2');
  whatIsWorldSeed.textContent = 'What is a world seed?';
  app.appendChild(whatIsWorldSeed);

  const worldSeedDescription = document.createElement('p');
  worldSeedDescription.textContent = 'A world seed is a set of game design decisions that specify a game world.';
  app.appendChild(worldSeedDescription);

  const worldBuilderDescription = document.createElement('p');
  worldBuilderDescription.textContent = 'This WorldBuilder Control lets users generate random world seeds if they so choose.';
  app.appendChild(worldBuilderDescription);

  const customSeedDescription = document.createElement('p');
  customSeedDescription.textContent = 'Users can also create custom world seedd by selecting options from various categories.';
  app.appendChild(customSeedDescription);

  const demoSection = document.createElement('demo-section');
  const promptSection = document.createElement('prompt-section');
  demoSection.appendChild(promptSection);
  app.appendChild(demoSection);

  createForm(demoSection);
  updatePrompts();

  document.body.appendChild(app);
});

function createForm(container) {
  const formContainer = document.createElement('div');
  formContainer.id = 'world-seed-form';

  formGroups.forEach(({ label, options }) => {
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');

    const controlHeader = document.createElement('div');
    controlHeader.classList.add('control-header');
    controlHeader.textContent = label;
    formGroup.appendChild(controlHeader);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');

    options.forEach((option) => {
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
  });

  container.appendChild(formContainer);
}

function updatePrompts() {
  const shortPrompt = document.getElementById('short-prompt');
  shortPrompt.textContent = 'This is a sample prompt.';
}