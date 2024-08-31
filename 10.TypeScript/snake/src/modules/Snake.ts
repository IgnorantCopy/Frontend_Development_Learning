class Snake {
    element: HTMLElement;
    head: HTMLElement;
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById("snake")!;
        this.head = document.querySelector("#snake > div")!;
        this.bodies = this.element.getElementsByTagName("div");
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        this.head.style.left = `${value}px`;
    }

    set Y(value: number) {
        this.head.style.top = `${value}px`;
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    move(direction: string) {
        let headX = this.X;
        let headY = this.Y;
        switch (direction) {
            case "ArrowUp":
            case "Up":
            case "w":
                headY -= 10;
                break;
            case "ArrowDown":
            case "Down":
            case "s":
                headY += 10;
                break;
            case "ArrowLeft":
            case "Left":
            case "a":
                headX -= 10;
                break;
            case "ArrowRight":
            case "Right":
            case "d":
                headX += 10;
                break;
            default:
                break;
        }

        this.X = headX;
        this.Y = headY;

        // const newHead = document.createElement("div");
        // newHead.classList.add("snake-body");
        // newHead.style.left = `${headX}px`;
        // newHead.style.top = `${headY}px`;
        // this.head.insertAdjacentElement("afterend", newHead);
        // this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
    }
}

export default Snake;