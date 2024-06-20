// Напишите функцию для расчета факториала
// числа. Функция должна принимать число в
// качестве аргумента и возвращать его
// факториал. Учтите использование строгого
// режима.
'use strict'

function factorial(n) {
    if (!Number.isInteger(n)) {
        throw new Error('Аргумент должен быть целым числом');
    }
    if (n < 0) {
        throw new Error('Аргумент должен быть неотрицательным числом');
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(4));
console.log(factorial(-4)); //error
console.log(factorial(1.2)); //error