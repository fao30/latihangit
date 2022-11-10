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
console.log(angkaKiri([1, 2, 3, 4, 5]));

//latihan nested loop

function pohonNatal(number) {
  // let daunCemara = "";
  //printing sh
  for (let i = 0; i <= number; i++) {
    let daunCemara = "";
    //printing spaces
    for (let j = i; j <= number; j++) {
      daunCemara += " ";
    }
    //printing pattern
    for (let k = 0; k < i * 2 - 1; k++) {
      daunCemara += "*";
    }
    console.log(daunCemara);
  }
}
pohonNatal(5);
// number =
// i=
// j= 0<=0 01<=1 012<=2 0123<=3 01234<=4 012345<= 5 j=0
//  = 012345<=5 12345<=5 2345<=5 345<= 5 45<= 5 5<=5

//0123456
//
//
// k=
// daunCemara =

for (let i = 1; i < 6; i++) {
  let gjg = "";
  for (let j = 0; j < 6; j++) {
    if (i === 1 || i === 5) {
      gjg += "*";
    } else {
      if (j === 0 || j === 5) {
        gjg += "*";
      } else {
        gjg += " ";
      }
    }
  }

  console.log(gjg);
}
for (let i = 0; i < 7; i++) {
  let gud = "";
  for (let j = 0; j < i; j++) {
   if (i===6 ) {
      gud+= "*"
   } else {
    if (j===0 || j ===i-1) {
      gud += "*"
    } else {
      gud += " "
    }
   }
    
  }
  console.log(gud);
}
