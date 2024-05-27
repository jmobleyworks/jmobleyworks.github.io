import { gameDesignChoices } from './options.js';

let options = {};

const createGroup = (category, choices) => {
  const group = document.createElement('div');
  group.classList.add('form-group');

  const label = document.createElement('label');
  label.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  group.appendChild(label);

  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('options');
  group.appendChild(optionsContainer);

  choices.forEach(choice => {
    const option = document.createElement('div');
    option.classList.add('option');
    option.innerText = choice;
    option.addEventListener('click', () => updateOption(category, option));
    optionsContainer.appendChild(option);
  });

  return group;
};

const updateOption = (category, element) => {
  const choices = options[category] || [];
  const choiceIndex = choices.indexOf(element.innerText);

  if (choiceIndex === -1) {
    element.classList.add('selected');
    choices.push(element.innerText);
  } else {
    element.classList.remove('selected');
    choices.splice(choiceIndex, 1);
  }

  options[category] = choices;
  updatePrompts();
};

const formatOptions = options => {
  if (!options || options.length === 0) return "";
  if (options.length === 1) return options[0];
  return `${options.slice(0, -1).join(', ')} and ${options[options.length - 1]}`;
};

const shortPrompt = worldSeed => {
  const promptParts = [];
  for (const [category, choices] of Object.entries(worldSeed)) {
    const formattedChoices = formatOptions(choices);
    if (formattedChoices) {
      promptParts.push(`${category.charAt(0).toUpperCase() + category.slice(1)}: ${formattedChoices}`);
    }
  }
  return promptParts.join('. ');
};

const updatePrompts = () => {
  const chosen = {};
  for (const category in gameDesignChoices) {
    chosen[category] = options[category] || [];
  }
  const shortPromptElement = document.getElementById('short-prompt');
  shortPromptElement.innerText = shortPrompt(chosen);
};

const getRandomOption = choices => choices[Math.floor(Math.random() * choices.length)];

const seed = () => {
  const randomOptions = {};
  for (const category in gameDesignChoices) {
    randomOptions[category] = [getRandomOption(gameDesignChoices[category])];
  }
  return randomOptions;
};

const createForm = () => {
  const form = document.createElement('form');
  form.setAttribute('id', 'world-seed-form');

  document.getElementById('gameSeedWorldBuilderControl').appendChild(form);

  const randomizeButton = document.createElement('button');
  randomizeButton.innerText = 'Randomize';
  randomizeButton.addEventListener('click', (event) => {
    event.preventDefault();
    options = seed();
    updateFormSelection();
    updatePrompts();
  });
  form.appendChild(randomizeButton);

  const clearButton = document.createElement('button');
  clearButton.innerText = 'Clear';
  clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    options = {};
    updateFormSelection();
    updatePrompts();
  });
  form.appendChild(clearButton);

  for (const category in gameDesignChoices) {
    form.appendChild(createGroup(category, gameDesignChoices[category]));
  }
};

const updateFormSelection = () => {
  document.querySelectorAll('.option').forEach(option => {
    const category = option.parentElement.previousElementSibling.innerText.toLowerCase();
    if (options[category] && options[category].includes(option.innerText)) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  createForm();
  updatePrompts();
});