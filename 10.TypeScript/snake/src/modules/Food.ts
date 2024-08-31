class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;    // !: 断言document.getElementById()返回值不为 null 或 undefined
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        let x = Math.round(Math.random() * 29);
        let y = Math.round(Math.random() * 29);
        this.element.style.left = x * 10 + 'px';
        this.element.style.top = y * 10 + 'px';
    }
}

export default Food;