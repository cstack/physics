"use strict";
var Entity = /** @class */ (function () {
    function Entity(x, y, vx, vy, radius) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
    }
    return Entity;
}());
var ctx;
var state;
function init() {
    var canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error("Could not find an element with id 'canvas'");
        return;
    }
    canvas.width = 500;
    canvas.height = 500;
    var c = canvas.getContext('2d');
    if (!c) {
        console.error("Failed to get 2d context from canvas element");
        return;
    }
    ctx = c;
    state = {
        entities: [
            new Entity(0, 0, 20, 0, 10),
            new Entity(100, 0, -10, 0, 20),
        ],
        lastRender: 0,
    };
    mainLoop(0);
}
function mainLoop(timestamp) {
    if (timestamp > 10000) {
        return;
    }
    else {
        requestAnimationFrame(mainLoop);
    }
    if (!timestamp) {
        return;
    }
    var dt = (timestamp - state.lastRender) / 1000;
    state.lastRender = timestamp;
    simulate(dt);
    renderFrame();
}
function simulate(dt) {
    state.entities.forEach(function (entity) {
        // gravity
        entity.vy += 3000 * dt;
        // drag
        entity.vy *= (1 - 0.1 * dt);
        entity.vx *= (1 - 0.1 * dt);
        // update position
        entity.x += entity.vx * dt;
        entity.y += entity.vy * dt;
        // bounce
        if (entity.y > 500) {
            entity.y = 500;
            entity.vy *= -0.90;
        }
    });
}
function renderFrame() {
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.fillRect(0, 0, 500, 500);
    state.entities.forEach(function (entity) {
        drawCircle(ctx, { x: entity.x, y: entity.y, radius: entity.radius, r: 0.9, g: 0.1, b: 0.1 });
    });
}
function drawCircle(ctx, params) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(" + params.r * 255 + ", " + params.g * 255 + ", " + params.b * 255 + ")";
    ctx.arc(params.x, params.y, params.radius, 0, Math.PI * 2, true);
    ctx.fill();
}
//# sourceMappingURL=index.js.map
