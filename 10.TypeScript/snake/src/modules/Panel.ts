class Panel {
    score: number = 0;
    level: number = 1;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    levelMax: number;
    scoreUp: number;

    constructor(levelMax: number = 10, scoreUp: number = 10) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.levelMax = levelMax;
        this.scoreUp = scoreUp;
    }

    scoreIncrease(): void {
        this.scoreElement.innerText = ++this.score + '';
        if (this.score % this.scoreUp === 0) {
            this.levelIncrease();
        }
    }

    levelIncrease(): void {
        if (this.level >= this.levelMax) {
            return;
        }
        this.levelElement.innerText = ++this.level + '';
    }
}

export default Panel;