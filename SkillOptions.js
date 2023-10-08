const firstSkillIdSelect = document.getElementById('5w1h-first-skill-id');
const secondSkillIdSelect = document.getElementById('5w1h-second-skill-id');

const skillOptions = [{
    value: "0",
    text: "No Skill"
},
    {
        value: "1",
        text: "Torso Up"
    },
    {
        value: "2",
        text: "Poison"
    },
    {
        value: "3",
        text: "Paralysis"
    },
    {
        value: "4",
        text: "Sleep"
    },
    {
        value: "5",
        text: "Stun"
    },
    {
        value: "6",
        text: "Mud/Snow"
    },
    {
        value: "7",
        text: "Sense"
    },
    {
        value: "8",
        text: "Health"
    },
    {
        value: "9",
        text: "Rec Speed"
    },
    {
        value: "10",
        text: "Sharpness"
    },
    {
        value: "11",
        text: "Artisan"
    },
    {
        value: "12",
        text: "Fencing"
    },
    {
        value: "13",
        text: "Expert"
    },
    {
        value: "14",
        text: "Sharpener"
    },
    {
        value: "15",
        text: "Guard"
    },
    {
        value: "16",
        text: "Guard Up"
    },
    {
        value: "17",
        text: "Auto-Guard"
    },
    {
        value: "18",
        text: "Reload Spd"
    },
    {
        value: "19",
        text: "Recoil"
    },
    {
        value: "20",
        text: "NormalS Up"
    },
    {
        value: "21",
        text: "PierceS Up"
    },
    {
        value: "22",
        text: "PelletS Up"
    },
    {
        value: "23",
        text: "NormalSAdd"
    },
    {
        value: "24",
        text: "PierceSAdd"
    },
    {
        value: "25",
        text: "PelletSAdd"
    },
    {
        value: "26",
        text: "Crag S Add"
    },
    {
        value: "27",
        text: "ClustS Add"
    },
    {
        value: "28",
        text: "Status"
    },
    {
        value: "29",
        text: "Elemental"
    },
    {
        value: "30",
        text: "BombStrUp"
    },
    {
        value: "31",
        text: "Hunger"
    },
    {
        value: "32",
        text: "Gluttony"
    },
    {
        value: "33",
        text: "Attack"
    },
    {
        value: "34",
        text: "Defense"
    },
    {
        value: "35",
        text: "Protection"
    },
    {
        value: "36",
        text: "HearProtct"
    },
    {
        value: "37",
        text: "Anti-Theft"
    },
    {
        value: "38",
        text: "Wide Area"
    },
    {
        value: "39",
        text: "Backpackng"
    },
    {
        value: "40",
        text: "Fire Res"
    },
    {
        value: "41",
        text: "Water Res"
    },
    {
        value: "42",
        text: "ThunderRes"
    },
    {
        value: "43",
        text: "Ice Res"
    },
    {
        value: "44",
        text: "Dragon Res"
    },
    {
        value: "45",
        text: "Heat Res"
    },
    {
        value: "46",
        text: "Cold Res"
    },
    {
        value: "47",
        text: "WindPress"
    },
    {
        value: "48",
        text: "Gathering"
    },
    {
        value: "49",
        text: "HiSpdGathr"
    },
    {
        value: "50",
        text: "Whim"
    },
    {
        value: "51",
        text: "Fate"
    },
    {
        value: "52",
        text: "Psychic"
    },
    {
        value: "53",
        text: "Rec Level"
    },
    {
        value: "54",
        text: "Combo Rate"
    },
    {
        value: "55",
        text: "Combo Plus (Shot Mix)"
    },
    {
        value: "56",
        text: "Evasion"
    },
    {
        value: "57",
        text: "Potential"
    },
    {
        value: "58",
        text: "LastingPwr"
    },
    {
        value: "59",
        text: "Stamina"
    },
    {
        value: "60",
        text: "Loading"
    },
    {
        value: "61",
        text: "Precision"
    },
    {
        value: "62",
        text: "Eating"
    },
    {
        value: "63",
        text: "Carving"
    },
    {
        value: "64",
        text: "Tremor Res (Quake Res)"
    },
    {
        value: "65",
        text: "Evade Dist"
    },
    {
        value: "66",
        text: "Crit Draw"
    },
    {
        value: "67",
        text: "SpeedSetup"
    },
    {
        value: "68",
        text: "Constitutn"
    },
    {
        value: "69",
        text: "Tranquilzr (Rewards)"
    },
    {
        value: "70",
        text: "Perception"
    },
    {
        value: "71",
        text: "FastCharge"
    },
    {
        value: "72",
        text: "PunishDraw"
    },
    {
        value: "73",
        text: "Blight Res"
    },
    {
        value: "74",
        text: "Survivor (Adversity)"
    },
    {
        value: "75",
        text: "Rapid Fire"
    },
    {
        value: "76",
        text: "Dungmaster"
    },
    {
        value: "77",
        text: "Antiseptic"
    },
    {
        value: "78",
        text: "PoisonCAdd"
    },
    {
        value: "79",
        text: "ParalyCAdd"
    },
    {
        value: "80",
        text: "SleepCAdd"
    },
    {
        value: "81",
        text: "PowerCAdd"
    },
    {
        value: "82",
        text: "ClsRngCAdd"
    },
    {
        value: "83",
        text: "Horn"
    },
    {
        value: "84",
        text: "Gunnery"
    },
    {
        value: "85",
        text: "Determination (Awaken)"
    },
    {
        value: "86",
        text: "Huntsman"
    },
    {
        value: "87",
        text: "Anti Defense DOWN (Fortitude)"
    },
    {
        value: "88",
        text: "Fire Attack"
    },
    {
        value: "89",
        text: "Water Attack"
    },
    {
        value: "90",
        text: "Thunder Attack"
    },
    {
        value: "91",
        text: "Ice Attack"
    },
    {
        value: "92",
        text: "Dragon Attack"
    },
    {
        value: "93",
        text: "Cutter S Up"
    },
    {
        value: "94",
        text: "FatigueCAdd"
    },
    {
        value: "95",
        text: "Severe Blow (Debilitate / Tenderizer)"
    },
    {
        value: "96",
        text: "Heavy Blow (Slam / Destroyer)"
    },
    {
        value: "97",
        text: "KO"
    },
    {
        value: "98",
        text: "Fatigue Attack"
    },
    {
        value: "99",
        text: "Sheathe"
    },
    {
        value: "100",
        text: "Willpower Recovery"
    },
];

function populateSkillOptions() {
    skillOptions.forEach(skill => {
        const firstSkillOption = document.createElement('option');
        firstSkillOption.value = skill.value;
        firstSkillOption.textContent = skill.text;
        firstSkillIdSelect.appendChild(firstSkillOption);

        const secondSkillOption = document.createElement('option');
        secondSkillOption.value = skill.value;
        secondSkillOption.textContent = skill.text;
        secondSkillIdSelect.appendChild(secondSkillOption);
    });
}

populateSkillOptions();
