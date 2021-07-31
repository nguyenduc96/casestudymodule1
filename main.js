let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let score = 0;
let audioCollision = new Audio('audios/die.mp3');
let audioFly = new Audio('audios/vocanh.mp3');
let audioPoint = new Audio('audios/andiem.mp3');

function clearCanvas() {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}


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

function drawMultiObstacle() {
    obstacleBot.drawObstacle();
    obstacleTop.drawObstacle();
    obstacleBot1.drawObstacle();
    obstacleTop1.drawObstacle();
    obstacleBot2.drawObstacle();
    obstacleTop2.drawObstacle();
}

function plusPoint() {
    if ((obstacleBot.x + obstacleBot.weight) < bird.x && (obstacleBot.x + obstacleBot.weight) > (bird.x - 1) ||
        (obstacleBot1.x + obstacleBot1.weight) < bird.x && (obstacleBot1.x + obstacleBot1.weight) > (bird.x - 1) ||
        (obstacleBot2.x + obstacleBot2.weight) < bird.x && (obstacleBot2.x + obstacleBot2.weight) > (bird.x - 1)
    ) {
        score++;
        audioPoint.play();
        highScore.push(score);
        document.getElementById('point').innerHTML = score;
    }
    for (let i = 0; i < highScore.length; i++) {
        if (highScore[i] > max) {
            max = highScore[i];
        }
    }
    document.getElementById('highscore').innerHTML = "Điểm cao : " + max;
}

function checkCollisionTop() {
    if ((((bird.x + bird.weight <= (obstacleTop.x + obstacleTop.weight)) && ((bird.x + bird.weight) >= (obstacleTop.x))) &&
            ((bird.y <= (obstacleTop.y + obstacleTop.height)))) ||
        (((bird.x + bird.weight <= (obstacleTop1.x + obstacleTop1.weight)) && ((bird.x + bird.weight) >= (obstacleTop1.x))) &&
            ((bird.y <= (obstacleTop1.y + obstacleTop1.height)))) ||
        (((bird.x + bird.weight <= (obstacleTop2.x + obstacleTop2.weight)) && ((bird.x + bird.weight) >= (obstacleTop2.x))) &&
            ((bird.y <= (obstacleTop2.y + obstacleTop2.height))))
    ) {
        return true;
    }
    return false;
}

function checkCollisionBot() {
    if ((((bird.x + bird.weight <= (obstacleBot.x + obstacleBot.weight)) && ((bird.x + bird.weight) >= (obstacleBot.x))) &&
            ((bird.y + bird.height >= (obstacleBot.y)))) ||
        (((bird.x + bird.weight <= (obstacleBot1.x + obstacleBot1.weight)) && ((bird.x + bird.weight) >= (obstacleBot1.x))) &&
            ((bird.y + bird.height >= (obstacleBot1.y)))) ||
        (((bird.x + bird.weight <= (obstacleBot2.x + obstacleBot2.weight)) && ((bird.x + bird.weight) >= (obstacleBot2.x))) &&
            ((bird.y + bird.height >= (obstacleBot2.y))))) {
        return true;
    }
    return false
}

function checkCollisionStreet() {
    if (((bird.x + bird.weight >= 0) && (bird.x + bird.weight <= 450)) &&
        ((bird.y + bird.height >= 260) && (bird.y + bird.height) <= 320)) {
        return true;
    }
    return false;
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

