import * as __import0 from "canvas";
async function instantiate(module, imports = {}) {
  const __module0 = imports.canvas;
  const adaptedImports = {
    canvas: __module0,
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  return exports;
}
export const {
  memory,
  
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
    canvas: __maybeDefault(__import0),
  }
))(new URL("release.wasm", import.meta.url));
function __maybeDefault(module) {
  return typeof module.default === "object" && Object.keys(module).length == 1
    ? module.default
    : module;
}
