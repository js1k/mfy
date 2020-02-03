export const debounce = (fn, delay) => {
    var timer;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
};

export const throttle = (fn, threshhold) => {
    var last;
    var timer;
    threshhold || (threshhold = 250);

    return function () {
        var context = this;
        var args = arguments;

        var now = +new Date();

        if (last && now < last + threshhold) {
            clearTimeout(timer);

            timer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
};
export const _throttle = function (fun, wait) {
    let lastTime = null;
    return function () {
        let now = new Date();
        if (now - lastTime - wait > 0) {
            fun();
            lastTime = now;
        }
    };
}
;
