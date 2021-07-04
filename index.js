const excuser = document.getElementById("excuser");
const excuse = document.querySelector(".excuse");
const intro = document.querySelector(".intro");
const scapegoat = document.querySelector(".scapegoat");
const delay = document.querySelector(".delay");

let intros = [
  "Sorry I can't come",
  "Please forgive my absence",
  "This is gonna sound crazy but",
  "Get this:",
];

let scapegoats = [
  "my nephew",
  "the ghost of Hitler",
  "my Tinder date",
  "my ex",
];

let delays = [
  "just shat on the bed",
  "died in front of me",
  "won't stop telling me knock-knock jokes",
  "gave me syphilys",
];

function randomizer(max) {
  return Math.floor(Math.random() * max);
}

function getExcuse() {}

excuser.addEventListener("click", async () => {
  excuser.innerText = "GET ANOTHER EXCUSE!";
  excuse.classList.add("active");
  await new Promise((r) => setTimeout(r, 3000));

  textSpinner(0);
  textSpinner(1);
  textSpinner(2);
});

async function textSpinner(type) {
  let countdown = 5;
  while (countdown > 0) {
    if (type == 0) {
      intro.innerHTML = `<p>${intros[randomizer(intros.length)]}<p>`;
    } else if (type == 1) {
      scapegoat.innerHTML = `<p>${
        scapegoats[randomizer(scapegoats.length)]
      }<p>`;
    } else if (type == 2) {
      delay.innerHTML = `<p>${delays[randomizer(delays.length)]}<p>`;
    }

    await new Promise((r) => setTimeout(r, 250));
    countdown--;
  }
}
