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
            canvas.addEventListener('click', () => {
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




