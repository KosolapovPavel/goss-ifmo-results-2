// 2.1.1

const fun1 = x => x*x;
console.log(fun1(7))

// 2.1.2

function* fun2() {
    console.log('Ya');
}

// 2.2.1

(fun1 => fun1(0))(x => x*x);

// 2.2.2

(function(){console.log('Yes')})();

// 2.3

function color(r,g,b){	return `rgb(${r}, ${g}, ${b})`;}

// 2.4

const qv = function () { return this * this; }
qv.call(2);

// 2.5

function pow(x, y){ return x ** y;}
let Pi = pow.bind(null, Math.PI)
alert( Pi(3) );
alert( Pi(4) );

// 2.6

let fact = (num) => (num > 0) ? num * fact(--num) : 1

// 2.7

let req = (x, y) => {console.log(x,y); return (y > 0) ? req(++x,--y) : x}
req(5,10)
