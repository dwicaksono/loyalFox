function latihan(arr) {
  // your code here
  var oneArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      oneArr.push(arr[i][j]);
    }
  }

  var res = [];
  var obj = {};
  for (let i = 0; i < oneArr.length; i++) {
    obj[oneArr[i]] = obj[oneArr[i]] + 1 || 1;
  }
  res.push(obj);
  obj;
}

console.log(
  latihan([
    ["&", "*", "%", "A"],
    ["#", "B", "&", ":"],
    ["%", "$", "*", "O"],
    ["S", ".", "B", "P"]
  ])
);
// ['&','*','%','B']
