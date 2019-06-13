"use strict";
var Food = /** @class */ (function () {
    function Food() {
        // Giving the food a default position
        this.x = 0;
        this.y = 0;
    }
    // Picking a random loation for the food
    Food.prototype.chooseLocation = function () {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    };
    // Draw the food to the canvas
    Food.prototype.draw = function () {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, scale, scale);
    };
    return Food;
}());
