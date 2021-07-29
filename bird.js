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
        // context.fillRect(this.x, this.y, this.weight, this.height);
        // context.drawImage(bird, 160, 140, 30, 30);
        // context.fillStyle = 'red';
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
    // bird.moveDown();
    // bird.drawBird();
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
// let bird = new Bird(160, 140, 30, 30);
let bird = new Image();
bird.src = 'images/pink.jpeg';
bird.onload = function (){
    context.drawImage(bird, 160, 140, 30, 30);
}

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
        ((bird.y + bird.height >= (obstaclebot.y)) && ((bird.y + bird.height) <= (obstaclebot.y + obstaclebot.height)))) ||
        (((bird.x + bird.weight <= (obstacletop1.x + obstacletop1.weight)) && ((bird.x + bird.weight) >= (obstaclebot1.x))) &&
        ((bird.y + bird.height >= (obstaclebot1.y)) && ((bird.y + bird.height) <= (obstaclebot1.y + obstaclebot1.height)))) ||
        (((bird.x + bird.weight <= (obstacletop2.x + obstacletop2.weight)) && ((bird.x + bird.weight) >= (obstaclebot2.x))) &&
        ((bird.y + bird.height >= (obstaclebot2.y)) && ((bird.y + bird.height) <= (obstaclebot2.y + obstaclebot2.height))))
    ){
        return true;
    }
    return false
}

function checkCollisionStreet() {
    if (((bird.x + bird.weight >= street.x) && (bird.x + bird.weight <= street.weight + street.x)) &&
        ((bird.y + bird.height >= street.y) && (bird.y + bird.height) <= street.height + street.y)){
        return true;
    }
    return false;
}

function checkGameOver() {
    if (checkCollisionBot() || checkCollisionTop() || checkCollisionStreet()){
        return true;
    }
    return  false;
}

window.addEventListener('keydown', moveBirdUp);
// bird.clickUp();
