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
const back = document.getElementById("back");

back.onclick = () => {
  pokemonSite.style.display = "block";
  battleSite.style.display = "none";
}

let interval

map.onclick = () => {
  pokemonSite.style.display = "none";
  battleSite.style.display = "block"; 
  interval = setInterval(() => {
    myHealth.innerHTML--;
    if (myHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "YOU DIED";
      clearInterval(interval);
      myPokemon.style.display = "none";
      myPokemonDeath.style.display = "block";
    }
  }, 500); 
}

// Battle

attackButton.onmousedown = () => {
  attackButton.style.fontSize = "230%"
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
  attackButton.style.fontSize = "250%"
};


