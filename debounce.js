/**
 * @description 短时间内多次调用，只触发最后一次
 * @param {Function} fn 
 * @param {time:ms} delay 
 * @returns {Function} wrapperFn
 */
var debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
        if( timer ) {
            clearTimeout(timer);
        }
        timer = setTimeout( () => {
            fn.apply(this, args);
        }, delay)
    }
}

export default debounce;