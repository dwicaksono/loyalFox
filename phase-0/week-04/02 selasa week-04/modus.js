function cariModus(arr) {
  // you can only write your code here!
  // var maxCount = 0;
  // var modus = 0;
  // for (var i = 0; i < arr.length; i++) {
  //   var count = 0;
  //   for (var j = 0; j < arr.length; j++) {
  //     if (arr[i] === arr[j]) count++;
  //   }
  //   if (count > maxCount) modus = arr[i];
  //   maxCount = count;
  // }
  // maxCount
  // return maxCount === 1 || maxCount === arr.length ? -1 : modus;

  var maxCount = 0;
  var modus = 0;
  for (var x = 0; x < arr.length; x++) {
    var count = 0;
    for (var y = 0; y < arr.length; y++) {
      if (arr[x] === arr[y]) {
        count++;
      }
    }
    if (count > maxCount) {
      modus = arr[x];
      maxCount = count;
    }
  }
  if (maxCount === 1 || maxCount === arr.length) {
    return -1;
  } else {
    return modus;
  }
}

// TEST/ CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1;
