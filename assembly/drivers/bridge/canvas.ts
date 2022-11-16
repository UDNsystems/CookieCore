//@ts-ignore
@external("canvas", "fillText")
export declare function fillText(text: string, x: i32, y: i32): void;
//@ts-ignore
@external("canvas", "fillText")
export declare function fillTextMW(text: string, x: i32, y: i32, maxWidth: i32): void;
//@ts-ignore
@external("canvas", "setFillStyle")
export declare function setFillStyle(style: string): void;
//@ts-ignore
@external("canvas", "fillRect")
export declare function fillRect(x: i32, y: i32, width: i32, height: i32): void;
//@ts-ignore
@external("canvas", "strokeRect")
export declare function strokeRect(x: i32, y: i32, width: i32, height: i32): void;
//@ts-ignore
@external("canvas", "setFont")
export declare function setFont(font: string): void;
//@ts-ignore
@external("canvas", "clearRect")
export declare function clearRect(x: i32, y: i32, width: i32, height: i32): void;
//@ts-ignore
@external("canvas", "getWidth")
export declare function getWidth(): i32;
//@ts-ignore
@external("canvas", "getHeight")
export declare function getHeight(): i32;
//@ts-ignore
@external("canvas", "measureTextWidth")
export declare function measureTextWidth(text: string): i32;
//@ts-ignore
@external("canvas", "measureTextHeight")
export declare function measureTextHeight(text: string): i32;

export function measureText(text: string): i32[] {
    return [
        measureTextWidth(text),
        measureTextHeight(text)
    ];
}

//@ts-ignore
@external("canvas", "beginPath")
export declare function beginPath(): void;
//@ts-ignore
@external("canvas", "moveTo")
export declare function moveTo(a: i32, b: i32): void;
//@ts-ignore
@external("canvas", "lineTo")
export declare function lineTo(a: i32, b: i32): void;
//@ts-ignore
@external("canvas", "stroke")
export declare function stroke(): void;
//@ts-ignore
@external("canvas", "fill")
export declare function fill(): void;
//@ts-ignore
@external("canvas", "setStrokeStyle")
export declare function setStrokeStyle(style: string): void;
//@ts-ignore
@external("canvas", "setStrokeWidth")
export declare function setStrokeWidth(width: i32): void;