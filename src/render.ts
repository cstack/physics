type Color = {
  r: number;
  g: number;
  b: number;
};

export function circle(ctx: CanvasRenderingContext2D, params: {x: number, y:number, radius: number, color: Color}) {
  ctx.beginPath();
  ctx.fillStyle = `rgb(${params.color.r*255}, ${params.color.g*255}, ${params.color.b*255})`;
  ctx.arc(params.x, params.y, params.radius, 0, Math.PI * 2, true);
  ctx.fill();
}

export function line(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}