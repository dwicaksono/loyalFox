/**
 * ================
 * Number Spreader
 * ================
 * numberSpreader adalah sebuah function yang menerima satu parameter berupa angka.
 * function akan mereturn sebuah array dengan pola berikut:
 * Jika n = 5
 * maka hasil = [ 5, 4, 3, 2, 1, 2, 3, 4, 5 ]
 * Jika n = 3
 * maka hasil = [ 3, 2, 1, 2, 3 ]
 * Jika n = 15
 * maka hasil = [ 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 *
 * [ASUMSI]
 * - NILAI PARAMETER `SELALU ANGKA POSITIF` (KECUALI 0)
 * - JIKA PARAMETER BUKAN ANGKA POSITIF MAKA KEMBALIKAN `invalid number`
 *
 * [RULES]
 * - WAJIB MENULISKAN PSEUDOCODE/ALGORITMA
 * - DILARANG MENGGUNAKAN BUILT IN FUNCTION .reverse()
 */

/*
1. membuat variabel res dengan type array kosong untuk hasil akhir.
2. membuat variabel count dengan type data number dengan value 1
3. membuat variabel countb dengan type data number dengan value 2
4. melakukan pengecekan perluangan pertama dengan batas maksimal dari parameter num
4a. push data variabel count ke res dengan count bertambah 1 sampai batas parammeter num
5. melakukan pengecekan perluangan kedua dengan batas j sebagai maksimal dari num -1 agar melakkukan pengecekan dari angka terbesar ke kecil
5a. unshift(agar data masuk ke bagian depan array) data variabel countb ke res dengan countb bertambah 1 sampai batas parammeter num
6. melakukan pengecekan jika num sama dengan 0, atau num sama dengan undefined, atau num lebih kecil dari 0
6a. maka menampilkan informasi 'invalid number
7. mengembalikan hasil data array di variabel res untuk informasi data yang sudah diproses.
*/

function numberSpreader(num) {
  // only write code here
  var res = [];
  var count = 1;
  for (let i = 1; i <= num; i++) {
    res.push(count);
    count++;
  }
  var countb = 2;
  for (let j = num - 1; j >= 1; j--) {
    res.unshift(countb);
    countb++;
  }

  if (num === 0 || num === undefined || num < 0) {
    return "invalid number";
  }
  return res;
}

console.log(numberSpreader(5)); // [ 5, 4, 3, 2, 1, 2, 3, 4, 5 ]
console.log(numberSpreader(3)); // [ 3, 2, 1, 2, 3 ]
console.log(numberSpreader(10)); // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(numberSpreader(7)); // [ 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7 ]
console.log(numberSpreader(0)); // invalid number
console.log(numberSpreader()); // invalid number
