/**
 * =========
 * Isi Kotak
 * =========
 *
 * [Description]
 * Function isiKotak merupakan sebuah function yang membuat sebuah array multidimensi
 * yang berisikan angka dengan ketentuan:
 * 1. Angka mulai dari 1 dan `bertambah` hingga angka @input yang diberikan.
 * 2. Ketika angka tersebut sudah mencapai angka @input maka akan `berkurang sampai angka 0`.
 * 3. Proses 1 & 2 berulang hingga seluruh array dengan ukuran @input x @input diisi dengan angka.
 * 4. Jika angka yang diisi mencapai 2 digit, `gunakan bilangan satuannya`.
 *    contoh: 15 => 5, 47 => 7, 124 => 4
 *
 * [Rules]
 * 1. Dilarang membuat function lain selain yang berada di skeleton code.
 * 2. Dilarang menggunakan built-in function:
 *    map, filter, reduce, forEach, split, slice, splice, join, reverse, sort
 */

function isiKotak(num) {
  // var long = num * num;
  var arrNum = [];
  var arrLong = [];
  count = 1;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      arrLong.push(j);
    }
  }
  arrLong;
  //   for (let i = 0; i < arrLong.length - 1; i++) {
  //     console.log(arrLong[i]);
  //     for (let j = arrLong.length - 1; j > 0; j--) {
  //       if (arrLong[i] === num) {
  //         console.log(arrLong[j + 1]);
  //         console.log(arrLong[i]);
  //         arrLong[i + 1] = arrLong[j];
  //       }
  //     }
  //   }
  //   arrLong;
  //   let ar = [];
  //   let flag = true;
  //   for (let i = 1; i < Infinity; flag ? i++ : i--) {
  //     i > 9 ? ar.push(i % 10) : ar.push(i);
  //     console.log(i);
  //     console.log(num);
  //     if (i == num) flag = false;
  //     else if (i === 1) flag = true;
  //     if (ar.length === num * num) return ar;
  //   }
}

// console.log(isiKotak(1));
// [ [ 1 ] ]
// console.log(isiKotak(2));
// [ [ 1, 2 ],
//   [ 1, 2 ] ]
console.log(isiKotak(3));
// [ [ 1, 2, 3 ],
//   [ 2, 1, 2 ],
//   [ 3, 2, 1 ] ]
// console.log(isiKotak(4));
// [ [ 1, 2, 3, 4 ],
//   [ 3, 2, 1, 2 ],
//   [ 3, 4, 3, 2 ],
//   [ 1, 2, 3, 4 ] ]
// console.log(isiKotak(5));
// [ [ 1, 2, 3, 4, 5 ],
//   [ 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4 ],
//   [ 5, 4, 3, 2, 1 ] ]
// console.log(isiKotak("5"));
// Invalid
// console.log(isiKotak(false));
// Invalid
// console.log(isiKotak(10));
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 9, 8 ],
//   [ 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 9, 8, 7, 6 ],
//   [ 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 9, 8, 7, 6, 5, 4 ],
//   [ 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ] ]
// console.log(isiKotak(11));
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1 ],
//   [ 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 0, 9 ],
//   [ 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 1, 0, 9, 8, 7 ],
//   [ 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 1, 0, 9, 8, 7, 6, 5 ],
//   [ 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 1, 0, 9, 8, 7, 6, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ]
// console.log(isiKotak(15));
// [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5 ],
//   [ 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2 ],
//   [ 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3 ],
//   [ 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4 ],
//   [ 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1 ],
//   [ 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9 ],
//   [ 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8 ],
//   [ 9, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7 ],
//   [ 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ],
//   [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5 ],
//   [ 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 ],
//   [ 3, 4, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3 ],
//   [ 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4 ],
//   [ 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1 ] ]

// function horizontal(sisi) {
//   let ar = [];
//   let flag = true;
//   for (let i = 1; i < Infinity; flag ? i++ : i--) {
//     i > 9 ? ar.push(i % 10) : ar.push(i);
//     console.log(i);
//     console.log(sisi);
//     if (i == sisi) flag = false;
//     else if (i === 1) flag = true;
//     if (ar.length === sisi * sisi) return ar;
//   }
// }
// function horizontal(sisi) {
//   let ar = [];
//   let flag = true;
//   var batas = sisi * sisi;
//   for (let i = 1; i < batas; flag ? i++ : i--) {
//     i > 9 ? ar.push(i % 10) : ar.push(i);

//     // if (i == sisi) flag = false;
//     // else if (i === 1) flag = true;
//   }
//   return ar;
// }

// function board(sisi) {
//   let ar = horizontal(sisi);
//   let finalBoard = [];
//   let count = 1;
//   let temp = [];

//   for (let i = 0; i < ar.length; i++) {
//     temp.push(ar[i]);
//     count++;
//     if (count == sisi + 1) {
//       finalBoard.push(temp);
//       temp = [];
//       count = 1;
//     }
//   }
//   return finalBoard;
// }

// console.log(board(10s));
