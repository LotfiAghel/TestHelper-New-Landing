// @ts-nocheck
export function groupBy<T,>(xs: T[], key: keyof T) :{[key: (string | number | symbol)]: T[]}{
    // const x = keyGetter();
    return xs.reduce(function (rv, x) {
        (rv[x[key as (string | number | symbol)]] = rv[x[key as (string | number | symbol)]] || []).push(x);
        return rv;
    }, {});
};

export function withResolver() {
    if (typeof Promise.withResolvers === 'undefined') {
        Promise.withResolvers = function () {
            let resolve, reject
            const promise = new Promise((res, rej) => {
                resolve = res
                reject = rej
            })
            return { promise, resolve, reject }
        }
    }
}