const attackButton = document.getElementById("attackButton");
const myPokemon = document.getElementById("myPokemon");
const myPokemonDeath = document.getElementById("myPokemonDeath");
const enemyPokemon = document.getElementById("enemyPokemon");
const enemyPokemonDeath = document.getElementById("enemyPokemonDeath");
const myHealth = document.getElementById("myHealth");
const enemyHealth = document.getElementById("enemyHealth");
const battleInfo = document.getElementById("battleInfo");

const battleSite = document.getElementById("battleSite");
const pokemonSite = document.getElementById("pokemonSite");
const pokemon = document.getElementById("pokemon");
const map = document.getElementById("map");
const cp = document.getElementById("cp");
const powerUp = document.getElementById("powerUp");
const backFromBattle = document.getElementById("backFromBattle");

const mapSite = document.getElementById("mapSite");
const backFromMap = document.getElementById("backFromMap");
const firstPokemon = document.getElementById("firstPokemon");

backFromMap.onclick = () => {
  mapSite.style.display = "none";
  pokemonSite.style.display = "block";
  battleSite.style.display = "none";
}

backFromBattle.onclick = () => {
  mapSite.style.display = "block";
  pokemonSite.style.display = "none";
  battleSite.style.display = "none";
  clearInterval(interval);
};

map.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "block";
  battleSite.style.display = "none";
}

let interval;

firstPokemon.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "none";
  battleSite.style.display = "block";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemonDeath.style.display = "none";
  myPokemon.style.display = "block";
  enemyPokemonDeath.style.display = "none";
  enemyPokemon.style.display = "block";
  battleInfo.innerHTML = "";
  interval = setInterval(() => {
    myHealth.innerHTML--;
    if (myHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "YOU DIED";
      clearInterval(interval);
      myPokemon.style.display = "none";
      myPokemonDeath.style.display = "block";
    }
  }, 500);
};

// Battle

attackButton.onmousedown = () => {
  attackButton.style.fontSize = "230%";
  if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
    myPokemon.style.left = "20%";
    enemyHealth.innerHTML--;
  }

  if (enemyHealth.innerHTML <= 0) {
    battleInfo.innerHTML = "ENEMY DIED";
    clearInterval(interval);
    enemyPokemon.style.display = "none";
    enemyPokemonDeath.style.display = "block";
  }
};

attackButton.onmouseup = () => {
  myPokemon.style.left = "14%";
  attackButton.style.fontSize = "250%";
};
