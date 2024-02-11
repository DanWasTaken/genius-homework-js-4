// 1 Завдання
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// const сheckAge = (age) => { age > 18 ? true : confirm('Батьки дозволили?'); }

// let userAge = prompt("Введіть ваш вік");
// сheckAge(userAge);

// 2 Завдання
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const min = (a, b) => { return a < b ? a : b; }
// console.log(min(9, 5));

// 3 Завдання
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask("Ви згодні?" ,
//   function() { alert("Ви погодились."); },
//   function() { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => { return confirm(question) ? yes() : no(); }
// ask("Ви згодні?", () => alert("Ви погодились."), () => alert("Ви скасували виконання."));