import * as Simulation from './simulation';
import * as Render from './render';

export default class BouncingBalls extends Simulation.Base {
  initialState(): Simulation.State {
    return {
      entities: [
        new Simulation.Entity(0, 10, 500, 0, 10),
        new Simulation.Entity(100, 0, -1000, 0, 20),
      ]
    };
  }

  simulate(dt: number, state: Simulation.State): void {
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
        let d = Simulation.distance(entity, other);
        let minD = entity.radius + other.radius;
        if (d < minD) {
          let towardOther = Simulation.direction(entity, other);
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

  renderFrame(ctx: CanvasRenderingContext2D, state: Simulation.State): void {
    ctx.fillStyle = `rgb(200, 200, 200)`;
    ctx.fillRect(0, 0, 500, 500);
    let color = {r: 0.9, g: 0.1, b: 0.1};
    state.entities.forEach((entity) => {
      state.entities.forEach((other) => {
        if (entity !== other && Simulation.overlapping(entity, other)) {
          color = {r: 0.9, g: 0.9, b: 0.1};
        }
      });
      Render.circle(ctx, {x: entity.x, y: entity.y, radius: entity.radius, color: color});
    });
    for (let i = 0; i < state.entities.length; i++) {
      for (let j = i+1; i < state.entities.length; j++) {
        let e1 = state.entities[i];
        let e2 = state.entities[j];
        let normalVector = Simulation.direction(e1, e2);
        let line = Simulation.scale(normalVector, 10);
        Render.line(ctx, e1.x, e1.y, e1.x + line.x, e1.y + line.y);
      }
    }
  }
}