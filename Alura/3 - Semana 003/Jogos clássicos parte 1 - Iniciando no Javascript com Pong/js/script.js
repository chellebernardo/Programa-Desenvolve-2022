var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 25;
let raio = diametroBolinha / 2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variáveis Raquete 1
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

function createCanvas() {
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 600, 400);
}

function setup() {
    createCanvas();
}

function draw() {
    createCanvas();
    mostraBolinha();
    movimentaBolinha();
    verficaColisaoBorda();
    mostraRaquete()
}

function mostraBolinha() {
    pincel.fillStyle = 'red';
    pincel.beginPath();
    pincel.arc(xBolinha, yBolinha, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verficaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function mostraRaquete() {
    pincel.fillStyle = 'blue'
    pincel.fillRect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}

draw();