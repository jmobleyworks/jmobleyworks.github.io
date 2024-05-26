// World.js
function AorAn(value) {const vowels = ['a', 'e', 'i', 'o', 'u'];const firstLetter = value.toLowerCase().charAt(0);return vowels.includes(firstLetter) ? `an ${value}` : `a ${value}`;}

// Function to synthesize pixel art prompts based on the world seed
function shortPrompt(worldSeed) {
  let prompt = `Design a 2D action RPG with the following elements: `;
  prompt += `Set in ${AorAn(worldSeed.timePeriod)} ${worldSeed.theme} world with a ${worldSeed.atmosphere} atmosphere. `;
  prompt += `The environment features ${AorAn(worldSeed.environment)} ${worldSeed.location} adorned with ${worldSeed.landmarks}. `;
  prompt += `Inhabited by ${worldSeed.inhabitants}, the world faces ${AorAn(worldSeed.conflict)} influenced by ${worldSeed.elementalInfluence} and ${worldSeed.technologyLevel} technology. `;
  prompt += `Cultural inspiration is drawn from ${worldSeed.culturalInfluences} traditions, focusing on ${worldSeed.narrativeFocus} narratives.`;
  return prompt;
}

// Requirements for art assets
const requirements = {
  // Extend character types for a diverse cast
  charAssetTypes: [
    'warriors', 'mages', 'monsters', 'NPCs', 'rogues', 'healers',
    'paladins', 'necromancers', 'beastmasters', 'assassins', 'rangers', 'summoners'
  ],
  // Enrich environmental objects for interactive gameplay
  hardAssetTypes: [
    'trees', 'rocks', 'chests', 'barrels', 'doors', 'treasure chests',
    'statues', 'fountains', 'altars', 'signposts', 'bridges', 'wells'
  ],
  // Broaden soft asset types for varied landscapes
  softAssetTypes: [
    'ground tiles', 'water tiles', 'grass patches', 'flowers', 'bushes',
    'sand dunes', 'snow drifts', 'mud tiles', 'lava flows', 'ice formations'
  ],
  // Expand enemy types for challenging encounters
  enemyTypes: [
    'goblins', 'orcs', 'demons', 'undead', 'dragons', 'trolls', 'elementals',
    'vampires', 'werewolves', 'golems', 'specters', 'witches', 'giants'
  ],
  // Increase friendly character types for rich interactions
  friendlyTypes: [
    'merchants', 'villagers', 'quest givers', 'allies', 'healers', 'scholars',
    'blacksmiths', 'innkeepers', 'guards', 'nobles', 'farmers', 'bards'
  ],
  // Add more vehicle types for various modes of travel
  vehicleTypes: [
    'horses', 'chariots', 'wagons', 'boats', 'airships', 'magic carpets',
    'sleds', 'submarines', 'steam trains', 'balloons', 'griffins', 'elephants'
  ],
  // Diversify weapon types for combat variety
  weaponTypes: [
    'swords', 'axes', 'bows', 'staves', 'wands', 'scythes', 'spears',
    'daggers', 'hammers', 'flails', 'crossbows', 'slingshots', 'blowguns'
  ],
  // Add more armor types for character customization
  armorTypes: [
    'helmets', 'breastplates', 'greaves', 'gauntlets', 'shields', 'capes', 'robes',
    'masks', 'boots', 'belts', 'amulets', 'rings', 'bracers'
  ],
  // Enhance the variety of items for discovery and utility
  itemTypes: [
    'potions', 'scrolls', 'gems', 'artifacts', 'treasures', 'maps', 'keys',
    'food', 'tools', 'clothing', 'books', 'furniture', 'musical instruments'
  ],
  // Increase building types for a living world
  buildingTypes: [
    'houses', 'inns', 'shops', 'forges', 'temples', 'libraries', 'taverns',
    'castles', 'towers', 'dungeons', 'academies', 'gardens', 'markets'
  ],
  // Expand environment features for a dynamic setting
  environmentFeatures: {
    weatherConditions: [
      'clear', 'rainy', 'snowy', 'foggy', 'stormy', 'windy', 'hazy', 'meteor showers',
      'sandstorms', 'thunderstorms', 'blizzards', 'heatwaves'
    ],
    terrainTypes: [
      'plains', 'hills', 'mountains', 'canyons', 'valleys', 'cliffs', 'forests', 'lakes',
      'rivers', 'oceans', 'deserts', 'jungles', 'marshes', 'caves'
    ],
    celestialBodies: [
      'single moon', 'multiple moons', 'rings', 'asteroids', 'comets', 'nebulae',
      'stars', 'planets', 'black holes', 'supernovae', 'galaxies', 'quasars'
    ],
    geologicalFormations: [
      'volcanoes', 'geysers', 'glaciers', 'canyons', 'waterfalls', 'caves',
      'craters', 'plateaus', 'basins', 'fjords', 'mesas', 'arches'
    ]
  }
};

// Game design choices to influence the look and feel of the game
const gameDesignChoices = {
  // Extend time periods for more historical settings
  timePeriod: ['Ancient', 'Medieval', 'Renaissance', 'Industrial', 'Futuristic', 'Alternate History', 'Prehistoric', 'Colonial'],
  // Define themes for different genres
  theme: {
    fantasy: ['High Fantasy', 'Low Fantasy', 'Urban Fantasy', 'Gothic Fantasy', 'Dark Fantasy', 'Fairy Tale'],
    sciFi: ['Space Opera', 'Cyberpunk', 'Steampunk', 'Biopunk', 'Utopian Sci-Fi', 'Dystopian Sci-Fi'],
    postApocalyptic: ['Nuclear Fallout', 'Zombie Apocalypse', 'Environmental Catastrophe', 'Alien Invasion'],
    mythological: ['Greek Mythology', 'Norse Mythology', 'Egyptian Mythology', 'Asian Mythology', 'Celtic Mythology', 'Native American Mythology']
  },
  // More environments for diverse gameplay
  environment: ['Forest', 'Desert', 'Mountain', 'Ocean', 'Urban', 'Arctic', 'Swamp', 'Underwater', 'Volcanic', 'Sky'],
  // Atmosphere options to set the mood
  atmosphere: ['Mysterious', 'Magical', 'Dark', 'Whimsical', 'Serene', 'Surreal', 'Dystopian', 'Utopian', 'Eerie', 'Lively'],
  // Varied locations for different world settings
  location: ['Island', 'Underground', 'Floating', 'Celestial', 'Extraterrestrial', 'Subterranean', 'Dimensional', 'Interstellar'],
  // Landmarks to explore and discover
  landmarks: ['Ruins', 'Temples', 'Caves', 'Castles', 'Monuments', 'Megaliths', 'Laboratories', 'Ancient Cities'],
  // Diverse inhabitants to interact with
  inhabitants: {
    // Add more human cultures for inclusivity
    humans: ['Medieval European Humans', 'Asian Humans', 'African Humans', 'Indigenous Humans', 'Futuristic Humans', 'Victorian Humans', 'Nomadic Tribes'],
    // Expand the range of mythical creatures
    mythicalCreatures: ['Dragons', 'Griffins', 'Phoenixes', 'Unicorns', 'Chimeras', 'Basilisks', 'Sphinxes'],
    // Include more alien races for sci-fi themes
    aliens: ['Extraterrestrials', 'Greys', 'Reptilians', 'Nordics', 'Mantis Beings', 'Annunaki', 'Sirians', 'Pleiadians', 'Arcturians', 'Zeta Reticulans', 'Draconians', 'Orions', 'Andromedans', 'Martians'],
    // Add more robot types for futuristic settings
    robots: ['Androids', 'Cyborgs', 'Automatons', 'Sentinels'],
    // Broaden the range of elemental races
    elementalRaces: ['Fire Elementals', 'Water Elementals', 'Air Elementals', 'Earth Elementals', 'Light Elementals', 'Dark Elementals']
  },
  // Additional conflicts to drive the narrative
  conflict: ['War', 'Exploration', 'Survival', 'Quest', 'Discovery', 'Intrigue', 'Revolution', 'Liberation', 'Conquest', 'Rebellion'],
  // More elemental influences for magical settings
  elementalInfluence: ['Fire', 'Water', 'Earth', 'Air', 'Ice', 'Lightning', 'Shadow', 'Light', 'Metal', 'Wood'],
  // Broader technology levels for different eras
  technologyLevel: ['Primitive', 'Advanced', 'Magical', 'Industrial', 'Cybernetic', 'Nanotech', 'Genetic', 'Quantum', 'Steam-Powered', 'Clockwork'],
  // Cultural influences from around the world
  culturalInfluences: ['Medieval European', 'Asian', 'African', 'Indigenous', 'Futuristic', 'Ancient Greek', 'Norse', 'Mayan', 'Roman', 'Persian'],
  // Varied narrative focuses for storytelling
  narrativeFocus: ['Mystery', 'Adventure', 'Romance', 'Intrigue', 'Redemption', 'Heroism', 'Tragedy', 'Exploration', 'Betrayal', 'Friendship'],
  // Expand mythology for rich lore
  mythology: {
    creationStories: ['Cosmic Eggs', 'Primordial Beings', 'Divine Interventions', 'World Trees', 'Chaos and Order'],
    mythologicalFigures: ['Heroes', 'Gods', 'Goddesses', 'Demigods', 'Titans', 'Monsters', 'Sages'],
    legendaryArtifacts: ['Swords', 'Amulets', 'Relics', 'Talismans', 'Orbs', 'Runestones', 'Crystal Skulls'],
    ancientTexts: ['Scriptures', 'Prophecies', 'Fables', 'Epics', 'Grimoires', 'Codices', 'Tablets']
  },
// More societal structures for complex societies
societalStructures: {
  governmentTypes: ['Monarchy', 'Democracy', 'Oligarchy', 'Theocracy', 'Anarchy', 'Republic'],
  socialClasses: ['Nobility', 'Commoners', 'Slaves', 'Merchants', 'Artisans', 'Scholars', 'Criminals'],
  religions: ['Polytheistic', 'Monotheistic', 'Pantheistic', 'Animistic', 'Cults', 'Mysticism'],
  culturalCustoms: ['Rituals', 'Festivals', 'Rites of Passage', 'Taboos', 'Etiquette', 'Traditions']
},
// Magical systems for diverse gameplay
magicalSystems: {
  magicalSchools: ['Elemental', 'Necromancy', 'Illusion', 'Enchantment', 'Alchemy', 'Divination'],
  magicalArtifacts: ['Wands', 'Staves', 'Orbs', 'Grimoires', 'Talismans', 'Runes'],
  magicalBeings: ['Fairies', 'Pixies', 'Gnomes', 'Golems', 'Familiars', 'Spirits', 'Elementals'],
  magicalAbilities: ['Shapeshifting', 'Teleportation', 'Mind Control', 'Time Manipulation', 'Summoning']
},
// Historical events shaping the world
historicalEvents: {
  warsAndConflicts: ['Epic Battles', 'Invasions', 'Revolutions', 'Civil Wars', 'Crusades'],
  naturalDisasters: ['Floods', 'Earthquakes', 'Volcanic Eruptions', 'Tsunamis', 'Meteor Strikes'],
  technologicalBreakthroughs: ['Inventions', 'Scientific Discoveries', 'Industrial Revolution'],
  culturalRenaissances: ['Artistic', 'Philosophical', 'Spiritual', 'Literary']
},
// Economic systems and trade
economicSystems: {
  tradeRoutes: ['Land', 'Sea', 'Air', 'Interdimensional', 'Silk Road', 'Trade Caravans'],
  currencies: ['Gold', 'Gems', 'Barter', 'Magical Energy', 'Cryptocurrency'],
  industries: ['Mining', 'Agriculture', 'Crafting', 'Alchemy', 'Textiles', 'Shipbuilding'],
  tradeOrganizations: ['Guilds', 'Cartels', 'Monopolies', 'Merchant Alliances']
},
// Supernatural phenomena adding mystery
supernaturalPhenomena: {
  cosmicEvents: ['Solar Eclipses', 'Lunar Eclipses', 'Comets', 'Meteor Showers', 'Auroras'],
  planarRealms: ['Celestial', 'Infernal', 'Fey', 'Elemental', 'Astral', 'Dreamscape'],
  portalsAndGateways: ['Interdimensional', 'Teleportation', 'Ancient Portals', 'Wormholes'],
  timeDistortions: ['Time Travel', 'Time Loops', 'Temporal Rifts', 'Anachronisms']
}
};

function getRandomOption(options) {
  if (Array.isArray(options)) {
    return options[Math.floor(Math.random() * options.length)];
  } else {
    const subcategory = Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)];
    return options[subcategory][Math.floor(Math.random() * options[subcategory].length)];
  }
}

function generateWorldSeed() {
  const prompt = {};

  for (const category in gameDesignChoices) {
    prompt[category] = getRandomOption(gameDesignChoices[category]);
  }

  return prompt;
}

function detailedPrompt(worldSeed) {
    return `Generate a sprite sheet for a 2D action RPG game, reflecting the following requirements and world characteristics:

**Character Sprites**:
- Create character sprites for a variety of roles, including ${requirements.charAssetTypes.join(', ')}.
- Each character sprite should include animations for idle, walk, run, attack, death, and special abilities.
- Ensure unique designs for each character type, incorporating elements like ${worldSeed.technologyLevel.toLowerCase()} technology and ${worldSeed.culturalInfluences.toLowerCase()} cultural influences.

**Object Sprites**:
- Develop sprites for environmental objects such as ${requirements.hardAssetTypes.join(', ')}.
- Each object should be distinct and interactive where applicable (e.g., openable chests, destructible barrels).
- Include variations and details that reflect the ${worldSeed.environment.toLowerCase()} environment and ${worldSeed.atmosphere.toLowerCase()} atmosphere.

**Environment Elements**:
- Design a comprehensive set of tiles for the game environment, including ${requirements.softAssetTypes.join(', ')}.
- Provide multiple variations for each tile type to allow for a diverse and natural-looking landscape.
- Incorporate specific environmental features like ${worldSeed.location.toLowerCase()} landmarks and geological formations.

**Enemy Sprites**:
- Create detailed enemy sprites for types such as ${requirements.enemyTypes.join(', ')}.
- Each enemy type should have unique animations for idle, attack, and death, as well as distinctive visual characteristics.
- Reflect the influence of ${worldSeed.elementalInfluence.toLowerCase()} elements and ${worldSeed.theme.toLowerCase()} themes in their design.

**Friendly NPC Sprites**:
- Design sprites for friendly characters like ${requirements.friendlyTypes.join(', ')}.
- Include animations for interactions such as talking, trading, and giving quests.
- Ensure that each NPC type is easily identifiable and visually distinct.

**Vehicle Sprites**:
- Develop sprites for vehicles such as ${requirements.vehicleTypes.join(', ')}.
- Include animations for movement and idle states, as well as any interactive elements.
- Reflect the ${worldSeed.technologyLevel.toLowerCase()} technology in the vehicle designs.

**Weapon and Armor Sprites**:
- Create a variety of weapon sprites including ${requirements.weaponTypes.join(', ')}.
- Design armor sprites such as ${requirements.armorTypes.join(', ')} with attention to detail and consistency.
- Ensure that weapons and armor fit with the characters and overall art style.

**Item Sprites**:
- Design sprites for items like ${requirements.itemTypes.join(', ')}.
- Each item should be easily recognizable and have a unique design.
- Include small details that hint at their use and importance in the game.

**Building Sprites**:
- Develop building sprites for structures like ${requirements.buildingTypes.join(', ')}.
- Ensure buildings are visually appealing and consistent with the game's architectural style.
- Include variations for different states or conditions (e.g., intact, damaged).

**Environmental Features**:
- Integrate environmental features like ${requirements.environmentFeatures.weatherConditions.join(', ')} weather conditions, ${requirements.environmentFeatures.terrainTypes.join(', ')} terrain types, ${requirements.environmentFeatures.celestialBodies.join(', ')} celestial bodies, and ${requirements.environmentFeatures.geologicalFormations.join(', ')} geological formations into the sprite designs.
- Ensure these features enhance the immersive experience of the game world.

**Art Style**:
- Adopt a ${worldSeed.theme.toLowerCase()}-themed art style with vibrant colors and intricate details.
- The art style should align with the aesthetic of a ${worldSeed.atmosphere.toLowerCase()}-${worldSeed.technologyLevel.toLowerCase()} world, reflecting elements like ${worldSeed.culturalInfluences.toLowerCase()} culture and ${worldSeed.narrativeFocus.toLowerCase()} narratives.

**Resolution and Format**:
- Deliver the sprite sheet in PNG format with dimensions suitable for a 2D game (e.g., 32x32 pixels or 64x64 pixels per sprite).
- Maintain a consistent grid layout for easy integration into game development frameworks.

**Revision and Feedback**:
- Be open to iterations based on feedback to refine the sprite sheet and ensure it meets the game project's specific requirements.

**Context**:
- The game is set in a ${worldSeed.timePeriod.toLowerCase()} ${worldSeed.theme.toLowerCase()} world.
- The environment is a ${worldSeed.environment.toLowerCase()} with a ${worldSeed.atmosphere.toLowerCase()} atmosphere.
- The scene is located ${worldSeed.location.toLowerCase()} and includes ${worldSeed.landmarks.toLowerCase()} landmarks.
- The inhabitants are ${worldSeed.inhabitants.toLowerCase()}.
- The main conflict involves ${worldSeed.conflict.toLowerCase()} influenced by ${worldSeed.elementalInfluence.toLowerCase()} elements and ${worldSeed.technologyLevel.toLowerCase()} technology.
- The cultural style is inspired by ${worldSeed.culturalInfluences.toLowerCase()} culture, focusing on ${worldSeed.narrativeFocus.toLowerCase()}.

**Additional Notes**:
- The sprite sheet will be used as essential visual assets in the game development process, contributing to the immersive experience and engaging gameplay mechanics.`;
}

const initialWorldSeed = {
  timePeriod: 'Medieval',
  theme: 'Fantasy',
  atmosphere: 'Mystical',
  environment: 'Forest',
  location: 'Ancient Ruins',
  landmarks: 'Old Temples',
  inhabitants: 'Mythical Creatures',
  conflict: 'Epic Battle',
  elementalInfluence: 'Fire',
  technologyLevel: 'Magical',
  culturalInfluences: 'Norse',
  narrativeFocus: 'Heroic Quests',
};



// Function to get the selected values and generate a world seed
function getSelectedWorldSeed() {
  const worldSeed = {};
  Object.keys(gameDesignChoices).forEach(category => {
    const selectElement = document.getElementById(category);
    worldSeed[category] = selectElement.value;
  });
  return worldSeed;
}

function createWorldSeedForm() {
  console.log("Made it to createWorldSeedForm()");
  const formContainer = document.createElement('div');
  const form = document.createElement('form');
  form.setAttribute('id', 'world-seed-form');
  const targetElement = document.getElementById('worldSeedBuilder'); // No need for conditional checks
  if (!targetElement) {
    console.error('Element with ID "worldSeedBuilder" not found. Attaching form to body as fallback.');
    targetElement = document.body;
  }
  console.log(targetElement);
  targetElement.appendChild(form);

  Object.keys(gameDesignChoices).forEach(category => {
    console.log("Creating form group for category:", category);
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    const label = document.createElement('label');
    label.innerText = category.charAt(0).toUpperCase() + category.slice(1);
    formGroup.appendChild(label);
    const select = document.createElement('select');
    select.id = category;

    if (Array.isArray(gameDesignChoices[category])) {
      console.log("Adding options for category:", category);
      gameDesignChoices[category].forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.innerText = option;
        select.appendChild(optionElement);
        console.log("  Added option:", option);
      });
    } else {
      console.log("Creating subcategories for category:", category);
      Object.keys(gameDesignChoices[category]).forEach(subCategory => {
        const optGroup = document.createElement('optgroup');
        optGroup.label = subCategory;
        console.log("  Adding subcategory:", subCategory);
        gameDesignChoices[category][subCategory].forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option;
          optionElement.innerText = option;
          optGroup.appendChild(optionElement);
          console.log("    Added option:", option);
        });
        select.appendChild(optGroup);
      });
    }
    formGroup.appendChild(select);
    formContainer.appendChild(formGroup);
  });
  // Event listener to update the prompts whenever a selection is made
  formContainer.addEventListener('change', updatePrompts);
}


// Function to update the short and detailed prompts based on the selected world seed
function updatePrompts() {
  const worldSeed = getSelectedWorldSeed();
  const shortPromptElement = document.getElementById('short-prompt');
  const detailedPromptElement = document.getElementById('detailed-prompt');

  if (shortPromptElement) {
    shortPromptElement.innerText = shortPrompt(worldSeed);
  } else {
    console.error("Element with ID 'short-prompt' not found.");
  }

  if (detailedPromptElement) {
    detailedPromptElement.innerText = detailedPrompt(worldSeed);
  } else {
    console.error("Element with ID 'detailed-prompt' not found.");
  }
}


// Initialize the form on page load
document.addEventListener('DOMContentLoaded', () => {
  //createWorldSeedForm();
  //updatePrompts();
});


export { generateWorldSeed, shortPrompt, detailedPrompt, createWorldSeedForm, updatePrompts  };
