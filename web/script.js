window.bfs_window = {}

function init_BFS(){
  return new Promise(async resolve => {
    BrowserFS.install(window.bfs_window)
    BrowserFS.configure({
      fs: "MountableFileSystem",
      "options": {
        "/tmp": {fs: "InMemory" },
        "/user": {
          fs: "AsyncMirror",
          options: {
            sync: {
              fs: "InMemory"
            },
            async: {
              fs: "IndexedDB",
              options: { storeName: "udn-user-land" }
            }
          }
        },
        "/os": {
          fs: "AsyncMirror",
          options: {
            sync: {
              fs: "InMemory"
            },
            async: {
              fs: "IndexedDB",
              options: { storeName: "udn-os" }
            }
          }
        }
      }
    }, function(e) {
      if (e) { throw e; }
    })
    resolve()
  })
}

console.log("loading BrowserFS")

CookieCore.canvas = document.querySelector('canvas');
init_BFS().then(()=>{
  console.log("Loaded BFS, loading cookie core")
  CookieCore.init().then(_ => {
    console.log('loaded cookiecore')
    CookieCore.canvas.width = document.documentElement.clientWidth;
    CookieCore.canvas.height = document.documentElement.clientHeight;
    document.body.style.margin = 'none';
    document.body.style.overflow = 'hidden';
    document.body.style.cursor = 'none';
    CookieCore.start()
    window.onmousemove = function(ev) {
        //console.log(ev)
        CookieCore.module.instance.exports.mouseMove(ev.clientX, ev.clientY);
    }
    window.onmousedown = function(ev) {
        //console.log(ev);
        CookieCore.module.instance.exports.mouseDown(ev.clientX, ev.clientY);
    }
    window.onmouseup = function(ev) {
        //console.log(ev);
        CookieCore.module.instance.exports.mouseUp(ev.clientX, ev.clientY);
    }
  })
})