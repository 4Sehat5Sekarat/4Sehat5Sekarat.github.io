const calculateBtn = document.getElementById('calculate');
const copyButton = document.getElementById('copy-button');
const output = document.getElementById('output');
const themeButton = document.getElementById('theme-button');

calculateBtn.addEventListener('click', calculateValues);
copyButton.addEventListener('click', copyResult);
themeButton.addEventListener('click', changeTheme);

function calculateValues() {
	const firstSkillId = parseInt(document.getElementById('5w1h-first-skill-id').value, 10);
	const secondSkillId = parseInt(document.getElementById('5w1h-second-skill-id').value, 10);
	const firstSkillLvl = parseInt(document.getElementById('5w1h-first-skill-lvl').value, 10);
	const secondSkillLvl = parseInt(document.getElementById('5w1h-second-skill-lvl').value, 10);
	const talismanRarity = parseInt(document.getElementById('5w1h-talisman-rarity').value, 10);
	const numberOfSlots = parseInt(document.getElementById('5w1h-number-of-slots').value, 10);

	const xxxx = firstSkillId + secondSkillId * 128 + 16384 * numberOfSlots;
	const yyyy = (firstSkillLvl + 30) * 16 + 1024 * (secondSkillLvl + 30) + talismanRarity - 1;

	const xxxxHex = xxxx.toString(16).toUpperCase();
	const yyyyHex = yyyy.toString(16).toUpperCase();

	output.textContent = `_C0 Custom talisman\n_L 0x2174FE14 0x${yyyyHex}6501\n_L 0x2174FE18 0x0000${xxxxHex}`;
}

function copyResult() {
	const range = document.createRange();
	range.selectNode(output);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
}

function changeTheme() {
	var body = document.body;
	body.classList.toggle("light");
	body.classList.toggle("dark");
}
