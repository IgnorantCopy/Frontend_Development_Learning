/*
 * PromiseState
 *  > pending: initial state
 *  > resolved / fulfilled: the operation completed successfully
 *  > rejected: the operation failed
 * PromiseResult: the value returned by the operation (if resolved) or the reason for the rejection (if rejected)
 *
 * Constructor:
 *  > executor: (resolve, reject) => {}
 *  > resolve: value => {}
 *  > reject: reason => {}
 */

let promise1 = new Promise((resolve, reject) => {
    // 同步
    console.log('111');
    reject('error');
});
console.log("222");

/*
 * Promise.prototype.then: (onResolved, onRejected) => {}
 *  > onResolved: value => {}
 *  > onRejected: reason => {}
 * Promise.prototype.catch: onRejected => {}
 *  > onRejected: reason => {}
 */
promise1.catch(reason => {
    console.log(reason);
})

/*
 * Promise.resolve: value => {}
 *  > returns a new Promise object that is resolved with the given value
 * Promise.reject: reason => {}
 *  > returns a new Promise object that is rejected with the given reason
 * Promise.all: (promises) => {}
 *  > returns a new Promise object that resolves when all the given promises are resolved
 * Promise.race: (promises) => {}
 *  > returns a new Promise object that resolves or rejects as soon as one of the given promises is resolved or rejected
 */
let promise2 = Promise.resolve(123);
console.log(promise2);
let promise3 = Promise.reject('error');
console.log(promise3);
let promise4 = Promise.all([promise1, promise2]);
console.log(promise4);
let promise5 = Promise.race([promise1, promise2, promise3]);
console.log(promise5);  // promise1