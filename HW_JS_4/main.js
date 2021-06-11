// Exercise #1
// Cтворити функцію конструктор для об'єктів User з полями id, name, surname , email, phone створити пустий масив, наповнити його 10 об'єктами User

// Answer #1
// function User(id, name, surname , email, phone){
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
// }

// let arr = [new User(0, "Alex", 'Dovhal', 'alex@gmail.com', 0961738445),
//     new User(1, "Dima", 'Dovhal', 'dima@gmail.com', 0961738462),
//     new User(2, "Petro", 'Sekutov', 'petro@gmail.com', 0961738400),
//     new User(3, "Lena", 'Melnyk', 'lena@gmail.com', 0971738992),
//     new User(4, "Olya", 'Ivanina', 'olya@gmail.com', 0961738854),
//     new User(5, "Alex", 'Dovhal', 'alex@gmail.com', 0961738990),
//     new User(6, "Dima", 'Koval', 'dima@gmail.com', 0931738933),
//     new User(7, "Lena", 'Melnyk', 'lena@gmail.com', 0961738876),
//     new User(8, "Petro", 'Sekutov', 'petro@gmail.com', 0931738482),
//     new User(9, "Viktor", 'Johnson', 'viktor@gmail.com', 0961865445),
// ];

// console.log(arr);


// Exercise #2
// Cтворити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client

// Answer #2
// class Client{
//     constructor(id, name, surname , email, phone, order){
//         this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone,
//         this.order = order
//     }
// }

// let arr = [new Client(0, "Alex", 'Dovhal', 'alex@gmail.com', 0961738445, ['apple', 'orange']),
//     new Client(1, "Dima", 'Dovhal', 'dima@gmail.com', 0961738462, ['samsung', 'lenovo']),
//     new Client(2, "Petro", 'Sekutov', 'petro@gmail.com', 0961738400, ['bread', 'milk']),
//     new Client(3, "Lena", 'Melnyk', 'lena@gmail.com', 0971738992, ['car', 'plane']),
//     new Client(4, "Olya", 'Ivanina', 'olya@gmail.com', 0961738854, ['water', 'juice']),
//     new Client(5, "Alex", 'Dovhal', 'alex@gmail.com', 0961738990, ['apple', 'orange']),
//     new Client(6, "Dima", 'Koval', 'dima@gmail.com', 0931738933, ['samsung', 'lenovo']),
//     new Client(7, "Lena", 'Melnyk', 'lena@gmail.com', 0961738876, ['bread', 'milk']),
//     new Client(8, "Petro", 'Sekutov', 'petro@gmail.com', 0931738482, ['car', 'plane']),
//     new Client(9, "Viktor", 'Johnson', 'viktor@gmail.com', 0961865445, ['water', 'juice'])
// ];

// console.log(arr);

// Exercise #3
// Cтворити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// Answer #3

function Car(model, producer, year, maxSpeed, engineCapacity){
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineCapacity = engineCapacity
    this.driver = {}

    this.drive = function(){
        console.log(`Go with speed ${this.maxSpeed} in hour`);
    }

    this.info = function(){
        console.log(`Model: ${this.model}, Producer: ${this.producer}, Year: ${this.year}, Max speed: ${this.maxSpeed}, Engine capacity: ${this.engineCapacity}`);
    }

    this.increaseMaxSpeed = function(newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
        console.log(`New speed: ${newSpeed}`);
    }

    this.changeYear = function(newValue){
        this.year = newValue
        console.log(`New value: ${newValue}`);
    }

    this.addDriver = function(driver){
        this.driver = driver;
        console.log(`Driver: ${driver}`);
    }
}

let Audi = new Car('A6', "Germany", 2016, 220, 2.5, 260, 2019,
    {name: 'Alex',
    surname: 'Dovhal',
    age: 22,
    driversDocumentFrom: 2016 });


Audi.drive();
Audi.info();
Audi.increaseMaxSpeed(15);
Audi.changeYear(2001);
Audi.addDriver({name: 'Maks', age: '80'});
console.log(Audi);


// Exercise #4
// Cтворити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// Answer #4                              // TODO перероби це завдання. Ті самі помилки

// class Car{
//     constructor(model, producer, year, maxSpeed, engineCapacity, newSpeed, newValue, driver){
//         this.model = model,
//         this.producer = producer,
//         this.year = year,
//         this.maxSpeed = maxSpeed,
//         this.engineCapacity = engineCapacity,
//         this.newSpeed = newSpeed,
//         this.newValue = newValue,
//         this.driver = driver
//     }


//     drive(){
//         console.log(`Go with speed ${this.maxSpeed} in hour`);
//     }

//     info(){
//         console.log(`Model: ${this.model}, Producer: ${this.producer}, Year: ${this.year}, Max speed: ${this.maxSpeed}, Engine capacity: ${this.engineCapacity}`);
//     }

//     increaseMaxSpeed(){
//         console.log(`New speed: ${this.newSpeed}`);
//     }

//     changeYear(){
//         console.log(`New value: ${this.newValue}`);
//     }

//     addDriver(){
//         var person = JSON.stringify(this.driver);
//         console.log(`Driver: ${person}`);
//     }
// }

// let BMW = new Car('X5', "Germany", 2014, 240, 2.2, 260, 2018,
//     {name: 'Dima',
//     surname: 'Dovhal',
//     age: 19,
//     driversDocumentFrom: 2020 });


// BMW.drive();
// BMW.info();
// BMW.increaseMaxSpeed();
// BMW.changeYear();
// BMW.addDriver();

// console.log(BMW);


// Exercise #5
// Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню

// Answer #5

// function User(id, name, surname , email, phone){
//     this.id = id,
//     this.name = name,
//     this.surname = surname,
//     this.email = email,
//     this.phone = phone
// }

// let arr = [new User(0, "Alex", 'Dovhal', 'alex@gmail.com', 0961738445),
//     new User(1, "Dima", 'Dovhal', 'dima@gmail.com', 0961738462),
//     new User(2, "Petro", 'Sekutov', 'petro@gmail.com', 0961738400),
//     new User(3, "Lena", 'Melnyk', 'lena@gmail.com', 0971738992),
//     new User(4, "Olya", 'Ivanina', 'olya@gmail.com', 0961738854),
//     new User(5, "Alex", 'Dovhal', 'alex@gmail.com', 0961738990),
//     new User(6, "Dima", 'Koval', 'dima@gmail.com', 0931738933),
//     new User(7, "Lena", 'Melnyk', 'lena@gmail.com', 0961738876),
//     new User(8, "Petro", 'Sekutov', 'petro@gmail.com', 0931738482),
//     new User(9, "Viktor", 'Johnson', 'viktor@gmail.com', 0961865445),
// ];



// let filter = arr.filter(function(el){
//     return el.id % 2 === 0;
// });
// console.log(filter);


// let incSort = arr.sort(function(a, b){
//     return a.id - b.id
// });
// console.log(incSort);


// let decSort = arr.sort(function(a, b){
//     return b.id - a.id
// });
// console.log(decSort);


// Exercise #6
    // Взяти масив з завдання 2.
    // Відсортувати його по кількості товарів в полі order. по спаданню

// Answer #6


// class Client{
//     constructor(id, name, surname , email, phone, order){
//         this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone,
//         this.order = order
//     }
// }

// let arr = [new Client(0, "Alex", 'Dovhal', 'alex@gmail.com', 0961738445, ['apple', 'orange']),
//     new Client(1, "Dima", 'Dovhal', 'dima@gmail.com', 0961738462, ['samsung', 'lenovo', 'nokia']),
//     new Client(2, "Petro", 'Sekutov', 'petro@gmail.com', 0961738400, ['bread', 'milk', 'meat', 'fish']),
//     new Client(3, "Lena", 'Melnyk', 'lena@gmail.com', 0971738992, ['car', 'plane']),
//     new Client(4, "Olya", 'Ivanina', 'olya@gmail.com', 0961738854, ['water', 'juice']),
//     new Client(5, "Alex", 'Dovhal', 'alex@gmail.com', 0961738990, ['apple', 'orange', 'banana', 'pineapple', 'waterlemon', 'lemon']),
//     new Client(6, "Dima", 'Koval', 'dima@gmail.com', 0931738933, ['samsung', 'lenovo']),
//     new Client(7, "Lena", 'Melnyk', 'lena@gmail.com', 0961738876, ['bread', 'milk']),
//     new Client(8, "Petro", 'Sekutov', 'petro@gmail.com', 0931738482, ['car', 'plane', 'train']),
//     new Client(9, "Viktor", 'Johnson', 'viktor@gmail.com', 0961865445, ['water', 'juice'])
// ];


// let orderDecSort = arr.sort(function(a, b){
//     return b.order.length - a.order.length
// });
// console.log(orderDecSort);
