const pokemonSite = document.getElementById("pokemonSite");
const pokemon = document.getElementById("pokemon");
const map = document.getElementById("map");
const cp = document.getElementById("cp");
const powerUp = document.getElementById("powerUp");

const mapSite = document.getElementById("mapSite");
const backFromMap = document.getElementById("backFromMap");
const firstPokemon = document.getElementById("firstPokemon");
const secondPokemon = document.getElementById("secondPokemon");
const thirdPokemon = document.getElementById("thirdPokemon");
const fourthPokemon = document.getElementById("fourthPokemon");
const stardustChest = document.getElementById("stardustChest");

const battleSite = document.getElementById("battleSite");
const myPokemon = document.getElementById("myPokemon");
const myPokemonDeath = document.getElementById("myPokemonDeath");
const firstEnemyPokemon = document.getElementById("firstEnemyPokemon");
const firstEnemyPokemonDeath = document.getElementById("firstEnemyPokemonDeath");
const secondEnemyPokemon = document.getElementById("secondEnemyPokemon");
const secondEnemyPokemonDeath = document.getElementById("secondEnemyPokemonDeath");
const thirdEnemyPokemon = document.getElementById("thirdEnemyPokemon");
const thirdEnemyPokemonDeath = document.getElementById("thirdEnemyPokemonDeath");
const fourthEnemyPokemon = document.getElementById("fourthEnemyPokemon");
const fourthEnemyPokemonDeath = document.getElementById("fourthEnemyPokemonDeath");
const myHealth = document.getElementById("myHealth");
const enemyHealth = document.getElementById("enemyHealth");
const attackButton = document.getElementById("attackButton");
const backFromBattle = document.getElementById("backFromBattle");
const battleInfo = document.getElementById("battleInfo");


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
  battleSite.style.backgroundImage = "url('./res/img/firstBattleSiteBackground.png')";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemon.style.display = "block";
  firstEnemyPokemon.style.display = "block"; 
  firstEnemyPokemon.style.backgroundImage = "url('./res/img/ratata.png')";
  secondEnemyPokemon.style.display = "none";
  thirdEnemyPokemon.style.display = "none";
  fourthEnemyPokemon.style.display = "none";
  battleInfo.innerHTML = "";
  interval = setInterval(() => {
    myHealth.innerHTML--;
    if (myHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "YOU DIED";
      clearInterval(interval);
      myPokemon.style.backgroundImage = "url('./res/img/pikachuDeath.png')";
    }
  }, 500);

  attackButton.onmousedown = () => {
    attackButton.style.fontSize = "230%";
    if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
      myPokemon.style.left = "27%";
      enemyHealth.innerHTML--;
    }
  
    if (enemyHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "ENEMY DIED";
      firstEnemyPokemon.style.backgroundImage = "url('./res/img/ratataDeath.png')";
      clearInterval(interval);
    }
  };
  
  attackButton.onmouseup = () => {
    myPokemon.style.left = "22%";
    attackButton.style.fontSize = "250%";
  };
};


secondPokemon.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "none";
  battleSite.style.display = "block";
  battleSite.style.backgroundImage = "url('./res/img/secondBattleSiteBackground.png')";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemon.style.display = "block";
  firstEnemyPokemon.style.display = "none";
  secondEnemyPokemon.style.display = "block";
  secondEnemyPokemon.style.backgroundImage = "url('./res/img/snorlax.png')";
  thirdEnemyPokemon.style.display = "none";
  fourthEnemyPokemon.style.display = "none";
  battleInfo.innerHTML = "";
  interval = setInterval(() => {
    myHealth.innerHTML--;
    if (myHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "YOU DIED";
      clearInterval(interval);
      myPokemon.style.backgroundImage = "url('./res/img/pikachuDeath.png')";
    }
  }, 500);

  attackButton.onmousedown = () => {
    attackButton.style.fontSize = "230%";
    if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
      myPokemon.style.left = "27%";
      enemyHealth.innerHTML--;
    }
  
    if (enemyHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "ENEMY DIED";
      secondEnemyPokemon.style.backgroundImage = "url('./res/img/snorlaxDeath.png')";
      clearInterval(interval);
    }
  };
  
  attackButton.onmouseup = () => {
    myPokemon.style.left = "22%";
    attackButton.style.fontSize = "250%";
  };
};


thirdPokemon.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "none";
  battleSite.style.display = "block";
  battleSite.style.backgroundImage = "url('./res/img/thirdBattleSiteBackground.png')";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemon.style.display = "block";
  firstEnemyPokemon.style.display = "none";
  secondEnemyPokemon.style.display = "none";
  thirdEnemyPokemon.style.display = "block"
  thirdEnemyPokemon.style.backgroundImage = "url('./res/img/dragonite.png')";
  fourthEnemyPokemon.style.display = "none";
  battleInfo.innerHTML = "";
  interval = setInterval(() => {
    myHealth.innerHTML--;
    if (myHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "YOU DIED";
      clearInterval(interval);
      myPokemon.style.backgroundImage = "url('./res/img/pikachuDeath.png')";
    }
  }, 500);

  attackButton.onmousedown = () => {
    attackButton.style.fontSize = "230%";
    if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
      myPokemon.style.left = "27%";
      enemyHealth.innerHTML--;
    }
  
    if (enemyHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "ENEMY DIED";
      thirdEnemyPokemon.style.backgroundImage = "url('./res/img/dragoniteDeath.png')";
      clearInterval(interval);
    }
  };
  
  attackButton.onmouseup = () => {
    myPokemon.style.left = "22%";
    attackButton.style.fontSize = "250%";
  };
};


fourthPokemon.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "none";
  battleSite.style.display = "block";
  battleSite.style.backgroundImage = "url('./res/img/fourthBattleSiteBackground.png')";
  myHealth.innerHTML = 20;
  enemyHealth.innerHTML = 20;
  myPokemon.style.display = "block";
  firstEnemyPokemon.style.display = "none";
  secondEnemyPokemon.style.display = "none";
  thirdEnemyPokemon.style.display = "none";
  fourthEnemyPokemon.style.display = "block";
  fourthEnemyPokemon.style.backgroundImage = "url('./res/img/mewtwo.png')";
  battleInfo.innerHTML = "";
  interval = setInterval(() => {
    myHealth.innerHTML--;
    if (myHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "YOU DIED";
      clearInterval(interval);
      myPokemon.style.backgroundImage = "url('./res/img/pikachuDeath.png')";
    }
  }, 500);

  attackButton.onmousedown = () => {
    attackButton.style.fontSize = "230%";
    if (myHealth.innerHTML > 0 && enemyHealth.innerHTML > 0) {
      myPokemon.style.left = "27%";
      enemyHealth.innerHTML--;
    }
  
    if (enemyHealth.innerHTML <= 0) {
      battleInfo.innerHTML = "ENEMY DIED";
      fourthEnemyPokemon.style.backgroundImage = "url('./res/img/mewtwoDeath.png')";
      clearInterval(interval);
    }
  };
  
  attackButton.onmouseup = () => {
    myPokemon.style.left = "22%";
    attackButton.style.fontSize = "250%";
  };
};