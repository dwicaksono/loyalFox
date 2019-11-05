function hitungJumlahKata(kalimat) {
  //you can only write your code here!
  // var kata = kalimat.split(" ");
  // return kata.length;
  var count = 0;
  for (let i = 0; i < kalimat.length; i++) {
    console.log(kalimat[i - 1]);
    console.log(kalimat[i + 1]);
    if (
      kalimat[i + 1] === undefined ||
      (kalimat[i + 1] === " " && kalimat[i] !== " ")
    ) {
      count++;
    }
  }
  return count;
}
// TEST CASES
console.log(hitungJumlahKata("I have a  dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
