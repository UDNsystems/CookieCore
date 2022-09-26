CookieCore.canvas = document.querySelector('canvas');
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