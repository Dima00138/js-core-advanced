// Напишите функцию, которая принимает
// число в качестве параметра и выдает
// пользовательскую ошибку, если число не
// является целым числом.

function validInteger(num) {
    if (!Number.isInteger(num)) 
        throw new Error("Number must be integer")
    return true;
}

try {
    console.log(validInteger(1));
    console.log(validInteger(1.1));
}catch(e) {
    console.log(e.message);
}