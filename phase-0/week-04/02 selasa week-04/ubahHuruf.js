function ubahHuruf(kata) {
  // you can only write your code here!
  var result = "";
  for (var i = 0; i < kata.length; i++) {
    // var code = kata[i].charCodeAt(kata[i]) + 1;
    result += String.fromCharCode(kata[i].charCodeAt(kata[i]) + 1);
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
