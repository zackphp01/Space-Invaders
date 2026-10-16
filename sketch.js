// ==========================================================================
// =====================CONFIGURAÇÃO INICIAL=================================
// ==========================================================================

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const keys = 0;

let score = 0;
let gameOver = false;
let lives = 3;

// ==========================================================================
// ================================JOGADOR===================================
// ==========================================================================

const player = {
width: 50,
height: 40,
speed: 6,

x: canvas.width / 2 - 25,
y: canvas.height - 70
};

// ==========================================================================
// TIROS
// ==========================================================================
const bullets = [];
const BULLET_SPEED =10;

let canShoot = true;

// ==========================================================================
// INIMIGOS
// ==========================================================================
const enemies = [];

const ENEMY_ROWS = 5;
const ENEMY_COLS = 10;

let enemyDirection = 1;
let enemySpeed =1.2;

// ==========================================================================
// =============================EVENTOS TECLADO==============================
// ==========================================================================

window.addEventListener("keydown", (event) => {
keys[event.code] = true;

if (event.code === "Space" && canShoot && !ganeOver)
shoot();
canShoot = false;
}

if (event.code === "KeyR" && gamerOver) {
    resetGame();
}
});

window.addEventListener("keyup", (event) =>{
keys[event. code] = false;

    if (event.code === "Space") {
        canShoot = true;
   }
});


// ==========================================================================
// =============================CRIA INIMIGOS================================
// ==========================================================================

function createEnemies(){
  enemies.length = 0;

  const startX = 100;
  const startX = 60;

  const spacingX = 60;
  const spacingY = 45;

  for (let row = 0, row < ENEMY_ROWS; row+){
    for (let col = 0; col < ENEMY_COLS; col++){
enemies push ({
  x: startX + col * spacingX,
  y: startX + col * spacingY,
  width: 36,
  height: 28,
  alive: true
})
    }
  }
}

// ==========================================================================
// ================================ATIRAR====================================
// ==========================================================================

function shoot(){
  bullets.push({
    x: player.x + player.width/2 - 2,
    y: player.y,
    width: 4,
    height: 12,
  });
}
// ==========================================================================
// ============================MOVIMENTO JOGADOR=============================
// ==========================================================================

function uptadePlayer(){
  if (keys["ArrowLeft"] || keys["KeyA"]){
      player.x -= player,speed;  
  }
  if (keys["ArrowRigth"] || keys["KeyD"]){
      player.x += player,speed;  
  }

  if(player.x < 0){
    player.x = 0
  }

  if (player.x + player.width > canvas.width){
      player.x = player.width - canvas.width;    
  }
}
