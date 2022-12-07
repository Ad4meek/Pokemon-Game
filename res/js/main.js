const pokemonSite = document.getElementById("pokemonSite");
const pokemon = document.getElementById("pokemon");
const map = document.getElementById("map");
const cp = document.getElementById("cp");
const powerUp = document.getElementById("powerUp");

const mapSite = document.getElementById("mapSite");
const backFromMap = document.getElementById("backFromMap");
const firstArrow = document.getElementById("firstArrow");
const secondArrow = document.getElementById("secondArrow");
const thirdArrow = document.getElementById("thirdArrow");
const fourthArrow = document.getElementById("fourthArrow");
const fifthArrow = document.getElementById("fifthArrow");
const sixthArrow = document.getElementById("sixthArrow");
const firstPokemon = document.getElementById("firstPokemon");
const secondPokemon = document.getElementById("secondPokemon");
const thirdPokemon = document.getElementById("thirdPokemon");
const bossPokemon = document.getElementById("bossPokemon");
const stardustChest = document.getElementById("stardustChest");

const battleSite = document.getElementById("battleSite");
const myPokemon = document.getElementById("myPokemon");
const myPokemonDeath = document.getElementById("myPokemonDeath");
const firstEnemyPokemon = document.getElementById("firstEnemyPokemon");
const firstEnemyPokemonDeath = document.getElementById(
  "firstEnemyPokemonDeath"
);
const secondEnemyPokemon = document.getElementById("secondEnemyPokemon");
const secondEnemyPokemonDeath = document.getElementById(
  "secondEnemyPokemonDeath"
);
const thirdEnemyPokemon = document.getElementById("thirdEnemyPokemon");
const thirdEnemyPokemonDeath = document.getElementById(
  "thirdEnemyPokemonDeath"
);
const bossEnemyPokemon = document.getElementById("bossEnemyPokemon");
const bossEnemyPokemonDeath = document.getElementById("bossEnemyPokemonDeath");
const myHealth = document.getElementById("myHealth");
const enemyHealth = document.getElementById("enemyHealth");
const attackButton = document.getElementById("attackButton");
const backFromBattle = document.getElementById("backFromBattle");
const battleInfo = document.getElementById("battleInfo");

// Map Site

backFromMap.onclick = () => {
  mapSite.style.display = "none";
  pokemonSite.style.display = "block";
  battleSite.style.display = "none";
};

map.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "block";
  battleSite.style.display = "none";
};

backFromBattle.onclick = () => {
  mapSite.style.display = "block";
  pokemonSite.style.display = "none";
  battleSite.style.display = "none";
  clearInterval(interval);
};

let interval;

firstPokemon.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "none";
  battleSite.style.display = "block";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemonDeath.style.display = "none";
  myPokemon.style.display = "block";
  firstEnemyPokemonDeath.style.display = "none";
  firstEnemyPokemon.style.display = "block";
  secondEnemyPokemonDeath.style.display = "none";
  secondEnemyPokemon.style.display = "none";
  thirdEnemyPokemonDeath.style.display = "none";
  thirdEnemyPokemon.style.display = "none";
  bossEnemyPokemonDeath.style.display = "none";
  bossEnemyPokemon.style.display = "none";
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

  attackButton.onmousedown = () => {
    attackButton.style.fontSize = "230%";
    if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
      myPokemon.style.left = "20%";
      enemyHealth.innerHTML--;
    }
  
    if (enemyHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "ENEMY DIED";
      firstEnemyPokemonDeath.style.display = "block";
      firstEnemyPokemon.style.display = "none";
      clearInterval(interval);
    }
  };
  
  attackButton.onmouseup = () => {
    myPokemon.style.left = "14%";
    attackButton.style.fontSize = "250%";
  };
};


secondPokemon.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "none";
  battleSite.style.display = "block";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemonDeath.style.display = "none";
  myPokemon.style.display = "block";
  firstEnemyPokemonDeath.style.display = "none";
  firstEnemyPokemon.style.display = "none";
  secondEnemyPokemonDeath.style.display = "none";
  secondEnemyPokemon.style.display = "block";
  thirdEnemyPokemonDeath.style.display = "none";
  thirdEnemyPokemon.style.display = "none";
  bossEnemyPokemonDeath.style.display = "none";
  bossEnemyPokemon.style.display = "none";
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

  attackButton.onmousedown = () => {
    attackButton.style.fontSize = "230%";
    if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
      myPokemon.style.left = "20%";
      enemyHealth.innerHTML--;
    }
  
    if (enemyHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "ENEMY DIED";
      secondEnemyPokemonDeath.style.display = "block";
      secondEnemyPokemon.style.display = "none";
      clearInterval(interval);
    }
  };
  
  attackButton.onmouseup = () => {
    myPokemon.style.left = "14%";
    attackButton.style.fontSize = "250%";
  };
};


thirdPokemon.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "none";
  battleSite.style.display = "block";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemonDeath.style.display = "none";
  myPokemon.style.display = "block";
  firstEnemyPokemonDeath.style.display = "none";
  firstEnemyPokemon.style.display = "none";
  secondEnemyPokemonDeath.style.display = "none";
  secondEnemyPokemon.style.display = "none";
  thirdEnemyPokemonDeath.style.display = "none";
  thirdEnemyPokemon.style.display = "block";
  bossEnemyPokemonDeath.style.display = "none";
  bossEnemyPokemon.style.display = "none";
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

  attackButton.onmousedown = () => {
    attackButton.style.fontSize = "230%";
    if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
      myPokemon.style.left = "20%";
      enemyHealth.innerHTML--;
    }
  
    if (enemyHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "ENEMY DIED";
      thirdEnemyPokemonDeath.style.display = "block";
      thirdEnemyPokemon.style.display = "none";
      clearInterval(interval);
    }
  };
  
  attackButton.onmouseup = () => {
    myPokemon.style.left = "14%";
    attackButton.style.fontSize = "250%";
  };
};


bossPokemon.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "none";
  battleSite.style.display = "block";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemonDeath.style.display = "none";
  myPokemon.style.display = "block";
  firstEnemyPokemonDeath.style.display = "none";
  firstEnemyPokemon.style.display = "none";
  secondEnemyPokemonDeath.style.display = "none";
  secondEnemyPokemon.style.display = "none";
  thirdEnemyPokemonDeath.style.display = "none";
  thirdEnemyPokemon.style.display = "none";
  bossEnemyPokemonDeath.style.display = "none";
  bossEnemyPokemon.style.display = "block";
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

  attackButton.onmousedown = () => {
    attackButton.style.fontSize = "230%";
    if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
      myPokemon.style.left = "20%";
      enemyHealth.innerHTML--;
    }
  
    if (enemyHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "ENEMY DIED";
      bossEnemyPokemonDeath.style.display = "block";
      bossEnemyPokemon.style.display = "none";
      clearInterval(interval);
    }
  };
  
  attackButton.onmouseup = () => {
    myPokemon.style.left = "14%";
    attackButton.style.fontSize = "250%";
  };
};