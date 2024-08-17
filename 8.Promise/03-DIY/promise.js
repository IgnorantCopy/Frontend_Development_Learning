class Promise {
    constructor(executor) {
        this.PromiseState = 'pending';
        this.PromiseResult = null;
        this.callbacks = [];
        const self = this;

        function resolve(data) {
            if (self.PromiseState !== 'pending') {
                return;
            }
            self.PromiseState = 'fulfilled';
            self.PromiseResult = data;
            // 执行成功回调
            setTimeout(() => {
                self.callbacks.forEach(i => {
                    if (i.onResolved) {
                        i.onResolved(data);
                    }
                })
            })
        }

        function reject(data) {
            if (self.PromiseState !== 'pending') {
                return;
            }
            self.PromiseState = 'rejected';
            self.PromiseResult = data;
            // 执行失败回调
            setTimeout(() => {
                self.callbacks.forEach(i => {
                    if (i.onRejected) {
                        i.onRejected(data);
                    }
                })
            })
        }

        // 同步调用 executor 函数
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onResolved, onRejected) {
        const self = this;
        if (typeof onResolved !== "function") {
            onResolved = value => value;
        }
        if (typeof onRejected !== "function") {
            onRejected = reason => {
                throw reason;
            }
        }
        return new Promise((resolve, reject) => {
            function callback(type) {
                try {
                    let result = type(self.PromiseResult);
                    if (result instanceof Promise) {
                        result.then(value => {
                            resolve(value);
                        }, reason => {
                            reject(reason);
                        })
                    } else {
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            }

            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved);
                })
            }
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected);
                })
            }

            if (this.PromiseState === 'pending') {
                // 保存回调函数
                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved);
                    },
                    onRejected: function () {
                        callback(onRejected);
                    }
                })
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            } else {
                resolve(value);
            }
        });
    }

    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        });
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            let arr = [];
            let count = 0;
            promises.forEach((promise, i) => {
                promise.then(value => {
                    count++;
                    arr[i] = value;
                    if (count === promises.length) {
                        resolve(arr);
                    }
                }, reason => {
                    reject(reason);
                })
            });
        });
    }

    static race(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach((promise, i) => {
                promise.then(value => {
                    resolve(value);
                }, reason => {
                    reject(reason);
                })
            });
        });
    }
}
