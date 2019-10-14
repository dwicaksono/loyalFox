//asterisk vertical 1
var row1 = 5;
var result = "";
for (var i = 0; i < row1; i++) {
  result += "*";
  console.log("*");
}

///2. Menyusun Barisan Bintang Dengan Nested Looping
var row2 = 5;
for (var i = 0; i < row2; i++) {
  var result = "";
  for (var j = 0; j < row2; j++) {
    result += "*";
  }
  console.log(result);
}

/// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row3 = 5;
for (var i = 1; i <= row3; i++) {
  var result = "";
  for (var j = 0; j < i; j++) {
    result += "*";
  }
  console.log(result);
}
