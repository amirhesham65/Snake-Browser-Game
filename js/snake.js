"use strict";
var Snake = /** @class */ (function () {
    function Snake() {
        // Giving the snake a default position and a velocity
        this.x = 0;
        this.y = 0;
        this.speed = scale * 1;
        this.xSpeed = this.speed;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];
    }
    // Snake's draw method that handles drawing it to the screen
    Snake.prototype.draw = function () {
        ctx.fillStyle = "red";
        // draw the tail
        for (var i = 0; i < this.tail.length; i++) {
            if (this.tail[i]) {
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            }
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    };
    // Snake's update method that handles the changing state of the snake over the interval
    Snake.prototype.update = function () {
        // Updating the tail to step by x1 scale
        for (var i = 0; i < this.tail.length; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = { x: this.x, y: this.y };
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        // Hanling the collision with the canvas parameter
        if (this.x > canvas.width) {
            this.x = 0;
        }
        if (this.y > canvas.height) {
            this.y = 0;
        }
        if (this.x < 0) {
            this.x = canvas.width;
        }
        if (this.y < 0) {
            this.y = canvas.height;
        }
    };
    // Handling changing in direction
    Snake.prototype.changeDirection = function (direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -this.speed;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = this.speed;
                break;
            case 'Left':
                this.xSpeed = -this.speed;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = this.speed;
                this.ySpeed = 0;
                break;
        }
    };
    // Check if the sanke ate a food object
    Snake.prototype.ate = function (food) {
        if (this.x === food.x && this.y === food.y) {
            this.total++; // Incrementing the tail
            return true;
        }
        return false;
    };
    // Check if the snake has collided with itself
    Snake.prototype.checkCollision = function () {
        for (var i = 0; i < this.tail.length; i++) {
            if (this.tail[i]) {
                if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                    // Reset the total and the tail
                    this.total = 0;
                    this.tail = [];
                }
            }
        }
    };
    return Snake;
}());
