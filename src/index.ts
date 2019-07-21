let ctx: CanvasRenderingContext2D;
var state: {
  x: number,
  y: number,
  vx: number,
  vy: number,
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
    x: 0,
    y: 0,
    vx: 50,
    vy: 0,
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
  // gravity
  state.vy += 3000*dt;

  // drag
  state.vy *= (1-0.1*dt);
  state.vx *= (1-0.1*dt);

  // update position
  state.x += state.vx*dt;
  state.y += state.vy*dt;

  // bounce
  if (state.y > 500) {
    state.y = 500;
    state.vy *= -0.90;
  }
}

function renderFrame() {
  ctx.fillStyle = `rgb(200, 200, 200)`;
  ctx.fillRect(0, 0, 500, 500);
  drawCircle(ctx, {x: state.x, y: state.y, radius: 20, r: 0.9, g: 0.1, b: 0.1});
}

function drawCircle(ctx: CanvasRenderingContext2D, params: {x: number, y:number, radius: number, r: number, g: number, b: number}) {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${params.r*255}, ${params.g*255}, ${params.b*255})`;
  ctx.arc(params.x, params.y, params.radius, 0, Math.PI * 2, true);
  ctx.fill();
}