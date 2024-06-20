// Напишите функцию для сравнения двух
// объектов, чтобы определить, содержит ли
// первый из них эквивалентные значения
// свойств по сравнению со вторым.

function objectsAreEqual(obj1, obj2) {
    if (obj1 === null && obj2 === null) return true;
    if ((obj1 === null) || (obj2 === null)) return false;

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let key in obj1) {
        if (!(key in obj2)) return false;
        if (obj1[key] === obj2[key]) continue;
        else return false;
    }

    return true;
}

const date = new Date(11);
console.log(objectsAreEqual({date: new Date(11)}, {date: new Date(11)}));
console.log(objectsAreEqual({date: date}, {date: date}));