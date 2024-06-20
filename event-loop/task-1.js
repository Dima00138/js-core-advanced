// Напишите функцию, которая принимает
// callback функцию и вызывает ее после
// задержки в 2 секунды.

function getCallback(callback) {
    setTimeout(callback, 2000);
}

getCallback(() => {
    console.log("Hello");
})