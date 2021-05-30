// JavaScript Object ES6
var address = {
    street_name: 'Main Street',
    street_number: 1000,
    apartment: {
        "floor": 3,
        "number": 30
    },
    getstreetName: function(){ return this['street_name']; },
    getStreetNumber(){ return this.street_number;},
    get street(){ return this.street_name+" ,"+this.street_number;},
    set street(s){
        this.street_name = s.split(',')[0];
        this.street_number = s.split(",")[1];
    }
}
// console.log(address.street_name)
// console.log(address.getstreetName())
// console.log(address.street)

/*
Execution Order
var x = 1
function f() {
    var y = 2
    var summ = function() {
        var z = 3;
        console.log(x+y+z, "hello?");
    };
    console.log("first")
    y = 10;
    return summ;
}
var g = f();
g();


var sayHi = function(){
    console.log("hi");
}

sayHi();
function sayHi(){
    console.log("Hi");
}
*/

/*
let scope is defined by the nearest enclosing block
var scope ia defined as global

function a(){
    'use strict';
    for (let x =1; x<10; x++){
        console.log(x);
    }
    console.log(x);
}

let y = 'global';
console.log(this.y);
// console.log(window.y);
a(); 

const MY_OBJECT = {"name": "Dickyi"};
// MY_OBJECT = {"p":"A"}; This fails!
Object.freeze(MY_OBJECT);
console.log("Hello?")
console.log(MY_OBJECT.name)
*/

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i<arguments.length; i++) {
        if (arguments[i]>max) {
            max = arguments[i];
        }
    }
    return max;
}

var x = findMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(x)

// In JavaScript, functions are objects. Therefore, there is no overloading
function log(x=10, y =5){
    console.log(x + "Arguments" + y);
}

var multiply = (num1, num2) => num1 * num2;
// console.log(multiply(5, 5))

const future = ['Temka', 'Dickyi']
const goodLife = ['home', 'happiness', 'nonstop', ...future]
console.log(goodLife)

function sum(x,y,...more) {
    var total = x + y;
    if (more.length){
        more.forEach((extra)=>total+=extra)
    }
    console.log(total)
}
// sum(5, 5, 5, 5, 5)

// For in is used for objects.
// For of is used for arrays.
// var things = {'a':97, 'b':2, 'c':3};
// for (let i in things){
//     console.log(i+'  '+things[i])
// }

var things = [1, 'a', 3];
for (let i of things){
    console.log(i)
}




