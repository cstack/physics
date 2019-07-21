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

let ctx: CanvasRenderingContext2D;
var state: {
  entities: Entity[],
  lastRender: number,
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
      new Entity(0, 0, 20, 0, 10),
      new Entity(100, 0, -10, 0, 20),
    ],
    lastRender: 0,
  }

  mainLoop(0);
}

function mainLoop(timestamp: number) {
  if (timestamp > 10000) {
    return;
  } else {
    requestAnimationFrame(mainLoop);
  }
  if (!timestamp) {
    return;
  }

  var dt = (timestamp - state.lastRender)/1000;
  state.lastRender = timestamp;

  simulate(dt);
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

    // bounce
    if (entity.y > 500) {
      entity.y = 500;
      entity.vy *= -0.90;
    } 
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
  })
}

function drawCircle(ctx: CanvasRenderingContext2D, params: {x: number, y:number, radius: number, color: Color}) {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${params.color.r*255}, ${params.color.g*255}, ${params.color.b*255})`;
  ctx.arc(params.x, params.y, params.radius, 0, Math.PI * 2, true);
  ctx.fill();
}

function overlapping(entity1: Entity, entity2: Entity) {
  let distance: number = Math.sqrt((entity1.x-entity2.x)**2 + (entity1.y-entity2.y)**2);
  return distance < (entity1.radius + entity2.radius);
}