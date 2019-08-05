const SIMULATION_SPEED = 1;

class Entity {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  constructor(x: number, y: number, vx: number, vy: number, radius: number) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;
  }
}

type Color = {
  r: number;
  g: number;
  b: number;
};

type Vector = {
  x: number,
  y: number,
}

let ctx: CanvasRenderingContext2D;
var state: {
  entities: Entity[],
  lastRender: number,
  paused: boolean,
  t: number,
};

function init() {
  let canvas = <HTMLCanvasElement> document.getElementById('canvas');
  if (!canvas) {
    console.error(`Could not find an element with id 'canvas'`);
    return;
  }
  canvas.width = 500;
  canvas.height = 500;
  let c = canvas.getContext('2d');
  if (!c) {
    console.error(`Failed to get 2d context from canvas element`);
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
  }

  mainLoop(0);
}

function mainLoop(timestamp: number) {
  if (timestamp > 10000 || state.paused) {
    return;
  } else {
    requestAnimationFrame(mainLoop);
  }
  if (!timestamp) {
    return;
  }

  var dt = (timestamp - state.lastRender)/1000;
  state.lastRender = timestamp;

  state.t = timestamp;
  simulate(dt * SIMULATION_SPEED);
  renderFrame();
}

function simulate(dt: number) {
  state.entities.forEach((entity) => {
    // gravity
    entity.vy += 3000*dt;

    // drag
    entity.vy *= (1-0.1*dt);
    entity.vx *= (1-0.1*dt);

    // update position
    entity.x += entity.vx*dt;
    entity.y += entity.vy*dt;

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
    state.entities.forEach((other) => {
      if (entity === other) {
        return;
      }
      let d = distance(entity, other);
      let minD = entity.radius + other.radius;
      if (d < minD) {
        let towardOther = direction(entity, other);
        let displacement = minD - d;
        let displacementPerEntity = displacement/2;
        entity.x -= towardOther.x*displacementPerEntity;
        entity.y -= towardOther.y*displacementPerEntity;
        other.x += towardOther.x*displacementPerEntity;
        other.y += towardOther.y*displacementPerEntity;
        let tmpVx = entity.vx;
        let tmpVy = entity.vy;
        entity.vx = other.vx;
        entity.vy = other.vy;
        other.vx = tmpVx;
        other.vy = tmpVy;
      }
      // state.paused = true;
    })
  });
}

function renderFrame() {
  ctx.fillStyle = `rgb(200, 200, 200)`;
  ctx.fillRect(0, 0, 500, 500);
  let color = {r: 0.9, g: 0.1, b: 0.1};
  state.entities.forEach((entity) => {
    state.entities.forEach((other) => {
      if (entity !== other && overlapping(entity, other)) {
        color = {r: 0.9, g: 0.9, b: 0.1};
      }
    });
    drawCircle(ctx, {x: entity.x, y: entity.y, radius: entity.radius, color: color});
  });
  for (let i = 0; i < state.entities.length; i++) {
    for (let j = i+1; i < state.entities.length; j++) {
      let e1 = state.entities[i];
      let e2 = state.entities[j];
      let normalVector = direction(e1, e2);
      let line = scale(normalVector, 10);
      drawLine(ctx, e1.x, e1.y, e1.x + line.x, e1.y + line.y);
    }
  }
}

function drawCircle(ctx: CanvasRenderingContext2D, params: {x: number, y:number, radius: number, color: Color}) {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${params.color.r*255}, ${params.color.g*255}, ${params.color.b*255})`;
  ctx.arc(params.x, params.y, params.radius, 0, Math.PI * 2, true);
  ctx.fill();
}

function drawLine(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function overlapping(entity1: Entity, entity2: Entity) {
  let d: number = distance(entity1, entity2)
  return d < (entity1.radius + entity2.radius);
}

function distance(entity1: Entity, entity2: Entity) {
  return Math.sqrt((entity1.x-entity2.x)**2 + (entity1.y-entity2.y)**2);
}

function direction(from: Entity, to: Entity) {
  let dx = to.x - from.x;
  let dy = to.y - from.y;
  let d = Math.sqrt(dx**2 + dy**2);
  return {x: dx/d, y: dy/d};
}

function scale(vector: Vector, scale: number) {
  return {x: vector.x*scale, y: vector.y*scale}
}