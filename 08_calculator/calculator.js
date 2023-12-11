const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sumAll = arr.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);

  return sumAll;
};

const multiply = function(arr) {
  let myValue = arr.reduce((a,b)=> a*b);
  return myValue;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0){
    return 1;
  }else {
    let arr = [];

    for (let i = 1; i <= a; i++){
      arr.push(i);
   };

    let myValue = arr.reduce((a,b)=> a*b);
    return myValue;
    };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
