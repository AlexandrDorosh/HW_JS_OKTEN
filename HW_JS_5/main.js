// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

// EXERCISE #1
// a) отримує текст з параграфа з id "content"
// ANSWER #1
// let text = document.getElementById("content");
// console.log(text.textContent);


// EXERCISE #2
// b) отримує текст з блоку з id "rules"
// ANSWER #2
// let text2 = document.getElementById("rules");
// console.log(text2.textContent);


// EXERCISE #3
// c) замініть текст параграфа з id 'content' на будь-який інший
// ANSWER #3

// let text3 = document.getElementById('content');
// text3.innerText = 'Текст замінено!!!';
// console.log(text3);


// EXERCISE #4
// d) замініть текст параграфа з id 'rules' на будь-який інший
// ANSWER #4

// let text4 = document.getElementById('rules');
// text4.innerText = 'Текст замінено в id rules!!!';
// console.log(text4);


// EXERCISE #5
// e) змініть кожному елементу колір фону на червоний
// ANSWER #5

// let allBgColor = document.body.children;
// for(let bgcolor of allBgColor){
//     bgcolor.style.backgroundColor = 'red';
// }


// EXERCISE #6
// f) змініть кожному елементу колір тексту на синій
// ANSWER #6

// let allColor = document.body.children;
// for(let color of allColor){
//     color.style.color = 'blue';
// }



// EXERCISE #7
// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// ANSWER #7

// let rulesClass = document.getElementById('rules')
// console.log(rulesClass.classList);


// EXERCISE #8
// h) отримати всі елементи з класом fc_rules
// ANSWER #8

// let allElements = document.querySelectorAll('.fc_rules');
// for(let el of allElements){
//     console.log(el);
// }


// EXERCISE #9
// i) поміняти колір тексту у всіх елементів fc_rules на червоний
// ANSWER #9

// let allElements = document.querySelectorAll('.fc_rules');
// for(let el of allElements){
//     el.style.color = 'red';
//     console.log(el);
// }
