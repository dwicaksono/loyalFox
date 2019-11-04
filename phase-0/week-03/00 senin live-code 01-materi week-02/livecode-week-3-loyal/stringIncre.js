function incrementString(strng) {
  // return incrementedString

  var num = "";
  var splitStr = strng.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] >= 0) {
      num += splitStr[i];
    }
  }
  var num = Number(num);
  var total = num + 1;
  total;
}
console.log(incrementString("foobar000")); //, "foobar001"
// console.log(incrementString("foo")); //, "foo1"
console.log(incrementString("foobar001")); //, "foobar002"
console.log(incrementString("foobar99")); //, "foobar100"
console.log(incrementString("foobar099")); //, "foobar100"
// console.log(incrementString("")); //, "1"
