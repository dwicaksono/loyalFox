/**
 *
 *  Belanja
 *
 *  Function ini akan membalikkan output yang berupa daftar belanjaan
 *  yang dapat di beli dengan uang yang ada.
 *  Barang yang menjadi prioritas di beli yaitu dari yang paling mahal dahulu
 *
 *  contoh:
 *  1. Belanjaan: [[20000, "bola"], [15000, "sepatu"], [50000, "susu"]]
 *  2. Uang: 65000
 *
 *  Maka barang yang dapat di beli adalah
 *  Output: ['susu', 'sepatu']
 *
 *  RULES:
 *  - Dilarang menggunakan OBJEK
 *  - Dilarang menggunakan .filter, .map, Math.max(), .sort, Math.min()
 */

function belanja(belanjaan, uang) {
  // console.log(belanjaan, uang)

  var temp;
  for (var i = 0; i < belanjaan.length; i++) {
    for (var j = 0; j < belanjaan.length - i; j++) {
      if (parseFloat(belanjaan[j]) < parseFloat(belanjaan[j + 1])) {
        temp = belanjaan[j];
        belanjaan[j] = belanjaan[j + 1];
        belanjaan[j + 1] = temp;
      }
    }
  }

  var res = [];
  for (let i = 0; i < belanjaan.length; i++) {
    if (uang >= belanjaan[i][0]) {
      uang = uang - belanjaan[i][0];
      res.push(belanjaan[i][1]);
    }
  }

  if (!res.length) {
    return "Tidak ada yang bisa dibeli";
  }
  return res;
}

console.log(
  belanja(
    [[150000, "Batik Jawa"], [250000, "Wayang"], [30000, "Gantungan Kunci"]],
    410000
  )
);
// ["Wayang", "Batik Jawa"]
console.log(
  belanja([[70000, "KFC"], [14000, "Bakso"], [20000, "elAyam Penyet"]], 85000)
);
// ["KFC", "Bakso"]
console.log(
  belanja([[200000, "Avanza"], [500000, "Innova"], [450000, "Terios"]], 150000)
);
// Tidak ada yang bisa dibeli
console.log(
  belanja(
    [[45000, "Starbucks"], [23000, "Jus Alpukat"], [10000, "Marimas"]],
    100000
  )
);
//["Starbucks", "Jus Alpukat", "Marimas"]
