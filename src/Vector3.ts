class Vector3 {
    public x: number;
    public y: number;
    public z: number;

    public constructor(x: number = null, y: number = null, z: number = null) {
        if (x === null && y === null && z === null) {
            this.x = 0.0;
            this.y = 0.0;
            this.z = 0.0;
        } else if (x !== null && y === null && z === null) {
            this.x = x;
            this.y = x;
            this.z = x;
        } else if (x !== null && y !== null && z === null) {
            this.x = x;
            this.y = y;
            this.z = 0.0;
        } else if (x !== null && y !== null && z !== null) {
            this.x = x;
            this.y = y;
            this.z = z;
        } else {
            this.x = null;
            this.y = null;
            this.z = null;
        }
    }

    public static Add(a: Vector3 | number, b: Vector3 | number): Vector3 {
        if (a instanceof Vector3) {
            if (b instanceof Vector3) {
                return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
            } else {
                return new Vector3(a.x + b, a.y + b, a.z + b);
            }
        } else {
            if (b instanceof Vector3) {
                return new Vector3(a + b.x, a + b.y, a + b.z);
            } else {
                return new Vector3(a + b, a + b, a + b);
            }
        }
    }

    public static Sub(a: Vector3 | number, b: Vector3 | number): Vector3 {
        if (a instanceof Vector3) {
            if (b instanceof Vector3) {
                return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
            } else {
                return new Vector3(a.x - b, a.y - b, a.z - b);
            }
        } else {
            if (b instanceof Vector3) {
                return new Vector3(a - b.x, a - b.y, a = b.z);
            } else {
                return new Vector3(a - b, a - b, a - b);
            }
        }
    }

    public static Mul(a: Vector3 | number, b: Vector3 | number): Vector3 {
        if (a instanceof Vector3) {
            if (b instanceof Vector3) {
                return new Vector3(a.x * b.x, a.y * b.y, a.z * a.z);
            } else {
                return new Vector3(a.x * b, a.y * b, a.z * b);
            }
        } else {
            if (b instanceof Vector3) {
                return new Vector3(a * b.x, a * b.y, a * b.z);
            } else {
                return new Vector3(a * b, a * b, a * b);
            }
        }
    }

    public static Div(a: Vector3 | number, b: Vector3 | number): Vector3 {
        if (a instanceof Vector3) {
            if (b instanceof Vector3) {
                return new Vector3(a.x / b.x, a.y / b.y, a.z / b.z);
            } else {
                return new Vector3(a.x / b, a.y / b, a.z / b);
            }
        } else {
            if (b instanceof Vector3) {
                return new Vector3(a / b.x, a / b.y, a / b.z);
            } else {
                return new Vector3(a / b, a / b, a / b);
            }
        }
    }
}
