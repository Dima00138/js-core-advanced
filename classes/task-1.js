// Создайте класс под названием «Человек» со
// свойствами имени, возраста и страны.
// Включите метод для отображения сведений о
// человеке. Создайте два экземпляра класса
// «Человек» и отобразите их сведения.

class Man {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`+
                   `\nAge: ${this.age}` +
                   `\nCountry: ${this.country}`);
    }
}

const man1 = new Man("Alex", 14, "Belarus");
const man2 = new Man("Liza", 23, "Russia");

man1.displayInfo();
console.log("-----------------------");
man2.displayInfo();