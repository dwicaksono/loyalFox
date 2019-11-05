function ubahHuruf(kata) {
  // you can only write your code here!
  // var result = "";
  // for (var i = 0; i < kata.length; i++) {
  //   // var code = kata[i].charCodeAt(kata[i]) + 1;
  //   if (kata[i] === "z") {
  //     kata[i] = "a";
  //     result += kata[i];
  //   } else {
  //     result += String.fromCharCode(kata[i].charCodeAt(kata[i]) + 1);
  //   }
  // }
  // return result;
  var kamus = "abcdefghijklmnopqrstuvwxyz";
  var result = "";
  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < kamus.length; j++) {
      if (kata[i] === "z") {
        result += "a";
        break;
      }
      if (kata[i] === kamus[j]) {
        console.log(kamus[j]);
        console.log(kata[i]);
        result += kamus[j + 1];
      }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf("z")); // xpx
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
