let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let score = 0;
let audioCollision = new Audio('audios/die.mp3');
let audioFly = new Audio('audios/vocanh.mp3');
let audioPoint = new Audio('audios/andiem.mp3');


function clearCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

// function Start () {
//     bird.isStart = true;
// }

function moveBird() {
    clearCanvas()
    if (checkGameOver() === true) {
        audioCollision.play();
        alert('Game over');
        clearInterval(interval1Id);
        clearInterval(interval2Id);
    }
    bird.moveDown();
    bird.drawBird();
    drawMultiObstacle();
}

function moveBirdUp() {
    switch (event.keyCode) {
        case 32: {
            if (!this.checkBird) {
                audioFly.play()
                bird.moveUp();
                break;
            }
        }
    }
}

function moveObstacle() {
    clearCanvas()
    obstacleTop.moveLeft();
    obstacleBot.moveLeft();
    obstacleTop1.moveLeft1();
    obstacleBot1.moveLeft1();
    obstacleTop2.moveLeft2();
    obstacleBot2.moveLeft2();
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

let interval1Id = setInterval(moveObstacle, 0)
let interval2Id = setInterval(moveBird, 30)
window.addEventListener('keydown', moveBirdUp);
bird.clickUp();

