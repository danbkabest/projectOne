'use strict';

var a = 5;
console.log(a);
let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(persone.name);

let arr = ['plum.png','orange,jpg','apple.bmp'];

console.log(arr[2]);

// alert("hello world");
// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = +prompt("Есть ли вам 18?", "Да");
// console.log(typeof(answer));
// console.log("arr" + " - object");
// console.log(4 + " - object");

let incr = 18,
    decr = 18;

++incr;
--decr;

console.log(incr);
console.log(decr);
console.log("3" == 2);

let isCheked = true,
    isClose = true;

console.log(isCheked || isClose);