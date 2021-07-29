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
        if (!this.checkBird()){
            window.addEventListener('click', ()=> {
                this.y -= 50;
                this.gravity = 0.5;
            });
        }

    }

    moveDown() {
        if (!this.checkBird()) {
            this.y += this.gravity;
            this.gravity*=1.15;
        }
    }
}

function moveBird() {
    clearCanvas()
   if (checkGameOver() === true){
       location.reload();
       alert("Game Over")
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
                bird.moveUp();
                break;
            }
        }
    }
}
let bird = new Bird(160, 140, 30, 25);
let birdImg = new Image();
birdImg.src = 'images/nobgr.png';

function checkCollisionTop() {
    if ((((bird.x + bird.weight <= (obstacletop.x + obstacletop.weight)) && ((bird.x + bird.weight) >= (obstacletop.x))) &&
        ((bird.y <= (obstacletop.y + obstacletop.height)))) ||
        (((bird.x + bird.weight <= (obstacletop1.x + obstacletop1.weight)) && ((bird.x + bird.weight) >= (obstacletop1.x))) &&
        ((bird.y <= (obstacletop1.y + obstacletop1.height)))) ||
        (((bird.x + bird.weight <= (obstacletop2.x + obstacletop2.weight)) && ((bird.x + bird.weight) >= (obstacletop2.x))) &&
        ((bird.y <= (obstacletop2.y + obstacletop2.height))))
    ){
        return true;
    }
    return false;
}

function checkCollisionBot() {
    if ((((bird.x + bird.weight <= (obstacletop.x + obstacletop.weight)) && ((bird.x + bird.weight) >= (obstaclebot.x))) &&
        ((bird.y + bird.height >= (obstaclebot.y)))) ||
        (((bird.x + bird.weight <= (obstacletop1.x + obstacletop1.weight)) && ((bird.x + bird.weight) >= (obstaclebot1.x))) &&
        ((bird.y + bird.height >= (obstaclebot1.y)))) ||
        (((bird.x + bird.weight <= (obstacletop2.x + obstacletop2.weight)) && ((bird.x + bird.weight) >= (obstaclebot2.x))) &&
        ((bird.y + bird.height >= (obstaclebot2.y))))){
        return true;
    }
    return false
}

function checkCollisionStreet() {
    if (((bird.x + bird.weight >= 0) && (bird.x + bird.weight <= 600)) &&
        ((bird.y + bird.height >= 320) && (bird.y + bird.height) <= 400)){
        return true;
    }
    return false;
}


window.addEventListener('keydown', moveBirdUp);
bird.clickUp();
