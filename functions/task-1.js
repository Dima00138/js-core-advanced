// Напишите функцию, которая многократно
// выполняет заданную операцию через
// фиксированный интервал, используя
// setInterval()

function repeateAction(action, times = 5) {
    let counter = 0;
    const intervalId = setInterval(() => {
        action();
        counter++;
        if (counter === times) clearInterval(intervalId);
    }, 1000);
}

repeateAction(() => {console.log(1)})