var mousemovebinds = new Array<Function>;
var mousedownbinds = new Array<Function>;
var mouseupbinds = new Array<Function>;

export var mx: i32 = 0
export var my: i32 = 0

export function mousemovebind(f: Function): void {
  mousemovebinds[mousemovebinds.length] = f
}

export function mousedownbind(f: Function): void {
  mousedownbinds[mousedownbinds.length] = f
}

export function mouseupbind(f: Function): void {
  mouseupbinds[mouseupbinds.length] = f
}

export function _onmove(clx: i32, cly: i32): void {
  mx = clx
  my = cly
  for(let i=0; i<mousemovebinds.length; i++){
    mousemovebinds[i](clx, cly)
  }
}

export function _ondown(clx: i32, cly: i32): void {
  for(let i=0; i<mousedownbinds.length; i++){
    mousedownbinds[i](clx, cly)
  }
}

export function _onup(clx: i32, cly: i32): void {
  for(let i=0; i<mouseupbinds.length; i++){
    mouseupbinds[i](clx, cly)
  }
}