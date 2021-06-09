// EXERCISE 1

// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// ANSWER 1
// let arr_1 = [1, 2, 3, 10, 100500];
// let arr_2 = ['Aleks', 'Nadia', 'Olesya', 'Oksana', 'Serhiy'];
// let arr_3 = ['Samsung', 50, true, 22, false];

// console.log(arr_1, arr_2, arr_3);



// EXERCISE 2

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// ANSWER 2
// let arr = [];
// arr[0] = 'Aleks';
// arr[1] = 22;
// arr[3] = true;
// arr[4] = false;
// console.log(arr);


// EXERCISE 3

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// ANSWER 3

// for(let i = 0; i < 10; i++){
//     document.write(`<div> Hello World!!! </div>`);
// }


// EXERCISE 4

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// ANSWER 4

// for(let i = 1; i <= 10; i++){
//         document.write(`<div> ${i}: Hello World!!! </div>`);
//     }


// EXERCISE 5

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// ANSWER 5

// let i = 0;

// while(i < 20){
//     document.write(`<h1> Hello World!!! </h1>`)
//     i++
// }



// EXERCISE 6

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// ANSWER 6

// let i = 1;

// while(i <= 20){
//     document.write(`<h1> ${i}: Hello World!!! </h1>`)
//     i++
// }



// EXERCISE 7

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// ANSWER 7

// let arr = [1, 7, 22, 50, 51, 25, 21, 100500, 100, 350];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }



// EXERCISE 8

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// ANSWER 8

// let arr = ['Aleks', 'Dimas', 'Samsung', 'Lenovo', 'ACER', 'Olesya', 'Oksana', 'Work', 'Wolk', 'Apple'];

// for(let i of arr){
//     console.log(i);
// }



// EXERCISE 9

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// ANSWER 9


// let arrs = ['Aleks', 'Dimas', true, 22, 'ACER', 'Olesya', true, 500, 'Wolk', false];

// for(let arr of arrs){
//     console.log(arr);
// }



// EXERCISE 10

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// ANSWER 10

// let arr = [10, true, "Vanya", 555, false, "Dimas", 'Apple', 22, false, true];

// for(let i of arr){
//     if(typeof(i) == "boolean"){
//         console.log(i);
//     }
// }


// EXERCISE 11

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// ANSWER 11


// let arr = [10, true, "Vanya", 555, false, "Dimas", 'Apple', 22, false, true];

// for(let i of arr){
//     if(typeof(i) == "number"){
//         console.log(i);
//     }
// }



// EXERCISE 12

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// ANSWER 12


// let arr = [10, true, "Vanya", 555, false, "Dimas", 'Apple', 22, false, true];

// for(let i of arr){
//     if(typeof(i) == "string"){
//         console.log(i);
//     }
// }


// EXERCISE 13

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// ANSWER 13


// let arrs = [];

// arrs[0] = true;
// arrs[1] = 'Serhiy';
// arrs[2] = 'Nadia';
// arrs[3] = 50;
// arrs[4] = false;
// arrs[5] = 22;
// arrs[6] = "Orange";
// arrs[7] = "laptop";
// arrs[8] = false;
// arrs[9] = 100500;

// for(let arr of arrs){
//     console.log(arr)
// }



// EXERCISE 14

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// ANSWER 14

// for(let i = 1; i <= 10; i += 1){
//     document.write(`<div> ${i} </div>`);
//     console.log(i);
// }



// EXERCISE 15

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// ANSWER 15

// for(let i = 1; i <= 100; i += 1){
//     document.write(`<div> ${i} </div>`);
//     console.log(i);
// }



// EXERCISE 16

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// ANSWER 16

// for(let i = 1; i <= 100; i += 2){
//     document.write(`<div> ${i} </div>`);
//     console.log(i);
// }



// EXERCISE 17

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// ANSWER 17

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         document.write(`<div> ${i} </div>`);
//         console.log(i);
//     }
// }



// EXERCISE 18

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// ANSWER 18

// for(let i = 1; i <= 100; i++){
//     if(i % 2){
//         document.write(`<div> ${i} </div>`);
//         console.log(i);
//     }
// }



// EXERCISE 19

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

// ANSWER 19


// let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
    
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// let usersWithCities = [];

// for(let user of usersWithId){
//     usersWithCities.push(user);
//     for(let city of citiesWithId){
//         if(user.id === city.user_id){
//             user.address = city;
//         }
//     }
// }

// console.log(usersWithCities);

