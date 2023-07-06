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
  let firstSkillLvl = parseInt(document.getElementById('5w1h-first-skill-lvl').value, 10);
  let secondSkillLvl = parseInt(document.getElementById('5w1h-second-skill-lvl').value, 10);
  const talismanRarity = parseInt(document.getElementById('5w1h-talisman-rarity').value, 10);
  const numberOfSlots = parseInt(document.getElementById('5w1h-number-of-slots').value, 10);
  const boxSlots = parseInt(document.getElementById('5w1h-box-slot').value, 10);

  if (isNaN(firstSkillLvl) || firstSkillLvl === "") {
    firstSkillLvl = 0;
  }
  if (isNaN(secondSkillLvl) || secondSkillLvl === "") {
    secondSkillLvl = 0;
  }

  const xxxx = firstSkillId + secondSkillId * 128 + 16384 * numberOfSlots;
  const yyyy = (firstSkillLvl + 30) * 16 + 1024 * (secondSkillLvl + 30) + talismanRarity - 1;
  const zzaa = 65032 + (12 * boxSlots);
  const zzbb = 65036 + (12 * boxSlots);

  const xxxxHex = xxxx.toString(16).toUpperCase().padStart(4, "0");
  const yyyyHex = yyyy.toString(16).toUpperCase().padStart(4, "0");
  const zzaaHex = zzaa.toString(16).toUpperCase().padStart(4, "0");
  const zzbbHex = zzbb.toString(16).toUpperCase().padStart(4, "0");

  const Nama = document.getElementById("5w1h-talisman-rarity" + talismanRarity).textContent;

  if (firstSkillLvl || secondSkillLvl) {
    if (yyyyHex.length > 4) {
      output.textContent = `Too many skill levels`;
    } else {
      output.textContent = `_C0 Custom ${Nama} [${numberOfSlots} Slot]\n_L 0x2174${zzaaHex} 0x${yyyyHex}6501\n_L 0x2174${zzbbHex} 0x0000${xxxxHex}`;
    }
  } else {
    output.textContent = `Input skill levels, please`;
  }
}

function copyResult() {
  const range = document.createRange();
  range.selectNode(output);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  Swal.fire({
    position: 'top-right',
    icon: 'success',
    title: 'Copied to clipboard',
    showConfirmButton: false,
    timer: 2500
  });
}

function changeTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}