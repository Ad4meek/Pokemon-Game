const attackButton = document.getElementById("attackButton");
const myPokemon = document.getElementById("myPokemon");
const enemyPokemon = document.getElementById("enemyPokemon");
const myHealth = document.getElementById("myHealth");
const enemyHealth = document.getElementById("enemyHealth");
const battleInfo = document.getElementById("battleInfo");



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

const interval = setInterval(() => {
  myHealth.innerHTML--;
  if (myHealth.innerHTML <= 0) {
    battleInfo.innerHTML = "YOU DIED";
    clearInterval(interval);
    myPokemon.style.display = "none";
    myPokemonDeath.style.display = "block";
  }
}, 500);
