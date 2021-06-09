// EXERCISE #1
// Cтворити функцію яка приймає масив та виводить його

// ANSWER #1
// let array = [false, 'Dimas', 50];

// function myFunction(arr){
//     console.log(arr);
//     return arr;
// }

// myFunction(array);


// EXERCISE #2
// Cтворити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// ANSWER #2
// let array = [];

// function random(arr){

//     for(let i = 0; i < 10; i++){
//         let ran = Math.floor(Math.random() * 100);
//         arr.push(ran)
//     }
//     console.log(arr);
    
// }

// random(array);


// EXERCISE #3
// Cтворити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// ANSWER #3
// function myFunction(x, y, z){
//     if(x <= y && z){
//         console.log(x);
//     } else if(y <= x && z){
//         console.log(y);
//     } else{
//         console.log(z);
//     }
// }

// myFunction(2, 4, 6);


// EXERCISE #4
// Cтворити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// ANSWER #4
// function myFunction(x, y, z){
//     if(x >= y && x >= z){
//         console.log(x);
//     } else if(y >= x && y >= z){
//         console.log(y);
//     } else{
//         console.log(z);
//     }
// }

// myFunction(2, 4, 6);


// EXERCISE #5
// Cтворити функцію яка повертає найбільше число з масиву

// ANSWER #5

// let array = [5, 10, 20, 30, 55, 40, 50];

// function maxResult(arr){
//     let max = arr[0];
//     for(let num of arr){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }

// let result = maxResult(array);
// console.log(result);


// EXERCISE #6
// Cтворити функцію яка повертає найменьше число з масиву

// ANSWER #6

// let array = [5, 10, 20, 3, 30, 55, 40, 50];

// function minResult(arr){
//     let min = arr[0];
//     for(let num of arr){
//         if(num < min){
//             min = num;
//         }
//     }
//     return min;
// }

// let result = minResult(array);
// console.log(result);


// EXERCISE #7
// Cтворити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// ANSWER #7
// let array = [5, 10, 20, 3, 30, 55, 40, 50];

// function myFunc(array){
//     return array.reduce(function(a, b){
//         return a + b;
//     });   
// };


// let result = myFunc(array);
// console.log(result);


// EXERCISE #8
// Cтворити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// ANSWER #8

// let array = [5, 10, 20, 3, 30, 55, 40, 50];

// let sum = 0;

// function middle(arr){
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     let result = sum / arr.length
//     return result;
    
// }

// let result = middle(array);
// console.log(result);


// EXERCISE #9
// Cтворити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// ANSWER #9

// let array = [
//     {name: 'Dima', age: 13}, 
//     {model: 'Camry'}
// ];

// function index(array){
//     let res = [];
//     for(arr of array){
//         for(ar in arr){
//             res.push(ar);
//         }
//     }
//     return res;
// }

// let result = index(array);
// console.log(result);



// EXERCISE #10
// Cтворити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// ANSWER #10

// let array = [
//     {name: 'Dima', age: 13}, 
//     {model: 'Camry'}
// ];

// function info(array){
//     let res = [];
//     for(arr of array){
//         for(ar in arr){
//             res.push(arr[ar]);
//         }
//     }
//     return res;
// }

// let result = info(array);
// console.log(result);


// EXERCISE #11
// Cтворити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// ANSWER #11
let arr_1 = [1,2,3,4];
let arr_2 = [2,3,4,5];
let arr_3 = [];

// function plusIndex(arr_1, arr_2){
// let res_1;
//     for(one of arr_1){
//         // console.log(one);
//         res_1 = one;
//         }

//     for(two of arr_2){
//         console.log(two);
//     }
//     console.log(res_1);
// }

// plusIndex(arr_1, arr_2);