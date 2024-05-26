//World.js

const requirements = {
    charAssetTypes :['warriors', 'mages', 'monsters', 'NPCs'],
    hardAssetTypes : ['trees', 'rocks', 'chests', 'barrels', 'doors', 'treasure chests'],
    softAssetTypes : ['ground tiles', 'water tiles', 'grass patches', 'flowers', 'bushes']
};
// Define the categories and options
const categories = {
    timePeriod: ['Ancient', 'Medieval', 'Renaissance', 'Industrial', 'Futuristic', 'Alternate History'],
    theme: {
        fantasy: ['High Fantasy', 'Low Fantasy', 'Urban Fantasy', 'Gothic Fantasy'],
        sciFi: ['Space Opera', 'Cyberpunk', 'Steampunk', 'Biopunk'],
        postApocalyptic: ['Nuclear Fallout', 'Zombie Apocalypse', 'Environmental Catastrophe'],
        mythological: ['Greek Mythology', 'Norse Mythology', 'Egyptian Mythology', 'Asian Mythology']
    },
    environment: ['Forest', 'Desert', 'Mountains', 'Ocean', 'Urban', 'Arctic', 'Swamp', 'Underwater'],
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
        spirits: ['Ghosts', 'Elementals']
    },
    conflict: ['War', 'Exploration', 'Survival', 'Quest', 'Discovery', 'Intrigue', 'Revolution', 'Liberation'],
    elementalInfluence: ['Fire', 'Water', 'Earth', 'Air', 'Ice', 'Lightning', 'Shadow', 'Light'],
    technologyLevel: ['Primitive', 'Advanced', 'Magical', 'Industrial', 'Cybernetic', 'Nanotech', 'Genetic', 'Quantum'],
    culturalInfluences: ['Medieval European', 'Asian', 'African', 'Indigenous', 'Futuristic', 'Ancient Greek', 'Norse', 'Mayan'],
    narrativeFocus: ['Mystery', 'Adventure', 'Romance', 'Intrigue', 'Redemption', 'Heroism', 'Tragedy', 'Exploration']
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

function synthesizePixelArtPrompt(worldSeed) {
    let prompt = `Create a pixel art spritesheet for an immersive 2D action RPG set in a ${worldSeed.timePeriod} world. The game's theme is ${worldSeed.theme}, with a ${worldSeed.atmosphere} atmosphere permeating the realm. `;

    prompt += `The world's environment is a vast ${worldSeed.environment}, where the action takes place on a ${worldSeed.location} adorned with ${worldSeed.landmarks}. `;

    prompt += `Among the inhabitants of this world are ${worldSeed.inhabitants}, each with their unique traits and characteristics. `;

    prompt += `The central conflict driving the narrative is a ${worldSeed.conflict}, influenced by the forces of ${worldSeed.elementalInfluence} and the presence of ${worldSeed.technologyLevel} technology. `;

    prompt += `The cultural inspiration for this world draws from the rich traditions of ${worldSeed.culturalInfluences}, with a focus on ${worldSeed.narrativeFocus} narratives.`;

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
