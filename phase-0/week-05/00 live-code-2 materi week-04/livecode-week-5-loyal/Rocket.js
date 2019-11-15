/**
 * -----------
 * Mountain 🗻
 * ------------
 *
 * Instruction
 * -----------
 * Buatlah sebuah fungsi yang akan membuat sebuah gunung. Fungsi ini akan menerima tiga parameter
 * - tinggi dari gunung
 * - lebar dari landscape
 * - tinggi dari landscape
 *
 * Fungsi ini akan membuat sebuah gunung dengan tinggi sesuai dengan yang kita kirimkan.
 * Misal kita mengirimkan tinggi gunung 3 dan lebar landscape 5 dan tinggi landscape 5
 * Maka output yang akan kita hasilkan adalah.
 *
 * Rule
 * ----
 * - HANYA BOLEH menggunakan built in function push dan unshift
 * - Lebar dari landscape dan Tinggi dari landscape haruslah sama
 *   ( jika tidak keluarkan output 'Tinggi dan lebar dari landscape yang akan dibuat haruslah sama')
 * - Minimal tinggi dan lebar landscape adalah 5
 *   ( jika tidak keluarkan output 'Lebar landscape tidak cukup untuk membuat gunung' )
 *
 * Contoh ukuran 5x5:
 * [
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', 'X']
 *]
 */

function mountainView(height, landscapeHeight, landscapeWidth) {
  // Insert your code here
  var res = [];
  for (let i = 0; i < landscapeWidth; i++) {
    var temp = [];
    for (let j = 0; j < landscapeHeight; j++) {
      temp.push(" ");
    }
    res.push(temp);
  }

  var count = 1;
  var count2 = 0;
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      var tengah1 = height - 1;
      res[tengah1][tengah1] = "X";
      // if (
        res[res.length - 1][res.length - 1] === " " &&
        res[res.length - 1][0] === " "
      // ) {
        res[res.length - 2][res.length - 2] === "X";
        res[res.length - 2][1] === "X";
      // }
      count2++;
      count++;
    // }
    // res[res.length - 2][res.length - 2] = "X";
    // res[res.length - 2][1] = "X";
  }
  return res;
}

// console.log(mountainView(3, 6, 5)); // Lebar landscape tidak sama dengan tinggi landscape

// console.log(mountainView(3, 2, 2)); // Lebar landscape tidak cukup untuk membuat gunung

console.log(mountainView(3, 5, 5));

/**
 * [
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', 'X']
 *]
 */

console.log(mountainView(4, 7, 7));
/**
 * [
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', ' ', ' ', ' ', ' '],
 * [' ', ' ', ' ', 'X', ' ', ' ', ' '],
 * [' ', ' ', 'X', ' ', 'X', ' ', ' '],
 * [' ', 'X', ' ', ' ', ' ', 'X', ' '],
 * ['X', ' ', ' ', ' ', ' ', ' ', 'X']
 *]
 */
