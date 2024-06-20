// Напишите функцию, которая принимает
// массив с числами и увеличивает каждое
// число из массива на 10 процентов.

function increaseByTenPercent(arr) {
    return arr.map(num => num * 1.1);
}
console.log(increaseByTenPercent([1, 2, 3, 4, 5]));