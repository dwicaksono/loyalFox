/**
 * =============
 * Students List
 * =============
 *
 * Instruction
 * -----------
 * Buatlah sebuah function yang mengelompokkan student berdasarkan phase yang sedang berjalan.
 *
 * Resctrictions
 * -------------
 * 1. Input berupa array of strings yang berisi nama dan phase dan dipisah dengan strip '-'
 *    Ex: 'yusuf-0'
 * 2. Output merupakan sebuah array yang berisi key berupa masing-masing phase dari 0-3
 * 3. Setiap key menyimpan array of names sesuai dengan input yang diberikan,
 *    Jika ada phase yang kosong (tidak ada student) maka key tersebut menyimpan array kosong []
 * 4. Jika phase kosong, maka hanya mengembalikan object kosong {}
 *
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function split, slice, splice, includes, find, findIndex, indexOf
 * 2. Pastikan urutan key sesuai dengan expected output
 */

// function getStudents(arr) {
//   // Write your code here

//   if (!arr.length) {
//     return {};
//   }

//   var arrSplit = [];
//   for (let i = 0; i < arr.length; i++) {
//     var newArr = [];
//     var oneWord = "";
//     for (var x = 0; x < arr[i].length; x++) {
//       if (arr[i][x] == "-") {
//         newArr.push(oneWord);
//         oneWord = "";
//       } else if (x == arr[i].length - 1) {
//         oneWord += arr[i][x];
//         newArr.push(oneWord);
//       } else {
//         oneWord += arr[i][x];
//       }
//     }
//     arrSplit.push(newArr);
//   }

//   var obj = {};
//   obj["phase 0"] = [];
//   obj["phase 1"] = [];
//   obj["phase 2"] = [];
//   obj["phase 3"] = [];
//   for (let i = 0; i < arrSplit.length; i++) {
//     for (let j = 0; j < arrSplit[i].length; j++) {
//       if (arrSplit[i][j] === "0") {
//         obj["phase 0"].push(arrSplit[i][0]);
//       }
//       if (arrSplit[i][j] === "1") {
//         obj["phase 1"].push(arrSplit[i][0]);
//       }
//       if (arrSplit[i][j] === "2") {
//         obj["phase 2"].push(arrSplit[i][0]);
//       }
//       if (arrSplit[i][j] === "3") {
//         obj["phase 3"].push(arrSplit[i][0]);
//       }
//     }
//   }

//   return obj;
// }

function split(arr, symbol) {
  var arrSplit = [];
  for (let i = 0; i < arr.length; i++) {
    var newArr = [];
    var oneWord = "";
    for (var x = 0; x < arr[i].length; x++) {
      if (arr[i][x] == symbol) {
        newArr.push(oneWord);
        oneWord = "";
      } else if (x == arr[i].length - 1) {
        oneWord += arr[i][x];
        newArr.push(oneWord);
      } else {
        oneWord += arr[i][x];
      }
    }
    arrSplit.push(newArr);
  }
  return arrSplit;
}

function getStudents(arr) {
  // Write your code here

  if (!arr.length) {
    return {};
  }
  var arrsplit = split(arr, "-");

  var obj = {};
  for (let i = 0; i < arrsplit.length; i++) {
    for (let j = 0; j < arrsplit[i].length; j++) {
      if (obj[arrsplit[i][1]] === undefined) {
        obj[arrsplit[i][1]] = [];
      }
    }
  }

  for (const key in obj) {
    for (let i = 0; i < arrsplit.length; i++) {
      if (arrsplit[i][1] === key) {
        obj[key].push(arrsplit[i][0]);
      }
    }
  }

  console.log(obj);

  // return obj;
}

console.log(getStudents(["okka-0", "maulid-1", "riko-2", "bayu-3"]));
// {
//   'phase 0': [ 'okka' ],
//   'phase 1': [ 'maulid' ],
//   'phase 2': [ 'riko' ],
//   'phase 3': [ 'bayu' ]
// }

console.log(getStudents([]));
// {}

console.log(
  getStudents(["serafim-1", "amalya-0", "fadhilah-1", "reka-3", "vika-2"])
);
// {
//   'phase 0': [ 'amalya' ],
//   'phase 1': [ 'serafim', 'fadhilah' ],
//   'phase 2': [ 'vika' ],
//   'phase 3': [ 'reka' ]
// }

console.log(getStudents(["yusuf-0", "fiqi-3", "adiel-1"]));
// {
//   'phase 0': [ 'yusuf' ],
//   'phase 1': [ 'adiel' ],
//   'phase 2': [],
//   'phase 3': [ 'fiqi' ]
// }
