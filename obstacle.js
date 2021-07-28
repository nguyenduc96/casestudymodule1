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
        context.fill()
    }

    moveLeft() {
        if (this.x >= 0) {
            this.x -= 10;
        } else {
            this.x = 800;

        }
    }
}

function moveObstacle() {
    clearCanvas()
    obstacletop.moveLeft();
    obstaclebot.moveLeft();
    bird.drawBird();
   drawMultiObstacle(200);
}

let space = 100;
let obsheight = Math.round(Math.random()*100);
let obstacletop = new Obstacle(400, 0, 30, obsheight);
let obstaclebot = new Obstacle(400, obstacletop.height + space, 30, 500 - (obstacletop.height + space));

function drawMultiObstacle() {
    obstaclebot.drawObstacle();
    obstacletop.drawObstacle();
}


