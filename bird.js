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
    }

    drawBird() {
        context.fillRect(this.x, this.y, this.weight, this.height);
        context.fill()
    }

    checkBird() {
        if (this.y <= 0 || this.y >= 330) {
            return true;
        }
        return false;
    }


    moveUp() {
        this.y -= 40;
        console.log('bird bay len' + this.y);

    }

    clickUp() {
        window.addEventListener('click', ()=> {
            this.y -= 40;
            console.log('bird bay len' + this.y);
        })
    }

    moveDown() {
        if (!this.checkBird()) {
            this.y += 8;
            console.log('bird roi xuong' + this.y)
        }
    }
}

function moveBird() {
    clearCanvas()
    bird.moveDown();
    bird.drawBird();
    drawMultiObstacle();
    // obstaclebot.drawObstacle();
    // obstacletop.drawObstacle();
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

let bird = new Bird(160, 140, 30, 30);
window.addEventListener('keydown', moveBirdUp);
bird.clickUp();
