/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/add
 * @param a `i32`
 * @param b `i32`
 * @returns `i32`
 */
export declare function add(a: number, b: number): number;
/**
 * assembly/index/drawButton
 * @param text `~lib/string/String`
 * @param x `i32`
 * @param y `i32`
 * @param padding `i32`
 * @param bgColor `~lib/string/String`
 * @param fgColor `~lib/string/String`
 * @param fontHeight `i32`
 */
export declare function drawButton(text: string, x: number, y: number, padding: number, bgColor: string, fgColor: string, fontHeight: number): void;
/**
 * assembly/index/main
 * @returns `i32`
 */
export declare function main(): number;
/**
 * assembly/index/mouseMove
 * @param clientX `i32`
 * @param clientY `i32`
 */
export declare function mouseMove(clientX: number, clientY: number): void;
/**
 * assembly/index/mouseDown
 * @param clientX `i32`
 * @param clientY `i32`
 */
export declare function mouseDown(clientX: number, clientY: number): void;
/**
 * assembly/index/mouseUp
 * @param clientX `i32`
 * @param clientY `i32`
 */
export declare function mouseUp(clientX: number, clientY: number): void;
