/*
In this lab, you will be working on creating a function composition from an array of functions using ESM (ECMAScript Modules) import/export. The goal is to implement a compose function that takes an array of functions [f1, f2, f3, ..., fn] as input, and returns a new function fn that represents the composition of all the given functions.
The function composition of [f(x), g(x), h(x)] is given by fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume that each function in the array accepts one integer as input and returns one integer as output.
Here are some examples to help you understand the problem:
Example 1:
const fn = compose([x => x + 1, x => x * x, x => 2 * x])
fn(4) // 65
Evaluating from right to left ... Starting with x = 4. 2 * (4) = 8 (8) * (8) = 64 (64) + 1 = 65
Example 2:
const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])
fn(1) // 1000
Evaluating from right to left ... 10 * (1) = 10 10 * (10) = 100 10 * (100) = 1000
Example 3:
const fn = compose([])
fn(42) // 42
The composition of zero functions is the identity function.
Constraints:
• -1000 <= x <= 1000
• 0 <= functions.length <= 1000
• All functions accept and return a single integer
Make sure to default export any functions or variables that need to be accessed in your code, as the evaluation script requires those exports to test your implementation.
Happy coding!
*/
function compose(funcs) {
  if (funcs.length < 1) {
    return (x) => x;
  }
  return (x) => {
    // your code goes here ;
    let count = funcs.length - 1;
    let result = x;
    while (count >= 0) {
      result = funcs[count](result);
      count--;
    }
    return result;
  };
}
const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(
  fn(4) // 65
);
const fn2 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(
  fn2(1) // 1000
);
