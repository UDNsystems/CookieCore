(module
 (type $none_=>_i32 (func_subtype (result i32) func))
 (type $i32_i32_i32_i32_=>_none (func_subtype (param i32 i32 i32 i32) func))
 (type $i32_=>_none (func_subtype (param i32) func))
 (type $i32_=>_i32 (func_subtype (param i32) (result i32) func))
 (type $none_=>_none (func_subtype func))
 (type $i32_i32_i32_i32_=>_i32 (func_subtype (param i32 i32 i32 i32) (result i32) func))
 (import "canvas" "setFillStyle" (func $assembly/drivers/bridge/canvas/setFillStyle (param i32)))
 (import "canvas" "getWidth" (func $assembly/drivers/bridge/canvas/getWidth (result i32)))
 (import "canvas" "getHeight" (func $assembly/drivers/bridge/canvas/getHeight (result i32)))
 (import "canvas" "clearRect" (func $assembly/drivers/bridge/canvas/clearRect (param i32 i32 i32 i32)))
 (import "canvas" "fillRect" (func $assembly/drivers/bridge/canvas/fillRect (param i32 i32 i32 i32)))
 (import "canvas" "setStrokeStyle" (func $assembly/drivers/bridge/canvas/setStrokeStyle (param i32)))
 (import "canvas" "setStrokeWidth" (func $assembly/drivers/bridge/canvas/setStrokeWidth (param i32)))
 (import "canvas" "strokeRect" (func $assembly/drivers/bridge/canvas/strokeRect (param i32 i32 i32 i32)))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (global $assembly/drivers/graphix/mode (mut i32) (i32.const 1))
 (global $~lib/memory/__data_end i32 (i32.const 204))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 32972))
 (global $~lib/memory/__heap_base i32 (i32.const 32972))
 (memory $0 1)
 (data (i32.const 12) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00#\000\000\000\000\000\000\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 60) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00#\00f\00f\00f\00f\00f\00f\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 108) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00#\00f\00f\000\000\000\000\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 156) ",\00\00\00\00\00\00\00\00\00\00\00\01\00\00\00\0e\00\00\00#\000\000\00f\00f\00f\00f\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (table $0 1 1 funcref)
 (elem $0 (i32.const 1))
 (export "main" (func $assembly/index/main))
 (export "memory" (memory $0))
 (func $assembly/drivers/graphix/fill (type $i32_=>_i32) (param $val i32) (result i32)
  global.get $assembly/drivers/graphix/mode
  i32.const 0
  i32.eq
  if
   i32.const 0
   return
  end
  local.get $val
  call $assembly/drivers/bridge/canvas/setFillStyle
  i32.const 1
 )
 (func $assembly/drivers/graphix/getWidth (type $none_=>_i32) (result i32)
  call $assembly/drivers/bridge/canvas/getWidth
 )
 (func $assembly/drivers/graphix/getHeight (type $none_=>_i32) (result i32)
  call $assembly/drivers/bridge/canvas/getHeight
 )
 (func $assembly/drivers/graphix/clear (type $none_=>_i32) (result i32)
  global.get $assembly/drivers/graphix/mode
  i32.const 0
  i32.eq
  if
   i32.const 0
   return
  end
  i32.const 0
  i32.const 0
  call $assembly/drivers/graphix/getWidth
  i32.const 2
  i32.mul
  call $assembly/drivers/graphix/getHeight
  i32.const 2
  i32.mul
  call $assembly/drivers/bridge/canvas/clearRect
  i32.const 0
  i32.const 0
  call $assembly/drivers/graphix/getWidth
  i32.const 2
  i32.mul
  call $assembly/drivers/graphix/getHeight
  i32.const 2
  i32.mul
  call $assembly/drivers/bridge/canvas/fillRect
  i32.const 1
 )
 (func $assembly/drivers/graphix/stroke (type $i32_=>_i32) (param $val i32) (result i32)
  global.get $assembly/drivers/graphix/mode
  i32.const 0
  i32.eq
  if
   i32.const 0
   return
  end
  local.get $val
  call $assembly/drivers/bridge/canvas/setStrokeStyle
  i32.const 1
 )
 (func $assembly/drivers/graphix/strokeWidth (type $i32_=>_i32) (param $val i32) (result i32)
  global.get $assembly/drivers/graphix/mode
  i32.const 0
  i32.eq
  if
   i32.const 0
   return
  end
  local.get $val
  call $assembly/drivers/bridge/canvas/setStrokeWidth
  i32.const 1
 )
 (func $assembly/drivers/graphix/init (type $none_=>_none)
  call $assembly/drivers/graphix/graphicalmode
 )
 (func $assembly/drivers/graphix/rect (type $i32_i32_i32_i32_=>_i32) (param $x i32) (param $y i32) (param $w i32) (param $h i32) (result i32)
  global.get $assembly/drivers/graphix/mode
  i32.const 0
  i32.eq
  if
   i32.const 0
   return
  end
  local.get $x
  local.get $y
  local.get $w
  local.get $h
  call $assembly/drivers/bridge/canvas/fillRect
  local.get $x
  local.get $y
  local.get $w
  local.get $h
  call $assembly/drivers/bridge/canvas/strokeRect
  i32.const 1
 )
 (func $~stack_check (type $none_=>_none)
  global.get $~lib/memory/__stack_pointer
  global.get $~lib/memory/__data_end
  i32.lt_s
  if
   i32.const 32992
   i32.const 33040
   i32.const 1
   i32.const 1
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $assembly/drivers/graphix/graphicalmode (type $none_=>_none)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store $0
  i32.const 1
  global.set $assembly/drivers/graphix/mode
  i32.const 32
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0
  local.get $0
  call $assembly/drivers/graphix/fill
  drop
  call $assembly/drivers/graphix/clear
  drop
  i32.const 80
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0
  local.get $0
  call $assembly/drivers/graphix/fill
  drop
  i32.const 80
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0
  local.get $0
  call $assembly/drivers/graphix/stroke
  drop
  i32.const 5
  call $assembly/drivers/graphix/strokeWidth
  drop
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
 )
 (func $assembly/index/main (type $none_=>_i32) (result i32)
  (local $0 i32)
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.sub
  global.set $~lib/memory/__stack_pointer
  call $~stack_check
  global.get $~lib/memory/__stack_pointer
  i32.const 0
  i32.store $0
  call $assembly/drivers/graphix/init
  i32.const 128
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0
  local.get $0
  call $assembly/drivers/graphix/fill
  drop
  i32.const 176
  local.set $0
  global.get $~lib/memory/__stack_pointer
  local.get $0
  i32.store $0
  local.get $0
  call $assembly/drivers/graphix/stroke
  drop
  i32.const 20
  call $assembly/drivers/graphix/strokeWidth
  drop
  i32.const 50
  i32.const 50
  i32.const 50
  i32.const 50
  call $assembly/drivers/graphix/rect
  drop
  i32.const 0
  local.set $0
  global.get $~lib/memory/__stack_pointer
  i32.const 4
  i32.add
  global.set $~lib/memory/__stack_pointer
  local.get $0
 )
)
