class Obstacle {
    x;
    y;
    weight;
    height;

    constructor(x, y, weight, height) {
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.height = height;
    }

    drawObstacle() {
        context.fillRect(this.x, this.y, this.weight, this.height);
        context.fillStyle = "green";
    }

    moveLeft() {
        if (this.x >= 0) {
            this.x -= 0.5;
        } else {
            this.x = 600;
            obstacletop.height = Math.round(Math.random() * 200);
            obstaclebot.y = obstacletop.height + space;
        }
    }
    moveLeft1() {
        if (this.x >= 0) {
            this.x -= 0.5;
        }  else {
            this.x = 600;
            obstacletop1.height = Math.round(Math.random() * 200);
            obstaclebot1.y = obstacletop1.height + space;
        }
    }
    moveLeft2() {
        if (this.x >= 0) {
            this.x -= 0.5;
        } else {
            this.x = 600;
            obstacletop2.height = Math.round(Math.random() * 200);
            obstaclebot2.y = obstacletop2.height + space;
        }
    }
}

let space = 100;
let obsheight = Math.round(20 + Math.random() * 100);
let obsheight1 = Math.round(20 + Math.random() * 100);
let obsheight2 = Math.round(20 + Math.random() * 100);
let street = new Obstacle(0, 320, 600, 80);
let obstacletop = new Obstacle(800, 0, 30, obsheight);
let obstacletop1 = new Obstacle(1000, 0, 30, obsheight1);
let obstacletop2 = new Obstacle(1200, 0, 30, obsheight2);
let obstaclebot = new Obstacle(800, obstacletop.height + space, 30, 500 - (obstacletop.height + space));
let obstaclebot1 = new Obstacle(1000, obstacletop1.height + space, 30, 500 - (obstacletop1.height + space));
let obstaclebot2 = new Obstacle(1200, obstacletop2.height + space, 30, 500 - (obstacletop2.height + space));


function moveObstacle() {
    clearCanvas()
    obstacletop.moveLeft();
    obstaclebot.moveLeft();
    obstacletop1.moveLeft1();
    obstaclebot1.moveLeft1();
    obstacletop2.moveLeft2();
    obstaclebot2.moveLeft2();
    // bird.drawBird();
    drawMultiObstacle();
    plusPoint();
}

function plusPoint() {
    if ((obstaclebot.x + obstaclebot.weight) < bird.x && (obstaclebot.x + obstaclebot.weight) > (bird.x - 1) ||
        (obstaclebot1.x + obstaclebot1.weight) < bird.x && (obstaclebot1.x + obstaclebot1.weight) > (bird.x - 1) ||
        (obstaclebot2.x + obstaclebot2.weight) < bird.x && (obstaclebot2.x + obstaclebot2.weight) > (bird.x - 1)
    ) {
        score++;
        document.getElementById('point').innerHTML = score;
    }
}

function drawMultiObstacle() {
    obstaclebot.drawObstacle();
    obstacletop.drawObstacle();
    obstaclebot1.drawObstacle();
    obstacletop1.drawObstacle();
    obstaclebot2.drawObstacle();
    obstacletop2.drawObstacle();
    street.drawObstacle();
}


