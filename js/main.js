"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector('#js-output');
output.innerHTML = WELCOME_MESSAGE;


// function greet(name) {
//   return `Pozdrawiam ${name}.`;
// }
//
// // Wywołaj funkcję greet i wyświetl jej wynik w konsoli
// console.log(greet("Mango"));// Pozdrawiam Mango.
//
// // Wyświetl funkcję greet w konsoli bez jej wywoływania
// console.log(greet);// ƒ greet() { return `Pozdrawiam ${name}.`; }


// Funkcja wywołania zwrotnego
// function greet(name) {
//   console.log(`Pozdrawiam ${name}.`);
// }
//
// // Funkcja wyższego rzędu
// function registerGuest(name, callback) {
//   console.log(`Rejestracja gościa ${name}.`);
//   callback(name);
// }
//
// registerGuest("Krzysztof", greet);


// function registerGuest(name, callback) {
//   console.log(`Rejestracja gościa ${name}.`);
//   callback(name);
// }
//
// // Przekaż funkcję inline greet jako wywołanie zwrotne
// registerGuest("Mango", function greet(name) {
//   console.log(`Pozdrawiam ${name}.`);
// });
//
// // Przekaż funkcję inline notify jako wywołanie zwrotne
// registerGuest("Poly", function notify(name) {
//   console.log(
//     `Szanowny(a) ${name}, Pana/Pani pokój będzie gotowy za 30 minut.`
//   );
// });


// function processCall(recipient) {
//   // Symuluj dostępność abonenta za pomocą liczby losowej
//   const isRecipientAvailable = Math.random() > 0.5;
//
//   if (!isRecipientAvailable) {
//     console.log(`Abonent ${recipient} jest niedostępny, zostaw wiadomość.`);
//     // Logika aktywacji automatycznej sekretarki
//   } else {
//     console.log(`Łączenie z ${recipient}, proszę czekać...`);
//     // Logika odbierania połączenia
//   }
// }
//
// processCall("Mango");


// function processCall(recipient, onAvailable, onNotAvailable) {
// // Symuluj dostępność abonenta za pomocą liczby losowej
//   const isRecipientAvailable = Math.random() > 0.5;
//
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }
//
//   onAvailable(recipient);
// }
//
//
// function takeCall(name) {
//   console.log(`Łączenie z ${name}, proszę czekać...`);
// // Logika odbierania połączenia
// }
//
// function activateAnsweringMachine(name) {
//   console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
// // Logika aktywacji automatycznej sekretarki
// }
//
// function leaveHoloMessage(name) {
//   console.log(`Abonent ${name} jest niedostępny, nagraj hologram.`);
// // Logika nagrywania hologramu
// }
//
// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);


// const arr1 = [1, 56, 87, 190];

// for (let i = 0; i < arr1.length; i += 1) {
//   console.log(`Indeks ${i}, wartość ${arr1[i]}`);
// }

// let result = 0;
//
// function printElement(element, index) {
//   // if (element > 100) return;
//
//   console.log(`Indeks ${index}, wartość ${element}.`);
//   result += element;
// }
//
// arr1.forEach(printElement);
// console.log(result);



// function classicAdd(a, b, c) {
//   return a + b + c;
// }
//
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// }
//
// console.log(classicAdd(1, 2, 3));
// console.log(arrowAdd(1, 2, 3));

// const add = a => {
//   console.log(a);
// }
//
// add(5);

// const justPrint = () => {
//   console.log("To jest mój log");
// }
//
// justPrint();


// const add = (a, b, c) => a + b + c;
//
// console.log(add(2, 5, 7));


// const add = (...args) => {
//   console.log(args);
// }
//
// add(1, 3, 5);




// const numbers = [5, 10, 15, 20, 25];
//
// // Deklaracja funkcji
// numbers.forEach(function (number, index) {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });
//
// // Anonimowa funkcja strzałkowa
// numbers.forEach((number, index) => {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });
//
// const log = (number, index) => {
//   console.log(`Indeks ${index}, wartość ${number}`);
// }
//
// // Anonimowa funkcja strzałkowa
// numbers.forEach(log);


// Podejście imperatywne
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];
//
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }
//
// console.log(filteredNumbers);// [4, 5]


// Podejście deklaratywne
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]








































































