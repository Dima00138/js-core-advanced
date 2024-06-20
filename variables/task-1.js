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