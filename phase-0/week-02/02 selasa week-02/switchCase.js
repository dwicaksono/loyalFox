var tanggal = 31;
var bulan = 12;
var tahun = 1900;

switch (true) {
  case tanggal > 0 && tanggal < 32:
    break;
  default:
    tanggal = "?";
    break;
}
switch (true) {
  case tahun > 1899 && tahun < 2201:
    break;
  default:
    tahun = "?";
    break;
}
switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
  default:
    bulan = "?";
    break;
}

switch (true) {
  case tanggal !== "?" && bulan !== "?" && tahun !== "?":
    console.log(tanggal + " " + bulan + " " + tahun);
    break;
  default:
    console.log("maaf salah input");
    break;
}
