interface Length {
    len: number;
}

function f<T extends Length>(a: T) {
    return a.len;
}

console.log(f({len: 10}));


class Point<T> {
    x: T;
    y: T;

    constructor(x: T, y: T) {
        this.x = x;
        this.y = y;
    }
}

const point = new Point<number>(3, 4);