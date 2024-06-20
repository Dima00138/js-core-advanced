// Напишите функцию, выполняющую серию
// асинхронных операций последовательно,
// используя Promises.

(async function promiseBatch() {
    await new Promise((resolve, reject) => {
        console.log("promise 1");
        resolve();
        })
    .then(() => {
        console.log("resolve 1");
        })

    await new Promise((resolve, reject) => {
        console.log("promise 2");
        reject();
        })
    .then(() => {
        console.log("resolve 2");
        })
    .catch(() => {
        console.log("reject 2");
        })

    await new Promise((resolve, reject) => {
        console.log("promise 3");
        reject();
    })
    .then(() => {
        console.log("resolve 3");
        })
    .catch(() => {
        console.log("reject 3");
        })
    .finally(() => {
        console.log("finally 3");
        })
})()