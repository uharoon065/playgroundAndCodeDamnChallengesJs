class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((acc, curVal) => acc + curVal, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"

export default ArrayWrapper;
