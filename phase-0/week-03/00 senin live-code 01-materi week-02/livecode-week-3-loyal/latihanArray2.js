function missingNum(arr) {
  var num = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === Number(arr[i][j])) {
        num.push(arr[i][j]);
      }
    }
  }

  var minimNum = num[0];
  var numMax = 0;
  for (let i = 0; i < num.length; i++) {
    if (numMax < num[i]) {
      numMax = num[i];
    }
    if (minimNum > num[i]) {
      minimNum = num[i];
    }
  }

  var range = [];
  for (let i = minimNum; i <= numMax; i++) {
    range.push(i);
  }

  var beda = [];
  for (let i = 0; i < range.length; i++) {
    var kembar = false;
    for (let j = 0; j < num.length; j++) {
      if (range[i] === num[j]) {
        kembar = true;
      }
    }
    if (kembar === false) {
      beda.push(range[i]);
    }
  }
  return beda;
}

// BELUM NGERTI
console.log(missingNum([[3, " ", 5], [1, " ", 7], [9, " ", " "]])); // [ 2, 4, 6, 8 ]
console.log(missingNum([[2, " "], [" ", 5]])); // [ 3, 4 ]
console.log(missingNum([[11, " ", 13], [17, " ", 19], [" ", 16, " "]])); // [ 12, 14, 15, 18 ]
console.log(
  missingNum([
    [3, " ", 5, 15],
    [1, " ", 7, 13],
    [9, " ", " ", 12],
    [" ", 16, " ", " "]
  ])
); // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])); // []
