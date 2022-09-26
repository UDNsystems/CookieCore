const CookieCore = {
    canvas: null,
    canvasCtx: null,
    memory: null,
    /*readString(ptr, enc) {
        console.trace('fard');
        const textd = new TextDecoder(enc);
        const view = new Uint8Array(this.memory.buffer);
        console.log(view);
        let i = ptr;
        
        while (view[i] != 0) {console.log(view[i]); i++}
        console.log(ptr, i)
        console.log(this.memory.buffer.slice(ptr, i));
        return textd.decode(this.memory.buffer.slice(ptr, i));
    },*/
    // totally not stolen from ../build/debug.js
    __liftString(pointer) {
        if (!pointer) return null;
        const
          end = pointer + new Uint32Array(this.memory.buffer)[pointer - 4 >>> 2] >>> 1,
          memoryU16 = new Uint16Array(this.memory.buffer);
        let
          start = pointer >>> 1,
          string = "";
        while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
        return string + String.fromCharCode(...memoryU16.subarray(start, end));
    },
    funcWrap(fc) {
        return ((...a) => fc(...a));
    },
    async init() {
        this.canvasCtx = this.canvas.getContext('2d');
        //this.memory = window.wasmMemory || new WebAssembly.Memory({ initial: 1, maximum: 8 });
        const _this = this;
        const module = await WebAssembly.instantiateStreaming(
            fetch('../build/debug.wasm'),
            {
                env: {
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
                    }
                },
                canvas: {
                    fillText(textPtr, x, y) {
                        const text = _this.__liftString(textPtr);
                        _this.canvasCtx.fillText(text, x, y);
                    },
                    fillTextMW(textPtr, x, y, maxWidth) {
                        const text = _this.__liftString(textPtr);
                        _this.canvasCtx.fillText(text, x, y, maxWidth);
                    },
                    setFillStyle(textPtr) {
                        const text = _this.__liftString(textPtr);
                        _this.canvasCtx.fillStyle = text;
                    },
                    fillRect(x, y, width, height) {
                        _this.canvasCtx.fillRect(x, y, width, height);
                    },
                    setFont(textPtr) {
                        const text = _this.__liftString(textPtr);
                        _this.canvasCtx.font = text;
                    },
                    clearRect(x, y, width, height) {
                        _this.canvasCtx.fillRect(x, y, width, height);
                    },
                    getWidth() {
                        return _this.canvas.width;
                    },
                    getHeight() {
                        return _this.canvas.height;
                    },
                    measureTextWidth(text) {
                        return _this.canvasCtx.measureText(_this.__liftString(text)).width;
                    },
                    measureTextHeight(text) {
                        return _this.canvasCtx.measureText(_this.__liftString(text)).height;
                    },
                    beginPath: ((...a) => this.canvasCtx.beginPath(...a)),
                    moveTo: ((...a) => this.canvasCtx.moveTo(...a)),
                    lineTo: ((...a) => this.canvasCtx.lineTo(...a)),
                    stroke: ((...a) => this.canvasCtx.stroke(...a)),
                    fill: ((...a) => this.canvasCtx.fill(...a)), // turns out funcwrap just gives a illegal invocation too...
                    setStrokeStyle(textPtr) {
                        const text = _this.__liftString(textPtr);
                        _this.canvasCtx.strokeStyle = text;
                    },
                }
            }
        );
        this.memory = module.instance.exports.memory;
        this.module = module;
    },
    start() {
        this.module.instance.exports.main()
    }
}