// explaination
function compose(funcs) {
  // Base case: if the array of functions is empty, return the identity function
  console.log(`the length of func is ${funcs.length}`);
  if (funcs.length === 0) {
    console.log("the length of the  arraybis 0 ");
    return (x) => {
      console.log(`the value of x is ${x}`);
      return x;
    };
  }

  // Recursive case: compose the functions recursively
  const [firstFunc, ...restFuncs] = funcs;
  return (x) => {
    // console.log(`the value of x inside compose is ${x}`);

    return firstFunc(compose(restFuncs)(x));
  };
}

// Test cases
// Define the functions outside of the array with logging of x
const func1 = (x) => {
  console.log(`Inside func1: x = ${x}`);
  return x + 1;
};

const func2 = (x) => {
  console.log(`Inside func2: x = ${x}`);
  return x * x;
};

const func3 = (x) => {
  console.log(`Inside func3: x = ${x}`);
  return 2 * x;
};

// const fn1 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
const fn1 = compose([func1, func2, func3]);
// console.log(fn1.toString());
console.log(fn1(4)); // Output: 65

const fn2 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(fn2(1)); // Output: 1000
