// FaoCamp 06.11.2022

// Soal 1
/* 
[1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2] -> [4, 5, 1, 2, 3] -> [5, 1, 2, 3, 4]
expected output: [5, 1, 2, 3, 4]
*/

// given
let array = [1, 2, 3, 4, 5];

// answer

let newArray = [];
for(let i = 0; i < array.length-1; i++){
   array.push(array.shift());
    // console.log(array);
}
console.log(array);




