const factorial = (a) => {
  let fact = 1;
  for (let i = 1; i <= a; i += 1) {
    fact *= i;
  }
  return fact;
};
console.log(factorial(4));

// 5! 5 * 4 * 3 * 2 * 1
//
