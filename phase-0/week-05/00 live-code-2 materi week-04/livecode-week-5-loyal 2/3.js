/**
 * ======================
 * TRANSFER WINDOW FILTER
 * ======================
 *
 * Function ini menerima 2 parameter yaitu:
 * 1. list posisi dan range harga pada posisi tersebut yang di inginkan oleh club bola
 * 2. list pemain yang tersedia pada musim transfer window saat ini
 *
 * Buatlah sebuah proses yang dapat mencari pemain yang memungkinkan dapat dibeli
 * oleh club sesuai range harga pada posisi yang di inginkan.
 *
 * contoh :
 * scoutlist:
 * [
 *   { pos: "Forward", range: "1000000-2000000" },
 *   { pos: "Midfielder", range: "1500000-1800000" }
 * ]
 *  playerlist:
 * [
 *   { name: "Ronaldo", position: "Forward", price: 1500000 },
 *   { name: "Lampard", position: "Midfielder", price: 2000000},
 *   { name: "Vidal", position: "Midfielder", price: 900000}
 * ]
 *
 * Maka Output yang di harapkan adalah :
 *  [
 *   { pos: "Forward", range: "1000000-2000000", suggestedPlayer = ["Ronaldo"] },
 *   { pos: "Midfielder", range: "1500000-1800000", suggestedPlayer = [] }
 * ]
 * karena pada posisi midfielder walaupun posisi terpenuhi tetapi range harga tidak terpenuhi,
 * maka suggested player tidak ada (array kosong) pada posisi forward karena
 * memiliki posisi yang sama dan harganya memenuhi range, maka
 * suggested player berisi nama pemain yang lolos requirement scoutlist nya
 *
 * RULES:
 * - Dilarang menggunakan .map .filter atau built-in function yang serupa
 * - Boleh menggunakan push unshift pop shift split splice concat
 * - Boleh menggunakan built in function untuk mengubah string menjadi number
 */

function transferWindowFilter(scoutList, playerList) {
  console.log();
  // Write your code here
  for (var i = 0; i < scoutList.length; i++) {
    scoutList[i].suggestedPlayer = [];
    var [min, max] = scoutList[i].priceRange.split("-");

    for (var j = 0; j < playerList.length; j++) {
      if (
        playerList[j].position == scoutList[i].pos &&
        playerList[j].price >= Number(min) &&
        playerList[j].price <= Number(max)
      ) {
        scoutList[i].suggestedPlayer.push(playerList[j].name);
      }
    }
  }
  return scoutList;
  // var arrRange = [];
  // var obj = {};
  // for (let i = 0; i < scoutList.length; i++) {
  //   var splitrange = scoutList[i].priceRange.split("-");
  //   console.log(splitrange[0]);
  //   arrRange.push(splitrange);
  //   if (obj[scoutList[i].pos] === undefined) {
  //     obj[scoutList[i].pos] = {
  //       pos: scoutList[i].pos,
  //       priceRange: scoutList[i].priceRange,
  //       suggestedPlayer: [],
  //       min: Number(splitrange[0]),
  //       max: Number(splitrange[1])
  //     };
  //   }
  // }

  // var res = [];
  // for (const key in obj) {
  //   for (let i = 0; i < playerList.length; i++) {
  //     if (
  //       obj[key].pos === playerList[i].position &&
  //       playerList[i].price >= obj[key].min &&
  //       playerList[i].price <= obj[key].max
  //     ) {
  //       obj[key].suggestedPlayer.push(playerList[i].name);
  //     }
  //   }
  //   res.push({
  //     pos: obj[key].pos,
  //     priceRange: obj[key].priceRange,
  //     suggestedPlayer: obj[key].suggestedPlayer
  //   });
  // }
  // return res;
}

var scoutPosition1 = [
  { pos: "Midfielder", priceRange: "1000000-2000000" },
  { pos: "Center Back", priceRange: "1500000-2000000" }
];

var availablePlayer1 = [
  { name: "Cristiano Ronaldo", position: "Forward", price: 2300000 },
  { name: "Van dijk", position: "Center Back", price: 3300000 },
  { name: "Cesc Fabregas", position: "Midfielder", price: 1800000 },
  { name: "Thiago Motta", position: "Midfielder", price: 1200000 }
];

console.log(transferWindowFilter(scoutPosition1, availablePlayer1));
// OUTPUT:
// [{ pos: 'Midfielder',
//    priceRange: '1000000-2000000',
//    suggestedPlayer: [ 'Cesc Fabregas', 'Thiago Motta' ]
//  },
//  { pos: 'Center Back',
//    priceRange: '1500000-2000000',
//    suggestedPlayer: []
//  }]

var scoutPosition2 = [
  { pos: "Goalkeeper", priceRange: "1800000-3200000" },
  { pos: "Forward", priceRange: "1500000-2000000" },
  { pos: "Center Back", priceRange: "600000-1500000" }
];

var availablePlayer2 = [
  { name: "Lionel Messi", position: "Forward", price: 3000000 },
  { name: "Rio Ferdinand", position: "Center Back", price: 700000 },
  { name: "Andres Iniesta", position: "Midfielder", price: 2000000 },
  { name: "De gea", position: "Goalkeeper", price: 2200000 },
  { name: "Kepa", position: "Goalkeeper", price: 1000000 }
];

console.log(transferWindowFilter(scoutPosition2, availablePlayer2));
// OUTPUT:
// [{ pos: 'Goalkeeper',
//   priceRange: '1800000-3200000',
//   suggestedPlayer: [ 'De gea' ] },
// { pos: 'Forward',
//   priceRange: '1500000-2000000',
//   suggestedPlayer: [] },
// { pos: 'Center Back',
//   priceRange: '600000-1500000',
//   suggestedPlayer: [ 'Rio Ferdinand' ]
// }]
