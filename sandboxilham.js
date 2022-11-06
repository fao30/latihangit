console.log("halo");

// 12345
// 23451
// 34512
// 45123
// expected output: 51234

function angkaKiri(a, b) {
  for (let i = 0; i < b; i++) {
    let angka = a[0];
    a.shift();
    a.push(angka);
  }
  return a;
}
console.log(angkaKiri(1,5));