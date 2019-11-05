/**
 *
 *  Array merge
 *
 *  Function ini menggabungkan 2 array inputan menjadi satu array
 *  hasil output dari function ini adalah gabungan dari 2 array yang isinya tidak ada yang sama
 *  contoh : ['sergei', 'jin'], ['jin', 'steve', 'bryan']
 *
 *  makan outputnya: ['sergei', 'jin', 'steve', 'bryan']
 *
 *  rules:
 *  - Dilarang menggunakan regex dll
 *  - Dilarang menggunakan indexOf / include
 *  - Dilarang menggunakan .map .filter .sort dll
 *  - Hanya boleh menggunakan push, unshift kondisional
 *
 */

function arrayMerge(firstData, secondData) {
  if (!firstData.length) {
    return secondData;
  } else if (!secondData.length) {
    return firstData;
  }
  //   if (!firstData.length && !secondData.length) {
  //     return [];
  //   }

  var fusion = firstData.concat(secondData);
  var res = [];
  for (let i = 0; i < fusion.length; i++) {
    var found = false;
    for (let j = 0; j < res.length; j++) {
      if (fusion[i] === res[j]) {
        found = true;
      }
    }
    if (found === false) {
      res.push(fusion[i]);
    }
  }
  return res;
}

// Test cases
console.log(
  arrayMerge(["king", "devil jin", "akuma"], ["eddie", "steve", "geese"])
);
// // ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(["sergei", "jin"], ["jin", "steve", "bryan"]));
// // ['sergei', 'jin', 'steve', 'bryan']

console.log(
  arrayMerge(
    ["alisa", "yoshimitsu"],
    ["devil jin", "yoshimitsu", "alisa", "law"]
  )
);
// // ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ["devil jin", "sergei"]));
// // ['devil jin', 'sergei']

console.log(arrayMerge(["hwoarang"], []));
// // ['hwoarang']

console.log(arrayMerge([], []));
// // []
