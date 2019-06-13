class Food {
    // Giving the food a default position
    x: number = 0;
    y: number = 0;

    // Picking a random loation for the food
    chooseLocation(){
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    // Draw the food to the canvas
    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, scale, scale)
    }
}