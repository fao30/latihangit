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
console.log(nameFunction(array, 4));

console.log("today code");
