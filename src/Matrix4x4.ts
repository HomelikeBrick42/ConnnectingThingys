class Matrix4x4 {
    public Data: number[] = null;
    private constructor() {}

    public static Identity(): Matrix4x4 {
        const matrix = new Matrix4x4();
        matrix.Data = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ];
        return matrix;
    }

    public static Projection(fov: number, width: number, height: number, near: number, far: number): Matrix4x4 {
        const matrix = new Matrix4x4();

        const a = height / width;
        const t = 1.0 / Math.tan((fov * 0.5) * (Math.PI / 180.0));
        const q = far / (far - near);

        matrix.Data = [
            a * t, 0.0, 0.0,       0.0,
            0.0,   t,   0.0,       0.0,
            0.0,   0.0, q,         1.0,
            0.0,   0.0, -near * q, 0.0,
        ];

        return matrix;
    }

    public static Position(position: Vector3): Matrix4x4 {
        const matrix = new Matrix4x4();

        matrix.Data = [
            1.0,        0.0,        0.0,        0.0,
            0.0,        1.0,        0.0,        0.0,
            0.0,        0.0,        1.0,        0.0,
            position.x, position.y, position.z, 1.0,
        ];

        return matrix;
    }

    public static RotationX(rotation: number): Matrix4x4 {
        const matrix = new Matrix4x4();

        const c = Math.cos(rotation * (Math.PI / 180.0));
        const s = Math.sin(rotation * (Math.PI / 180.0));

        matrix.Data = [
            1.0, 0.0, 0.0, 0.0,
            0.0, c,   -s,  0.0,
            0.0, s,   c,   0.0,
            0.0, 0.0, 0.0, 1.0,
        ];

        return matrix;
    }

    public static RotationY(rotation: number): Matrix4x4 {
        const matrix = new Matrix4x4();

        const c = Math.cos(rotation * (Math.PI / 180.0));
        const s = Math.sin(rotation * (Math.PI / 180.0));

        matrix.Data = [
            c,   0.0, s,   0.0,
            0.0, 1.0, 0.0, 0.0,
            s,   0.0, c,   0.0,
            0.0, 0.0, 0.0, 1.0,
        ];

        return matrix;
    }

    public static RotationZ(rotation: number): Matrix4x4 {
        const matrix = new Matrix4x4();

        const c = Math.cos(rotation * (Math.PI / 180.0));
        const s = Math.sin(rotation * (Math.PI / 180.0));

        matrix.Data = [
            c,   -s,  0.0, 0.0,
            s,   c,   0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ];

        return matrix;
    }

    public static Rotation(rotation: Vector3): Matrix4x4 {
        return Matrix4x4.Multiply(
            Matrix4x4.RotationY(rotation.y),
            Matrix4x4.Multiply(
                Matrix4x4.RotationX(rotation.x),
                Matrix4x4.RotationZ(rotation.z),
            ),
        );
    }

    public static Scale(scale: Vector3): Matrix4x4 {
        const matrix = new Matrix4x4();

        matrix.Data = [
            scale.x, 0.0,     0.0,     0.0,
            0.0,     scale.y, 0.0,     0.0,
            0.0,     0.0,     scale.z, 0.0,
            0.0,     0.0,     0.0,     1.0,
        ];

        return matrix;
    }

    public static Translation(position: Vector3, rotation: Vector3, scale = new Vector3(1.0)): Matrix4x4 {
        return Matrix4x4.Multiply(
            Matrix4x4.Position(position),
            Matrix4x4.Multiply(
                Matrix4x4.Rotation(rotation),
                Matrix4x4.Scale(scale),
            ),
        );
    }

    public static Multiply(a: Matrix4x4, b: Matrix4x4): Matrix4x4 {
        const matrix = new Matrix4x4();
        matrix.Data = new Array<number>(16);

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                matrix.Data[i + j * 4] = 0.0;
                for (let k = 0; k < 4; k++) {
                    matrix.Data[i + j * 4] += a.Data[i + k * 4] * b.Data[k + j * 4];
                }
            }
        }

        return matrix;
    }

    public static Inverse(m: Matrix4x4): Matrix4x4 {
        console.assert(false);
        return null;
    }
}
