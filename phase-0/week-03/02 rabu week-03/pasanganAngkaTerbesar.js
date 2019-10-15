function pasanganTerbesar(num) {
  // you can only write your code here!
  var arr = String(num);
  var arrNum = [];
  for (let i = 0; i < arr.length; i++) {
    arrNum.push(arr[i]);
  }

  var a = 0;
  var b = 0;
  for (let i = 0; i < arrNum.length - 1; i++) {
    a = arrNum[i] + arrNum[i + 1];
    if (a > b) {
      b = a;
    }
  }
  return Number(b);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); //99
