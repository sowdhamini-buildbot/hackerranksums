function leapYear(year) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log("leapYear");
  } else {
    console.log("not leap year");
  }
}
leapYear(2012);

number = 5;
switch (number) {
  case 5:
    console.log("number is 5");
    break;
  case 15:
    console.log("number is 15");
    break;
  case 25:
    console.log("number is 25");
    break;
  default:
    console.log("nan");
}

var array = [6, 7, 8, 9, 20, 22, 9, 7];
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    console.log(array[i]);
  }
}

console.log(prompt("select one").indexOf("y"));

function engineIndicator(engine) {
  if ((engine = "green")) {
    console.log("engine started");
  } else if ((engine = "green blinking")) {
    console.log("engine started");
  } else {
    console.log("engines off");
  }
}
engineIndicator("green");
let day = 2;
switch (day) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;

  default:
    console.log("not a weekend");
}

let array = [2, 3, 13, 18, 5, 38, 10, 11, 0, 104];
let evens = [],
  odds = [];
for (i = 0; i > array.length; i++) {
  if (i % 2 == 0) {
    console.log(evens.push());
  } else {
    console.log(odds.push());
  }
}
function findLargest(num1, num2) {
  if (num1 > num2) {
    console.log("greatest");
  } else if (num1 < num2) {
    console.log("smallest");
  } else {
    console.log("equal");
  }
}
findLargest(54, 89);
findLargest(189, 89);
findLargest(89, 89);

var array = [4, 8, 7, 13, 12, 56];
var sum = 0;
for (i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
console.log(sum);

a = [1, 2, 3];
b = [3, 2, 1];
function points(a, b) {
  apoints = 0;
  bpoints = 0;
  for (i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      console.log(i + "point");
    }
    if (a[i] < b[i]) {
      console.log(i + "point");
    }
  }
  return [apoints, bpoints];
}
console.log(points(a, b));

var arr = [
  //diagonal difference
  [2, 3, 4],
  [4, 5, -6],
  [7, 5, 3],
];
function digonalDifference(arr) {
  let left_diagonal = 0;
  let right_diagonal = 0;
  for (i = 0; i < arr.length; i++) {
    left_diagonal = left_diagonal + arr[i][i];
    right_diagonal = right_diagonal + arr[i][arr.length - i - 1];
  }
  let result = Math.abs(left_diagonal - right_diagonal);
  return result;
}
console.log(digonalDifference(arr));

for (let i = 1; i <= 1; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(i, j);
  }
}
//staircase
function stairCase(n) {
  for (i = 0; i < n; i++) {
    let result = " ".repeat(n - i) + "#".repeat(i);
    console.log(result);
  }
}
stairCase(6);

var person = ["gh", "fg", 4, 5];
console.log(person.toString());
var array = [4, 6, 8, 9, 10];
sum = 0;
for (i = 0; i < array.length; i++) {
  sum = sum + array[i];
}
console.log(sum);

function compareTriplets(a, b) {
  let points = 0;
  let alice = 0;
  let bob = 0;
  for (i = 0; i < array.length; i++) {
    if (a[i] > b[i]) {
      alice++;
    } else if (a[i] < b[i]) {
      bob++;
    }
    points = [alice, bob];
    return points;
  }
}
console.log(compareTriplets([3, 4, 5], [6, 1, 5]));

function twoStrings(s1, s2) {
  for (i = 0; i < s1.length; i++) {
    map[s1[i]] = true;
  }
  for (i = 0; i < s2.length; i++) {
    if (map[s2[i]]);
    return "yes";
  }
}
return "no";

function alternatingCharacters(s) {
  let deleteCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      deleteCount++;
    }
  }

  return deleteCount;
}
