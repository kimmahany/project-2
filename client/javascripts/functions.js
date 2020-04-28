// jshint esversion: 6

// Req. 3-A
function reverseWord1(word) {
  let string = word.split("");
  let revArr = string.reverse();
  let joinArr = revArr.join("");
  for (var i = 0; i < word.length; i++) {}
  return joinArr;
}
let revWords1 = str => {
  let arr = str.split(" ");
  let result = "";
  for (var i = 0; i < arr.length; i++) {
    result = result + reverseWord1(arr[i]) + " ";
  }
  return result;
};

// Req 3-B
function reverseWord2(word) {
  let string = word.split("");
  let revArr = string.reverse();
  let joinArr = revArr.join("");
  for (var i = 0; i < word.length; i++) {}
  return joinArr;
}
let revWords2 = str => {
  let arr = str.split(" ");
  let result = "";
  arr.forEach(function(item) {
    let current = item;
    let reverseWord = reverseWord2(current);
    result = result + reverseWord + " ";
  });
  return result;
};

// Req. 3-C
function reverseWord3(word) {
  let string = word.split("");
  let revArr = string.reverse();
  let joinArr = revArr.join("");
  for (var i = 0; i < word.length; i++) {}
  return joinArr;
}
let revWords3 = str => {
  let arr = str.split("");
  let result = "";
  for (char of arr) {
    result = char + result;
  }
  return result;
};

// extra credit
let containsDuplicates = str => {
  let charCounts = new Array(26).fill(0),
    ASCIIcode;
  console.log(charCounts);
  for (let i in str) {
    ASCIIcode = str[i].toUpperCase().charCodeAt(i) - 65;
    //console.log("ASCIIcode = " + ASCIIcode);
    if (charCounts[ASCIIcode] > 0) {
      return true;
    } else {
      charCounts[i]++;
      console.log(charCounts);
    }
  }
  return false;
};
