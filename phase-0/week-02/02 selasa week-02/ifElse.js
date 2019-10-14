//Contoh input
var nama = "";
var peran = "";

if (nama === "" && peran === "") {
  // Output untuk Input nama = '' dan peran = ''
  console.log("Nama harus diisi!");
} else if (nama === "" || peran === "") {
  //Output untuk Input nama = 'Mikael' dan peran = ''
  console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else if (peran === "Ksatria") {
  //Output untuk Input nama = 'Nina' dan peran 'Ksatria'
  console.log("Selamat datang di Dunia Proxytia, " + nama);
  console.log(
    "Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu!"
  );
} else if (peran === "Tabib") {
  //Output untuk Input nama = 'Danu' dan peran 'Tabib'
  "Selamat datang di Dunia Proxytia, " + nama;
  "Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka.";
} else if (peran === "Penyihir") {
  //Output untuk Input nama = 'Zero' dan peran 'Penyihir'
  console.log("Selamat datang di Dunia Proxytia, " + nama);
  console.log(
    "Halo " +
      peran +
      " " +
      nama +
      ", ciptakan keajaiban yang membantu kemenanganmu!"
  );
}
