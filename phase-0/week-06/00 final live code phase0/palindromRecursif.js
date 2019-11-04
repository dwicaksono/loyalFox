// function palindromeRecursive(str) {
//   if (str.length === 1 || str.length === 0) {
//     return true;
//   } else {
//     if (str[0] === str[str.length - 1]) {
//       return palindromeRecursive(str.slice(0, str[str.length - 1]));
//     }
//     return false;
//   }
// }

// // TEST CASES
// console.log(palindromeRecursive("katak")); // true
// console.log(palindromeRecursive("blanket")); // false
// console.log(palindromeRecursive("civic")); // true
// console.log(palindromeRecursive("kasur rusak")); // true
// console.log(palindromeRecursive("mister")); // false

function countDistanceLetterRecursive(sentence, letter) {
  if (sentence.length < 1) return 0;
  if (sentence[0] === letter) {
    return 1;
  } else if (sentence[0] !== letter) {
    return 1 + countDistanceLetterRecursive(sentence.slice(1));
  }
}
console.log(countDistanceLetterRecursive("12", "1")); // 1
console.log(countDistanceLetterRecursive("ab", "b")); // 2
console.log(countDistanceLetterRecursive("12104123", "1")); // 1
console.log(countDistanceLetterRecursive("the quick brown fox", "o")); // 13
console.log(countDistanceLetterRecursive("hahaha", "a")); //
