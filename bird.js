class Bird {
    x;
    y;
    weight;
    height;

    constructor(x, y, weight, height) {
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.height = height;
        this.gravity = 0.5;
    }

    drawBird() {
        context.drawImage(birdImg, this.x, this.y, this.weight, this.height);
    }

    checkBird() {
        if (this.y >= 320) {
            return true;
        }
        return false;
    }

    moveUp() {
        this.y -= 50
        this.gravity = 0.5;
    }

    clickUp() {
        if (!this.checkBird()) {
            window.addEventListener('click', () => {
                audioFly.play();
                this.y -= 50;
                this.gravity = 0.5;
            });
        }

    }


    moveDown() {
        if (!this.checkBird()) {
            this.y += this.gravity;
            this.gravity *= 1.15;
        }
    }
}

let bird = new Bird(120, 100, 35, 27);
let birdImg = new Image();
birdImg.src = 'images/nobgr.png';

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


