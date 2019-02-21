let board = document.querySelector('#board');

let ball = document.createElement('div');
ball.className = 'ball';
board.appendChild(ball);
let ballX = ball.getBoundingClientRect().left;
let ballY = ball.getBoundingClientRect().top;
console.log('to', ballX, ballY);

let ballObject = {
    x: ballX,
    y: ballY,
    speedX: 0,
    speedY: 0
};

function changeBallPosition(e) {
    console.log(e);
    ballObject.speedX = e.gamma / 30;
    ballObject.speedY = e.beta / 30;
}

let score = 0;
let highScores = [];
let gameRun = false;

window.addEventListener('deviceorientation', changeBallPosition);

function moveBall() {
    if(ballObject.x + ballObject.speedX < window.innerWidth && ballObject.x + ballObject.speedX > 0) {
        ballObject.x += ballObject.speedX;
        ball.style.left = `${ballObject.x}px`;
    }

    if(ballObject.y + ballObject.speedY < window.innerHeightg && ballObject.y + ballObject.speedY > 0) {
        ballObject.y += ballObject.speedY;
        ball.style.top = `${ballObject.y}px`;
    }

    if(gameRun) {
        window.requestAnimationFrame(moveBall);
    }
}

window.onload = function() {
    startGame();
};

function startGame() {
    gameRun = true;
    moveBall();
}
