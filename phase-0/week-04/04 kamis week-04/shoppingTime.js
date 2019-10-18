function shoppingTime(memberId, money) {
  // you can only write your code here!

  var list = [
    { brand: "Sepatu Stacatu", harga: 1500000 },
    { brand: "Baju Zoro", harga: 500000 },
    { brand: "Baju H&N", harga: 250000 },
    { brand: "Sweater Uniklooh", harga: 175000 },
    { brand: "Casing Handphone", harga: 50000 }
  ];

  var tampung = [];
  var obj = {};
  obj.memberId = memberId;
  obj.money = money;
  obj.listPurchased = tampung;

  if (memberId === "" || money === 0) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else if (memberId === undefined && money === undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }
  for (let i = 0; i < list.length; i++) {
    if (money >= list[i].harga) {
      tampung.push(list[i].brand);
      money = money - list[i].harga;
    }
  }
  obj.changeMoney = money;
  return obj;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ///Mohon maaf, toko X hanya berlaku untuk member saja
