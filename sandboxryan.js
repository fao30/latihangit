// for (let i = 1; i <= 3; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// console.log("test");
// console.log("test kedua");

// 5, 1, 2, 3, 4

let arr = [1, 2, 3, 4, 5];
let d = 6;

for (let i = 0; i < d; i++) {
  let pengurutan = arr[0];
  arr.shift();
  arr.push(pengurutan);
}
console.log(arr);

// 23451
// 34512
// 45123
// 51234
// 12345
// 23451
