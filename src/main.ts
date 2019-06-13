// Creating the Canvas element and adding width, height and backgroun
const canvas: HTMLCanvasElement = document.createElement('canvas');
document.body.append(canvas);
canvas.width = 300;
canvas.height = 300;
canvas.style.backgroundColor = '#333333';

// Getting the canvas 2d context
const ctx: any = canvas.getContext('2d');

// Creating a virtual grid
const scale: number = 10;
const rows: number = canvas.height / scale;
const columns: number = canvas.width / scale;

// Creating a new snake
const snake: Snake = new Snake();

// The setup function that handles the initialization
const setup = () => {
    // Draw the snake to the screen
    snake.draw()
    const food: Food = new Food();
    food.chooseLocation();
    
    // Updating the snake's state every 60ms
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        snake.update();
        food.draw();
        snake.draw();
        // Check if the snake is eating the food
        if(snake.ate(food)){
            // Pick a new random location
            food.chooseLocation();
        }
        // Check if the snake collided itself
        snake.checkCollision();
        // Update the score track
        document.getElementById('score')!.innerText = "Score: " + String(snake.total);
    }, 60);
};

window.addEventListener('keydown', (e) => {
    const direction: string = e.key.replace('Arrow', '');
    snake.changeDirection(direction);
});

// Firing the setup function
setup();