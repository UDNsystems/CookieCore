(module
 (type $i32_=>_none (func_subtype (param i32) func))
 (type $i32_i32_i32_i32_=>_none (func_subtype (param i32 i32 i32 i32) func))
 (type $none_=>_none (func_subtype func))
 (import "canvas" "setFillStyle" (func $assembly/bridge/canvas/setFillStyle (param i32)))
 (import "canvas" "fillRect" (func $assembly/bridge/canvas/fillRect (param i32 i32 i32 i32)))
 (memory $0 0)
 (export "memory" (memory $0))
 (start $~start)
 (func $~start (type $none_=>_none)
  i32.const 16711680
  call $assembly/bridge/canvas/setFillStyle
  i32.const 50
  i32.const 50
  i32.const 50
  i32.const 50
  call $assembly/bridge/canvas/fillRect
 )
)
