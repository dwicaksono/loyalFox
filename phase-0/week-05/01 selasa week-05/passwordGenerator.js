function changeVocals(str) {
  //code di sini
  var result = "";
  var lowAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < lowAlpha.length; j++) {
      if (str[i] === lowAlpha[j] && str[i] === "a") {
        result += lowAlpha[j + 1];
      } else if (str[i] === lowAlpha[j] && str[i] === "i") {
        result += lowAlpha[j + 1];
      } else if (str[i] === lowAlpha[j] && str[i] === "u") {
        result += lowAlpha[j + 1];
      } else if (str[i] === lowAlpha[j] && str[i] === "e") {
        result += lowAlpha[j + 1];
      } else if (str[i] === lowAlpha[j] && str[i] === "o") {
        result += lowAlpha[j + 1];
      } else if (str[i] === lowAlpha[j] && str[i] === "A") {
        result += lowAlpha[j + 1];
      } else if (str[i] === lowAlpha[j]) {
        result += lowAlpha[j];
      }
    }
  }
  result;
  return result;
}

function reverseWord(str) {
  //code di sini
  var revers = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revers += str[i];
  }
  revers;
  return revers;
}

function setLowerUpperCase(str) {
  //code di sini
  var lowAndup = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      lowAndup += str[i].toUpperCase();
    } else if (str[i] === str[i].toUpperCase()) {
      lowAndup += str[i].toLowerCase();
    }
  }

  return lowAndup;
}

function removeSpaces(str) {
  //code di sini
  var noSpace = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      noSpace += str[i];
    }
  }

  return noSpace;
}

function passwordGenerator(name) {
  //code di sini
  var changevocals = changeVocals(name);
  var reverseword = reverseWord(changevocals);
  var lowUp = setLowerUpperCase(reverseword);
  var removespaces = removeSpaces(lowUp);
  if (name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  return removespaces;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
