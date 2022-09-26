// The entry file of your WebAssembly module.
import * as canvas from './canvas'
export function add(a: i32, b: i32): i32 {
  return a + b;
}
export function drawButton(text: string, x: i32, y: i32, padding: i32, bgColor: string, fgColor: string, fontHeight: i32): void {
  canvas.setFillStyle(bgColor);
  const width = canvas.measureTextWidth(text);
  const height = fontHeight;
  //canvas.print(width);
  //canvas.print(height);
  canvas.fillRect(x, y, (width+(padding*2)) as i32, height+padding);
  canvas.setFillStyle(fgColor);
  canvas.fillText(text, x+padding, ((y+(padding*1.5))*1.5) as i32);

}
export function main(): i32 {
  canvas.setFont('24px Times New Roman')
  /*canvas.setFillStyle('blue');
  canvas.fillRect(30, 30, 30, 24 + 10);
  canvas.setFillStyle('black');
  canvas.fillTextMW("goofy ahh code", 10, 24 + 10, canvas.getWidth()) */
  canvas.fillText("move your mouse", 0, 24);
  //drawButton('ae', 20, 20, 4, "gray", "black", 24);
  return 0;
}
export function mouseMove(clientX: i32, clientY: i32): void {
  canvas.setFillStyle('white')
  canvas.fillRect(0, 0, canvas.getWidth(), canvas.getHeight());
  //drawButton('ae', clientX, clientY, 4, "gray", "black", 24);
  canvas.setStrokeStyle('black');
  //canvas.fillText("pointer", clientX, clientY);

  // le line
  canvas.beginPath();
  canvas.moveTo(clientX, clientY);
  canvas.lineTo(clientX+20, clientY+20);
  canvas.moveTo(clientX, clientY);
  canvas.lineTo(clientX-5, clientY+10);
  canvas.moveTo(clientX, clientY);
  canvas.lineTo(clientX+15, clientY+2)
  canvas.stroke();
}
export function mouseDown(clientX: i32, clientY: i32): void {
  canvas.setFillStyle('white')
  canvas.fillRect(0, 0, canvas.getWidth(), canvas.getHeight());
  //drawButton('ae', clientX, clientY, 4, "gray", "black", 24);
  //canvas.fillText("pointer", clientX, clientY);

  // le line
  const addBy = 3;
  canvas.beginPath();
  canvas.moveTo(clientX+addBy, clientY+addBy);
  canvas.lineTo(clientX+20+addBy, clientY+20+addBy);
  canvas.moveTo(clientX+addBy, clientY+addBy);
  canvas.lineTo(clientX-5+addBy, clientY+10+addBy);
  canvas.moveTo(clientX+addBy, clientY+addBy);
  canvas.lineTo(clientX+15+addBy, clientY+2+addBy)
  canvas.setStrokeStyle('lime');
  canvas.stroke();
}
export function mouseUp(clientX: i32, clientY: i32): void {
  mouseMove(clientX, clientY);
}