/////////////////////////////////// DATA TYPES ///////////////////////////////////////////////////////////////////////////////////////
// 1 - string ("barer")
// 2 - number (tver)
// 3 - boolean (true, false)
// 4 - null (0)
// 5 - undefined (arjeq@ haytararac chi)
// 6 - object ()
// 7 - bigint (1234567890123456789012345678901234567890n)

/////////////////////////////////// VARIABLES ////////////////////////////////////////////////////////////////////////////////////////

// console.log(a);   error
// let a = 1;
// console.log(a);   1

// console.log(b);   error
// const b = 2;
// console.log(b);   2

// console.log(c);   undefined
// var c = 3;
// console.log(c);   3

/////////////////////////////////// LOGICAL OPERATORS ////////////////////////////////////////////////////////////////////////////////

// && priartetov barcra ||-ic

// 1 - || (or) veradarcnuma arajin true    ete trou chka veradarcnuma false
// 2 - && (and) veradarcnuma arajin false    ete false chka veradarcnuma trou
// 3 - ! (not)  jxtuma

/////////////////////////////////// CONDITIONAL BRANCHING ////////////////////////////////////////////////////////////////////////////

// if - else (if - payman@, else - veradarcrac arjeq@)
// if (year == 2015) {
//     alert( "Barev" );
//   }

// switch - case (switch - payman@, case - veradarcrac arjeq@)
// let a = 2 + 2;

// switch (a) {
//   case 4:
//     alert("Barev");
//     break;
//   case 5:
//     alert("Hajox");
//     break;
//   default:
//     alert("Sxal e");
// }

/////////////////////////////////// Operators mathematics ////////////////////////////////////////////////////////////////////////////

// Приоритет	Название    	        Обозначение

// 15       	унарный плюс	        +
// 15       	унарный минус	        -
// 14       	возведение в степень	**
// 13       	умножение	            *
// 13       	деление	                /
// 12       	сложение	            +
// 12       	вычитание	            -
// 2       	    присваивание        	=

// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0);  // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // 9px
// console.log("$" + 4 + 5); // $45
// console.log("$Z4" - 2); // NaN
// console.log("4px" - 2); // NaN
// console.log("  -9  " + 5); // -9 5
// console.log("  -9  " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(" \t \n" - 2); // -2

/////////////////////////////////// Comparison Operators /////////////////////////////////////////////////////////////////////////////

// console.log(5 > 4); // true
// console.log("ананас" > "яблоко"); // false
// console.log("2" > "12"); // true
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(null == "\n0\n"); // false
// console.log(null === +"\n0\n"); // false

/////////////////////////////////// Null Merge Operator ?? ///////////////////////////////////////////////////////////////////////////

// let a;
// let b = "Hakob";
// let result = a ?? b; // veradarcnuma arajin argument@, ete havasar che (null, undefined), ete havasar e erkrord@
// console.log(result); // Hakob

// Orinak
// result = a !== null && a !== undefined ? a : b;

/////////////////////////////////// Cycles while and for ///////////////////////////////////////////////////////////////////////////

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   console.log( i );
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     console.log(i); // 1, 3, 5, 7, 9
//   }
// }

/////////////////////////////////// switch //////////////////////////////////////////////////////////////////////////////////////

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Маловато");
//     break;
//   case 4:
//     alert("В точку!");
//     break;
//   case 5:
//     alert("Перебор");
//     break;
//   default:
//     alert("Нет таких значений");
// }

///////////////////////////////////  Function Declaration //////////////////////////////////////////////////////////////////////////

// function имя(параметры, через, запятую) {
//   /* тело, код функции */
// }

////

// function showMessage() {
//   let message = "Привет, я JavaScript!"; // локальная переменная
//   console.log(message);
// }
// showMessage(); // Привет, я JavaScript!
// console.log(message); // <-- будет ошибка, т.к. переменная видна только внутри функции

////

// let userName = "Вася";
// function showMessage() {
//   userName = "Петя"; // (1) изменяем значение внешней переменной
//   let message = "Привет, " + userName;
//   console.log(message);
// }
// console.log(userName); // Вася перед вызовом функции
// showMessage();
// console.log(userName); // Петя, значение внешней переменной было изменено функцией

///////////////////////////////////  Function Expression //////////////////////////////////////////////////////////////////////////

// // Function Expression
// let sayHi1 = function () {
//   console.log("Barev");
// };
// sayHi1();

// // Function Declaration
// function sayHi() {
//   console.log("Barev");
// }
// sayHi();

///////////////////////////////////  Arrow functions //////////////////////////////////////////////////////////////////////////

// let sum = (a, b) => a + b; // strelochni function

// let sum1 = function (a, b) {
//   return a + b;
// };

// console.log(sum(1, 2)); // 3
// console.log(sum1(1, 2)); // 3

/////////////////////////////////// Object //////////////////////////////////////////////////////////////////////////////////

// let user = {
//   name: "John", // banali "name"  arjeq "John"
//   age: 30, // banali "age"  arjeq 30
// };
// console.log(user.name); // John
// console.log(user.age); // 30

// user.name = "Pete"; // arjeq@ poxvuma John
// console.log(user.name); // John

// delete user.age; // jnjuma
// console.log(user); // {name: 'Pete'}

/////////////////////////////////// Object copying /////////////////////////////////////////////////////////////////////////

// let a = {};
// let b = a;
// console.log(a == b); // true
// console.log(a === b); // true

// let c = {};
// let d = {};
// console.log(c == d); // false

// let user = {
//   name: "Hakob",
//   age: 35,
// };
// let clon = {};
// for (let key in user) {
//   clon[key] = user[key];
// }
// clon.name = "Hovo";
// console.log(user.name); // Hakob

// let user1 = { name: "Hakob" };
// let user2 = { age: 35 };
// let user3 = { tel: 077655665 };
// Object.assign(user1, user2, user3);
// console.log(user1); // {name: 'Hakob', age: 35, tel: 16735157}

// let user = { name: "Hakob" };
// Object.assign(user, { name: "Hovo" });
// console.log(user.name); // Hovo
