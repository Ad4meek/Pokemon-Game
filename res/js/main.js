const attack = document.getElementById("attack");
const pokemon = document.getElementById("pokemon");
const lives = document.getElementById("lives");
const lives2 = document.getElementById("lives2");
const info = document.getElementById("info");

attack.onmousedown = () => {
  attack.style.fontSize = "230%"
  if (lives.innerHTML > 0 && lives2.innerHTML > 0) {
    pokemon.style.left = "20%";
    lives2.innerHTML--;
    
  }

  if (lives2.innerHTML <= 0) {
    info.innerHTML = "ENEMY DIED";
    clearInterval(interval);
  }
};

attack.onmouseup = () => {
    pokemon.style.left = "14%";
    attack.style.fontSize = "250%"
};

const interval = setInterval(() => {
    lives.innerHTML--;
  if (lives.innerHTML <= 0) {
    info.innerHTML = "YOU DIED";
    clearInterval(interval);
  }
}, 500);
