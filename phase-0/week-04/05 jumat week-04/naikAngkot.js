function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  //your code here
  var tarif = 2000;
  var count = 0;
  var arr = [];
  var obj = {};

  for (let i = 0; i < arrPenumpang.length; i++) {
    var dari = rute.indexOf(arrPenumpang[i][1]);

    var tujuan = rute.indexOf(arrPenumpang[i][2]);

    var bayar = (tujuan - dari) * tarif;
    var obj = {};
    (obj.penumpang = arrPenumpang[i][0]),
      (obj.naikDari = arrPenumpang[i][1]),
      (obj.tujuan = arrPenumpang[i][2]),
      (obj.bayar = bayar);

    arr.push(obj);
  }
  return arr;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
