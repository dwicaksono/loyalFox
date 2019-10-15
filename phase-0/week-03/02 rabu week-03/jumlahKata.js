function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var kata = [];
  var oneLetter = "";
  for (var i = 0; i < kalimat.length; i++) {
    console.log(kalimat[i]);
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
  return kata.length;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
