export const SIMULATION_SPEED = 1;

export abstract class Base {
  state: State;
  lastRender: number;
  t: number;
  paused: boolean;

  constructor() {
    this.lastRender = 0;
    this.t = 0;
    this.paused = false;
    this.state = this.initialState();
  }

  abstract initialState(): State;
  abstract simulate(dt: number, state: object): void;
  abstract renderFrame(ctx: CanvasRenderingContext2D, state: State): void;
}

export interface State {
  entities: Entity[];
};

export class Entity {
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

export type Vector = {
  x: number,
  y: number,
}

export function distance(entity1: Entity, entity2: Entity) {
  return Math.sqrt((entity1.x-entity2.x)**2 + (entity1.y-entity2.y)**2);
}

export function direction(from: Entity, to: Entity) {
  let dx = to.x - from.x;
  let dy = to.y - from.y;
  let d = Math.sqrt(dx**2 + dy**2);
  return {x: dx/d, y: dy/d};
}

export function overlapping(entity1: Entity, entity2: Entity) {
  let d: number = distance(entity1, entity2)
  return d < (entity1.radius + entity2.radius);
}

export function scale(vector: Vector, scale: number) {
  return {x: vector.x*scale, y: vector.y*scale}
}