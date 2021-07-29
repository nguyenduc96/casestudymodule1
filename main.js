let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let score = 0;

function clearCanvas() {
    context.clearRect(0,0, canvas.clientWidth, canvas.clientHeight)
}


// requestAnimationFrame(moveObstacle)
// requestAnimationFrame(moveBird)

let interval1Id = setInterval(moveObstacle, 0)
let interval2Id = setInterval(moveBird, 30)

