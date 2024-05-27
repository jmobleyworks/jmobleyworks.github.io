// World.js
const selectedOptions = {};
function AorAn(value) {const vowels = ['a', 'e', 'i', 'o', 'u'];const firstLetter = value.toLowerCase().charAt(0);return vowels.includes(firstLetter) ? `an ${value}` : `a ${value}`;}
// Requirements for art assets
const requirements = {
  "charAssetTypes": ["warriors", "mages", "monsters", "NPCs", "rogues", "healers", "paladins", "necromancers", "beastmasters", "assassins", "rangers", "summoners"],
  "hardAssetTypes": ["trees", "rocks", "chests", "barrels", "doors", "treasure chests", "statues", "fountains", "altars", "signposts", "bridges", "wells"],
  "softAssetTypes": ["ground tiles", "water tiles", "grass patches", "flowers", "bushes", "sand dunes", "snow drifts", "mud tiles", "lava flows", "ice formations"],
  "enemyTypes": ["goblins", "orcs", "demons", "undead", "dragons", "trolls", "elementals", "vampires", "werewolves", "golems", "specters", "witches", "giants"],
  "friendlyTypes": ["merchants", "villagers", "quest givers", "allies", "healers", "scholars", "blacksmiths", "innkeepers", "guards", "nobles", "farmers", "bards"],
  "vehicleTypes": ["horses", "chariots", "wagons", "boats", "airships", "magic carpets", "sleds", "submarines", "steam trains", "balloons", "griffins", "elephants"],
  "weaponTypes": ["swords", "axes", "bows", "staves", "wands", "scythes", "spears", "daggers", "hammers", "flails", "crossbows", "slingshots", "blowguns"],
  "armorTypes": ["helmets", "breastplates", "greaves", "gauntlets", "shields", "capes", "robes", "masks", "boots", "belts", "amulets", "rings", "bracers"],
  "itemTypes": ["potions", "scrolls", "gems", "artifacts", "treasures", "maps", "keys", "food", "tools", "clothing", "books", "furniture", "musical instruments"],
  "buildingTypes": ["houses", "inns", "shops", "forges", "temples", "libraries", "taverns", "castles", "towers", "dungeons", "academies", "gardens", "markets"],
  "weatherConditions": ["clear", "rainy", "snowy", "foggy", "stormy", "windy", "hazy", "meteor showers", "sandstorms", "thunderstorms", "blizzards", "heatwaves"],
  "terrainTypes": ["plains", "hills", "mountains", "canyons", "valleys", "cliffs", "forests", "lakes", "rivers", "oceans", "deserts", "jungles", "marshes", "caves"],
  "celestialBodies": ["single moon", "multiple moons", "rings", "asteroids", "comets", "nebulae", "stars", "planets", "black holes", "supernovae", "galaxies", "quasars"],
  "geologicalFormations": ["volcanoes", "geysers", "glaciers", "canyons", "waterfalls", "caves", "craters", "plateaus", "basins", "fjords", "mesas", "arches"]
};
// Game design choices to influence the look and feel of the game
const gameDesignChoices = {
  "timePeriod": ["Ancient", "Medieval", "Renaissance", "Industrial", "Futuristic", "Alternate History", "Prehistoric", "Colonial"],
  "theme": ["Fantasy: High Fantasy", "Fantasy: Low Fantasy", "Fantasy: Urban Fantasy", "Fantasy: Gothic Fantasy", "Fantasy: Dark Fantasy", "Fantasy: Fairy Tale", "SciFi: Space Opera", "SciFi: Cyberpunk", "SciFi: Steampunk", "SciFi: Biopunk", "SciFi: Utopian Sci-Fi", "SciFi: Dystopian Sci-Fi", "postApocalyptic: Nuclear Fallout", "postApocalyptic: Zombie Apocalypse", "postApocalyptic: Environmental Catastrophe", "postApocalyptic: Alien Invasion", "mythological: Greek Mythology", "mythological: Norse Mythology", "mythological: Egyptian Mythology", "mythological: Asian Mythology", "mythological: Celtic Mythology", "mythological: Native American Mythology"],
  "environment": ["Forest", "Desert", "Mountain", "Ocean", "Urban", "Arctic", "Swamp", "Underwater", "Volcanic", "Sky"],
  "atmosphere": ["Mysterious", "Magical", "Dark", "Whimsical", "Serene", "Surreal", "Dystopian", "Utopian", "Eerie", "Lively"],
  "location": ["Island", "Underground", "Floating", "Celestial", "Extraterrestrial", "Subterranean", "Dimensional", "Interstellar", "Seaside Town", "Wilderness", "Wasteland", "City", "Border Town", "Small Town", "Village"],
  "landmarks": ["Ruins", "Temples", "Caves", "Castles", "Monuments", "Megaliths", "Laboratories", "Ancient Cities"],
  "inhabitants": ["Humans: Medieval European Humans", "Humans: Asian Humans", "Humans: African Humans", "Humans: Indigenous Humans", "Humans: Futuristic Humans", "Humans: Victorian Humans", "Humans: Nomadic Tribes"],
  "mythicalCreatures": ["Dragons", "Griffins", "Phoenixes", "Unicorns", "Chimeras", "Basilisks", "Sphinxes"],
  "aliens": ["Extraterrestrials", "Greys", "Reptilians", "Nordics", "Mantis Beings", "Annunaki", "Sirians", "Pleiadians", "Arcturians", "Zeta Reticulans", "Draconians", "Orions", "Andromedans", "Martians"],
  "robots": ["Androids", "Cyborgs", "Automatons", "Sentinels"],
  "elementalRaces": ["Fire Elementals", "Water Elementals", "Air Elementals", "Earth Elementals", "Light Elementals", "Dark Elementals"],
  "conflict": ["War", "Exploration", "Survival", "Quest", "Discovery", "Intrigue", "Revolution", "Liberation", "Conquest", "Rebellion"],
  "elementalInfluence": ["Fire", "Water", "Earth", "Air", "Ice", "Lightning", "Shadow", "Light", "Metal", "Wood"],
  "technologyLevel": ["Primitive", "Advanced", "Magical", "Industrial", "Cybernetic", "Nanotech", "Genetic", "Quantum", "Steam-Powered", "Clockwork"],
  "culturalInfluences": ["Medieval European", "Asian", "African", "Indigenous", "Futuristic", "Ancient Greek", "Norse", "Mayan", "Roman", "Persian"],
  "narrativeFocus": ["Heroic Journey", "Coming of Age", "Intrigue", "Redemption", "Revenge", "Mystery", "Romance", "Adventure", "Tragedy", "Comedy", "Satire", "Parable", "Exploration", "Betrayal", "Friendship"],
  "creationStories": ["Cosmic Eggs", "Primordial Beings", "Divine Interventions", "World Trees", "Chaos and Order"],
  "mythologicalFigures": ["Heroes", "Gods", "Goddesses", "Demigods", "Titans", "Monsters", "Sages"],
  "legendaryArtifacts": ["Swords", "Amulets", "Relics", "Talismans", "Orbs", "Runestones", "Crystal Skulls"],
  "ancientTexts": ["Scriptures", "Prophecies", "Fables", "Epics", "Grimoires", "Codices", "Tablets"],
  "governmentTypes": ["Monarchy", "Democracy", "Oligarchy", "Theocracy", "Anarchy", "Republic"],
  "socialClasses": ["Nobility", "Commoners", "Slaves", "Merchants", "Artisans", "Scholars", "Criminals"],
  "religions": ["Polytheistic", "Monotheistic", "Pantheistic", "Animistic", "Cults", "Mysticism"],
  "culturalCustoms": ["Rituals", "Festivals", "Rites of Passage", "Taboos", "Etiquette", "Traditions"],
  "magicalSchools": ["Elemental", "Necromancy", "Illusion", "Enchantment", "Alchemy", "Divination"],
  "magicalArtifacts": ["Wands", "Staves", "Orbs", "Grimoires", "Talismans", "Runes"],
  "magicalBeings": ["Fairies", "Pixies", "Gnomes", "Golems", "Familiars", "Spirits", "Elementals"],
  "magicalAbilities": ["Shapeshifting", "Teleportation", "Mind Control", "Time Manipulation", "Summoning"],
  "warsAndConflicts": ["Epic Battles", "Invasions", "Revolutions", "Civil Wars", "Crusades"],
  "naturalDisasters": ["Floods", "Earthquakes", "Volcanic Eruptions", "Tsunamis", "Meteor Strikes"],
  "technologicalBreakthroughs": ["Inventions", "Scientific Discoveries", "Industrial Revolution"],
  "culturalRenaissances": ["Artistic", "Philosophical", "Spiritual", "Literary"],
  "tradeRoutes": ["Land", "Sea", "Air", "Interdimensional", "Silk Road", "Trade Caravans"],
  "currencies": ["Gold", "Gems", "Barter", "Magical Energy", "Cryptocurrency"],
  "industries": ["Mining", "Agriculture", "Crafting", "Alchemy", "Textiles", "Shipbuilding"],
  "tradeOrganizations": ["Guilds", "Cartels", "Monopolies", "Merchant Alliances"],
  "cosmicEvents": ["Solar Eclipses", "Lunar Eclipses", "Comets", "Meteor Showers", "Auroras"],
  "planarRealms": ["Celestial", "Infernal", "Fey", "Elemental", "Astral", "Dreamscape"],
  "portalsAndGateways": ["Interdimensional", "Teleportation", "Ancient Portals", "Wormholes"],
  "timeDistortions": ["Time Travel", "Time Loops", "Temporal Rifts", "Anachronisms"]
};
function formatOptions(options) {
  if (Array.isArray(options) && options.length > 0) {
    if (options.length === 1) {
      return options[0];
    } else {
      const lastOption = options.pop();
      return `${options.join(', ')} and ${lastOption}`;
    }
  } else {
    return "**No Options Available**";
  }
}
function shortPrompt(worldSeed) {
  let prompt = `Design a 2D action RPG with the following elements: `;
  prompt += `Set in ${formatOptions(worldSeed.timePeriod)} ${formatOptions(worldSeed.theme)} world with a ${formatOptions(worldSeed.atmosphere)} atmosphere. `;
  prompt += `The environment features ${formatOptions(worldSeed.environment)} ${formatOptions(worldSeed.location)} adorned with ${formatOptions(worldSeed.landmarks)}. `;
  prompt += `Inhabited by ${formatOptions(worldSeed.inhabitants)}, the world faces ${formatOptions(worldSeed.conflict)} influenced by ${formatOptions(worldSeed.elementalInfluence)} and ${formatOptions(worldSeed.technologyLevel)} technology. `;
  prompt += `Cultural inspiration is drawn from ${formatOptions(worldSeed.culturalInfluences)} traditions, focusing on ${formatOptions(worldSeed.narrativeFocus)} narratives.`;
  return prompt;
}
function detailedPrompt(worldSeed){
  return worldSeed;
}
function detailedPromptOld(worldSeed) {
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
};
const initialWorldSeed = {
  timePeriod: gameDesignChoices.timePeriod[1] || "Medieval",
  theme: gameDesignChoices.theme[0] || "Fantasy: High Fantasy",
  atmosphere: gameDesignChoices.atmosphere[1] || "Magical",
  environment: gameDesignChoices.environment[0] || "Forest",
  location: gameDesignChoices.location[0] || "Island",
  landmarks: gameDesignChoices.landmarks[0] || "Ruins",
  inhabitants: gameDesignChoices.inhabitants[0] || "Humans: Medieval European Humans",
  mythicalCreatures: gameDesignChoices.mythicalCreatures[0] || "Dragons",
  aliens: gameDesignChoices.aliens[0] || "Extraterrestrials",
  robots: gameDesignChoices.robots[0] || "Androids",
  elementalRaces: gameDesignChoices.elementalRaces[0] || "Fire Elementals",
  conflict: gameDesignChoices.conflict[0] || "War",
  elementalInfluence: gameDesignChoices.elementalInfluence[0] || "Fire",
  technologyLevel: gameDesignChoices.technologyLevel[2] || "Magical",
  culturalInfluences: gameDesignChoices.culturalInfluences[6] || "Norse",
  narrativeFocus: gameDesignChoices.narrativeFocus[0] || "Heroic Journey",
  creationStories: gameDesignChoices.creationStories[0] || "Cosmic Eggs",
  mythologicalFigures: gameDesignChoices.mythologicalFigures[0] || "Heroes",
  legendaryArtifacts: gameDesignChoices.legendaryArtifacts[0] || "Swords",
  ancientTexts: gameDesignChoices.ancientTexts[0] || "Scriptures",
  governmentTypes: gameDesignChoices.governmentTypes[0] || "Monarchy",
  socialClasses: gameDesignChoices.socialClasses[0] || "Nobility",
  religions: gameDesignChoices.religions[0] || "Polytheistic",
  culturalCustoms: gameDesignChoices.culturalCustoms[0] || "Rituals",
  magicalSchools: gameDesignChoices.magicalSchools[0] || "Elemental",
  magicalArtifacts: gameDesignChoices.magicalArtifacts[0] || "Wands",
  magicalBeings: gameDesignChoices.magicalBeings[0] || "Fairies",
  magicalAbilities: gameDesignChoices.magicalAbilities[0] || "Shapeshifting",
  warsAndConflicts: gameDesignChoices.warsAndConflicts[0] || "Epic Battles",
  naturalDisasters: gameDesignChoices.naturalDisasters[0] || "Floods",
  technologicalBreakthroughs: gameDesignChoices.technologicalBreakthroughs[0] || "Inventions",
  culturalRenaissances: gameDesignChoices.culturalRenaissances[0] || "Artistic",
  tradeRoutes: gameDesignChoices.tradeRoutes[0] || "Land",
  currencies: gameDesignChoices.currencies[0] || "Gold",
  industries: gameDesignChoices.industries[0] || "Mining",
  tradeOrganizations: gameDesignChoices.tradeOrganizations[0] || "Guilds",
  cosmicEvents: gameDesignChoices.cosmicEvents[0] || "Solar Eclipses",
  planarRealms: gameDesignChoices.planarRealms[0] || "Celestial",
  portalsAndGateways: gameDesignChoices.portalsAndGateways[0] || "Interdimensional",
  timeDistortions: gameDesignChoices.timeDistortions[0] || "Time Travel"
};
function getDefaultValueProvider() {
  return function(category) {
    return initialWorldSeed[category] || "**No Default Available**";
  };
}
function getRandomOption(options) {
  return options[Math.floor(Math.random() * options.length)];
}
function generateWorldSeed() {
  const prompt = {};
  for (const category in gameDesignChoices) {
    prompt[category] = getRandomOption(gameDesignChoices[category]);
  }
  return prompt;
}
function getSelectedWorldSeed() {
  const worldSeed = {};
  Object.keys(gameDesignChoices).forEach(category => {
    try {
      const element = document.getElementById(category);
      if (!element || element.tagName.toLowerCase() !== 'select') {
        throw new Error(`Invalid element with ID "${category}" for world seed selection.`);
      }
      const selectedOptionsForCategory = selectedOptions[category] || [];
      worldSeed[category] = selectedOptionsForCategory.length > 0
        ? selectedOptionsForCategory
        : [element.value];
    } catch (error) {
      worldSeed[category] = getDefaultValueProvider()(category);
    }
  });
  return worldSeed;
}
function updateSelectedOptions(category, optionElement) {
  if (optionElement instanceof Element) {
    const selectedOptionsForCategory = selectedOptions[category] || [];

    if (optionElement.classList.contains('selected')) {
      selectedOptionsForCategory.push(optionElement.innerText);
    } else {
      const index = selectedOptionsForCategory.indexOf(optionElement.innerText);
      if (index !== -1) {
        selectedOptionsForCategory.splice(index, 1);
      }
    }

    // Remove duplicates
    selectedOptions[category] = [...new Set(selectedOptionsForCategory)];
  } else {
    console.error('Invalid optionElement passed to updateSelectedOptions');
  }
}
function createWorldSeedForm() {
  const formContainer = document.createElement('div');
  const form = document.createElement('form');
  form.setAttribute('id', 'world-seed-form');
  let targetElement = document.getElementById('worldSeedBuilder');
  if (!targetElement) {
    targetElement = document.body;
  }
  targetElement.appendChild(form);

  Object.keys(gameDesignChoices).forEach(category => {
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');

    const label = document.createElement('label');
    label.innerText = category.charAt(0).toUpperCase() + category.slice(1);
    formGroup.appendChild(label);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');
    formGroup.appendChild(optionsContainer);

    gameDesignChoices[category].forEach(option => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerText = option;
      optionsContainer.appendChild(optionElement);

optionElement.addEventListener('click', function() {
  // Toggle selected state visually
  this.classList.toggle('selected');

  // Update selected options for this category
  const currentCategory = category; // Assuming category is still accessible
  updateSelectedOptions(currentCategory, this);
  updatePrompts();
});
    });

    form.appendChild(formGroup);
  });
}
function updatePrompts() {
  const worldSeed = getSelectedWorldSeed();
  const shortPromptElement = document.getElementById('short-prompt');
  const detailedPromptElement = document.getElementById('detailed-prompt');
  shortPromptElement.innerText = shortPrompt(worldSeed);
  detailedPromptElement.innerText = detailedPrompt(worldSeed);
}
export { generateWorldSeed, shortPrompt, detailedPrompt, createWorldSeedForm, updatePrompts };
