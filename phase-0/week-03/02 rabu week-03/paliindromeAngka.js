function angkaPalindrome(num) {
  num++;
  while (true) {
    var temp = "";

    for (var i = String(num).length - 1; i >= 0; i--) {
      temp += String(num)[i];
    }
    if (temp === String(num)) {
      return num;
    } else {
      num++;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
