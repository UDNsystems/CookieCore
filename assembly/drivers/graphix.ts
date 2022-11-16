import * as canvas from "./bridge/canvas"

export var mode = 1 // Graphical mode

export function init(): void {
  graphicalmode()
  // add more init code later xd xd 420
}

export function fill(val: string): bool {
  if (mode == 0) { return false }
  canvas.setFillStyle(val)
  return true
}

export function stroke(val: string): bool {
  if (mode == 0) { return false }
  canvas.setStrokeStyle(val) 
  return true
} 

export function strokeWidth(val: i32): bool {
  if (mode == 0) { return false }
  canvas.setStrokeWidth(val)
  return true
}

export function rect(x: i32, y: i32, w: i32, h: i32): bool {
  if (mode == 0) { return false }
  canvas.fillRect(x, y, w, h)
  canvas.strokeRect(x, y, w, h)
  return true
}

export function getWidth(): i32 {
  return canvas.getWidth()
}

export function getHeight(): i32 {
  return canvas.getHeight()
}

export function clear(): bool {
  if (mode == 0) { return false }
  canvas.clearRect(0,0,getWidth()*2,getHeight()*2)
  canvas.fillRect(0,0,getWidth()*2,getHeight()*2) // just to be sure....
  return true;
}

export function textmode(): void {
  mode = 0;
  fill("#000000")
  clear()
  fill("#ffffff")
}

export function graphicalmode(): void {
  mode = 1;
  fill("#000000")
  clear()
  fill("#ffffff")
  stroke("#ffffff")
  strokeWidth(5)
}