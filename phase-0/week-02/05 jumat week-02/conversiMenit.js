function konversiMenit(menit) {
  var jam = Math.floor(menit / 60);
  var menits = menit % 60;
  if (menits < 10) {
    return jam + ":0" + menits;
  } else return jam + ":" + menits;
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
