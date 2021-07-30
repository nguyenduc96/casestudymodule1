let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let score = 0;
let audioCollision = new Audio('audios/die.mp3');
let audioFly = new Audio('audios/vocanh.mp3');
let audioPoint = new Audio('audios/andiem.mp3');


function clearCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}


function moveObstacle() {
    clearCanvas()
    obstacletop.moveLeft();
    obstaclebot.moveLeft();
    obstacletop1.moveLeft1();
    obstaclebot1.moveLeft1();
    obstacletop2.moveLeft2();
    obstaclebot2.moveLeft2();
    bird.drawBird();
    drawMultiObstacle();
    plusPoint();
}

function checkGameOver() {
    if (checkCollisionBot() || checkCollisionTop() || checkCollisionStreet()) {
        return true;
    }
    return false;
}

function gamePlay() {
    if (checkGameOver() === false){
        clearCanvas();
        bird.moveDown();
        bird.drawBird();
        drawMultiObstacle();
        moveObstacle();
        plusPoint();
    }
}


let interval1Id = setInterval(moveObstacle, 0)
let interval2Id = setInterval(moveBird, 30)
window.addEventListener('keydown', moveBirdUp);
bird.clickUp();

