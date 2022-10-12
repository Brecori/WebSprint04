// MONTA OS QUADRADOS(ROBÔS E OBSTÁCULOS)
const quadrado = function (posX, posY, width, height, color, velocidade) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocidade = velocidade;
}

//Retorna  largura
quadrado.prototype.halfWidth = function(){
	return this.width/2;
}
//Retorna altura
quadrado.prototype.halfHeight = function(){
	return this.height/2;
}
//Retorna a posição do centro do objeto no eixo X
quadrado.prototype.centerX = function(){
	return this.posX + this.halfWidth();
}
//Retorna a posição do centro do objeto no eixo Y
quadrado.prototype.centerY = function(){
	return this.posY + this.halfHeight();
}

