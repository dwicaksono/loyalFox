console.log(
  "/-----------------------splice----------------------------------/"
);

var input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
function dataHandling2(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria");
  input.splice(5, 0, "SMA Internasional Metro");
  console.log(input);
  console.log("/---------------------split---------------------------------/");

  var bulan = input[3].split("/");
  var namaBulan = "";
  //console.log(bulan)
  switch (bulan[1]) {
    case "01":
      namaBulan = "Januari";
      break;
    case "02":
      namaBulan = "Februari";
      break;
    case "03":
      namaBulan = "Maret";
      break;
    case "04":
      namaBulan = "April";
      break;
    case "05":
      namaBulan = "Mei";
      break;
    case "06":
      namaBulan = "Juni";
      break;
    case "07":
      namaBulan = "Juli";
      break;
    case "08":
      namaBulan = "Agustus";
      break;
    case "09":
      namaBulan = "september";
      break;
    case "10":
      namaBulan = "Oktober";
      break;
    case "11":
      namaBulan = "November";
      break;
    case "12":
      namaBulan = "Desember";
      break;
    default:
  }
  console.log(namaBulan);
  console.log("/---------------descending----------------------------/");
  var descending = bulan.sort(function(a, b) {
    return b - a;
  });
  console.log(descending);
  console.log("/-------------------JOIN-------------------------/");
  console.log(input[3].split("/").join("-"));
  console.log(
    "/-------------------SLICE---------------------------------------/"
  );
  console.log(input[1].slice(0, 15));
}

dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
