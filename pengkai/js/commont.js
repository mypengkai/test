var itcast = {
    top: function (dom, callback) {
        // /判断是否传入对象同时对象应该是一个dom元素/
        if (!dom || typeof dom != "object") {
            return;
        }
        // var dom = document.querySelector("dom");
        var time, startX, startY, endX, endY;
        dom.addEventListener("touchstart", function (e) {
            if (e.targetTouches.length > 1) {
                return;
            }
            time = Date.now();
            startX = e.targetTouches[0].clientX;
            startY = e.targetTouches[0].clientY;
        })
        dom.addEventListener("touchend", function (e) {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            if (e.changedTouches[0].length > 1) {
                return;
            }
            // console.log(Date.now() - time)
            if (Date.now() - time > 150) {
                return
            }
            if (Math.abs(endX - startX) < 6 && Math.abs(endY - startY) < 6) {
                // console.log(6666666)
                callback && callback(e);
            }
        })
    }
}