let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let score = 0;

function clearCanvas() {
    context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight)
}

bird.drawBird(context);
// obstacletop.drawObstacle(context);
// obstaclebot.drawObstacle(context);

// window.requestAnimationFrame(moveObstacle)
// window.requestAnimationFrame()
setInterval(moveObstacle, 50)
setInterval(moveBird, 50)

