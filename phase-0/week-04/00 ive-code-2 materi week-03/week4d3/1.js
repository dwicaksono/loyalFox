/**
 *
 *  SPLIT LOCATION
 *
 *  Buatlah sebuah function yang akan membagi penumpang berdasarkan lokasi tujuannya menjadi sebuah object
 *
 *  Contoh: Lihat test case
 *
 *  Rules:
 *  - Dilarang menggunakan regex indexOf includes
 *  - Dilarang menggunakan .map .filter .sort dll
 *
 *
 */

// function splitLocation(passenger) {
//   var obj = {};
//   for (let i = 0; i < passenger.length; i++) {
//     if (obj[passenger[i].destination] === undefined) {
//       obj[passenger[i].destination] = [passenger[i].name];
//     } else {
//       obj[passenger[i].destination].push(passenger[i].name);
//     }
//   }
//   return obj;
// }
function splitLocation(passenger) {
  var obj = {};
  for (let i = 0; i < passenger.length; i++) {
    if (obj[passenger[i].destination] === undefined) {
      obj[passenger[i].destination] = [passenger[i].name];
    } else {
      obj[passenger[i].destination].push(passenger[i].name);
    }
  }

  return obj;
}

let passenger1 = [
  { name: "Fiqi", destination: "Sukabumi" },
  { name: "Yusuf", destination: "Bandung" },
  { name: "Adiel", destination: "Sukabumi" },
  { name: "Dimitri", destination: "Surabaya" },
  { name: "Isro", destination: "Bandung" }
];

console.log(splitLocation(passenger1));

// OUTPUT
// { Sukabumi: [ 'Fiqi', 'Adiel' ],
//   Bandung: [ 'Yusuf', 'Isro' ],
//   Surabaya: [ 'Dimitri' ]
// }

let passenger2 = [
  { name: "Stefani", destination: "Jakarta" },
  { name: "Armedi", destination: "Jakarta" },
  { name: "Hardim", destination: "Bekasi" },
  { name: "Dimitri", destination: "Surabaya" },
  { name: "Wika", destination: "Jakarta" }
];

console.log(splitLocation(passenger2));

// OUTPUT
// { Jakarta: [ 'Stefani', 'Armedi', 'Wika' ],
//   Bekasi: [ 'Hardim' ],
//   Surabaya: [ 'Dimitri' ]
// }
