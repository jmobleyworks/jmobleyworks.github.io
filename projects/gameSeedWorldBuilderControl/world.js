// World.js
const selectedOptions = {};
function AorAn(value) { const vowels = ['a', 'e', 'i', 'o', 'u']; const firstLetter = value.toLowerCase().charAt(0); return vowels.includes(firstLetter) ? `an ${value}` : `a ${value}`; }
// Requirements for art assets
const requirements = {
  "charAssetTypes": ["warriors", "mages", "monsters", "NPCs", "rogues", "healers", "paladins", "necromancers", "beastmasters", "assassins", "rangers", "summoners"],
  "hardAssetTypes": ["trees", "rocks", "chests", "barrels", "doors", "treasure chests", "statues", "fountains", "altars", "signposts", "bridges", "wells"]
};
const gameDesignChoices = {
  "timePeriod": ["Ancient", "Medieval", "Renaissance", "Industrial", "Futuristic", "Alternate History", "Prehistoric", "Colonial"],
  "theme": ["Fantasy: High Fantasy", "Fantasy: Low Fantasy", "Fantasy: Urban Fantasy", "Fantasy: Gothic Fantasy", "Fantasy: Dark Fantasy", "Fantasy: Fairy Tale", "SciFi: Space Opera", "SciFi: Cyberpunk", "SciFi: Steampunk", "SciFi: Biopunk", "SciFi: Utopian Sci-Fi", "SciFi: Dystopian Sci-Fi", "postApocalyptic: Nuclear Fallout", "postApocalyptic: Zombie Apocalypse", "postApocalyptic: Environmental Catastrophe", "postApocalyptic: Alien Invasion", "mythological: Greek Mythology", "mythological: Norse Mythology", "mythological: Egyptian Mythology", "mythological: Asian Mythology", "mythological: Celtic Mythology", "mythological: Native American Mythology"]
};
const getRandomOption = choices => choices[Math.floor(Math.random() * choices.length)];
const seed = () => Object.fromEntries(Object.keys(gameDesignChoices).map(c => [c, getRandomOption(gameDesignChoices[c])]));
const getDefaultValue = c => gameDesignChoices[c][0];
const chosenSeed = () => Object.assign({}, ...Object.keys(gameDesignChoices).map(c => ({ [c]: options[c] || getDefaultValue(c) })));
const updateOption = (category, element) => {
  if (element instanceof Element) {
    const choices = options[category] || [];
    element.classList.toggle('selected');
    choices[element.classList.contains('selected') ? 'push' : 'splice'](choices.indexOf(element.innerText), 1);
    options[category] = [...new Set(choices)];
    updatePrompts();
  } else {
    console.error('Invalid optionElement passed to updateSelectedOptions');
  }
};
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
    option.classList.add('selected', choice === getDefaultValue(category));
    option.addEventListener('click', () => updateOption(category, option));
    optionsContainer.appendChild(option);
  });

  return group;
};
const createForm = () => {
  const form = document.createElement('form');
  form.setAttribute('id', 'world-seed-form');
  (document.getElementById('worldSeedBuilder') || document.body).appendChild(form);
  const button = document.createElement('button');
  button.innerText = 'Randomize';
  button.addEventListener('click', () => {
    options = {};
    Object.assign(options, seed());
    updateFormSelection();
    updatePrompts();
  });
  form.appendChild(button);
  Object.keys(gameDesignChoices).forEach(category => form.appendChild(createGroup(category, gameDesignChoices[category])));
};
const updateFormSelection = () => document.querySelectorAll('.option').forEach(option => option.classList.toggle('selected', options[option.parentElement.parentElement.querySelector('label').innerText.toLowerCase()]?.includes(option.innerText)));
const updatePrompts = () => {
  const chosen = chosenSeed();
  const prompts = requirements.map(r => r.template.replace(/{{(.*?)}}/g, (_, capture) => chosen[capture] || r.default || "No data available"));
  // Update the UI with the generated prompts (implementation omitted for brevity)
};
createForm();


export { generateWorldSeed, shortPrompt, detailedPrompt, createWorldSeedForm, updatePrompts };
