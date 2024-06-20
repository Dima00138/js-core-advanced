// Создайте блок кода внутри функции и
// объявите переменную с именем x с
// использованием var, let и const. Попытайтесь
// обратиться к этой переменной как внутри, так
// и вне блока. Какие переменные видны
// снаружи блока, а какие нет?

(function() {
    {
        var x = 'var';
        let y = 'let';
        const z = 'const';

        console.log(x);
        console.log(y);
        console.log(z);
    }

    console.log(x);
    console.log(y); //error
    console.log(z); //error
})()