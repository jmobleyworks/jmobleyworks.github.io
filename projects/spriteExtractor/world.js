// World.js

// Utility function to determine the correct article 'a' or 'an'
function AorAn(value) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = value.toLowerCase().charAt(0);
  return vowels.includes(firstLetter) ? `an ${value}` : `a ${value}`;
}

// Function to synthesize pixel art prompts based on the world seed
function synthesizePixelArtPrompt(worldSeed) {
  let prompt = `Create ${AorAn(worldSeed.atmosphere)} pixel art spritesheet for an immersive 2D action RPG set in ${AorAn(worldSeed.timePeriod)} ${worldSeed.theme} world. `;
  prompt += `The game's environment is ${AorAn(worldSeed.environment)} ${worldSeed.location} adorned with ${worldSeed.landmarks}, inhabited by ${worldSeed.inhabitants}. `;
  prompt += `The central conflict driving the narrative is ${AorAn(worldSeed.conflict)} influenced by ${AorAn(worldSeed.elementalInfluence)} elemental forces and ${worldSeed.technologyLevel} technology. `;
  prompt += `The cultural inspiration draws from ${AorAn(worldSeed.culturalInfluences)} traditions, focusing on ${worldSeed.narrativeFocus} narratives.`;
  return prompt;
}

// Requirements for art assets
const requirements = {
  // Add more character types as needed
  charAssetTypes: ['warriors', 'mages', 'monsters', 'NPCs', 'rogues', 'healers'],
  // Include additional environmental objects
  hardAssetTypes: ['trees', 'rocks', 'chests', 'barrels', 'doors', 'treasure chests', 'statues', 'fountains'],
  // Expand soft asset types for diverse environments
  softAssetTypes: ['ground tiles', 'water tiles', 'grass patches', 'flowers', 'bushes', 'sand dunes', 'snow drifts'],
  // Define more enemy types for variety
  enemyTypes: ['goblins', 'orcs', 'demons', 'undead', 'dragons', 'trolls', 'elementals'],
  // Add more friendly character types
  friendlyTypes: ['merchants', 'villagers', 'quest givers', 'allies', 'healers', 'scholars'],
  // Consider additional vehicle types for different terrains
  vehicleTypes: ['horses', 'chariots', 'wagons', 'boats', 'airships', 'magic carpets'],
  // Broaden the range of weapon types
  weaponTypes: ['swords', 'axes', 'bows', 'staves', 'wands', 'scythes', 'spears'],
  // Include more armor types for customization
  armorTypes: ['helmets', 'breastplates', 'greaves', 'gauntlets', 'shields', 'capes', 'robes'],
  // Expand the variety of items available
  itemTypes: ['potions', 'scrolls', 'gems', 'artifacts', 'treasures', 'maps', 'keys'],
  // Add more building types for a vibrant world
  buildingTypes: ['houses', 'inns', 'shops', 'forges', 'temples', 'libraries', 'taverns'],
  // Detail environment features for a rich setting
  environmentFeatures: {
    weatherConditions: ['clear', 'rainy', 'snowy', 'foggy', 'stormy', 'windy', 'hazy', 'meteor showers'],
    terrainTypes: ['plains', 'hills', 'mountains', 'canyons', 'valleys', 'cliffs', 'forests', 'lakes'],
    celestialBodies: ['single moon', 'multiple moons', 'rings', 'asteroids', 'comets', 'nebulae'],
    geologicalFormations: ['volcanoes', 'geysers', 'glaciers', 'canyons', 'waterfalls', 'caves']
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
- Create character sprites for ${requirements.charAssetTypes.join(', ')}.
- Each character sprite should have animations for actions like idle, walk, run, attack, and death.
- Maintain consistency in style and proportion across all character sprites.

**Object Sprites**:
- Develop sprites for environmental objects such as ${requirements.hardAssetTypes.join(', ')}.
- Each object sprite should be distinguishable, visually appealing, and detailed.

**Environment Elements**:
- Design tiles for the game environment, including ${requirements.softAssetTypes.join(', ')}.
- Provide variations in terrain for diverse level designs.

**Art Style**:
- Adopt a ${worldSeed.theme.toLowerCase()}-themed art style with vibrant colors and intricate details.
- The art style should align with the aesthetic of a ${worldSeed.atmosphere.toLowerCase()}-${worldSeed.technologyLevel.toLowerCase()} world.

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


export { generateWorldSeed, synthesizePixelArtPrompt };
