function arithmeticTriplets(nums, diff) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const elem1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const elem2 = nums[j];
      //   console.log(elem1, elem2);
      if (elem2 - elem1 == diff) {
        console.log(` the element ${elem1} , ${elem2}  match `);

        for (let k = 1 + j; k < nums.length; k++) {
          const elem3 = nums[k];
          if (elem3 - elem2 == diff) {
            // console.log(elem1, elem2, elem3);
            count += 1;
          }
        }
      } else {
        console.log(` the element ${elem1} , ${elem2} didnt   match `);
      }
    }
  }
  return count;
}

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
