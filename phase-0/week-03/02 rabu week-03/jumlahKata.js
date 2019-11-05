function hitungJumlahKata(kalimat) {
  //you can only write your code here!
  var kata = [];
  var oneLetter = "";
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " ") {
      kata.push(oneLetter);
      oneLetter = "";
    } else if (i === kalimat.length - 1) {
      oneLetter += kalimat[i];
      kata.push(oneLetter);
    } else {
      oneLetter += kalimat[i];
    }
  }
  kata;
  return kata.length;

  // for (let i = 0; i < kalimat.length; i++) {
  //   var kalimatkosong = " ";
  //   var count = "";
  //   kalimat += kalimatkosong;
  //   for (i = 0; i < kalimat.length; i++) {
  //     if (kalimat[i] === kalimatkosong) {
  //       count++;
  //     }
  //   }
  //   return count;
  //   // you can only write your code here!
  // }
}
// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
// console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
// console.log(hitungJumlahKata("A song to sing")); // 4
// console.log(hitungJumlahKata("I")); // 1
// console.log(hitungJumlahKata("I believe I can code")); // 5
