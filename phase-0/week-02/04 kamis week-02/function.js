// Tugas 1
/*
 BUATLAH KODE FUNCTION DISINI
*/

function shoutOut() {
  console.log("Halo Function"); // Menampilkan "Halo Function!" di console
}
shoutOut();
////////////////////========================
// Tugas 2
/*
 BUATLAH KODE FUNCTION DISINI
*/
var num1 = 5;
var num2 = 6;
function calculateMultiply(num1, num2) {
  return num1 * num2;
}
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Menampilkan angka 30

////===================================
//Tugas 3
/*
 BUATLAH KODE FUNCTION DISINI
*/
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name, age, address, hobby) {
  return (
    "Nama Saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
