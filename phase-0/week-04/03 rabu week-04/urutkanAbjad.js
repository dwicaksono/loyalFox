function urutkanAbjad(str) {
  // you can only write your code here!
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  var tampung = "";
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tampung = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tampung;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
