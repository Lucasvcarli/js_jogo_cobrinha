// Criar elemento que irá rodar o jogo
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

// Criar cobrinhas como vetor, já que ela vai ser uma serie de coordenadas, que quando pintadas, criam os quadradinhos
let snake = [];

// Início da cobrinha
snake [0] ={
    x: 8 * box,
    y: 8 * box
}

// Direção
let direction = "right";

// Comida
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}
