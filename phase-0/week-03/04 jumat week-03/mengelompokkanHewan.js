function groupAnimals(animals) {
  // you can only write your code here!
  var result = [];
  var tampung;

  for (var i = 0; i < animals.length; i++) {
    for (var j = 0; j < animals.length - i; j++) {
      if (animals[j] > animals[j + 1]) {
        tampung = animals[j];
        animals[j] = animals[j + 1];
        animals[j + 1] = tampung;
      }
    }
  }

  for (var i = 0; i < animals.length; i++) {
    var found = false;
    for (var j = 0; j < result.length; j++) {
      if (result[j][0][0] === animals[i][0]) {
        result[j].push(animals[i]);
        found = true;
        break;
      }
    }

    if (!found) {
      result.push([animals[i]]);
    }
  }

  return result;
}
// TEST CASES

console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
