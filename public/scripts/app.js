'use strict';

//normal  Functions
var square = function square(x) {
    return x * x;
};

//ES6 function

var sq = function sq(x) {
    return x * x;
};

console.log(sq(9));

var sName = function sName(x) {
    return x.split(' ')[0];
};

console.log(sName('Ando Mindo'));
