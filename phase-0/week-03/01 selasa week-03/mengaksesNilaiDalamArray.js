function balikString(str) {
  var result = "";
  for (let i = str.length; i >= 0; i--) {
    console.log(str[i]);
    if (str[i] !== undefined) {
      result += str[i];
    }
  }
  return result;
}
console.log(balikString("hello world!"));
//input "hello world!"
//output
//"!dlrow olleh"
