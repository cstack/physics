var ctx = null;
var state = {};

function init() {
  var canvas = document.getElementById('canvas');
  canvas.width = 500;
  canvas.height = 500;
  ctx = canvas.getContext('2d');
  state.x = 0;
  state.y = 0;
  state.vx = 50;
  state.vy = 0;
  state.lastRender = 0;

  mainLoop();
}

function mainLoop(timestamp) {
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

function simulate(dt) {
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

function drawCircle(ctx, params) {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${params.r*255}, ${params.g*255}, ${params.b*255})`;
  ctx.arc(params.x, params.y, params.radius, 0, Math.PI * 2, true);
  ctx.fill();
}