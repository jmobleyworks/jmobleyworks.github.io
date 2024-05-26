//World.js
function AorAn(value) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstLetter = value.toLowerCase().charAt(0);
  const article = vowels.includes(firstLetter) ? 'an' : 'a';
  return `${article} ${value}`;
}

function synthesizePixelArtPrompt(worldSeed) {
  let prompt = `Create ${AorAn(worldSeed.atmosphere)} pixel art spritesheet for an immersive 2D action RPG set in ${AorAn(worldSeed.timePeriod)} ${worldSeed.theme} world. `;

  prompt += `The game's environment is ${AorAn(worldSeed.environment)} ${worldSeed.location} adorned with ${worldSeed.landmarks}, inhabited by ${worldSeed.inhabitants}. `;

  prompt += `The central conflict driving the narrative is ${AorAn(worldSeed.conflict)} influenced by ${AorAn(worldSeed.elementalInfluence)} elemental forces and ${worldSeed.technologyLevel} technology. `;

  prompt += `The cultural inspiration draws from ${AorAn(worldSeed.culturalInfluences)} traditions, focusing on ${worldSeed.narrativeFocus} narratives.`;

  return prompt;
}
const requirements = {
  charAssetTypes: ['warriors', 'mages', 'monsters', 'NPCs'],
  hardAssetTypes: ['trees', 'rocks', 'chests', 'barrels', 'doors', 'treasure chests'],
  softAssetTypes: ['ground tiles', 'water tiles', 'grass patches', 'flowers', 'bushes'],
  enemyTypes: ['goblins', 'orcs', 'demons', 'undead', 'dragons'],
  friendlyTypes: ['merchants', 'villagers', 'quest givers', 'allies'],
  vehicleTypes: ['horses', 'chariots', 'wagons', 'boats', 'airships'],
  weaponTypes: ['swords', 'axes', 'bows', 'staves', 'wands'],
  armorTypes: ['helmets', 'breastplates', 'greaves', 'gauntlets', 'shields'],
  itemTypes: ['potions', 'scrolls', 'gems', 'artifacts', 'treasures'],
  buildingTypes: ['houses', 'inns', 'shops', 'forges', 'temples'],
  environmentFeatures: {
    weatherConditions: ['clear', 'rainy', 'snowy', 'foggy', 'stormy', 'windy'],
    terrainTypes: ['plains', 'hills', 'mountains', 'canyons', 'valleys', 'cliffs'],
    celestialBodies: ['single moon', 'multiple moons', 'rings', 'asteroids'],
    geologicalFormations: ['volcanoes', 'geysers', 'glaciers', 'canyons']
  }
};

const gameDesignChoices = {
  timePeriod: ['Ancient', 'Medieval', 'Renaissance', 'Industrial', 'Futuristic', 'Alternate History'],
  theme: {
    fantasy: ['High Fantasy', 'Low Fantasy', 'Urban Fantasy', 'Gothic Fantasy'],
    sciFi: ['Space Opera', 'Cyberpunk', 'Steampunk', 'Biopunk'],
    postApocalyptic: ['Nuclear Fallout', 'Zombie Apocalypse', 'Environmental Catastrophe'],
    mythological: ['Greek Mythology', 'Norse Mythology', 'Egyptian Mythology', 'Asian Mythology']
  },
  environment: ['Forest', 'Desert', 'Mountain', 'Ocean', 'Urban', 'Arctic', 'Swamp', 'Underwater'],
  atmosphere: ['Mysterious', 'Magical', 'Dark', 'Whimsical', 'Serene', 'Surreal', 'Dystopian', 'Utopian'],
  location: ['Island', 'Underground', 'Floating', 'Celestial', 'Extraterrestrial', 'Subterranean', 'Dimensional'],
  landmarks: ['Ruins', 'Temples', 'Caves', 'Castles', 'Monuments', 'Megaliths', 'Laboratories'],
  inhabitants: {
    humans: ['Medieval European Humans', 'Asian Humans', 'African Humans', 'Indigenous Humans', 'Futuristic Humans'],
    elves: ['High Elves', 'Wood Elves', 'Dark Elves'],
    dwarves: ['Mountain Dwarves', 'Hill Dwarves', 'Deep Dwarves'],
    mythicalCreatures: ['Dragons', 'Griffins', 'Phoenixes', 'Unicorns'],
    aliens: ['Extraterrestrials', 'Greys', 'Reptilians', 'Nordics', 'Mantis Beings', 'Annunaki', 'Sirians', 'Pleiadians', 'Arcturians', 'Zeta Reticulans', 'Draconians', 'Orions', 'Andromedans'],
    robots: ['Androids', 'Cyborgs'],
    mutants: ['Genetic Experimentations'],
    spirits: ['Ghosts', 'Elementals'],
    animalLikeRaces: ['Centaurs', 'Merfolk', 'Minotaurs', 'Harpies'],
    plantBasedRaces: ['Treants', 'Dryads', 'Spriggans', 'Myconids'],
    elementalRaces: ['Fire Elementals', 'Water Elementals', 'Air Elementals']
  },
  conflict: ['War', 'Exploration', 'Survival', 'Quest', 'Discovery', 'Intrigue', 'Revolution', 'Liberation'],
  elementalInfluence: ['Fire', 'Water', 'Earth', 'Air', 'Ice', 'Lightning', 'Shadow', 'Light'],
  technologyLevel: ['Primitive', 'Advanced', 'Magical', 'Industrial', 'Cybernetic', 'Nanotech', 'Genetic', 'Quantum'],
  culturalInfluences: ['Medieval European', 'Asian', 'African', 'Indigenous', 'Futuristic', 'Ancient Greek', 'Norse', 'Mayan'],
  narrativeFocus: ['Mystery', 'Adventure', 'Romance', 'Intrigue', 'Redemption', 'Heroism', 'Tragedy', 'Exploration'],
  mythology: {
    creationStories: ['Cosmic Eggs', 'Primordial Beings', 'Divine Interventions'],
    mythologicalFigures: ['Heroes', 'Gods', 'Goddesses', 'Demigods', 'Titans'],
    legendaryArtifacts: ['Swords', 'Amulets', 'Relics', 'Talismans', 'Orbs'],
    ancientTexts: ['Scriptures', 'Prophecies', 'Fables', 'Epics', 'Grimoires']
  },
  societalStructures: {
    governmentTypes: ['Monarchy', 'Democracy', 'Oligarchy', 'Theocracy'],
    socialClasses: ['Nobility', 'Commoners', 'Slaves', 'Merchants', 'Artisans'],
    religions: ['Polytheistic', 'Monotheistic', 'Pantheistic', 'Animistic'],
    culturalCustoms: ['Rituals', 'Festivals', 'Rites of Passage', 'Taboos']
  },
  magicalSystems: {
    magicalSchools: ['Elemental', 'Necromancy', 'Illusion', 'Enchantment'],
    magicalArtifacts: ['Wands', 'Staves', 'Orbs', 'Grimoires', 'Talismans'],
    magicalBeings: ['Fairies', 'Pixies', 'Gnomes', 'Golems', 'Familiars'],
    magicalAbilities: ['Shapeshifting', 'Teleportation', 'Mind Control']
  },
  historicalEvents: {
    warsAndConflicts: ['Epic Battles', 'Invasions', 'Revolutions'],
    naturalDisasters: ['Floods', 'Earthquakes', 'Volcanic Eruptions'],
    technologicalBreakthroughs: ['Inventions', 'Scientific Discoveries'],
    culturalRenaissances: ['Artistic', 'Philosophical', 'Spiritual']
  },
  economicSystems: {
    tradeRoutes: ['Land', 'Sea', 'Air', 'Interdimensional'],
    currencies: ['Gold', 'Gems', 'Barter', 'Magical Energy'],
    industries: ['Mining', 'Agriculture', 'Crafting', 'Alchemy'],
    tradeOrganizations: ['Guilds', 'Cartels', 'Monopolies']
  },
  supernaturalPhenomena: {
    cosmicEvents: ['Solar Eclipses', 'Lunar Eclipses', 'Comets'],
planarRealms: ['Celestial', 'Infernal', 'Fey', 'Elemental'],
portalsAndGateways: ['Interdimensional', 'Teleportation'],
timeDistortions: ['Time Travel', 'Time Loops', 'Temporal Rifts']
}
};

// Generate a random world seed prompt
function generateWorldSeed() {
    const prompt = {};

    for (const category in categories) {
        const options = categories[category];
        let choice;

        if (Array.isArray(options)) {
            // If options is an array, select a random option
            choice = options[Math.floor(Math.random() * options.length)];
        } else {
            // If options is an object (subcategories), select a random option from a random subcategory
            const subcategory = Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)];
            choice = options[subcategory][Math.floor(Math.random() * options[subcategory].length)];
        }

        prompt[category] = choice;
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
