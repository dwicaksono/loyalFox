// function digitPerkalianMinimum(angka) {
//   // you can only write your code here!
//   //var hasilBagi;
//   var arr = [];
//   for (var i = 0; i <= angka; i++) {
//     for (var j = 0; j <= angka; j++) {
//       if (i * j === angka) {
//         arr.push([i, j]);
//       }
//     }
//   }

//   var hasilSementara = arr;
//   var joinLength = [];
//   for (var i = 0; i < hasilSementara.length; i++) {
//     var join = hasilSementara[i].join("");
//     joinLength.push(join);
//   }

//   var jumlahDigit = String(angka).length;
//   jumlahDigit;
//   for (var i = 0; i < joinLength.length; i++) {
//     console.log(joinLength[i].length);
//     if (joinLength[i].length < jumlahDigit) {
//       jumlahDigit = joinLength[i].length;
//     }
//   }

//   return jumlahDigit;
// }
function digitPerkalianMinimum(angka) {
  var temp = 0;
  var arrLength = "";
  var arr = [];
  var result = [];

  for (i = 0; i <= angka; i++) {
    temp = 0;
    if (angka % i === 0) {
      temp = i;
      arr.push(temp);
    }
    temp;
  }
  if (arr.length == 1) {
    return arr.length + arr.length;
  }
  arrLength = arr.length / 2;
  result.push(arr[arrLength - 1], arr[arrLength]);
  return result.join("").length;
}
// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
