function targetTerdekat(arr) {
  // you can only write your code here!
  var jarakO = [];
  var jarakX = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      jarakO.push(i);
    }
    if (arr[i] === "x") {
      jarakX.push(i);
    }
  }

  var output = [];
  for (let i = 0; i < jarakX.length; i++) {
    for (let j = 0; j < jarakO.length; j++) {
      output.push(Math.abs(jarakX[i] - jarakO[j]));
    }
  }

  var minimum = output[0];
  for (let i = 0; i < output.length; i++) {
    if (minimum > output[i]) {
      minimum = output[i];
    }
  }

  return !jarakX.length ? 0 : minimum;
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
