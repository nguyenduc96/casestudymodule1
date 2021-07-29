let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let score = 0;

function clearCanvas() {
    context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
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
    if (checkCollisionBot() || checkCollisionTop() || checkCollisionStreet()){
        return true;
    }
    return  false;
}

let highScore = window.localStorage;
highScore.setItem()
highScore.getItem()
let interval1Id = setInterval(moveObstacle, 0)
let interval2Id = setInterval(moveBird, 30)


