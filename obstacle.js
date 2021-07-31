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
            obstacleTop.height = Math.round(20 + Math.random() * 150);
            obstacleBot.y = obstacleTop.height + space;
        }
    }

    moveLeft1() {
        if (this.x >= 0) {
            this.x -= 0.5;
        } else {
            this.x = 600;
            obstacleTop1.height = Math.round(20 + Math.random() * 150);
            obstacleBot1.y = obstacleTop1.height + space;
        }
    }

    moveLeft2() {
        if (this.x >= 0) {
            this.x -= 0.5;
        } else {
            this.x = 600;
            obstacleTop2.height = Math.round(20 + Math.random() * 150);
            obstacleBot2.y = obstacleTop2.height + space;
        }
    }
}

let space = 100;
let obsHeight = Math.round(20 + Math.random() * 100);
let obsHeight1 = Math.round(20 + Math.random() * 100);
let obsHeight2 = Math.round(20 + Math.random() * 100);
let obstacleTop = new Obstacle(600, 0, 30, obsHeight);
let obstacleTop1 = new Obstacle(800, 0, 30, obsHeight1);
let obstacleTop2 = new Obstacle(1000, 0, 30, obsHeight2);
let obstacleBot = new Obstacle(600, obstacleTop.height + space, 30, 400 - (obstacleTop.height + space));
let obstacleBot1 = new Obstacle(800, obstacleTop1.height + space, 30, 400 - (obstacleTop1.height + space));
let obstacleBot2 = new Obstacle(1000, obstacleTop2.height + space, 30, 400 - (obstacleTop2.height + space));
let highScore = [0];
let max = highScore[0];







