function tentukanDeretAritmatika(arr) {
  // you can only write your code here!

  var count = 0;
  var a = [];
  for (let i = 0; i < arr.length - 1; i++) {
    count += arr[i + 1] - arr[i];
    a.push(count);
    if (a[i] !== arr[i]) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
