/**
 * ======
 * Pacman
 * ======
 *
 * [Desription]
 * Anda sedang bermain game pacman. Function pacman menerima input berupa
 * array yang merupakan field untuk pacman berjalan dan mengembalikan output
 * berupa array field yang telah ditelusuri oleh Pacman.
 * Disini karakter Pacman direpresentasikan sebagai 'C'.
 *
 * [Restrictions]
 * Disini ada papan permainan (yang direpresentasikan sebagai array).
 * papan permainan -> ['.', '.', '*', '$']
 *
 * '.' merupakan jalan biasa yang dapat dilewati pacman
 * '*' merupakan makanan
 * '$' merupakan musuh
 *
 * Jika pacman bertemu titik, maka dia akan berjalan melewatinya.
 * Jika pacman bertemu makanan, dia akan makan makanan tersebut dan tempat tersebut akan menjadi titik '.'
 * Jika pacman bertemu dengan '$' maka nyawa pacman akan berkurang.
 * Pacman memiliki 2 nyawa, jadi jika nyawa habis (0) maka pacman akan langsung mati.
 *
 * [Example]
 * 1.
 * @Input = ['.', '*', '$', '*', '*', '*', '*', '*']
 * Pacman menelusuri papan permainan, dia akan bertemu '$' di index 2 hingga
 * nyawa berkurang 1, nyawa pacman masih ada, sehingga:
 * @Output = ['.', '.', '.', '.', '.', '.', '.', 'C']
 *
 * 2.
 * @Input = ['.', '*', '$', '*', '$', '*']
 * Pacman berjalan terus, tapi dia mati karena bertemu dengan '$' dua kali, maka:
 * @Output = ['.', '.', '.', '.', '.', '*']
 *
 * 3.
 * @Input = ['.', '*', '*', '$', '$', '*', '*']
 * Disini, ketika pacman berada pada index ke 4 dari array tersebut,
 * dia bertemu dengan '$' dua kali. Maka, pacman di titik tersebut langsung mati, dan
 * papan permainan tidak berubah setelah pacman menyentuh musuh tersebut, sehingga:
 * @Output = ['.', '.', '.', '.' , '.', '*', '*']
 *
 * [Rules]
 * 1. `Wajib menuliskan pseudocode` atau -50
 * 2. Dilarang menggunakan built-in function:
 *    forEach, map, filter, reduce, indexOf, lastIndexOf, some, every, find, findIndex, includes
 */

// function pacman(array) {
//   // Write your code here
//   var res = [];
//   var nyawa = 2;
//   var musuh = 0;
//   var titik = 0;
//   for (let i = 0; i < array.length; i++) {
//     // if (array[i] === ".") {
//     //   titik++;
//     // }
//     if (array[i] === "*") {
//       array[i] = ".";
//     }
//   }
//   // var panjang = array.length - titik;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "$") {
//       if (nyawa > 0) {
//         array[i] === ".";
//       }
//       // array[i] = ".";
//       // if (nyawa === 0) {
//       //   array[i] === "$";
//       // }

//       array[i + 1] = "*";
//       array[array.length - 1] = "*";
//       nyawa = nyawa - 1;
//     }
//     if (array[i] === ".") {
//       array[array.length - 1] = "C";
//     }
//   }
//   // var banding = musuh + nyawa;
//   // banding;
//   // var bandinglength = banding + panjang;
//   // bandinglength;
//   // console.log(array.length);
//   // var selisih = Math.abs(bandinglength - array.length);
//   // selisih;
//   // // if (bandinglength === array.length) {
//   // //   return array;
//   // // } else
//   // array;
//   // if (bandinglength > array.length) {
//   //   for (let i = 0; i < array.length; i++) {
//   //     array[array.length - selisih] = "*";
//   //     array[i] = ".";
//   //     return array;
//   //   }
//   // }
//   // bandinglength;
//   // panjang;

//   return array;
// }

/*
set nyawa with 2
for loop 

*/

function pacman(array) {
  // Write your code here
  let nyawa = 2;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "*") {
      array[i] = ".";
    }
    // else {
    //   array[array.length - 1] = "C";
    // }
    if (array[i] === "$") {
      array[i] = ".";
      nyawa--;
    }
    if (nyawa > 0) {
      array[array.length - 1] = "C";
    }
    if (nyawa === 0) {
      array[array.length - 1] = "*";
      break;
    }
  }
  return array;
}

console.log(pacman(["*", ".", ".", "*", "*", "*"]));
// ['.', '.', '.', '.', '.', 'C']

console.log(pacman([".", "*", "$", "*", "$", "*"]));
// ['.', '.', '.', '.', '.', '*']

console.log(pacman([".", ".", ".", ".", "*", "*", "*", "*"]));
// ['.', '.', '.', '.', '.', '.', '.', 'C']

console.log(pacman([".", "*", "*", "$", "$", "*", "*"]));
// ['.', '.', '.', '.' , '.', '*', '*']

console.log(pacman([]));
// []
