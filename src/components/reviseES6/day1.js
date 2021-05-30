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


*/






