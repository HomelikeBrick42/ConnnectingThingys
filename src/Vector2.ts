class Vector2 {
    public x: number;
    public y: number;

    public constructor(x: number = null, y: number = null) {
        if (x === null && y === null) {
            this.x = 0.0;
            this.y = 0.0;
        } else if (x !== null && y === null) {
            this.x = x;
            this.y = x;
        } else if (x !== null && y !== null) {
            this.x = x;
            this.y = y;
        } else {
            this.x = null;
            this.y = null;
        }
    }

    public static Add(a: Vector2 | number, b: Vector2 | number): Vector2 {
        if (a instanceof Vector2) {
            if (b instanceof Vector2) {
                return new Vector2(a.x + b.x, a.y + b.y);
            } else {
                return new Vector2(a.x + b, a.y + b);
            }
        } else {
            if (b instanceof Vector2) {
                return new Vector2(a + b.x, a + b.y);
            } else {
                return new Vector2(a + b, a + b);
            }
        }
    }

    public static Sub(a: Vector2 | number, b: Vector2 | number): Vector2 {
        if (a instanceof Vector2) {
            if (b instanceof Vector2) {
                return new Vector2(a.x - b.x, a.y - b.y);
            } else {
                return new Vector2(a.x - b, a.y - b);
            }
        } else {
            if (b instanceof Vector2) {
                return new Vector2(a - b.x, a - b.y);
            } else {
                return new Vector2(a - b, a - b);
            }
        }
    }

    public static Mul(a: Vector2 | number, b: Vector2 | number): Vector2 {
        if (a instanceof Vector2) {
            if (b instanceof Vector2) {
                return new Vector2(a.x * b.x, a.y * b.y);
            } else {
                return new Vector2(a.x * b, a.y * b);
            }
        } else {
            if (b instanceof Vector2) {
                return new Vector2(a * b.x, a * b.y);
            } else {
                return new Vector2(a * b, a * b);
            }
        }
    }

    public static Div(a: Vector2 | number, b: Vector2 | number): Vector2 {
        if (a instanceof Vector2) {
            if (b instanceof Vector2) {
                return new Vector2(a.x / b.x, a.y / b.y);
            } else {
                return new Vector2(a.x / b, a.y / b);
            }
        } else {
            if (b instanceof Vector2) {
                return new Vector2(a / b.x, a / b.y);
            } else {
                return new Vector2(a / b, a / b);
            }
        }
    }
}
