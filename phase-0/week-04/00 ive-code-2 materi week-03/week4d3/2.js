/**
 * 
 * GUILD RECRUITMENT
 *  Function ini akan memfilter heroes yang mendaftar ke guild ,
 *  berdasarkan recuirement yang ada ,
 *  contoh : 
 *  heroes: [
    { name: "Tanjirou", job: "Swordsman", power: 8000},
    { name: "Aqua", job: "Mage", power: 9000},
    { name: "Bakugou", job: "Fighter", power: 8800},
    { name: "Giyu", job: "Swordsman", power: 8600},
    ]
    requirement: [
    { job: "Mage", minPower: 8700 },
    { job: "Swordsman", minPower: 8200}
    ]
    maka outputnya adalah :
    { Mage: [ { name: 'Aqua', job: 'Mage', power: 9000 } ],
     Swordsman: [ { name: 'Giyu', job: 'Swordsman', power: 8600 } ] 
    }
    karena Aqua dan giyu memiliki job dan power yang memenuhi requirement di atas
 */

// function guildRecruitment(heroes, requirement) {
//   var obj = {};
//   for (let i = 0; i < heroes.length; i++) {
//     for (let j = 0; j < requirement.length; j++) {
//       if (obj[heroes[i].job] === undefined) {
//         if (
//           heroes[i].power > requirement[j].minPower &&
//           heroes[i].job === requirement[j].job
//         ) {
//           obj[heroes[i].job] = [heroes[i]];
//         }
//       } else if (
//         heroes[i].power > requirement[j].minPower &&
//         heroes[i].job === requirement[j].job
//       ) {
//         obj[heroes[i].job].push(heroes[i]);
//       }
//     }
//   }
//   return obj;
// }
function guildRecruitment(heroes, requirement) {
  var obj = {};

  for (let i = 0; i < requirement.length; i++) {
    if (obj[requirement[i].job] === undefined) {
      obj[requirement[i].job] = [];
    }
    for (let j = 0; j < heroes.length; j++) {
      if (
        heroes[j].power > requirement[i].minPower &&
        heroes[j].job === requirement[i].job
      ) {
        obj[requirement[i].job].push(heroes[j]);
      }
    }
  }

  return obj;
}
let group1 = [
  { name: "Tanjirou", job: "Swordsman", power: 8000 },
  { name: "Aqua", job: "Mage", power: 9000 },
  { name: "Bakugou", job: "Fighter", power: 8800 },
  { name: "Giyu", job: "Swordsman", power: 8600 }
];
let seek1 = [
  { job: "Mage", minPower: 8700 },
  { job: "Swordsman", minPower: 8200 }
];

console.log(guildRecruitment(group1, seek1));
// { Mage: [ { name: 'Aqua', job: 'Mage', power: 9000 } ],
//   Swordsman: [ { name: 'Giyu', job: 'Swordsman', power: 8600 } ]
// }

let group2 = [
  { name: "Muzan", job: "Mage", power: 8000 },
  { name: "Zenitsu", job: "Swordsman", power: 7800 },
  { name: "Midoriya", job: "Fighter", power: 8800 },
  { name: "Maiden", job: "Mage", power: 7000 },
  { name: "Lisbeth", job: "Blacksmith", power: 6000 },
  { name: "Kirishima", job: "Fighter", power: 8800 }
];
let seek2 = [
  { job: "Fighter", minPower: 8300 },
  { job: "Mage", minPower: 7700 },
  { job: "Blacksmith", minPower: 4300 }
];

console.log(guildRecruitment(group2, seek2));
// { Fighter:
//   [ { name: 'Midoriya', job: 'Fighter', power: 8800 },
//     { name: 'Kirishima', job: 'Fighter', power: 8800 } ],
//  Mage: [ { name: 'Muzan', job: 'Mage', power: 8000 } ],
//  Blacksmith: [ { name: 'Lisbeth', job: 'Blacksmith', power: 6000 } ]
// }
