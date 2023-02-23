const section = document.getElementById("img");
const cards = document.querySelectorAll(".cards");
const avancar = document.getElementById("avancar");
const voltar = document.getElementById("voltar");

let avancarControle = 0;

function carroselAvancar() {
  avancarControle++;

  if (avancarControle > cards.length - 1) {
    avancarControle = 0;
  }

  section.style.transform = `translateX(${-avancarControle * 300}px)`;
}

function carroselVoltar() {
  avancarControle--;
  if (avancarControle < 0) {
    avancarControle = cards.length - 1;
  }

  section.style.transform = `translateX(${-avancarControle * 300}px)`;
}

avancar.addEventListener("click", carroselAvancar);
voltar.addEventListener("click", carroselVoltar);
