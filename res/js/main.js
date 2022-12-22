const pokemonSite = document.getElementById("pokemonSite");
const pokemon = document.getElementById("pokemon");
const map = document.getElementById("map");
const cp = document.getElementById("cp");
const powerUp = document.getElementById("powerUp");
const stardust = document.getElementById("stardust");
const lives = document.getElementById("lives");
const power = document.getElementById("power");

const mapSite = document.getElementById("mapSite");
const backFromMap = document.getElementById("backFromMap");
const pikachu = document.getElementById("pikachu");
const firstPokemon = document.getElementById("firstPokemon");
const secondPokemon = document.getElementById("secondPokemon");
const thirdPokemon = document.getElementById("thirdPokemon");
const fourthPokemon = document.getElementById("fourthPokemon");
const stardustChest = document.getElementById("stardustChest");
const stardustChestInfo = document.getElementById("stardustChestInfo");
const info = document.getElementById("info");

const battleSite = document.getElementById("battleSite");
const myPokemon = document.getElementById("myPokemon");
const firstEnemyPokemon = document.getElementById("firstEnemyPokemon");
const secondEnemyPokemon = document.getElementById("secondEnemyPokemon");
const thirdEnemyPokemon = document.getElementById("thirdEnemyPokemon");
const fourthEnemyPokemon = document.getElementById("fourthEnemyPokemon");
const myLives = document.getElementById("myLives");
const enemyLives = document.getElementById("enemyLives");
const attackButton = document.getElementById("attackButton");
const backFromBattle = document.getElementById("backFromBattle");
const battleInfo = document.getElementById("battleInfo");
const stardustInfo = document.getElementById("stardustInfo");

let level = 0;
let firstPokemonDeath = false;
let secondPokemonDeath = false;
let thirdPokemonDeath = false;
let fourthPokemonDeath = false;
let interval;
let stardustIsPicked = false;
let numberOfStardust = 0;
let numberOfCp = 100;
let powerUpPrice = 10;
let damage = 1;
let Lives = 20;

pikachu.onclick = () => {
  mapSite.style.display = "none";
  pokemonSite.style.display = "block";
  battleSite.style.display = "none";
  if (numberOfStardust >= powerUpPrice) {
    powerUp.style.color = "white";
  } else {
    powerUp.style.color = "#f36367";
  }
}

backFromMap.onclick = () => {
  mapSite.style.display = "none";
  pokemonSite.style.display = "block";
  battleSite.style.display = "none";
  if (numberOfStardust >= powerUpPrice) {
    powerUp.style.color = "white";
  } else {
    powerUp.style.color = "#f36367";
  }
};

map.onclick = () => {
  pokemonSite.style.display = "none";
  mapSite.style.display = "block";
  battleSite.style.display = "none";
  stardustChestInfo.innerHTML = "";
};

backFromBattle.onclick = () => {
  mapSite.style.display = "block";
  pokemonSite.style.display = "none";
  battleSite.style.display = "none";
  stardustChestInfo.innerHTML = "";
  clearInterval(interval);
};

powerUp.onclick = () => {
  if (numberOfStardust >= powerUpPrice) {
    powerUp.style.color = "white";
    numberOfCp += 20;
    numberOfStardust -= powerUpPrice;
    stardust.innerHTML = `x ${numberOfStardust}`;
    cp.innerHTML = `${numberOfCp} CP`;
    powerUpPrice += 10;
    damage += 1;
    Lives += 5;
    myLives.innerHTML = Lives;
    lives.innerHTML = `LIVES: ${Lives}`;
    power.innerHTML = `DAMAGE: ${damage}`;
  } else {
    powerUp.style.color = "#f36367";
  }
  powerUp.innerHTML = `POWER UP x${powerUpPrice}`;
};

firstPokemon.onclick = () => {
  if (level >= 0) {
    firstPokemonDeath = false;
    pokemonSite.style.display = "none";
    mapSite.style.display = "none";
    battleSite.style.display = "block";
    battleSite.style.backgroundImage = "url('./res/img/firstBattleSiteBackground.png')";
    myLives.innerHTML = Lives;
    enemyLives.innerHTML = 69;
    myPokemon.style.display = "block";
    myPokemon.style.backgroundImage = "url('./res/img/pikachu.png')";
    firstEnemyPokemon.style.display = "block";
    firstEnemyPokemon.style.backgroundImage = "url('./res/img/onix.png')";
    secondEnemyPokemon.style.display = "none";
    thirdEnemyPokemon.style.display = "none";
    fourthEnemyPokemon.style.display = "none";
    battleInfo.innerHTML = "";
    stardustInfo.innerHTML = "";
    interval = setInterval(() => {
      myLives.innerHTML--;
      if (myLives.innerHTML <= 0) {
        battleInfo.innerHTML = "YOU DIED";
        clearInterval(interval);
        myPokemon.style.backgroundImage = "url('./res/img/pikachuDeath.png')";
      }
    }, 900);

    attackButton.onmousedown = () => {
      if (firstPokemonDeath) return;
      attackButton.style.fontSize = "230%";
      if (myLives.innerHTML > 0 && enemyLives.innerHTML > 0) {
        myPokemon.style.left = "27%";
        enemyLives.innerHTML -= damage;
      }

      if (enemyLives.innerHTML <= 0) {
        firstPokemonDeath = true;
        battleInfo.innerHTML = "ENEMY DIED";
        stardustInfo.innerHTML = "YOU HAVE EARNED 10x STARDUST!";
        numberOfStardust += 10;
        if (level === 0) level = 1;
        stardust.innerHTML = `x${numberOfStardust}`;
        firstEnemyPokemon.style.backgroundImage = "url('./res/img/onixDeath.png')";
        firstPokemon.style.backgroundImage = "url('./res/img/onix.png')";
        clearInterval(interval);
      }
    };

    attackButton.onmouseup = () => {
      myPokemon.style.left = "22%";
      attackButton.style.fontSize = "250%";
    };
  }
};

stardustChest.onclick = () => {
  if (level >= 1) {
    if (!stardustIsPicked) {
      numberOfStardust += 100;
      if (level === 1) level = 2;
      stardust.innerHTML = numberOfStardust;
      stardustChestInfo.innerHTML = "YOU FOUND 100x STARDUST!";
      stardustChest.style.backgroundImage = "url('./res/img/stardust.png')";
      stardustIsPicked = true;
    } else {
      stardustChestInfo.innerHTML = "YOU ALREADY FOUND STARDUST!";
      stardustChestInfo.style.color = "#f36367";
      stardustChestInfo.style.left = "23%";
    }
  } else {
    info.innerHTML = "YOU MUST BEAT THE PREVIOUS POKEMON!";
    setTimeout(() => {
      info.style.opacity = 0;
      setTimeout(() => {
         info.innerHTML = "";
         info.style.opacity = 1;
      }, 200);
    }, 3000);
  };
};

secondPokemon.onclick = () => {
  if (level >= 2) {
    secondPokemonDeath = false;
    pokemonSite.style.display = "none";
    mapSite.style.display = "none";
    battleSite.style.display = "block";
    battleSite.style.backgroundImage = "url('./res/img/secondBattleSiteBackground.png')";
    myLives.innerHTML = Lives;
    enemyLives.innerHTML = 333;
    myPokemon.style.display = "block";
    myPokemon.style.backgroundImage = "url('./res/img/pikachu.png')";
    firstEnemyPokemon.style.display = "none";
    secondEnemyPokemon.style.display = "block";
    secondEnemyPokemon.style.backgroundImage = "url('./res/img/snorlax.png')";
    thirdEnemyPokemon.style.display = "none";
    fourthEnemyPokemon.style.display = "none";
    battleInfo.innerHTML = "";
    stardustInfo.innerHTML = "";
    interval = setInterval(() => {
      myLives.innerHTML--;
      if (myLives.innerHTML <= 0) {
        battleInfo.innerHTML = "YOU DIED";
        clearInterval(interval);
        myPokemon.style.backgroundImage = "url('./res/img/pikachuDeath.png')";
      }
    }, 400);

    attackButton.onmousedown = () => {
      if (secondPokemonDeath) return;
      attackButton.style.fontSize = "230%";
      if (myLives.innerHTML > 0 && enemyLives.innerHTML > 0) {
        myPokemon.style.left = "27%";
        enemyLives.innerHTML -= damage;
      }

      if (enemyLives.innerHTML <= 0) {
        secondPokemonDeath = true;
        battleInfo.innerHTML = "ENEMY DIED";
        stardustInfo.innerHTML = "YOU HAVE EARNED 50x STARDUST!";
        numberOfStardust += 50;
        if (level === 2) level = 3;
        stardust.innerHTML = `x${numberOfStardust}`;
        secondEnemyPokemon.style.backgroundImage = "url('./res/img/snorlaxDeath.png')";
        secondPokemon.style.backgroundImage = "url('./res/img/snorlax.png')";
        clearInterval(interval);
      }
    };

    attackButton.onmouseup = () => {
      myPokemon.style.left = "22%";
      attackButton.style.fontSize = "250%";
    };
  } else {
    info.innerHTML = "YOU MUST BEAT THE PREVIOUS POKEMON!";
    setTimeout(() => {
      info.style.opacity = 0;
      setTimeout(() => {
         info.innerHTML = "";
         info.style.opacity = 1;
      }, 200);
    }, 3000);
  };
};

thirdPokemon.onclick = () => {
  if (level >= 3) {
    thirdPokemonDeath = false;
    pokemonSite.style.display = "none";
    mapSite.style.display = "none";
    battleSite.style.display = "block";
    battleSite.style.backgroundImage = "url('./res/img/thirdBattleSiteBackground.png')";
    myLives.innerHTML = Lives;
    enemyLives.innerHTML = 420;
    myPokemon.style.display = "block";
    myPokemon.style.backgroundImage = "url('./res/img/pikachu.png')";
    firstEnemyPokemon.style.display = "none";
    secondEnemyPokemon.style.display = "none";
    thirdEnemyPokemon.style.display = "block";
    thirdEnemyPokemon.style.backgroundImage = "url('./res/img/dragonite.png')";
    fourthEnemyPokemon.style.display = "none";
    battleInfo.innerHTML = "";
    stardustInfo.innerHTML = "";
    interval = setInterval(() => {
      myLives.innerHTML--;
      if (myLives.innerHTML <= 0) {
        battleInfo.innerHTML = "YOU DIED";
        clearInterval(interval);
        myPokemon.style.backgroundImage = "url('./res/img/pikachuDeath.png')";
      }
    }, 300);

    attackButton.onmousedown = () => {
      if (thirdPokemonDeath) return;
      attackButton.style.fontSize = "230%";
      if (myLives.innerHTML > 0 && enemyLives.innerHTML > 0) {
        myPokemon.style.left = "27%";
        enemyLives.innerHTML -= damage;
      }

      if (enemyLives.innerHTML <= 0) {
        thirdPokemonDeath = true;
        battleInfo.innerHTML = "ENEMY DIED";
        stardustInfo.innerHTML = "YOU HAVE EARNED 100x STARDUST!";
        numberOfStardust += 100;
        if (level === 3) level = 4;
        stardust.innerHTML = `x${numberOfStardust}`;
        thirdEnemyPokemon.style.backgroundImage = "url('./res/img/dragoniteDeath.png')";
        thirdPokemon.style.backgroundImage = "url('./res/img/dragonite.png')";
        clearInterval(interval);
      }
    };

    attackButton.onmouseup = () => {
      myPokemon.style.left = "22%";
      attackButton.style.fontSize = "250%";
    };
  } else {
    info.innerHTML = "YOU MUST BEAT THE PREVIOUS POKEMON!";
    setTimeout(() => {
      info.style.opacity = 0;
      setTimeout(() => {
         info.innerHTML = "";
         info.style.opacity = 1;
      }, 200);
    }, 3000);
  };
};

fourthPokemon.onclick = () => {
  if (level >= 4) {
    fourthPokemonDeath = false;
    pokemonSite.style.display = "none";
    mapSite.style.display = "none";
    battleSite.style.display = "block";
    battleSite.style.backgroundImage = "url('./res/img/fourthBattleSiteBackground.png')";
    myLives.innerHTML = Lives;
    enemyLives.innerHTML = 666;
    myPokemon.style.display = "block";
    myPokemon.style.backgroundImage = "url('./res/img/pikachu.png')";
    firstEnemyPokemon.style.display = "none";
    secondEnemyPokemon.style.display = "none";
    thirdEnemyPokemon.style.display = "none";
    fourthEnemyPokemon.style.display = "block";
    fourthEnemyPokemon.style.backgroundImage = "url('./res/img/mewtwo.png')";
    battleInfo.innerHTML = "";
    stardustInfo.innerHTML = "";
    interval = setInterval(() => {
      myLives.innerHTML--;
      if (myLives.innerHTML <= 0) {
        battleInfo.innerHTML = "YOU DIED";
        clearInterval(interval);
        myPokemon.style.backgroundImage = "url('./res/img/pikachuDeath.png')";
      }
    }, 200);

    attackButton.onmousedown = () => {
      if (fourthPokemonDeath) return;
      attackButton.style.fontSize = "230%";
      if (myLives.innerHTML > 0 && enemyLives.innerHTML > 0) {
        myPokemon.style.left = "27%";
        enemyLives.innerHTML -= damage;
      }

      if (enemyLives.innerHTML <= 0) {
        fourthPokemonDeath = true;
        battleInfo.innerHTML = "ENEMY DIED";
        stardustInfo.innerHTML = "YOU HAVE FINISHED THE GAME";
        numberOfStardust += 10;
        if (level === 4) level = 5;
        stardust.innerHTML = `x${numberOfStardust}`;
        fourthEnemyPokemon.style.backgroundImage = "url('./res/img/mewtwoDeath.png')";
        fourthPokemon.style.backgroundImage = "url('./res/img/mewtwo.png')";
        clearInterval(interval);
      };
    };

    attackButton.onmouseup = () => {
      myPokemon.style.left = "22%";
      attackButton.style.fontSize = "250%";
    };
  } else {
    info.innerHTML = "YOU MUST BEAT THE PREVIOUS POKEMON!";
    setTimeout(() => {
      info.style.opacity = 0;
      setTimeout(() => {
         info.innerHTML = "";
         info.style.opacity = 1;
      }, 200);
    }, 3000);
  };
};
