function hasTargetSum(array, target) {
  for(let t = 0; t< array.length; t++) {
    const result = target-array[t];
    for (let r = t+1; r<array.length; r++) {
    if (array[r] === result) return true;}

  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
//using nested interation with a linear of o(n) to iterate through each element within the shortest time.

/* 
  Add your pseudocode here
//iterate through earch array, check if sum of any two of the arrays can fit the target the return true.
//continue to iterate untill a desired response is achieved.

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
