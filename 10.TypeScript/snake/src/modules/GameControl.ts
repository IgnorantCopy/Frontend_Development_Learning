import Food from './Food';
import Panel from './Panel';
import Snake from './Snake';

class GameControl {
    snake: Snake;
    food: Food;
    panel: Panel;
    direction: string = '';

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.panel = new Panel();
        this.start();
    }

    start() {
        document.addEventListener("keydown", this.keydownHandler.bind(this));   // 如果没有 bind(this)，则 this 指向 document，而不是 GameControl 实例
        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    run() {
        this.snake.move(this.direction);

        setTimeout(this.run.bind(this), 500 - (this.panel.level - 1) * 30);
    }
}

export default GameControl;