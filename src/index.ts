import * as Simulation from './simulation';
import BouncingBalls from './bouncing-balls';

let ctx: CanvasRenderingContext2D;
var simulation: Simulation.Base;

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

  simulation = new BouncingBalls();

  mainLoop(0);
}

function mainLoop(timestamp: number) {
  if (timestamp > 10000 || simulation.paused) {
    return;
  } else {
    requestAnimationFrame(mainLoop);
  }
  if (!timestamp) {
    return;
  }

  var dt = (timestamp - simulation.lastRender)/1000;
  simulation.lastRender = timestamp;

  simulation.t = timestamp;
  simulation.simulate(dt * Simulation.SIMULATION_SPEED, simulation.state);
  simulation.renderFrame(ctx, simulation.state);
}

window.onload=init;