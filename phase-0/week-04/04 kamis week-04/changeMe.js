function changeMe(arr) {
  // you can only write your code here!

  var date = new Date();
  var curYear = date.getFullYear();
  for (var i = 0; i < arr.length; i++) {
    var age = curYear - arr[i][3];
    if (!arr[i][3]) {
      age = "Invalid Birth Year";
    } else {
      age;
    }
    console.log(i + 1 + ". " + arr[i][0] + " " + arr[i][1] + " :");
    var obj = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gende: arr[i][2],
      age: age
    };
    console.log(obj);
  }
}

// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
