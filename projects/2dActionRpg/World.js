//World.js
const categories = {
    "TimePeriod": ["Ancient", "Medieval", "Renaissance", "Industrial", "Futuristic", "Alternate History", "Prehistoric", "Colonial"],
    "Theme": ["Fantasy", "High Fantasy", "Low Fantasy", "Urban Fantasy", "Gothic Fantasy", "Dark Fantasy", "Fairy Tale", "SciFi", "Space Opera", "Cyberpunk", "Steampunk", "Biopunk", "Utopian", "Dystopian", "Nuclear Fallout", "Zombie Apocalypse", "Environmental Catastrophe", "Alien Invasion", "Postapocalyptic", "Greek Mythology", "Norse Mythology", "Egyptian Mythology", "Asian Mythology", "Celtic Mythology", "Native American Mythology"],
    "Environment": ["Forest", "Desert", "Mountain", "Ocean", "Urban", "Arctic", "Swamp", "Underwater", "Volcanic", "Sky"],
    "Atmosphere": ["Mysterious", "Magical", "Dark", "Whimsical", "Serene", "Surreal", "Dystopian", "Utopian", "Eerie", "Lively"],
    "Location": ["Island", "Underground", "Floating", "Celestial", "Extraterrestrial", "Subterranean", "Dimensional", "Interstellar", "Seaside Town", "Wilderness", "Wasteland", "City", "Border Town", "Small Town", "Village"],
    "Inhabitants": ["Humans", "Mythical Creatures", "Aliens", "Robots", "Undead", "Merfolk", "Sentient Plants", "Constructs", "Symbiotic Species"],
    "Social Classes": ["Nobility", "Commoners", "Slaves", "Merchants", "Artisans", "Scholars", "Criminals", "Peasants", "Warriors"],
    "Government Types": ["Monarchy", "Democracy", "Oligarchy", "Theocracy", "Anarchy", "Republic", "Dictatorship", "Kleptocracy", "Confederacy"],
    "Religions": ["Polytheistic", "Monotheistic", "Pantheistic", "Animistic", "Cults", "Mysticism", "Atheism", "Shamanism", "Paganism"],
    "Conflict": ["War", "Exploration", "Survival", "Quest", "Discovery", "Intrigue", "Revolution", "Liberation", "Conquest", "Rebellion"],
    "Elemental": ["Fire", "Water", "Earth", "Air", "Ice", "Lightning", "Shadow", "Light", "Metal", "Wood"],
    "Magic Schools": ["Elemental", "Necromancy", "Illusion", "Enchantment", "Alchemy", "Divination", "Summoning", "Transmutation", "Blood Magic", "Rune Craft", "Wardcrafting", "Artificing", "Primal Magic"],
    "Magic Artifacts": ["Wands", "Staffs", "Orbs", "Grimoires", "Talismans", "Runes", "Potions", "Scrolls", "Crystals", "Tomes", "Relics", "Rings", "Amulets", "Spellbooks"],
    "Magic Beings": ["Fairies", "Pixies", "Gnomes", "Golems", "Familiars", "Spirits", "Elementals", "Demons", "Angels", "Genies", "Celestial Beings"],
    "Magic Abilities": ["Shapeshifting", "Teleportation", "Mind Control", "Time Manipulation", "Summoning", "Illusions", "Healing", "Flight", "Invisibility", "Elemental Manipulation", "Astral Projection", "Precognition", "Empathy", "Telekinesis", "Metamorphosis"],
    "Narrative Focus": ["Heroic Journey", "Coming of Age", "Intrigue", "Redemption", "Revenge", "Mystery", "Romance", "Adventure", "Tragedy", "Comedy", "Satire", "Parable", "Exploration", "Betrayal", "Friendship"],
    "Creation Stories": ["Big Bang", "Simulation Theory", "Cosmic Eggs", "Primordial Beings", "Divine Interventions", "World Trees", "Chaos and Order", "Cosmic Serpents", "Celestial Wars", "Mythical Creation", "Titanomachy", "Cyclic Creation", "Hero's Journey (Creation)", "Alien Intervention", "Spontaneous Generation"],
    "Mythological Figures": ["Heroes", "Gods", "Goddesses", "Demigods", "Titans", "Monsters", "Sages", "Dragons", "Legendary Beasts", "Mythical Creatures", "Trickster Figures", "Spirits of Nature", "Prophets"],
    "Legendary Artifacts": ["Swords", "Amulets", "Relics", "Talismans", "Orbs", "Runestones", "Crystal Skulls", "Ancient Tomes", "Enchanted Armor", "Cursed Artifacts", "Sentient Weapons", "Lost Technologies"],
    "Ancient Texts": ["Scriptures", "Prophecies", "Fables", "Epics", "Grimoires", "Codices", "Tablets", "Scrolls", "Inscriptions", "Manuscripts", "Chronicles", "Epic Poems", "Moral Codes"],
    "Trade Routes": ["Land", "Sea", "Air", "Interdimensional", "Silk Road", "Trade Caravans", "Space Routes", "Magical Paths", "Underground Tunnels", "Sky Bridges"],
    "Trade Organizations": ["Guilds", "Cartels", "Monopolies", "Merchant Alliances", "Federations", "Consortiums", "Trade Unions", "Syndicates", "Chambers of Commerce", "Marketplaces"],
    "Currency": ["Gold", "Gems", "Barter", "Magical Energy", "Cryptocurrency", "Trade Tokens", "Credits", "Soul Gems", "Favor Points", "Star Dust", "Rare Materials", "Vouchers or Coupons", "Debt-based System"],
    "Industries": ["Mining", "Agriculture", "Crafting", "Alchemy", "Textiles", "Shipbuilding", "Smithing", "Fishing", "Logging", "Construction", "Entertainment", "Tourism", "Archaeology"],
    "Wars and Conflicts": ["Epic Battles", "Invasions", "Revolutions", "Civil Wars", "Crusades", "Sieges", "Skirmishes", "Tribal Conflicts", "Nuclear Warfare", "Cold War", "Resource Wars", "Ideological Conflicts", "Religious Wars", "Proxy Wars"],
    "Natural Disasters": ["Floods", "Earthquakes", "Volcanic Eruptions", "Tsunamis", "Meteor Strikes", "Droughts", "Hurricanes", "Tornadoes", "Blizzards", "Avalanches", "Plagues", "Meteorological Anomalies"],
    "Technological Breakthroughs": ["Inventions", "Scientific Discoveries", "Industrial Revolution", "Space Exploration", "Genetic Engineering", "Robotics Revolution", "Virtual Reality Integration", "Nanotechnology"],
    "Cultural Renaissances": ["Artistic", "Philosophical", "Spiritual", "Literary", "Scientific", "Technological", "Scientific Revolution", "Philosophical Revolution", "Social Reform Movements", "Agrarian Revolution"],
    "Cosmic Events": ["Solar Eclipses", "Lunar Eclipses", "Comets", "Meteor Showers", "Auroras", "Supernovas", "Black Holes", "Celestial Alignments", "Galactic Collisions", "Black Hole Collisions", "Nebulae Formations"],
    "Planar Realms": ["Celestial", "Infernal", "Fey", "Elemental", "Astral", "Dreamscape", "Ethereal", "Shadow", "Prime Material", "Underworld", "Faerie Realm", "Machine Worlds", "Void"],
    "Portals and Gateways": ["Interdimensional", "Teleportation", "Ancient Portals", "Wormholes", "Magic Circles", "Stargates", "Temporal Vortexes", "Dimensional Rifts", "Ley Lines", "Blood Magic Rituals"],
    "Time Distortions": ["Time Travel", "Time Loops", "Temporal Rifts", "Anachronisms", "Time Dilation", "Parallel Timelines", "Time Compression", "Temporal Paradoxes", "Premonitions"],
    "Fauna": ["Mammals", "Reptiles", "Birds", "Amphibians", "Insects", "Arachnids", "Fish", "Dinosaurs", "Dragons"],
    "Flora": ["Trees", "Flowers", "Grasses", "Fungi", "Vines", "Mosses", "Algae", "Cacti", "Seaweed"],
    "Weather": ["Rain", "Sunshine", "Clouds", "Thunderstorms", "Snow", "Fog", "Wind", "Hail", "Tornadoes"],
    "Terrain Features": ["Rivers", "Caves", "Mountains", "Valleys", "Waterfalls", "Plateaus", "Cliffs", "Glaciers", "Lakes"],
    "Mystical Locations": ["Haunted Forests", "Sacred Groves", "Ancient Ruins", "Floating Islands", "Crystal Caves", "Mystical Springs", "Hidden Valleys", "Forgotten Cities"],
    "Folklore Creatures": ["Werewolves", "Vampires", "Ghosts", "Goblins", "Ogres", "Banshees", "Leprechauns", "Chupacabras", "Yeti", "Gremlins", "Hobgoblins"],
    "Monsters": ["Dragons", "Hydras", "Gargoyles", "Manticores", "Chimeras", "Basilisks", "Wendigos", "Kraken", "Griffins", "Sphinxes"],
    "Character Roles": ["Heroes", "Villains", "Sidekicks", "Mentors", "Antiheroes", "Sages", "Rogues", "Warriors", "Mages", "Healers", "Artificers", "Scouts", "Scholars"],
    "Character Traits": ["Bravery", "Cunning", "Wisdom", "Charisma", "Strength", "Agility", "Intelligence", "Resilience", "Empathy"],
    "Character Backstories": ["Orphaned", "Noble Heritage", "Traumatic Past", "Mysterious Origins", "Lost Memories", "Betrayal", "Quest for Redemption", "Hidden Powers"],
    "Character Motivations": ["Revenge", "Justice", "Redemption", "Curiosity", "Love", "Power", "Greed", "Survival", "Honor"],
    "Weapons": ["Swords", "Bows", "Axes", "Spears", "Daggers", "Maces", "Staffs", "Crossbows", "Whips", "Flails"],
    "Armors": ["Plate Armor", "Chainmail", "Leather Armor", "Robes", "Scale Armor", "Shields", "Helmets", "Gauntlets", "Greaves"],
    "Transport": ["Horses", "Carts", "Ships", "Airships", "Dragons", "Teleportation", "Bicycles", "Motorcycles", "Hovercrafts", "Starships"],
    "Communication": ["Telepathy", "Letters", "Messengers", "Crystals", "Magic Mirrors", "Holograms", "Signals", "Telegraph", "Radio"],
    "Economy": ["Feudal", "Capitalist", "Communist", "Barter", "Trade", "Subsistence", "Socialist", "Market", "Gift Economy"],
    "Education": ["Apprenticeships", "Schools", "Universities", "Libraries", "Monasteries", "Online Learning", "Field Studies", "Mentorships", "Trade Schools"],
    "Healthcare": ["Herbal Medicine", "Magic Healing", "Advanced Technology", "Traditional Remedies", "Shamanism", "Alchemical Treatments", "Genetic Modification", "Bionic Enhancements", "Energy Healing"],
    "Technology Levels": ["Primitive", "Medieval", "Renaissance", "Industrial", "Modern", "Futuristic", "Post-Apocalyptic", "Steampunk", "Cyberpunk"],
    "Housing": ["Cottages", "Castles", "Mansions", "Huts", "Tents", "Cabins", "Apartments", "Skyscrapers", "Floating Cities"],
    "Travel": ["Walking", "Horseback", "Carriages", "Sailing Ships", "Steam Trains", "Automobiles", "Airplanes", "Spacecraft", "Teleportation Circles"],
    "Entertainment": ["Theater", "Music", "Sports", "Gladiatorial Games", "Festivals", "Circuses", "Storytelling", "Board Games", "Virtual Reality"],
    "Languages": ["Common Tongue", "Elvish", "Dwarvish", "Ancient", "Magical", "Runes", "Telepathic", "Code", "Sign Language"],
    "Art": ["Painting", "Sculpture", "Music", "Dance", "Theater", "Literature", "Architecture", "Fashion", "Pottery"],
    "Cuisine": ["Gourmet", "Street Food", "Traditional", "Exotic", "Fusion", "Vegetarian", "Meat-based", "Spicy", "Sweet"],
    "Festivals": ["Harvest", "New Year", "Religious", "Cultural", "Seasonal", "Music", "Food", "Arts", "Historical Reenactments"],
    "Sports": ["Archery", "Swordsmanship", "Horse Riding", "Foot Races", "Ball Games", "Wrestling", "Martial Arts", "Gladiatorial Combat", "Jousting"],
    "Hobbies": ["Gardening", "Fishing", "Hiking", "Crafting", "Collecting", "Writing", "Cooking", "Magic Practice", "Stargazing"],
    "Transportation": ["Walking", "Horseback", "Carts", "Ships", "Airships", "Teleportation", "Trains", "Cars", "Spaceships"],
    "Cultural Norms": ["Hospitality", "Honor", "Chivalry", "Respect for Elders", "Community", "Individualism", "Tradition", "Innovation", "Spirituality"],
    "Moral Dilemmas": ["Sacrifice", "Loyalty", "Justice", "Mercy", "Truth", "Deception", "Duty", "Freedom", "Honor"]
  };
  
  const promptTemplates = {
    "TimePeriod": "The game's world is set in the following time periods: ${formattedChoices}.",
    "Theme": "The game's theme includes the following elements: ${formattedChoices}.",
    "Environment": "The game's world is characterized by various environments, including: ${formattedChoices}.",
    "Atmosphere": "The atmosphere of the game varies, offering elements of: ${formattedChoices}.",
    "Location": "The game's setting encompasses diverse locations, such as: ${formattedChoices}.",
    "Inhabitants": "The world is inhabited by various beings, including: ${formattedChoices}.",
    "Social Classes": "The society is divided into different social classes, including: ${formattedChoices}.",
    "Government Types": "The ruling system varies and includes: ${formattedChoices}.",
    "Religions": "The game's world is influenced by different religions, including: ${formattedChoices}.",
    "Conflict": "The central conflict revolves around various themes, such as: ${formattedChoices}.",
    "Elemental": "The elements play a significant role, including: ${formattedChoices}.",
    "Magic Schools": "Magic is practiced through various schools, including: ${formattedChoices}.",
    "Magic Artifacts": "Powerful artifacts exist, such as: ${formattedChoices}.",
    "Magic Beings": "Various magical beings inhabit the world, including: ${formattedChoices}.",
    "Magic Abilities": "Characters possess various magical abilities, including: ${formattedChoices}.",
    "Narrative Focus": "The story's focus encompasses various themes, including: ${formattedChoices}.",
    "Creation Stories": "The world's creation is explained through various stories, including: ${formattedChoices}.",
    "Mythological Figures": "Legends feature various mythological figures, including: ${formattedChoices}.",
    "Legendary Artifacts": "There are legendary items, including: ${formattedChoices}.",
    "Ancient Texts": "Ancient texts include various scriptures, prophecies, and fables, such as: ${formattedChoices}.",
    "Trade Routes": "Trade occurs through various routes, including: ${formattedChoices}.",
    "Trade Organizations": "Various organizations control commerce, such as: ${formattedChoices}.",
    "Currency": "The currency used varies and includes: ${formattedChoices}.",
    "Industries": "Major industries include: ${formattedChoices}.",
    "Wars and Conflicts": "Historical wars include: ${formattedChoices}.",
    "Natural Disasters": "The world is prone to various natural disasters, including: ${formattedChoices}.",
    "Technological Breakthroughs": "Advancements include: ${formattedChoices}.",
    "Cultural Renaissances": "Periods of renaissance include: ${formattedChoices}.",
    "Cosmic Events": "Celestial events include: ${formattedChoices}.",
    "Planar Realms": "Different realms exist, including: ${formattedChoices}.",
    "Portals and Gateways": "Access to other realms is possible through: ${formattedChoices}.",
    "Time Distortions": "Time is distorted by phenomena such as: ${formattedChoices}.",
    "Fauna": "The world is home to various creatures, including: ${formattedChoices}.",
    "Flora": "Flora includes various types, such as: ${formattedChoices}.",
    "Weather": "Weather patterns consist of: ${formattedChoices}.",
    "Terrain Features": "Terrain is marked by various features, including: ${formattedChoices}.",
    "Architectural Styles": "Architecture reflects various styles, including: ${formattedChoices}.",
    "Transportation": "Transportation methods include: ${formattedChoices}.",
    "Communication Methods": "Communication is achieved through: ${formattedChoices}.",
    "Entertainment": "Entertainment includes: ${formattedChoices}.",
    "Food and Cuisine": "Cuisine comprises various dishes, including: ${formattedChoices}.",
    "Healthcare Practices": "Healthcare involves various methods, including: ${formattedChoices}.",
    "Education Systems": "Education is provided by systems such as: ${formattedChoices}.",
    "Social Norms and Customs": "Norms and customs include: ${formattedChoices}.",
    "Environmental Hazards": "Hazards such as: ${formattedChoices} pose threats.",
    "Timekeeping": "Time is measured using various methods, including: ${formattedChoices}.",
    "Factions and Organizations": "The game's world is shaped by: ${formattedChoices}."
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

// Example usage:
// const worldSeed = generateWorldSeed();
// console.log(worldSeed);