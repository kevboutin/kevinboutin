/**
 * Prevent repeated function calls.
 *
 * @param {function} func The function.
 * @param {number} wait The time to wait before invoking the function again.
 * @param {boolean} immediate True if the function should be called without a wait.
 * @return {function(...[*]=): *}
 */
export function debounce(func, wait, immediate) {
    let timeout;
    let args;
    let context;
    let timestamp;
    let result;

    const later = () => {
        const last = +new Date() - timestamp;
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function (...args) {
        context = this;
        timestamp = +new Date();
        const callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
}
