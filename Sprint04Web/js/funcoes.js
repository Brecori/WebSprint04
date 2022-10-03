(function () {
  const cnv = document.querySelector('#canvas');
  const ctx = cnv.getContext('2d');

  //movimentos
  let moveLeft = false;
  let moveUp = false;
  let moveRight = false;
  let moveDown = false;
  let moveLeft2 = false;
  let moveUp2 = false;
  let moveRight2 = false;
  let moveDown2 = false;

  //vidas
  let hpRobo1 = 100;
  let hpRobo2 = 100;

  //colisoes 
  let colisao = 0;

  // arrays
  const quadrados = [];

  // quadrados
  const quadrado1 = new quadrado(20, 10, 50, 70, "#f60", 5);
  quadrados.push(quadrado1);

  const quadrado2 = new quadrado(100, 120, 550, 50, "#000", 0);
  quadrados.push(quadrado2);

  const quadrado3 = new quadrado(400, 350, 500, 50, "#000", 0);
  quadrados.push(quadrado3);

  const quadrado4 = new quadrado(930, 420, 50, 70, "#caf620", 5);
  quadrados.push(quadrado4);

  // pressionar as teclas
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;
    console.log(nomeKey);
    switch (nomeKey) {
      case 'ArrowLeft':
        moveLeft = true;
        break;
      case 'ArrowUp':
        moveUp = true;
        break;
      case 'ArrowRight':
        moveRight = true;
        break;
      case 'ArrowDown':
        moveDown = true;
        break;
    }
  });

  window.addEventListener('keydown', function (d) {
    const nomeKeyD = d.key;
    console.log(nomeKeyD);
    switch (nomeKeyD) {
      case 'a':
        moveLeft2 = true;
        break;
      case 'w':
        moveUp2 = true;
        break;
      case 'd':
        moveRight2 = true;
        break;
      case 's':
        moveDown2 = true;
        break;
    }
  });

  //soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
      case 'ArrowLeft':
        moveLeft = false;
        break;
      case 'ArrowUp':
        moveUp = false;
        break;
      case 'ArrowRight':
        moveRight = false;
        break;
      case 'ArrowDown':
        moveDown = false;
        break;
    }
  });

  window.addEventListener('keyup', function (d) {
    const keyD = d.key;
    
    switch (keyD) {
      case 'a':
        moveLeft2 = false;
        break;
      case 'w':
        moveUp2 = false;
        break;
      case 'd':
        moveRight2 = false;
        break;
      case 's':
        moveDown2 = false;
        break;
    }
  });

  function moverQuadrado4() {
    if (moveLeft && !moveRight) {
      quadrado4.posX -= quadrado4.velocidade;
    }
    if (moveRight && !moveLeft) {
      quadrado4.posX += quadrado4.velocidade;
    }
    if (moveUp && !moveDown) {
      quadrado4.posY -= quadrado4.velocidade;
    }
    if (moveDown && !moveUp) {
      quadrado4.posY += quadrado4.velocidade;
    }

    //fiixar na tela - NÃO SAI DO CANVAS - Precisa pensar em como fazer isso com o obstáculo
    quadrado4.posX = Math.max(0, Math.min(cnv.width - quadrado4.width, quadrado4.posX));
    quadrado4.posY = Math.max(0, Math.min(cnv.height - quadrado4.height, quadrado4.posY));
  }

  function moverQuadrados() {
    if (moveLeft2 && !moveRight2) {
      quadrado1.posX -= quadrado1.velocidade;
    }
    if (moveRight2 && !moveLeft2) {
      quadrado1.posX += quadrado1.velocidade;
    }
    if (moveUp2 && !moveDown2) {
      quadrado1.posY -= quadrado1.velocidade;
    }
    if (moveDown2 && !moveUp2) {
      quadrado1.posY += quadrado1.velocidade;
    }

    //fiixar na tela - NÃO SAI DO CANVAS - Precisa pensar em como fazer isso com o obstáculo
    quadrado1.posX = Math.max(0, Math.min(cnv.width - quadrado1.width, quadrado1.posX));
    quadrado1.posY = Math.max(0, Math.min(cnv.height - quadrado1.height, quadrado1.posY));
    
  }

  function detectarColisao() {
    if ((quadrado1.posX + quadrado1.width) > quadrado4.posX && quadrado1.posX < (quadrado4.posX + quadrado4.width) && ((quadrado1.posY + quadrado1.height) > quadrado4.posY && quadrado1.posY < (quadrado4.posY + quadrado4.height)
    ))
    {
      quadrado1.posX = quadrado1.posX - 15 * quadrado1.velocidade;
      quadrado4.posX = quadrado4.posX + 15 * quadrado1.velocidade;
      hpRobo1 -= Math.floor(Math.random()*20);
      hpRobo2 -= Math.floor(Math.random()*20);
      colisao += 1;
      console.log(hpRobo1);
      console.log(hpRobo2);
      console.log(colisao);
    }

    //colisao blocos quadrado1
    if ((quadrado1.posX + quadrado1.width) > quadrado2.posX && quadrado1.posX < (quadrado2.posX + quadrado2.width) && (quadrado1.posY + quadrado1.height) > quadrado2.posY && quadrado1.posY < (quadrado2.posY + quadrado2.height)) {
      quadrado1.posX = 20;
      quadrado1.posY = 10;
      
    }
    if ((quadrado1.posX + quadrado1.width) > quadrado3.posX && quadrado1.posX < (quadrado3.posX + quadrado3.width) && (quadrado1.posY + quadrado1.height) > quadrado3.posY && quadrado1.posY < (quadrado3.posY + quadrado3.height)) {
      quadrado1.posX = 20;
      quadrado1.posY = 10;
      
    }

    //colisao blocos quadrado4
    if ((quadrado4.posX + quadrado4.width) > quadrado2.posX && quadrado4.posX < (quadrado2.posX + quadrado2.width) && (quadrado4.posY + quadrado4.height) > quadrado2.posY && quadrado4.posY < (quadrado2.posY + quadrado2.height)) {
      quadrado4.posX = 930;
      quadrado4.posY = 420;
      
    }
    if ((quadrado4.posX + quadrado4.width) > quadrado3.posX && quadrado4.posX < (quadrado3.posX + quadrado3.width) && (quadrado4.posY + quadrado4.height) > quadrado3.posY && quadrado4.posY < (quadrado3.posY + quadrado3.height)) {
      quadrado4.posX = 930;
      quadrado4.posY = 420;
      
    }
    
    if (colisao == 5) {
      ctx.clearRect(0, 0, cnv.width, cnv.height);
      window.requestAnimationFrame(atualizarTela, cnv);
    
    exibirQuadrados();
    detectarColisao();
    }

  }


  function exibirQuadrados() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (const i in quadrados) {
      const spr = quadrados[i];
      ctx.fillStyle = spr.color
      ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
    }
  }
  //solicitar uma animação ao browser e chamar a função
  //que é a propria função atualizarTela
  function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, cnv);
    moverQuadrados();
    moverQuadrado4();
    exibirQuadrados();
    detectarColisao();
  }
  atualizarTela();

}());