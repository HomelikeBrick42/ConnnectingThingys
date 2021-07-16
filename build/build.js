var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        if (x === null && y === null) {
            this.x = 0.0;
            this.y = 0.0;
        }
        else if (x !== null && y === null) {
            this.x = x;
            this.y = x;
        }
        else if (x !== null && y !== null) {
            this.x = x;
            this.y = y;
        }
        else {
            this.x = null;
            this.y = null;
        }
    }
    Vector2.Add = function (a, b) {
        if (a instanceof Vector2) {
            if (b instanceof Vector2) {
                return new Vector2(a.x + b.x, a.y + b.y);
            }
            else {
                return new Vector2(a.x + b, a.y + b);
            }
        }
        else {
            if (b instanceof Vector2) {
                return new Vector2(a + b.x, a + b.y);
            }
            else {
                return new Vector2(a + b, a + b);
            }
        }
    };
    Vector2.Sub = function (a, b) {
        if (a instanceof Vector2) {
            if (b instanceof Vector2) {
                return new Vector2(a.x - b.x, a.y - b.y);
            }
            else {
                return new Vector2(a.x - b, a.y - b);
            }
        }
        else {
            if (b instanceof Vector2) {
                return new Vector2(a - b.x, a - b.y);
            }
            else {
                return new Vector2(a - b, a - b);
            }
        }
    };
    Vector2.Mul = function (a, b) {
        if (a instanceof Vector2) {
            if (b instanceof Vector2) {
                return new Vector2(a.x * b.x, a.y * b.y);
            }
            else {
                return new Vector2(a.x * b, a.y * b);
            }
        }
        else {
            if (b instanceof Vector2) {
                return new Vector2(a * b.x, a * b.y);
            }
            else {
                return new Vector2(a * b, a * b);
            }
        }
    };
    Vector2.Div = function (a, b) {
        if (a instanceof Vector2) {
            if (b instanceof Vector2) {
                return new Vector2(a.x / b.x, a.y / b.y);
            }
            else {
                return new Vector2(a.x / b, a.y / b);
            }
        }
        else {
            if (b instanceof Vector2) {
                return new Vector2(a / b.x, a / b.y);
            }
            else {
                return new Vector2(a / b, a / b);
            }
        }
    };
    return Vector2;
}());
var Vector3 = (function () {
    function Vector3(x, y, z) {
        if (x === void 0) { x = null; }
        if (y === void 0) { y = null; }
        if (z === void 0) { z = null; }
        if (x === null && y === null && z === null) {
            this.x = 0.0;
            this.y = 0.0;
            this.z = 0.0;
        }
        else if (x !== null && y === null && z === null) {
            this.x = x;
            this.y = x;
            this.z = x;
        }
        else if (x !== null && y !== null && z === null) {
            this.x = x;
            this.y = y;
            this.z = 0.0;
        }
        else if (x !== null && y !== null && z !== null) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        else {
            this.x = null;
            this.y = null;
            this.z = null;
        }
    }
    Vector3.Add = function (a, b) {
        if (a instanceof Vector3) {
            if (b instanceof Vector3) {
                return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
            }
            else {
                return new Vector3(a.x + b, a.y + b, a.z + b);
            }
        }
        else {
            if (b instanceof Vector3) {
                return new Vector3(a + b.x, a + b.y, a + b.z);
            }
            else {
                return new Vector3(a + b, a + b, a + b);
            }
        }
    };
    Vector3.Sub = function (a, b) {
        if (a instanceof Vector3) {
            if (b instanceof Vector3) {
                return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
            }
            else {
                return new Vector3(a.x - b, a.y - b, a.z - b);
            }
        }
        else {
            if (b instanceof Vector3) {
                return new Vector3(a - b.x, a - b.y, a = b.z);
            }
            else {
                return new Vector3(a - b, a - b, a - b);
            }
        }
    };
    Vector3.Mul = function (a, b) {
        if (a instanceof Vector3) {
            if (b instanceof Vector3) {
                return new Vector3(a.x * b.x, a.y * b.y, a.z * a.z);
            }
            else {
                return new Vector3(a.x * b, a.y * b, a.z * b);
            }
        }
        else {
            if (b instanceof Vector3) {
                return new Vector3(a * b.x, a * b.y, a * b.z);
            }
            else {
                return new Vector3(a * b, a * b, a * b);
            }
        }
    };
    Vector3.Div = function (a, b) {
        if (a instanceof Vector3) {
            if (b instanceof Vector3) {
                return new Vector3(a.x / b.x, a.y / b.y, a.z / b.z);
            }
            else {
                return new Vector3(a.x / b, a.y / b, a.z / b);
            }
        }
        else {
            if (b instanceof Vector3) {
                return new Vector3(a / b.x, a / b.y, a / b.z);
            }
            else {
                return new Vector3(a / b, a / b, a / b);
            }
        }
    };
    return Vector3;
}());
var Matrix4x4 = (function () {
    function Matrix4x4() {
        this.Data = null;
    }
    Matrix4x4.Identity = function () {
        var matrix = new Matrix4x4();
        matrix.Data = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ];
        return matrix;
    };
    Matrix4x4.Projection = function (fov, width, height, near, far) {
        var matrix = new Matrix4x4();
        var a = height / width;
        var t = 1.0 / Math.tan((fov * 0.5) * (Math.PI / 180.0));
        var q = far / (far - near);
        matrix.Data = [
            a * t, 0.0, 0.0, 0.0,
            0.0, t, 0.0, 0.0,
            0.0, 0.0, q, 1.0,
            0.0, 0.0, -near * q, 0.0,
        ];
        return matrix;
    };
    Matrix4x4.Position = function (position) {
        var matrix = new Matrix4x4();
        matrix.Data = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            position.x, position.y, position.z, 1.0,
        ];
        return matrix;
    };
    Matrix4x4.RotationX = function (rotation) {
        var matrix = new Matrix4x4();
        var c = Math.cos(rotation * (Math.PI / 180.0));
        var s = Math.sin(rotation * (Math.PI / 180.0));
        matrix.Data = [
            1.0, 0.0, 0.0, 0.0,
            0.0, c, -s, 0.0,
            0.0, s, c, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ];
        return matrix;
    };
    Matrix4x4.RotationY = function (rotation) {
        var matrix = new Matrix4x4();
        var c = Math.cos(rotation * (Math.PI / 180.0));
        var s = Math.sin(rotation * (Math.PI / 180.0));
        matrix.Data = [
            c, 0.0, s, 0.0,
            0.0, 1.0, 0.0, 0.0,
            s, 0.0, c, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ];
        return matrix;
    };
    Matrix4x4.RotationZ = function (rotation) {
        var matrix = new Matrix4x4();
        var c = Math.cos(rotation * (Math.PI / 180.0));
        var s = Math.sin(rotation * (Math.PI / 180.0));
        matrix.Data = [
            c, -s, 0.0, 0.0,
            s, c, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ];
        return matrix;
    };
    Matrix4x4.Rotation = function (rotation) {
        return Matrix4x4.Multiply(Matrix4x4.RotationY(rotation.y), Matrix4x4.Multiply(Matrix4x4.RotationX(rotation.x), Matrix4x4.RotationZ(rotation.z)));
    };
    Matrix4x4.Scale = function (scale) {
        var matrix = new Matrix4x4();
        matrix.Data = [
            scale.x, 0.0, 0.0, 0.0,
            0.0, scale.y, 0.0, 0.0,
            0.0, 0.0, scale.z, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ];
        return matrix;
    };
    Matrix4x4.Translation = function (position, rotation, scale) {
        if (scale === void 0) { scale = new Vector3(1.0); }
        return Matrix4x4.Multiply(Matrix4x4.Position(position), Matrix4x4.Multiply(Matrix4x4.Rotation(rotation), Matrix4x4.Scale(scale)));
    };
    Matrix4x4.Multiply = function (a, b) {
        var matrix = new Matrix4x4();
        matrix.Data = new Array(16);
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                matrix.Data[i + j * 4] = 0.0;
                for (var k = 0; k < 4; k++) {
                    matrix.Data[i + j * 4] += a.Data[i + k * 4] * b.Data[k + j * 4];
                }
            }
        }
        return matrix;
    };
    Matrix4x4.Inverse = function (m) {
        console.assert(false);
        return null;
    };
    return Matrix4x4;
}());
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl2");
var Transform = (function () {
    function Transform() {
        this.Position = null;
        this.Rotation = null;
        this.Scale = null;
        this.Position = new Vector3();
        this.Rotation = new Vector3();
        this.Scale = new Vector3(1.0);
    }
    Transform.prototype.ToMatrix = function () {
        return Matrix4x4.Translation(this.Position, this.Rotation, this.Scale);
    };
    return Transform;
}());
var Game = (function () {
    function Game() {
        this.Shader = null;
        this.VertexArray = null;
        this.VertexBuffer = null;
        this.ModelMatrix = null;
        this.ViewMatrix = null;
        this.ProjectionMatrix = null;
    }
    Game.prototype.Init = function () {
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, "#version 300 es\n            precision highp float;\n\n            layout(location = 0) in vec4 a_Position;\n\n            uniform mat4 u_ModelMatrix;\n            uniform mat4 u_ViewMatrix;\n            uniform mat4 u_ProjectionMatrix;\n\n            void main() {\n                gl_Position = u_ProjectionMatrix * inverse(u_ViewMatrix) * u_ModelMatrix * a_Position;\n            }\n        ");
        gl.compileShader(vertexShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            console.error("Vertex Shader Compilation Failed: " + gl.getShaderInfoLog(vertexShader));
        }
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, "#version 300 es\n            precision highp float;\n\n            layout(location = 0) out vec4 o_Color;\n\n            void main() {\n                o_Color = vec4(1.0, 0.0, 0.0, 1.0);\n            }\n        ");
        gl.compileShader(fragmentShader);
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            console.error("Fragment Shader Compilation Failed: " + gl.getShaderInfoLog(fragmentShader));
        }
        this.Shader = gl.createProgram();
        gl.attachShader(this.Shader, vertexShader);
        gl.attachShader(this.Shader, fragmentShader);
        gl.linkProgram(this.Shader);
        if (!gl.getProgramParameter(this.Shader, gl.LINK_STATUS)) {
            console.error("Shader Linking Failed: " + gl.getProgramInfoLog(this.Shader));
        }
        gl.detachShader(this.Shader, vertexShader);
        gl.deleteShader(vertexShader);
        gl.detachShader(this.Shader, fragmentShader);
        gl.deleteShader(fragmentShader);
        this.VertexArray = gl.createVertexArray();
        gl.bindVertexArray(this.VertexArray);
        var vertices = [
            0.0, 0.5, 0.0,
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
    };
    Game.prototype.Shutdown = function () {
        gl.deleteProgram(this.Shader);
        gl.deleteBuffer(this.VertexBuffer);
        gl.deleteVertexArray(this.VertexArray);
    };
    Game.prototype.Update = function (dt) {
        this.ViewMatrix = this.CameraTransform.ToMatrix();
        this.TriangleTransform.Rotation.y += 90.0 * dt;
        this.TriangleTransform.Position.x = Math.sin(this.TriangleTransform.Rotation.y * 0.01);
        this.ModelMatrix = this.TriangleTransform.ToMatrix();
    };
    Game.prototype.Render = function () {
        gl.clearColor(0.1, 0.1, 0.1, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
        gl.useProgram(this.Shader);
        var modelMatrixPosition = gl.getUniformLocation(this.Shader, "u_ModelMatrix");
        gl.uniformMatrix4fv(modelMatrixPosition, false, new Float32Array(this.ModelMatrix.Data));
        var viewMatrixPosition = gl.getUniformLocation(this.Shader, "u_ViewMatrix");
        gl.uniformMatrix4fv(viewMatrixPosition, false, new Float32Array(this.ViewMatrix.Data));
        var projectionMatrixPosition = gl.getUniformLocation(this.Shader, "u_ProjectionMatrix");
        gl.uniformMatrix4fv(projectionMatrixPosition, false, new Float32Array(this.ProjectionMatrix.Data));
        gl.bindVertexArray(this.VertexArray);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VertexBuffer);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    Game.prototype.OnResize = function (width, height) {
        gl.viewport(0, 0, width, height);
        this.ProjectionMatrix = Matrix4x4.Projection(70.0, width, height, 0.01, 1000.0);
    };
    Game.prototype.OnMouseMove = function (xDelta, yDelta) {
        this.CameraTransform.Rotation.y += xDelta;
        this.CameraTransform.Rotation.x += yDelta;
    };
    return Game;
}());
window.addEventListener("load", function () {
    var game = new Game();
    var lastTime = 0;
    var Loop = function (time) {
        var delta = (time - lastTime) * 0.001;
        lastTime = time;
        game.Update(delta);
        game.Render();
        requestAnimationFrame(Loop);
    };
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        game.OnResize(canvas.width, canvas.height);
    }, false);
    canvas.addEventListener("click", function () {
        canvas.requestPointerLock();
    }, false);
    var OnMouseMove = function (e) {
        game.OnMouseMove(e.movementX, -e.movementY);
    };
    document.addEventListener("pointerlockchange", function () {
        if (document.pointerLockElement === canvas) {
            document.addEventListener("mousemove", OnMouseMove, false);
        }
        else {
            document.removeEventListener("mousemove", OnMouseMove, false);
        }
    }, false);
    game.Init();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    game.OnResize(canvas.width, canvas.height);
    Loop(lastTime);
}, false);
