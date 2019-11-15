/**
 * =========
 * Divisible
 * =========
 * Input : @data -> array of deret angka
 *         @divider -> angka pembagi
 * Deskripsi : Menjumlahkan satu per satu angka yang ada dalam 1 deret angka dan mencari tahu
 *             apakah hasil penjumlahan tersebut habis dibagi divider yang ditentukan.
 *             Data deret angka akan diberikan berupa array dan outputnya adalah array of numbers.
 *             Jika number habis dibagi divider, maka kembalikan hasil pembagiannya,
 *             Namun jika tidak, maka number tidak berubah.
 *
 * Contoh 1 : multipleOfSum([123], 3)
 *            > deret angka nya : 123, maka kita jumlahkan dengan cara 1 + 2 + 3 = 6
 *            > setelahnya kita cari tau apakah angka hasil di atas ( 6 ) habis dibagi divider ( 3 )
 *            > 6 habis dibagi 3 (=2), oleh karena itu, untuk deret angka 123 outputnya adalah [ 2 ]
 *
 * Contoh 2 : multipleOfSum([41, 21], 9)
 *            > 4 + 1 = 5 dan 2 + 1 = 3
 *            > 5 dan 3 tidak habis dibagi 9 maka
 *            > output = [ 41, 21 ]
 *
 * Data input dapat `berupa array kosong`, dan output nya adalah []
 * Data input dapat `berisi lebih dari 1 deret angka`, maka outputnya adalah
 * `array of numbers` sejumlah data yang di input.
 *
 * RULES !!!
 * 1. Perhatikan Driver Code untuk contoh lebih lengkap
 * 2. Hanya boleh menggunakan built in function .push dan .unshift
 */

function divisible(data, divider) {
  // Write your code here
  if (!data.length) {
    return [];
  }
  var res = [];
  for (let i = 0; i < data.length; i++) {
    string = "";

    string += data[i];

    var splittest = [];
    for (let x = 0; x < string.length; x++) {
      splittest.push(string[x]);
    }

    var sumNum = 0;
    for (let j = 0; j < splittest.length; j++) {
      sumNum += Number(splittest[j]);
    }

    var hasil = Math.floor(sumNum / divider);
    hasil;
    if (sumNum % divider === 0) {
      res.push(1);
    }
    if (sumNum % divider !== 0) {
      res.push(data[i]);
    }
  }
  return res;
}
// function divisible(data, divider) {
//   // Write your code here
//   var res = [];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] % divider === 0) {
//       res.push(1);
//     } else {
//       res.push(data[i]);
//     }
//   }
//   return res;
// }

// DRIVER CODE
console.log(divisible([5], 4)); // [ 5 ]
console.log(divisible([1818, 45, 36], 9)); // [ 1, 1, 1 ]
console.log(divisible([18, 105, 35], 9)); // [ 1, 105, 35 ]
console.log(divisible([], 4)); // []
