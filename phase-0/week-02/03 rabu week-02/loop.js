// 1. Melakukan Looping Menggunakan While
//LOOPING PERTAMA
console.log("----------LOOPING PERTAMA ----------------");
var num = 2;
while (num <= 20) {
  console.log(num + " - I love coding");
  num += 2;
}
/*
LOOPING PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
*/

//LOOPING KEDUA
console.log("----------LOOPING KEDUA ----------------");
var num = 20;
while (num > 1) {
  console.log(num + " - I will become fullstack developer");
  num -= 2;
}

/*
LOOPING KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer
*/

//////////////////-----------------------------------

// 2. Melakukan Looping Menggunakan For

//LOOPING PERTAMA
console.log("----------LOOPING PERTAMA ----------------");
for (var i = 1; i <= 20; i++) {
  console.log(i + " - I love coding");
}

/*
LOOPING PERTAMA
1 - I love coding
2 - I love coding
3 - I love coding
4 - I love coding
5 - I love coding
6 - I love coding
7 - I love coding
8 - I love coding
9 - I love coding
10 - I love coding
11 - I love coding
12 - I love coding
13 - I love coding
14 - I love coding
15 - I love coding
16 - I love coding
17 - I love coding
18 - I love coding
19 - I love coding
20 - I love coding
*/

//LOOPING KEDUA
console.log("----------LOOPING KEDUA ----------------");
for (var i = 20; i >= 1; i--) {
  console.log(i + " - I will become fullstack developer");
}
/*
LOOPING KEDUA
20 - I will become fullstack developer
19 - I will become fullstack developer
18 - I will become fullstack developer
17 - I will become fullstack developer
16 - I will become fullstack developer
15 - I will become fullstack developer
14 - I will become fullstack developer
13 - I will become fullstack developer
12 - I will become fullstack developer
11 - I will become fullstack developer
10 - I will become fullstack developer
9 - I will become fullstack developer
8 - I will become fullstack developer
7 - I will become fullstack developer
6 - I will become fullstack developer
5 - I will become fullstack developer
4 - I will become fullstack developer
3 - I will become fullstack developer
2 - I will become fullstack developer
1 - I will become fullstack developer
*/

/////--------------------

// 3. Angka Ganjil dan Genap
//counter 1
var angka = 1;
var jumlah = 100;
for (angka; angka <= jumlah; angka++) {
  if (angka % 2 === 0) {
    console.log("genap");
  } else {
    console.log("ganjil");
  }
}

//counter 2 kelipatan 3
var angka = 1;
var jumlah = 100;
for (angka; angka <= jumlah; angka += 2) {
  if (angka % 3 === 0) {
    console.log(angka + " KELIPATAN 3");
  }
}

//counter 5 kelipatan 6
var angka = 1;
var jumlah = 100;
for (angka; angka <= jumlah; angka += 5) {
  if (angka % 6 === 0) {
    console.log(angka + " KELIPATAN 6");
  }
}

//counter 9 kelipatan 10
var angka = 1;
var jumlah = 100;
for (angka; angka <= jumlah; angka += 9) {
  if (angka % 10 === 0) {
    console.log(angka + " KELIPATAN 10");
  }
}
