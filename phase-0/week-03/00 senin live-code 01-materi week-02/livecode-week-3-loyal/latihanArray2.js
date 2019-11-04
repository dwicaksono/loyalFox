// function missingNum(arr) {
//   var num = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === Number(arr[i][j])) {
//         num.push(arr[i][j]);
//       }
//     }
//   }

//   var minimNum = num[0];
//   var numMax = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (numMax < num[i]) {
//       numMax = num[i];
//     }
//     if (minimNum > num[i]) {
//       minimNum = num[i];
//     }
//   }

//   var range = [];
//   for (let i = minimNum; i <= numMax; i++) {
//     range.push(i);
//   }

//   var beda = [];
//   for (let i = 0; i < range.length; i++) {
//     var kembar = false;
//     for (let j = 0; j < num.length; j++) {
//       if (range[i] === num[j]) {
//         kembar = true;
//       }
//     }
//     if (kembar === false) {
//       beda.push(range[i]);
//     }
//   }
//   return beda;
// }

// console.log(missingNum([[3, " ", 5], [1, " ", 7], [9, " ", " "]])); // [ 2, 4, 6, 8 ]
// console.log(missingNum([[2, " "], [" ", 5]])); // [ 3, 4 ]
// console.log(missingNum([[11, " ", 13], [17, " ", 19], [" ", 16, " "]])); // [ 12, 14, 15, 18 ]
// console.log(
//   missingNum([
//     [3, " ", 5, 15],
//     [1, " ", 7, 13],
//     [9, " ", " ", 12],
//     [" ", 16, " ", " "]
//   ])
// ); // [ 2, 4, 6, 8, 10, 11, 14 ]
// console.log(missingNum([])); // []

function group(arr) {
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    var kembar = false;
    for (let j = 0; j < res.length; j++) {
      // console.log(res[j][0]);
      // console.log(arr[i][0]);
      if (res[j][0] === arr[i][0]) {
        res[j].push(arr[i]);
        kembar = true;
        break;
      }
    }
    if (kembar === false) {
      res.push([arr[i][0], arr[i]]);
    }
  }
  var obj = {};
  // for (var i = 0; i < res.length; i++) {
  //   obj[res[i][0]] = res[i].slice(1);
  // }
  for (var i = 0; i < res.length; i++) {
    obj[res[i][0]] = [];
    var kembar = false;
    for (let j = 0; j < res.length; j++) {
      if (res[j][0] === res[i][0]) {
        kembar = true;
        // break;
      }
      obj[res[i][0]].push(res[i][j + 1]);
    }
  }
  return obj;
}

console.log(group(["Badak", "Babi", "Jerapa", "Jumbo"]));
/*
[
  ['B','Badak', 'Babi' ],
  ['J','Jerapa', 'Jumbo' ]
]

{  
  B: [ 'Badak', 'Babi' ],
  J: [ 'Jerapa', 'Jumbo' ]
}
*/

function matrixTranspose(matriks) {
  // write your code here
  for (let i = 0; i < matriks.length; i++) {
    for (let j = 0; j < i; j++) {
      var temp = matriks[i][j];
      matriks[i][j] = matriks[j][i];
      matriks[j][i] = temp;
    }
  }
  var res = [];
  for (let i = 0; i < matriks.length; i++) {
    var find = false;
    for (let j = 0; j < matriks[i].length; j++) {
      if (matriks[i][j] === undefined) {
        find = true;
      }
    }
    if (find === false) {
      res.push(matriks[i]);
    }
  }

  return res;
}

console.log(matrixTranspose([[1, 2], [3, 4], [5, 6]]));
/*
  input:
  [
    [1, 2],
    [3, 4],
    [5, 6]
  ]
  output :
  [
    [1, 3, 5],
    [2, 4, 6]
  ]
*/
