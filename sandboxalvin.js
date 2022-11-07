// console.log("hallo");
// 12345
// 23451
// 34512
// 45123
// soal satu faoTech 6.11
let array = [1, 2, 3, 4, 5];
function nameFunction(array, parameter2) {
  for (let i = 0; i < parameter2; i++) {
    // console.log(array[i]);
    array.push(array.shift());
    // array.unshift(array.pop());
    // console.log(array);
  }
  return array;
}
// console.log(nameFunction(array, 4));

// console.log("today code");
// console.log("yes code");

// 10 Simple Javascript For-Loop Exercises
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627
let result = 0;
let result3 = 0;
const resultOfArray = (param1, param2) => {
  for (let i = 0; i < param1.length; i++) {
    result += param1[i];
    // console.log(result);
    let result2 = 0;
    for (let j = 0; j < param2.length; j++) {
      result2 += param2[j];
      // console.log(result2);
    }
    result3 = result + result2;
  }
  return result3;
};
// console.log(resultOfArray(arr_1, arr_2));

let n1 = 22;
// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
const output = (param1) => {
  for (let i = 0; i < param1; i = i + 2) {
    if (i % 2 === 0) {
    }
  }
  return param1;
};
// console.log(output(n1));

for (let i = 0; i < n1; i = i + 2) {
  if (i % 2 === 0) {
  }
  // console.log(i);
}

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output:
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
let newArray = [];
const reverse = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr.reverse();
  }
  return arr;
};
// console.log(reverse(arr));

for (let i = 0; i < arr.length; i++) {
  arr.reverse();
}
// console.log(arr);

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
// Example output:
// [12, 7, 16]
let num = [];
for (let i = 0; i < arr_3.length; i++) {
  num.push(arr_3[i] + arr_4[i]);
}
// console.log(num);

let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24
// for (let i = 0; i < n2.length; i++) {
//   n2[i] **;
// }
// console.log(n2);

const countries = ["columbia", "indonesia", "russia", "amerika"];
const [a, b, c, d] = countries;
console.log(a, b, c, d);

//spread array values
const [m, ...y] = countries;
console.log(m, y);
