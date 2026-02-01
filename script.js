const aliens = [
    {
        id: "heatblast",
        name: "HEATBLAST",
        species: "PYRONITE",
        stats: { power: 90, speed: 60, utility: 70 },
        powers: "Pyrokinesis, Fire Absorption, Flight (via fire propulsion), Heat Resistance.",
        bio: "Heatblast is a magma-based lifeform that can control fire. He can generate intense heat, shoot fireballs, and even ride on a board made of flame. His body is composed of hot rocks and lava.",
        color: "#ff4400"
    },
    {
        id: "wildmutt",
        name: "WILDMUTT",
        species: "VULPIMANCER",
        stats: { power: 75, speed: 85, utility: 90 },
        powers: "Enhanced Smelling, Enhanced Hearing, Sharp Claws, Enhanced Agility.",
        bio: "Wildmutt appears to be a large orange dog with no eyes. He sees using thermography and enhanced senses. He is extremely agile and a strong climber.",
        color: "#ff8800"
    },
    {
        id: "diamondhead",
        name: "DIAMONDHEAD",
        species: "PETROSAPIEN",
        stats: { power: 85, speed: 40, utility: 80 },
        powers: "Crystallokinesis, Crystal Shard Projectiles, Weapon Regeneration, Durability.",
        bio: "Diamondhead's body is composed of extremely durable organic crystals. He can manipulate his atomic structure to turn his hands into blades or shoot shards.",
        color: "#00ffcc"
    },
    {
        id: "xlr8",
        name: "XLR8",
        species: "KINECELERAN",
        stats: { power: 50, speed: 100, utility: 60 },
        powers: "Super Speed, Enhanced Reflexes, Friction Manipulation, Sharp Claws.",
        bio: "XLR8 is a friction-manipulating speedster. He can reach speeds of 500 mph almost instantly. He has wheels on his feet and a visor for protection.",
        color: "#0088ff"
    },
    {
        id: "greymatter",
        name: "GREY MATTER",
        species: "GALVAN",
        stats: { power: 10, speed: 30, utility: 100 },
        powers: "Super Intelligence, Small Size, Sticky Skin, Amphibious Nature.",
        bio: "Grey Matter is a tiny, frog-like alien. Despite his size, his intellect is unmatched. He can understand complex machinery and squeeze into small spaces to sabotage or repair.",
        color: "#aaaaaa"
    },
    {
        id: "fourarms",
        name: "FOUR ARMS",
        species: "TETRAMAND",
        stats: { power: 100, speed: 40, utility: 50 },
        powers: "Super Strength, Enhanced Durability, Sonic Clap, High Jump.",
        bio: "Four Arms is a combat-oriented alien with four muscular arms. He relies on brute force to solve problems and can create shockwaves by clapping his hands.",
        color: "#cc0000"
    },
    {
        id: "stinkfly",
        name: "STINKFLY",
        species: "LEPIDOPTERRAN",
        stats: { power: 40, speed: 70, utility: 60 },
        powers: "Flight, Slime Projection, 360-degree Vision, Sharp Tail.",
        bio: "Stinkfly is an insectoid alien with wings. He can shoot sticky slime from his eyes and mouth. He emits a foul odor but is excellent for aerial combat.",
        color: "#55aa00"
    },
    {
        id: "ripjaws",
        name: "RIPJAWS",
        species: "PISCCISS VOLANN",
        stats: { power: 80, speed: 70, utility: 40 },
        powers: "Underwater Breathing, Steel-Bending Jaws, Enhanced Swimming, Glowing Lure.",
        bio: "Ripjaws matches the skills of Earth's aquatic predators. He is incredibly powerful underwater but weakens quickly on land due to dehydration.",
        color: "#005577"
    },
    {
        id: "upgrade",
        name: "UPGRADE",
        species: "GALVANIC MECHAMORPH",
        stats: { power: 60, speed: 50, utility: 95 },
        powers: "Technology Possession, Optic Laser, Liquid Body, Regeneration.",
        bio: "Upgrade consist of liquid metal nanotechnology. He can merge with and upgrade any technology he touches, enhancing its capabilities far beyond original specs.",
        color: "#00ff00"
    },
    {
        id: "ghostfreak",
        name: "GHOSTFREAK",
        species: "ECTONURITE",
        stats: { power: 30, speed: 40, utility: 90 },
        powers: "Invisibility, Intangibility, Flight, Possession, Tentacles.",
        bio: "Ghostfreak is a ghostly alien that can phase through solid matter and turn invisible. He can also possess living beings and has a scary hidden form.",
        color: "#8888aa"
    }
];

const alienListEl = document.getElementById('alienList');
const nameEl = document.getElementById('alienName');
const speciesEl = document.getElementById('alienSpecies');
const powersEl = document.getElementById('alienPowers');
const bioEl = document.getElementById('alienBio');
const imageEl = document.getElementById('alienImage');
const statPower = document.getElementById('statPower');
const statSpeed = document.getElementById('statSpeed');
const statUtility = document.getElementById('statUtility');

// Add sound effects (Simulated)
const clickSfx = () => {
    // Determine if we should play sound - for now just log
    // console.log("SFX: Click");
};

function renderList() {
    alienListEl.innerHTML = '';
    aliens.forEach(alien => {
        const item = document.createElement('div');
        item.className = 'alien-item';
        item.innerText = alien.name;
        item.addEventListener('click', () => selectAlien(alien));
        alienListEl.appendChild(item);
    });
}

function selectAlien(alien) {
    clickSfx();

    // Update Active State in List
    document.querySelectorAll('.alien-item').forEach(el => el.classList.remove('active'));
    // Find the clicked element (simplified for this structure)
    const items = Array.from(alienListEl.children);
    const index = aliens.findIndex(a => a.id === alien.id);
    if (items[index]) items[index].classList.add('active');

    // Update Details
    nameEl.innerText = alien.name;
    speciesEl.innerText = alien.species;
    powersEl.innerText = alien.powers;
    bioEl.innerText = alien.bio;

    // Update Image (Using CSS Color for now, but logical structure for Images)
    imageEl.classList.remove('placeholder');
    imageEl.style.background = `
        radial-gradient(circle at center, ${alien.color}88 0%, transparent 70%),
        repeating-linear-gradient(0deg, transparent, transparent 2px, #000 3px)
    `;
    imageEl.style.boxShadow = `inset 0 0 50px ${alien.color}`;
    imageEl.innerText = "";

    // Animate Stats
    // Reset first to trigger transition
    statPower.style.width = '0%';
    statSpeed.style.width = '0%';
    statUtility.style.width = '0%';

    setTimeout(() => {
        const pColor = alien.color;
        statPower.style.background = pColor;
        statSpeed.style.background = pColor;
        statUtility.style.background = pColor;

        statPower.style.boxShadow = `0 0 10px ${pColor}`;
        statSpeed.style.boxShadow = `0 0 10px ${pColor}`;
        statUtility.style.boxShadow = `0 0 10px ${pColor}`;

        statPower.style.width = `${alien.stats.power}%`;
        statSpeed.style.width = `${alien.stats.speed}%`;
        statUtility.style.width = `${alien.stats.utility}%`;
    }, 50);
}

// Init
renderList();
// Auto-select first alien
selectAlien(aliens[0]);
