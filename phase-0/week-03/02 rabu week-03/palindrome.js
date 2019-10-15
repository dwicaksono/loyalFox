function palindrome(kata) {
  // you can only write your code here!
  for (var i = 0; i < kata.length; i++) {
    return kata[i] === kata[kata.length - 1] ? true : false;
  }
}

// TEST CASES
console.log(palindrome("katak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // fals
