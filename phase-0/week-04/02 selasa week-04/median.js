function cariMedian(arr) {
  // you can only write your code here!
  var result = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    return arr[result];
  } else {
    console.log(arr[result - 1]);
    console.log(arr[result]);
    return (arr[result - 1] + arr[result]) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
