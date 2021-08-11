/**
 * @description 指定时间段内，只触发第一次请求
 * @param {Function} fn 
 * @param {time:ms} delay 
 * @returns {Function} wrapperFn
 */
var throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if( now > last + delay ) {
            fn.apply(this, args);
            last = now;
        }
    }
}

export default throttle;