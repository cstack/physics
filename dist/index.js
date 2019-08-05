"use strict";
var SIMULATION_SPEED = 1;
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
            new Entity(0, 10, 500, 0, 10),
            new Entity(100, 0, -1000, 0, 20),
        ],
        lastRender: 0,
        paused: false,
        t: 0,
    };
    mainLoop(0);
}
function mainLoop(timestamp) {
    if (timestamp > 10000 || state.paused) {
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
    state.t = timestamp;
    simulate(dt * SIMULATION_SPEED);
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
        // bounce off walls
        if (entity.y > 500) {
            entity.y = 500;
            entity.vy *= -0.90;
        }
        if (entity.x > 500) {
            entity.x = 500;
            entity.vx *= -0.90;
        }
        if (entity.x < 0) {
            entity.x = 0;
            entity.vx *= -0.90;
        }
        // bounce off each other
        state.entities.forEach(function (other) {
            if (entity === other) {
                return;
            }
            var d = distance(entity, other);
            var minD = entity.radius + other.radius;
            if (d < minD) {
                var towardOther = direction(entity, other);
                var displacement = minD - d;
                var displacementPerEntity = displacement / 2;
                entity.x -= towardOther.x * displacementPerEntity;
                entity.y -= towardOther.y * displacementPerEntity;
                other.x += towardOther.x * displacementPerEntity;
                other.y += towardOther.y * displacementPerEntity;
                var tmpVx = entity.vx;
                var tmpVy = entity.vy;
                entity.vx = other.vx;
                entity.vy = other.vy;
                other.vx = tmpVx;
                other.vy = tmpVy;
            }
            // state.paused = true;
        });
    });
}
function renderFrame() {
    ctx.fillStyle = "rgb(200, 200, 200)";
    ctx.fillRect(0, 0, 500, 500);
    var color = { r: 0.9, g: 0.1, b: 0.1 };
    state.entities.forEach(function (entity) {
        state.entities.forEach(function (other) {
            if (entity !== other && overlapping(entity, other)) {
                color = { r: 0.9, g: 0.9, b: 0.1 };
            }
        });
        drawCircle(ctx, { x: entity.x, y: entity.y, radius: entity.radius, color: color });
    });
    for (var i = 0; i < state.entities.length; i++) {
        for (var j = i + 1; i < state.entities.length; j++) {
            var e1 = state.entities[i];
            var e2 = state.entities[j];
            var normalVector = direction(e1, e2);
            var line = scale(normalVector, 10);
            drawLine(ctx, e1.x, e1.y, e1.x + line.x, e1.y + line.y);
        }
    }
}
function drawCircle(ctx, params) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(" + params.color.r * 255 + ", " + params.color.g * 255 + ", " + params.color.b * 255 + ")";
    ctx.arc(params.x, params.y, params.radius, 0, Math.PI * 2, true);
    ctx.fill();
}
function drawLine(ctx, x1, y1, x2, y2) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function overlapping(entity1, entity2) {
    var d = distance(entity1, entity2);
    return d < (entity1.radius + entity2.radius);
}
function distance(entity1, entity2) {
    return Math.sqrt(Math.pow((entity1.x - entity2.x), 2) + Math.pow((entity1.y - entity2.y), 2));
}
function direction(from, to) {
    var dx = to.x - from.x;
    var dy = to.y - from.y;
    var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    return { x: dx / d, y: dy / d };
}
function scale(vector, scale) {
    return { x: vector.x * scale, y: vector.y * scale };
}
//# sourceMappingURL=index.js.map
