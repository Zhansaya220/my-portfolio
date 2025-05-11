document.getElementById("calculate").addEventListener("click", function () {
  let price = 100;

  let education = parseFloat(document.getElementById("edu").value);
  let net = parseFloat(document.getElementById("net").value);
  let caste = parseFloat(document.getElementById("cast").value);
  let age = parseFloat(
    document.querySelector('input[name="age"]:checked').value
  );

  let repu1 = document.querySelector('input[value="0.85"]:checked');
  let repu2 = document.querySelector('input[value="0.9"]:checked');
  let repu3 = document.querySelector('input[value="-20"]:checked');

  let repMult = 1;
  let repP = 0;

  if (repu1) repMult *= 0.85;
  if (repu2) repMult *= 0.9;
  if (repu3) repP -= 20;

  let skills = document.querySelectorAll('input[name="skill"]:checked');
  let skillBonus = 0;
  for (let i = 0; i < skills.length; i++) {
    skillBonus += Number(skills[i].value);
  }

  let total = price * education * net * age * repMult;
  total = total + caste + skillBonus + repP;

  document.getElementById("final").innerText = "Price: $" + total.toFixed(2);
});
