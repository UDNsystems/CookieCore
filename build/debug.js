import * as __import0 from "canvas";
async function instantiate(module, imports = {}) {
  const __module0 = imports.canvas;
  const adaptedImports = {
    canvas: Object.assign(Object.create(__module0), {
      setFillStyle(style) {
        // assembly/canvas/setFillStyle(~lib/string/String) => void
        style = __liftString(style >>> 0);
        __module0.setFillStyle(style);
      },
      measureTextWidth(text) {
        // assembly/canvas/measureTextWidth(~lib/string/String) => i32
        text = __liftString(text >>> 0);
        return __module0.measureTextWidth(text);
      },
      fillText(text, x, y) {
        // assembly/canvas/fillText(~lib/string/String, i32, i32) => void
        text = __liftString(text >>> 0);
        __module0.fillText(text, x, y);
      },
      setFont(font) {
        // assembly/canvas/setFont(~lib/string/String) => void
        font = __liftString(font >>> 0);
        __module0.setFont(font);
      },
      setStrokeStyle(style) {
        // assembly/canvas/setStrokeStyle(~lib/string/String) => void
        style = __liftString(style >>> 0);
        __module0.setStrokeStyle(style);
      },
    }),
    env: Object.assign(Object.create(globalThis), imports.env || {}, {
      abort(message, fileName, lineNumber, columnNumber) {
        // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
        message = __liftString(message >>> 0);
        fileName = __liftString(fileName >>> 0);
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        (() => {
          // @external.js
          throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`);
        })();
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    drawButton(text, x, y, padding, bgColor, fgColor, fontHeight) {
      // assembly/index/drawButton(~lib/string/String, i32, i32, i32, ~lib/string/String, ~lib/string/String, i32) => void
      text = __retain(__lowerString(text) || __notnull());
      bgColor = __retain(__lowerString(bgColor) || __notnull());
      fgColor = __lowerString(fgColor) || __notnull();
      try {
        exports.drawButton(text, x, y, padding, bgColor, fgColor, fontHeight);
      } finally {
        __release(text);
        __release(bgColor);
      }
    },
  }, exports);
  function __liftString(pointer) {
    if (!pointer) return null;
    const
      end = pointer + new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> 1,
      memoryU16 = new Uint16Array(memory.buffer);
    let
      start = pointer >>> 1,
      string = "";
    while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
    return string + String.fromCharCode(...memoryU16.subarray(start, end));
  }
  function __lowerString(value) {
    if (value == null) return 0;
    const
      length = value.length,
      pointer = exports.__new(length << 1, 1) >>> 0,
      memoryU16 = new Uint16Array(memory.buffer);
    for (let i = 0; i < length; ++i) memoryU16[(pointer >>> 1) + i] = value.charCodeAt(i);
    return pointer;
  }
  const refcounts = new Map();
  function __retain(pointer) {
    if (pointer) {
      const refcount = refcounts.get(pointer);
      if (refcount) refcounts.set(pointer, refcount + 1);
      else refcounts.set(exports.__pin(pointer), 1);
    }
    return pointer;
  }
  function __release(pointer) {
    if (pointer) {
      const refcount = refcounts.get(pointer);
      if (refcount === 1) exports.__unpin(pointer), refcounts.delete(pointer);
      else if (refcount) refcounts.set(pointer, refcount - 1);
      else throw Error(`invalid refcount '${refcount}' for reference '${pointer}'`);
    }
  }
  function __notnull() {
    throw TypeError("value must not be null");
  }
  return adaptedExports;
}
export const {
  memory,
  add,
  drawButton,
  main,
  mouseMove,
  mouseDown,
  mouseUp
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
    canvas: __maybeDefault(__import0),
  }
))(new URL("debug.wasm", import.meta.url));
function __maybeDefault(module) {
  return typeof module.default === "object" && Object.keys(module).length == 1
    ? module.default
    : module;
}
