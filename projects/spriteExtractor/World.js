//World.js

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
        humans: ['Medieval European', 'Asian', 'African', 'Indigenous', 'Futuristic'],
        elves: ['High Elves', 'Wood Elves', 'Dark Elves'],
        dwarves: ['Mountain Dwarves', 'Hill Dwarves', 'Deep Dwarves'],
        mythicalCreatures: ['Dragons', 'Griffins', 'Phoenixes', 'Unicorns'],
        aliens: ['Extraterrestrial'],
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

// Synthesize a pixel art prompt from the generated world seed
function synthesizePixelArtPrompt(worldSeed) {
    let pixelArtPrompt = `${worldSeed.timePeriod} ${worldSeed.theme} ${worldSeed.environment}`;
    if (worldSeed.atmosphere) {
        pixelArtPrompt += ` with a ${worldSeed.atmosphere} atmosphere`;
    }
    if (worldSeed.location) {
        pixelArtPrompt += ` located in a ${worldSeed.location}`;
    }
    if (worldSeed.landmarks) {
        pixelArtPrompt += ` featuring ${worldSeed.landmarks}`;
    }
    if (worldSeed.inhabitants) {
        pixelArtPrompt += ` inhabited by ${worldSeed.inhabitants}`;
    }
    if (worldSeed.conflict) {
        pixelArtPrompt += ` and involves ${worldSeed.conflict}`;
    }
    if (worldSeed.elementalInfluence) {
        pixelArtPrompt += ` with a touch of ${worldSeed.elementalInfluence} influence`;
    }
    if (worldSeed.technologyLevel) {
        pixelArtPrompt += ` and ${worldSeed.technologyLevel} technology`;
    }
    if (worldSeed.culturalInfluences) {
        pixelArtPrompt += ` inspired by ${worldSeed.culturalInfluences} culture`;
    }
    if (worldSeed.narrativeFocus) {
        pixelArtPrompt += ` focusing on ${worldSeed.narrativeFocus}`;
    }

    return pixelArtPrompt;
}

// Display the world seed and pixel art prompt
function displayWorldSeedAndPrompt() {
    const worldSeed = generateWorldSeed();
    const pixelArtPrompt = synthesizePixelArtPrompt(worldSeed);

    const worldSeedDisplay = document.getElementById('worldSeedDisplay');
    worldSeedDisplay.innerHTML = '<h3>Generated World Seed:</h3>';
    
    const ul = document.createElement('ul');
    for (const key in worldSeed) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${worldSeed[key]}`;
        ul.appendChild(li);
    }
    worldSeedDisplay.appendChild(ul);

    const promptDisplay = document.createElement('div');
    promptDisplay.innerHTML = `<h3>Synthesized Pixel Art Prompt:</h3><p>${pixelArtPrompt}</p>`;
    worldSeedDisplay.appendChild(promptDisplay);
}

// Event listener for button click
document.getElementById('generateSeedButton').addEventListener('click', displayWorldSeedAndPrompt);

export { generateWorldSeed, synthesizePixelArtPrompt };
