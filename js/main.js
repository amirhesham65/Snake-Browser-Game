"use strict";
// Creating the Canvas element and adding width, height and backgroun
var canvas = document.createElement('canvas');
document.body.append(canvas);
canvas.width = 300;
canvas.height = 300;
canvas.style.backgroundColor = '#333333';
// Getting the canvas 2d context
var ctx = canvas.getContext('2d');
// Creating a virtual grid
var scale = 10;
var rows = canvas.height / scale;
var columns = canvas.width / scale;
// Creating a new snake
var snake = new Snake();
// The setup function that handles the initialization
var setup = function () {
    // Draw the snake to the screen
    snake.draw();
    var food = new Food();
    food.chooseLocation();
    // Updating the snake's state every 60ms
    window.setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        food.draw();
        snake.draw();
        // Check if the snake is eating the food
        if (snake.ate(food)) {
            // Pick a new random location
            food.chooseLocation();
        }
        // Check if the snake collided itself
        snake.checkCollision();
        // Update the score track
        document.getElementById('score').innerText = "Score: " + String(snake.total);
    }, 60);
};
window.addEventListener('keydown', function (e) {
    var direction = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});
// Firing the setup function
setup();
