/// <reference path="./Vector2.ts" />
/// <reference path="./Vector3.ts" />
/// <reference path="./Matrix4x4.ts" />

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2");

class Transform {
    public Position: Vector3 = null;
    public Rotation: Vector3 = null;
    public Scale: Vector3 = null;

    public constructor() {
        this.Position = new Vector3();
        this.Rotation = new Vector3();
        this.Scale = new Vector3(1.0);
    }

    public ToMatrix(): Matrix4x4 {
        return Matrix4x4.Translation(this.Position, this.Rotation, this.Scale);
    }
}

class Game {
    private Shader: WebGLProgram = null;

    private VertexArray: WebGLVertexArrayObject = null;
    private VertexBuffer: WebGLBuffer = null;

    private ModelMatrix: Matrix4x4 = null;
    private ViewMatrix: Matrix4x4 = null;
    private ProjectionMatrix: Matrix4x4 = null;

    private CameraTransform: Transform;
    private TriangleTransform: Transform;

    public Init(): void {
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader,
            `#version 300 es
            precision highp float;

            layout(location = 0) in vec4 a_Position;

            uniform mat4 u_ModelMatrix;
            uniform mat4 u_ViewMatrix;
            uniform mat4 u_ProjectionMatrix;

            void main() {
                gl_Position = u_ProjectionMatrix * inverse(u_ViewMatrix) * u_ModelMatrix * a_Position;
            }
        `);
        gl.compileShader(vertexShader);

        if (!(gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS) as boolean)) {
            console.error(`Vertex Shader Compilation Failed: ${gl.getShaderInfoLog(vertexShader)}`);
        }

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader,
            `#version 300 es
            precision highp float;

            layout(location = 0) out vec4 o_Color;

            void main() {
                o_Color = vec4(1.0, 0.0, 0.0, 1.0);
            }
        `);
        gl.compileShader(fragmentShader);

        if (!(gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) as boolean)) {
            console.error(`Fragment Shader Compilation Failed: ${gl.getShaderInfoLog(fragmentShader)}`);
        }

        this.Shader = gl.createProgram();
        gl.attachShader(this.Shader, vertexShader);
        gl.attachShader(this.Shader, fragmentShader);

        gl.linkProgram(this.Shader);

        if (!(gl.getProgramParameter(this.Shader, gl.LINK_STATUS) as boolean)) {
            console.error(`Shader Linking Failed: ${gl.getProgramInfoLog(this.Shader)}`);
        }

        gl.detachShader(this.Shader, vertexShader);
        gl.deleteShader(vertexShader);
        
        gl.detachShader(this.Shader, fragmentShader);
        gl.deleteShader(fragmentShader);

        this.VertexArray = gl.createVertexArray();
        gl.bindVertexArray(this.VertexArray);

        const vertices = [
             0.0,  0.5, 0.0,
             0.5, -0.5, 0.0,
            -0.5, -0.5, 0.0,
        ];

        this.VertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 3 * 4, 0);

        this.CameraTransform = new Transform();

        this.TriangleTransform = new Transform();
        this.TriangleTransform.Position.z = 2.0;

        this.ModelMatrix = Matrix4x4.Identity();
        this.ViewMatrix = Matrix4x4.Identity();
        this.ProjectionMatrix = Matrix4x4.Identity();
    }

    public Shutdown(): void {
        gl.deleteProgram(this.Shader);

        gl.deleteBuffer(this.VertexBuffer);
        gl.deleteVertexArray(this.VertexArray);
    }

    public Update(dt: number): void {
        this.ViewMatrix = this.CameraTransform.ToMatrix();

        this.TriangleTransform.Rotation.y += 90.0 * dt;
        this.TriangleTransform.Position.x = Math.sin(this.TriangleTransform.Rotation.y * 0.01);
        this.ModelMatrix = this.TriangleTransform.ToMatrix();
    }

    public Render(): void {
        gl.clearColor(0.1, 0.1, 0.1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);

        gl.useProgram(this.Shader);

        const modelMatrixPosition = gl.getUniformLocation(this.Shader, "u_ModelMatrix");
        gl.uniformMatrix4fv(modelMatrixPosition, false, new Float32Array(this.ModelMatrix.Data));

        const viewMatrixPosition = gl.getUniformLocation(this.Shader, "u_ViewMatrix");
        gl.uniformMatrix4fv(viewMatrixPosition, false, new Float32Array(this.ViewMatrix.Data));

        const projectionMatrixPosition = gl.getUniformLocation(this.Shader, "u_ProjectionMatrix");
        gl.uniformMatrix4fv(projectionMatrixPosition, false, new Float32Array(this.ProjectionMatrix.Data));

        gl.bindVertexArray(this.VertexArray);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexBuffer);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    public OnResize(width: number, height: number): void {
        gl.viewport(0, 0, width, height);
        this.ProjectionMatrix = Matrix4x4.Projection(70.0, width, height, 0.01, 1000.0);
    }

    public OnMouseMove(xDelta: number, yDelta: number): void {
        this.CameraTransform.Rotation.y += xDelta;
        this.CameraTransform.Rotation.x += yDelta;
    }
}

window.addEventListener("load", (): void => {
    const game = new Game();

    let lastTime: number = 0;
    const Loop = (time: number): void => {
        const delta = (time - lastTime) * 0.001;
        lastTime = time;

        game.Update(delta);
        game.Render();

        requestAnimationFrame(Loop);
    }

    window.addEventListener("resize", (): void => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        game.OnResize(canvas.width, canvas.height);
    }, false);

    canvas.addEventListener("click", (): void => {
        canvas.requestPointerLock();
    }, false);

    const OnMouseMove = (e: MouseEvent): void => {
        game.OnMouseMove(e.movementX, -e.movementY);
    }

    document.addEventListener("pointerlockchange", (): void => {
        if (document.pointerLockElement === canvas) {
            document.addEventListener("mousemove", OnMouseMove, false);
        } else {
            document.removeEventListener("mousemove", OnMouseMove, false);
        }
    }, false);

    game.Init();

    // TODO: Maybe move this?
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    game.OnResize(canvas.width, canvas.height);

    Loop(lastTime);
}, false);
