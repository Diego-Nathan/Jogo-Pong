//varieveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 20;
let raio = dBolinha / 2;

//vaiaveis velocidade da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 200;
let larguraRaquete = 10;
let comprimentoRaquete = 70;

//variaveis da linha
let xLinha = 298;
let yLinha = 0;
let larguraLinha = 4;
let comprimentoLinha = 400;

//variaveis da raquete2
let xRaquete2 = 585;
let yRaquete2 = 200;
let velocidadeRaqueteOponente; 

//placar
let meusPontos = 0;
let pontosOponente = 0;

//sonsjogo

let raquetada;
let ponto;
let trilha;



letcolidiu = false;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto =loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
  
}

function setup() {
  
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  rect(300, 0, 5, -400);
  background(7,94,161);
  
  
  mostraBolinha();
  movimentoBolinha();
  verificaColisao();
  mostraRaquete1(xRaquete, yRaquete);
  mostraLinha(xLinha, yLinha);
  movimentoRaquete();
  //verificaColisaoRaquete1();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete1(xRaquete2, yRaquete2);
  movimentaRaqueteOponeteManual();
  //movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete2, yRaquete2);
  incluiPlacar();
  marcaPonto();
  
  
  function mostraBolinha(){
    circle (xBolinha, yBolinha, dBolinha);
  }  

  function movimentoBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
  
  function verificaColisao(){
    
    if(xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1;
  } 
    if(yBolinha + raio > height || yBolinha - raio < 0 ){
    velocidadeYBolinha *= -1;
  } 
    
}
  
  function mostraRaquete1(x,y){
    rect(x,y, larguraRaquete,comprimentoRaquete);
    
  }
  
  function mostraLinha(x,y){
    rect(x,y, larguraLinha,comprimentoLinha);
    
  }
  
  function movimentoRaquete(){
    
    if(keyIsDown(87)){
    if(podeSeMover()){
      yRaquete -= 10;
    } 
  }
    if(keyIsDown(83)){
    if(podeSeMover2()){
      yRaquete += 10;
    } 
  }

  }
  
  function verificaColisaoRaquete1(){
    
    if(xBolinha - raio < xRaquete + larguraRaquete &&           yBolinha - raio < yRaquete + comprimentoRaquete && yBolinha + raio > yRaquete){
      velocidadeXBolinha *= -1;
      raquetada.play();
    }
    
  }
  
  function verificaColisaoRaquete(x, y){
    
    colidiu = collideRectCircle(x,y,larguraRaquete,comprimentoRaquete,xBolinha,yBolinha,raio);
    
    if(colidiu){
      velocidadeXBolinha *= -1;
      raquetada.play();
    }
    
  }
  
  function movimentaRaqueteOponeteManual(){
      
       if(keyIsDown(UP_ARROW)){
         if(podeSeMover3()){
      yRaquete2 -= 10;
    } 
    
      
  }
    if(keyIsDown(DOWN_ARROW)){
   if(podeSeMover4()){
      yRaquete2 += 10;
    } 
    
  }

    
  
  }
  
  function movimentaRaqueteOponente(){
    velocidadeRaqueteOponente = yBolinha - yRaquete2 - comprimentoRaquete / 2 - 30;
    yRaquete2 += velocidadeRaqueteOponente
    
  }
  
  function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(4,8,10);
    rect(180,10,40,20);
    fill(255);
    text(meusPontos, 200, 26);
    fill(4,8,10);
    rect(380,10,40,20);
    fill(255);
    text(pontosOponente, 400, 26);
    
  } 
  
  function marcaPonto(){
    if(xBolinha > 590){
      meusPontos += 1;
      ponto.play();
    }
    if(xBolinha < 10){
      pontosOponente += 1;
      ponto.play();    
  }
  
}
  
}  

function podeSeMover(){
  return yRaquete > -35
}
function podeSeMover2(){
  return yRaquete < 365
}

function podeSeMover3(){
    return yRaquete2 > -35
}

function podeSeMover4(){
    return yRaquete2 < 365
}