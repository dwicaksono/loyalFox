/**
 *  Cari kemiripan
 *
 *  Function ini menerima 2 inputan:
 *  1. Array yang berisikan kata2 random,
 *  2. String yang berisikan sebuah kata
 *
 *  Function ini akan mencarikan ISI dari array INPUT yang mengandung INPUT STRING
 *
 *  contoh:
 *  input array: ['ola ramlan', 'coca cola', 'soba', 'caca']
 *  input string: 'ola
 *
 *  maka output dari function ini yaitu berupa array yang mengandung kata yang mirip dengan
 *  string tersebut yaitu 'ola'
 *
 *  output: ['ola ramlan', 'coca cola']
 *
 *  [RULE]
 *  1. dilarang menggunakan indexOf(), find(), filter()
 *  2. dilarang menggunakan regex
 *
 */

function cariKemiripan(arr, kata) {
  var res = [];
  for (let i = 0; i < arr.length; i++) {
    var sama = true;
    for (let j = 0; j < arr[i].length - kata.length + 1; j++) {
      for (let k = 0; k < kata.length; k++) {
        if (arr[i][j + k] !== kata[k]) {
          sama = false;
        }
      }
      if (sama === true) {
        res.push(arr[i]);
        // break;
        console.log(arr[i]);
      }
    }
  }
  res;
}

// console.log(
//   cariKemiripan(["bola", "ola ramlan", "sholat", "gajah", "fanta"], "ola")
// );
//["bola", "ola ramlan", "sholat"]
console.log(
  cariKemiripan(["kata", "atta halilintar", "hatta", "bata", "fanta"], "atta")
);
//["atta halilintar", "hatta"]
