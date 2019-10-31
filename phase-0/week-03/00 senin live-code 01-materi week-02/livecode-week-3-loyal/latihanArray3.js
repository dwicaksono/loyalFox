function latihan(arr) {
  // your code here
  var oneArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      oneArr.push(arr[i][j]);
    }
  }

  var res = [];
  var obj = {};
  for (let i = 0; i < oneArr.length; i++) {
    obj[oneArr[i]] = obj[oneArr[i]] + 1 || 1;
  }
  res.push(obj);

  var out = [];
  for (var key in obj) {
    if (obj[key] === 2) {
      out.push(key);
    }
  }
  return out;
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
