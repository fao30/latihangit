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

// let arr = [1, 2, 3, 4, 5];
// let d = 6;

// for (let i = 0; i < d; i++) {
//   let pengurutan = arr[0];
//   arr.shift();
//   arr.push(pengurutan);
// }
// console.log(arr);

// 23451
// 34512
// 45123
// 51234
// 12345
// 23451

// console.log("test");

// console.log("naon sih");
// console.log("test")

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j]);
//   }
// }

// const mobilSaya = {
//   nama: "fao",
//   merek: "lada",
//   tahun: 1999,
//   sellAble: true,
// };

// const sellAble = mobilSaya.sellAble;
// console.log(sellAble);

// const getName = mobilSaya.nama;
// console.log(getName);

// if (mobilSaya.nama === "Fakhrul") {
//   console.log("Namanya bener om");
// } else {
//   console.log("Namanya salah tuh");
// }

// const antrianBalnitsa = ["abdur", "fakhrul", "firly"];
// if (antrianBalnitsa[0] === "Firly") {
//   console.log("skip dulu");
// } else {
//   console.log("Utamakan Firly");
// }

// const antrianBalnitsa = ["abdur", "fakhrul", "firly"];
// console.log(antrianBalnitsa[2]);
// console.log(antrianBalnitsa[0]);
// console.log(antrianBalnitsa[1]);

// const antrianDopka = ["Abdur", "Fakhrul", "Firly", "Ilham"];
// console.log(
//   `Yang masuk ke dopka adalah ${antrianDopka[3]}, ${antrianDopka[1]}, ${antrianDopka[0]}, ${antrianDopka[2]}`
// );

// const daftarPusaka = ["Literatur", "History", "medicine"];

// if (daftarPusaka[1] === "History") {
//   console.log("Urutan benar")
// } else {
//   console.log("Urutan salah");
// }

// bikin KONDISI, kalau daftar pusaka urutan ke 2 adalah History makan tulis "Urutan Benar" kalau salah tulis "urutan salah"

// kalau:
// = modify/create, deklarasi kondisi
// === comparation

// const urutanSembako = ['Joyce', 'Fakhrul', 'Mondo'];
// const Vahtyor = {
//   nama: 'Maki',
// };

// if (urutanSembako[2] === "Mondo" && Vahtyor.nama === "Maki") {
//   console.log("Bisa masuk tanpa propusk")
// } else {
//   console.log("Ga boleh masuk")
// }

// Buat KONDISI, kalau urutan ke 3 sama dengan "Mondo" dan vahtyornya adalah "Maki" maka print "Bisa masuk tanpa propusk" kalau tidak "Ga boleh masuk"

// Buat sebuah array yang berisi nama pekerja "fao", "arka", "joko" dan sebuah object boss dan beri nama "gill"

// kalau pekerja ke 1 adalah "fao" atau bosnya adalah "gill" maka console.log("boleh ga kerja") kalau tidak console.log("Harus kerja")

// const namaPekerja = ['fao', 'arka', 'arka'];
// const namaBoss = {
//   nama: 'gill',
// }

// if (namaPekerja[0]=== 'fao' || namaBoss.nama === 'gill') {
//   console.log("boleh ga kerja");
// } else {
//   console.log("harus kerja");
// }

// const guru = {
//   nama: "ansor",
//   umur: 25,
//   hobi: "makan",
// };

// let newGuru = "";
// if ((guru.nama = "ansor")) {
//   newGuru += "namanya adalah ansor";
// }
// if ((guru.umur = "25")) {
//   newGuru += " umurnya adalah25";
// }
// if ((guru.hobi = "makan")) {
//   newGuru += " dan hobinya adalah makan";
// }

// console.log(newGuru);

// buat kondisi
// kalau namanya ansor, buat string "namanya ansor"

// kalau umurnya 25 tambah string
// "umurnya 25"

// kalau hobinya makan tambah string "dan hobinya makan"

// buatlah function dengan nama SIstemBalov yang menerima params subotnik, bersihinKuhnya, nilaiKuliah

// kalau subotnik sering dapat nilai 5 kalau tidak sering dapat nilai 4 kalau jarang dapat nilai 3 kalau ga pernah dapat nilai 2

// kalau bersihinKuhnya sering dapat nilai 4 kalau tidak sering dapat nilai 3 kalau jarang dapat nilai 2 kalau ga pernah dapat nilai 1

// kalau nilaiKuliah otlicna dapat nilai 5 kalau haraso dapat nilai 4 kalau udov dapat nilai 3 kalau else dapat nilai 2

// dan semua nilai diatas kalau lebih dari 9 maka return "Zaselit" kalau kurang maka "Tidak Zaselit"

// testCase:
// SIstemBalov("sering","sering","otlicna")
// SIstemBalov("jarang","tidak sering","udov")
// SIstemBalov("jarang","ga pernah","udov")

// 18 september 2022

// const dataAing = 22;
// console.log(dataAing);

// const dataUniv = {
//   name: "FaoCamp University",
//   age: 2,
//   new: true,
// };

// (dataUniv.name = "Kazan Federal University"),
//   (dataUniv.branch = 5),
//   console.log(dataUniv);

// const studentData = ["fao", "firly", "alvin", "ros", "dodo"];
// console.log(studentData[2]);

// const kantorPos = {
//   JNE: true,
//   Pegawai: 27,
//   Standar: "cepat",
//   pegawaiOnDuty: ["Maman", "Abdur", "Kodir"],
//   cabang: {
//     melawai: {
//       jumlahPetugas: 5,
//       satpam: [
//         {
//           nama: "agus",
//           umur: 25,
//         },
//         {
//           nama: "Jaya",
//           umur: 20,
//         },
//       ],
//     },
//     jakarta: {
//       jumlahPetugas: 7,
//       satpam: [
//         {
//           nama: "Mari",
//           umur: 12,
//         },
//         {
//           nama: "Okta",
//           umur: 20,
//         },
//       ],
//     },
//   },
// };

// kantorPos.cabang.jakarta.satpam[1].umur = 25,
//   console.log(kantorPos.cabang.jakarta.satpam[1].umur);

// OKtav,25

// kantorPos.cabang.jakarta.satpam[1] = {
//   nama: "Oktav",
//   umur: 25,
//   pendidikan: "SMA",
// }
// console.log(kantorPos.cabang.jakarta.satpam);

// const murid = ["a", "b"]
// murid.push("c")
// console.log(murid);

// const murid = ["a", "b", "c"]
// muridNew = murid.pop()
// console.log(muridNew);

// const umur = 2
// const angka = 5
// const baru = umur+angka
// console.log(baru);

// const hargaShaurma = [120, 200, 220]
// hargaShaurma.pop()
// hargaShaurma.push(300)
// console.log(hargaShaurma);

// const newestHarga = [250, 270]
// newestHarga.push(hargaBaru)
// console.log(newestHarga);

// const urutan = [1,2,4,5]
// urutan.push(6) // [1, 2, 4, 5, 6]
// const takeOut = urutan.pop() // [1, 2, 4, 5] {6} tersimpan di takeOut\
// urutan.push(takeOut) // [1, 2, 4, 5, 6]
// urutan.push(5) // [1, 2, 4, 5, 6, 5]
// console.log(urutan);

// const array = [2, 4, 6, 6];
// array.pop();
// const getOne = array.pop();
// const getTwo = array.shift();
// array.unshift(getOne);
// array.pop();
// array.push(getTwo);
// console.log(array);

// const rumahSakit = {
//   namaRumah: "Ayah Bunda",
//   cabang: {
//     Surabaya: {
//       jumlahPetugas: 5,
//       Dokter: [
//         {
//           nama: "agus",
//           umur: 25,
//           namaAnak: ["Mansur", "Anwar"],
//         },
//         {
//           nama: "Jaya",
//           umur: 20,
//           namaAnak: ["Mansur", "Jagur"],
//         },
//       ],
//     },
//     Jakarta: {
//       jumlahPetugas: 7,
//       satpam: [
//         {
//           nama: "Mari",
//           umur: 12,
//           namaAnak: ["Malawi", "Ansor"],
//         },
//         {
//           nama: "Okta",
//           umur: 20,
//           namaAnak: ["joki", "Balay", "Mega"],
//         },
//       ],
//     },
//   },
// };

// rumahSakit.cabang.Jakarta.satpam[1].namaAnak.push("Susilo");
// console.log(rumahSakit.cabang.Jakarta.satpam[1].namaAnak[3]);

// ada petugas di rumah sakit Jakarta, bapak Okta, lahir anak baru namanya "Susilo"
// pak mari anak pertama wafat, terus si pak agus lahir anak baru, nama nya anak pertama pak mari

// const anakBaru = rumahSakit.cabang.Jakarta.satpam[0].namaAnak.shift();
// rumahSakit.cabang.Surabaya.Dokter[0].namaAnak.push(anakBaru)

// console.log(rumahSakit.cabang.Jakarta.satpam[0].namaAnak);
// console.log(rumahSakit.cabang.Surabaya.Dokter[0].namaAnak);

// function cariNilai(nama, nilai) {
//   let arti;
//   if (nilai >= 90 && nilai < 100) {
//     arti = "S";
//   } else if (nilai >= 80 && nilai <= 90) {
//     arti = "A";
//   } else if (nilai >= 70 && nilai <= 80) {
//     arti = "C";
//   } else if (nilai >= 60 && nilai <= 70) {
//     arti = "D";
//   } else {
//     arti = "E";
//   }
//   console.log(`${nama} mendapatkan nilai ${arti}`);
// }

// cariNilai("Ryan", 75);

// var age = prompt("What is your age?");

// if (Number(age) < 18) {
//   alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
//   alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
//   alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// 1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

// 2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

// BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"

// FUNCTION;
// const subjectUniversity = ["math", "chemistry", "japanese"];
// subjectUniversity.unshift("advanced english");
// const deletedSubject = subjectUniversity.pop();
// console.log(subjectUniversity);

// const famousRestaurants = {
//   name: "Gordon",
//   year: 1995,
//   location: "London, England",
//   food: "Nice Fucking Food",
// };

// let newName = famousRestaurants.name;
// let newFood = famousRestaurants.food;

// console.log(famousRestaurants);

// module.exports = { famousRestaurants, newName, newFood };

// console.log(module.exports);

// const dataRumah = {
//   streetName: "Butlerova",
//   dataPenghuni: ["babajon", "aminjon", "babijon", "memekjon"],
//   electricityStatus: false,
//   yearBuilt: 2022,
//   listContractor: [
//     {
//       name: "alvinjon",
//       umur: 50,
//     },
//     {
//       name: "dodojon",
//       umur: 55,
//     },
//     {
//       name: "rosjon",
//       umur: 60,
//     },
//   ],
// };

// (dataRumah.listContractor[1].umur = 50),
//   console.log(dataRumah.listContractor[1]);

// dataRumah.listContractor.push({ //ini nambahin data berupa objek ke array
//   name: "fao",
//   umur: 20,
// });

// console.log(dataRumah.listContractor);

// function pertambahan(x, y) {
//   let sum = x + y;
//   return sum;
// }

// const hasil = pertambahan(5, 5);
// console.log(hasil);

// function dataDiri(x, y) {
//   const aingMaung = {
//     nama: x,
//     umur: y,
//   };
//   return aingMaung;
// }

// const mySelf = dataDiri("Ryan", 25);
// console.log(mySelf);

//hint: kirim arg ke nama dan umur

// function barisan([a, b, c]) {
//   const newNew = ["F", "A", "O"];
//   newNew.push("F");
//   return newNew;
// }

// const hasil = barisan(["F", "A", "O"]);
// console.log(hasil);

// ini nambah ke length

// function barisan1(array) {
//   const newArr = array.push("F");
//   return newArr;
// }

// const hasil = barisan1(["F", "A", "O"]);
// console.log(hasil); // 4

// ini FAOF

// function barisan2(array) {
//   const newArr = array;
//   newArr.push("F");
//   return newArr;
// }

// const hasil2 = barisan2(["F", "A", "O"]);
// console.log(hasil2); // ['F', 'A', 'O', 'F']

// function perubahanData(x, y) {
//   const data = x;
//   x.alamat = x.alamat + y;
//   return data;
// }

// const ubahData = perubahanData({ nama: "Fakhrul", alamat: "" }, "Bekasi");
// console.log(ubahData);

// function perhitunganPajak(x, y) {
//   return (x * y) / 100;
// }
// const hasil3 = perhitunganPajak(2000000, 10);
// console.log(hasil3);

// function perubahanData(nama, address, umur) {
//   nama.alamat = address;
//   nama.age = umur; // ini nambah key baru
//   nama.thisYear[1] = 0; // merubah value dalam array
//   nama.thisYear.push(2, 2);
//   nama.alamat = {
//     // nambah object.key = value, ke dalam object
//     namaJalan: "Jl. Kumaha Aing RT/RW 003/003",
//     nomorRumah: "12C",
//   };
//   return nama;
// }

// const hasil = perubahanData(
//   { nama: "Fakhrul", alamat: "", thisYear: [2, 4] },
//   "Bekasi",
//   22
// );
// console.log(hasil);

// const nama1 = {
//   nama: "Fakhrul",
//   alamat: "",
//   thisYear: [2, 4],
// };
// console.log("INI DILUAR FUNCTION", nama1);

// function perubahanData(nama, address, umur) {
//   nama.alamat = address;
//   console.log(nama, "HALOOO"); // ini scope global
//   nama.age = umur; // ini nambah key baru
//   nama.thisYear[1] = 0; // merubah value dalam array
//   nama.thisYear.push(2, 2);
//   nama.alamat = {
//     // nambah object.key = value, ke dalam object
//     namaJalan: "Jl. Kumaha Aing RT/RW 003/003",
//     nomorRumah: "12C",
//   };
//   return nama;
// }

// const hasil = perubahanData(
//   { nama: "Fakhrul", alamat: "", thisYear: [2, 4] },
//   "Bekasi",
//   22
// );
// console.log("INI HASIL FUNCTION", hasil);

// function royalEstet(pavilion) {
//   pavilion.jumlahPenghuni.push({
//     nama: "asep",
//     umur: 55,
//     jumlahKeluarga: [
//       {
//         istri: "christina",
//         anak: ["cecep", "kasep"],
//       },
//     ],
//   });
//   return pavilion;
// }

// const penghuni = royalEstet({
//   jumlahPenghuni: [
//     {
//       nama: "pak ahmad",
//       umur: 47,
//       jumlahKeluarga: [
//         {
//           istri: "nayla",
//           anak: ["dinda", "santy"],
//         },
//       ],
//     },
//     {
//       nama: "pak susilo",
//       umur: 56,
//       jumlahKeluarga: [
//         {
//           istri: "sisi",
//           anak: ["messi", "bejo", "diki"],
//         },
//       ],
//     },
//   ],
// });

// console.log(penghuni, "");
// console.log(penghuni.jumlahPenghuni[0].jumlahKeluarga); // jumlah keluarga pak ahmad
// console.log(penghuni.jumlahPenghuni[1].jumlahKeluarga); // jumlah keluarga pak susilo
// console.log(penghuni.jumlahPenghuni[2].jumlahKeluarga); // jumlah keluarga pak ahmad

// function lahiranAnak(catatanSipil, anakBaru) {
//   catatanSipil[0].anak.push(anakBaru);
//   return catatanSipil;
// }

// const dapatHasil = lahiranAnak(
//   [
//     {
//       nama: "Yucup",
//       istri: "Anwar",
//       anak: ["Ahay", "Goks"],
//     },
//     {
//       nama: "Makar",
//       istri: "Olaf",
//       anak: ["aw", "asd", "Saol"],
//     },
//   ],
//   "FAO"
// );

// console.log(dapatHasil);

// Pertama adalah data catatan sipil, kedua adalah nama anak pak Yucup yang baru lahir
// soal: tambahkan list anak pak Yucup yang baru lahir

// function barisan1(array) {
//   const newArr = array.push("F");
//   return newArr;
// }

// const hasil = barisan1(["F", "A", "O"]);
// console.log(hasil); // 4

// Buat sebuah Function namanya tambahSotrudnik
// Tugas, menambahkan argumen ke 2 ke sotrudnik ke toko pak Makar di cabang london
// dan menambahkan argumen ke 3 ke sotrudnik ke toko pak Yucup di cabang jakarta

// function tambahSotrudnik(dataToko, pegawai2, pegawai3) {
//   const tambahBosku = dataToko;
//   tambahBosku[1].toko.london.sotrudnik.push(pegawai2);
//   tambahBosku[0].toko.jakarta.sotrudnik.push(pegawai3);
//   return tambahBosku;
// }

// const dapatHasil = tambahSotrudnik(
//   [
//     {
//       nama: "Yucup",
//       istri: "Anwar",
//       anak: ["Ahay", "Goks"],
//       toko: {
//         jakarta: {
//           alamat: "Jalan bima",
//           nomor: 25,
//           sotrudnik: ["Amar", "Jaka"],
//         },
//         malang: {
//           alamat: "Jalan sorong",
//           nomor: 23,
//           sotrudnik: ["Mar", "aka"],
//         },
//       },
//     },
//     {
//       nama: "Makar",
//       istri: "Olaf",
//       anak: ["aw", "asd", "Saol"],
//       toko: {
//         surabaya: {
//           alamat: "Jalan kalas",
//           nomor: 295,
//           sotrudnik: ["Assar", "Yaka"],
//         },
//         london: {
//           alamat: "Jalan soki",
//           nomor: 123,
//           sotrudnik: ["asd", "Yaka"],
//         },
//       },
//     },
//   ],
//   "Alpin",
//   "Cokin"
// );
// console.log(dapatHasil);
// console.log(dapatHasil[1].toko.london.sotrudnik); // menambahkan argumen ke 2 ke sotrudnik ke toko pak Makar di cabang london
// console.log(dapatHasil[0].toko.jakarta.sotrudnik); // dan menambahkan argumen ke 3 ke sotrudnik ke toko pak Yucup di cabang jakarta

// const dataCapil = [
//   {
//     nama: "Yucup",
//     istri: "Anwar",
// function calculateDogAge(age) {
//   var dogYears = 7 * age;
//   return dogYears;
// }

// const puppyAge = calculateDogAge(2);
// console.log("Your puppy is " + puppyAge + " years old in dog years!");

// function tellFortune(numChildren, partnersName, geoLoc, jobTitle) {
//   var future =
//     "You will be a " +
//     jobTitle +
//     " in " +
//     geoLoc +
//     ", and married to " +
//     partnersName +
//     " with " +
//     numChildren +
//     " kids.";
//   return future;
// }

// const ryanPratama = tellFortune(
//   2,
//   "Good Girl",
//   "Nashville",
//   "Full-Stack Enginneer"
// );
// console.log(ryanPratama);

// function calculateSupply(age, amountPerDay) {
//   var supplyRemaining =
//     "You will need " +
//     Math.round(amountPerDay) +
//     " kg of protein powder to last you until the ripe old age of " +
//     Math.round(age);
//   return supplyRemaining;
// }

// const ryanPratama = calculateSupply(84, 90.22);
// console.log(ryanPratama);

// try {
//   try {
//     throw new Error("oops");
//   } finally {
//     console.log("finally");
//   }
// } catch (ex) {
//   console.error("outer", ex.message);
// }

///////// excersice baru 26/sept
// const rumahSusun = [
//   {
//     blok: [
//       {
//         blokMawar: [
//           {
//             namaPenghuni: [
//               {
//                 kepalaKeluarga: "mahmud",
//                 istri: "maimunah",
//                 anak: ["messi", "ronaldo", "dembaba"],
//                 kendaraan: true,
//               },
//               {
//                 kepalaKeluarga: "mbappe",
//                 istri: "tejo",
//                 anak: "tesi",
//                 kendaraan: false,
//               },
//               {
//                 kepalaKeluarga: "diggea",
//                 istri: "lukas",
//                 anak: null,
//                 kendaraan: true,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         blokMelati: [
//           {
//             namaPenghuni: [
//               {
//                 kepalaKeluarga: "amir",
//                 istri: ["julaeha"],
//                 anak: ["bimbim", "iwan", "matdog"],
//                 kendaraan: true,
//               },
//               {
//                 kepalaKeluarga: "firly",
//                 istri: "jeanne",
//                 anak: ["ryan", "fao", "ilham"],
//                 kendaraan: true,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         blokButlerova: [
//           {
//             namaPenghuni: [
//               {
//                 kepalaKeluarga: "siska",
//                 istri: ["natasha"],
//                 anak: ["ilnaz"],
//                 kendaraan: null,
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

// const transport = ["minicuper", "lada", "gelik", "devyatka"];
// const anakAsuh = [
//   {
//     pria: ["raffi", "marwan"],
//     wanita: ["bety", "jaenab", "berbi"],
//   },
// ];
///////=======> soal:
//// 1. terjadi insiden bahwa pak amir bercerai dengan istrinya dan menikah dengan istri bu siska
//// 2. keluarga diggea pindah ke blokButlerova
//// 3. pak mahmud mengadopsi 2 anak laki2 baru
//// 4. kelurag butlerova membeli mobil gelik

// function newNew(param1, param2, param3) {
//   param1[0].blok[1].blokMelati[0].namaPenghuni[0].istri.pop(); // soal ke 1
//   let penampungNatasha = ""; // soal ke 1
//   penampungNatasha = // soal ke 1
//     param1[0].blok[2].blokButlerova[0].namaPenghuni[0].istri.pop(); // soal ke 1
//   param1[0].blok[1].blokMelati[0].namaPenghuni[0].istri.push(penampungNatasha); // soal ke 1
//   let penampungDiggea = ""; // soal ke 2
//   penampungDiggea = param1[0].blok[0].blokMawar[0].namaPenghuni.pop(); // soal ke 2
//   param1[0].blok[2].blokButlerova[0].namaPenghuni.push(penampungDiggea); // soal ke 2
//   let penampungAdopsi = param2[0].pria; // soal ke 3
//   param1[0].blok[0].blokMawar[0].namaPenghuni[0].anak.push(penampungAdopsi); // soal ke 3
//   param1[0].blok[2].blokButlerova[0].namaPenghuni[0].kendaraan = param3[2]; // soal ke 4
//   return param1;
// }

// const yaudahLah = newNew(rumahSusun, anakAsuh, transport);

// console.log(yaudahLah[0].blok[1].blokMelati[0].namaPenghuni[0].istri); // soal pertama, natasha menjadi istri pa Amir
// console.log(yaudahLah[0].blok[2].blokButlerova[0].namaPenghuni); // soal kedua, diggea pindah ke butlerova
// console.log(yaudahLah[0].blok[0].blokMawar[0].namaPenghuni[0].anak); // soal ketiga, pak mahmud mengadopsi 2 anak laki2
// console.log(yaudahLah[0].blok[2].blokButlerova[0].namaPenghuni[0]); // soal keempat, keluarga butlerova beli gelik

// function GradeSystem(cleaningduty, kitchenduty, grade) {
//   let balov = 0;
//   if (cleaningduty === "sering") {
//     balov += 5;
//   } else if (cleaningduty === "tidak sering") {
//     balov += 4;
//   } else if (cleaningduty === "jarang") {
//     balov += 3;
//   } else {
//     balov += 2;
//   }

//   if (kitchenduty === "sering") {
//     balov += 4;
//   } else if (kitchenduty === "tidak sering") {
//     balov += 3;
//   } else if (kitchenduty === "jarang") {
//     balov += 2;
//   } else {
//     balov += 1;
//   }

//   if (grade === "A") {
//     balov += 5;
//   } else if (grade === "B") {
//     balov += 4;
//   } else if (grade === "C") {
//     balov += 3;
//   } else {
//     balov += 2;
//   }

//   let hasil = "";

//   if (balov >= 9) {
//     hasil = "zaselit";
//   } else {
//     hasil = "tidak zaselit";
//   }

//   return hasil;
// }

// console.log(GradeSystem("sering", "sering", "A"));
// console.log(GradeSystem("jarang", "ga pernah", "C"));
// console.log(GradeSystem("jarang", "ga pernah", "C"));

// pop() removes the last element of an array.
// push() adds an element to the end of an array.
// shift() removes the first element.
// unshift() adds an element to the beginning of the array.

// const nama = "Ryan";
// function cariNilai(nilai, nama) {
//   let arti;
//   if (nilai >= 90 && nilai < 100) {
//     arti = "S";
//   } else if (nilai >= 80 && nilai <= 90) {
//     arti = "A";
//   } else if (nilai >= 70 && nilai <= 80) {
//     arti = "B";
//   } else if (nilai >= 60 && nilai <= 70) {
//     arti = "C";
//   } else if (nilai >= 50 && nilai <= 60) {
//     arti = "D";
//   } else {
//     arti = "E";
//   }
//   return arti;
// }

// const ryanP = cariNilai(40, "Ryan");
// console.log(`${nama} mendapatkan nilai ${ryanP}`);

// var userName = "Ryan";
// userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
// var userQuestion = "What is your name?";
// console.log(`${userName} has asked - ${userQuestion}`);

// let randomNumber = Math.floor(Math.random() * 8);
// console.log(randomNumber);
// let eightBall = "";

// if (randomNumber === 0) {
//   eightBall = "It is certain";
// } else if (randomNumber === 1) {
//   eightBall = "It is decidedly so";
// } else {
//   eightBall = "Signs point to yes";
// }

// switch (randomNumber) {
//   case 0:
//     eightBall = "It is certain";
//     break;
//   case 1:
//     eightBall = "It is decidedly so";
//     break;
//   case 2:
//     eightBall = "Reply hazy try again";
//     break;
//   case 3:
//     eightBall = "Cannot predict now";
//     break;
//   case 4:
//     eightBall = "Do not count on it";
//     break;
//   case 5:
//     eightBall = "My sources say no";
//     break;
//   case 6:
//     eightBall = "Outlook not so good";
//     break;
//   case 7:
//     eightBall = "Signs point to yes";
//     break;
// }

// console.log(`the Magic 8 says, ${eightBall}.`);

// let raceNumber = Math.floor(Math.random() * 1000);
// let registeredOrNot = true;
// const runnersAge = Math.floor(Math.random() * 70);
// console.log(runnersAge); // to check what is their ages
// if (runnersAge > 18 && registeredOrNot) {
//   raceNumber += 1000;
// }

// switch (true) {
//   case runnersAge >= 18:
//     console.log(
//       `You guys will race at 9:30 am, your race number is: #${raceNumber}`
//     );
//     break;
//   case runnersAge < 18:
//     console.log("Only adults were allowed to participate");
//     break;
// }

// if (runnersAge > 18 && registeredOrNot) {
//   console.log(
//     `You guys will race at 9:30 am, your race number is: #${raceNumber}.`
//   );
// } else if ((runnersAge > 18) & !registeredOrNot) {
//   //!registeredOrNot is the same as registeredOrNot = false
//   console.log(
//     `Hi! Race will begin at 11:00 am, your race number is: #${raceNumber}.`
//   );
// } else if (runnersAge < 18) {
//   // regardless of registration
//   console.log(
//     `Teenagers under 18 race will begin at 12:30 pm, your race number is: #${raceNumber}.`
//   );
// }

// function sayThanks(name) {
//   console.log(
//     "Thank you for your purchase, " + name + "! We appreciate your business."
//   );
// }

// sayThanks("Ryan");

// function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){ // Default Parameters
//   console.log(`Remember to buy ${item1}`);
//   console.log(`Remember to buy ${item2}`);
//   console.log(`Remember to buy ${item3}`);
// }

// function monitorCount(rows, columns) {
//   return rows * columns;
// }

// const numOfMonitors = monitorCount(5, 4);
// console.log(numOfMonitors);

// function monitorCount(rows, columns) {
//   return rows * columns; // 5*5 = 25
// }

// function costOfMonitors(rows, columns) {
//   return monitorCount(rows, columns) * 200; // 25*200 = 5000
// }

// const totalCost = costOfMonitors(5, 5);
// console.log(totalCost);

// function calculateTip(total) {
//   var tipPercent = 0.15;
//   return total * tipPercent;
// }

// var billTotal = 10.0;
// var billTip = calculateTip(billTotal);
// var receipt = "Total: " + billTotal + " Tip: " + billTip;
// console.log(receipt);

// function printScore(nilai) {
//   return `Your score is: ${nilai}`;
// }

// function getStatus(score) {
//   let hasil = "";
//   if (score >= 50 && score <= 80) {
//     hasil = printScore("C");
//   } else if (score >= 81 && score <= 90) {
//     hasil = printScore("B");
//   } else if (score >= 91 && score <= 100) {
//     hasil = printScore("A");
//   }
//   return hasil;
// }

// function countScore(math, japanese, english) {
//   const counting = (math + japanese + english) / 3;
//   return getStatus(counting);
// }

// console.log(countScore(90, 95.5, 90));

// const plantNeedsWater = function (day) {
//   // or const plantNeedsWater = (day) => {
//   if (day === "Wednesday") {
//     return true;
//   } else {
//     return false;
//   }
// };

// const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);

// console.log(plantNeedsWater("Wednesday"));
// console.log(plantNeedsWater("Monday"));

// function getUserChoice(userInput) {
//   userInput = userInput.toLowerCase();
//   if (
//     userInput === "rock" ||
//     userInput === "paper" ||
//     userInput === "scissors" ||
//     userInput === "bomb"
//   ) {
//     return userInput;
//   } else {
//     console.log("Error!");
//   }
// }

// function getComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3);
//   if (randomNumber === 0) {
//     return "rock";
//   } else if (randomNumber === 1) {
//     return "paper";
//   } else if (randomNumber === 2) {
//     return "scissors";
//   }
// }

// function determineWinner(userChoice, computerChoice) {
//   if (userChoice === computerChoice) {
//     return "This game was a tie!";
//   }
//   if (userChoice === "rock") {
//     if (computerChoice === "paper") {
//       return "Sorry, computer won!";
//     } else {
//       return "Congratulations, you won!";
//     }
//   }

//   if (userChoice === "paper") {
//     if (computerChoice === "scissors") {
//       return "Sorry, computer won!";
//     } else {
//       return "Congratulations, you won!";
//     }
//   }

//   if (userChoice === "scissors") {
//     if (computerChoice === "rock") {
//       return "Sorry, computer won!";
//     } else {
//       return "Congratulations, you won!";
//     }
//   }

//   if (userChoice === "bomb") {
//     return "Congratulations, you won!";
//   } else {
//     return "Please drink more water";
//   }
// }

// const userChoice = getUserChoice("paper");
// const computerChoice = getComputerChoice();
// console.log("You threw: " + userChoice);
// console.log("The computer threw: " + computerChoice);
// console.log(determineWinner(userChoice, computerChoice));

// function getSleepHours(day) {
//   if (day === "Monday") {
//     return 8;
//   } else if (day === "Wednesday") {
//     return 7;
//   } else if (day === "Friday") {
//     return 6;
//   } else if (day === "Sunday") {
//     return 9;
//   } else {
//     return "Error!";
//   }
// }

// console.log(getSleepHours("Monday") + " hours on Monday"); // so the function returned a value: 8 to the word 'Monday'

// function getActualSleepHours() {
//   return (
//     getSleepHours("Monday") +
//     getSleepHours("Wednesday") +
//     getSleepHours("Friday") +
//     getSleepHours("Sunday")
//   );
// }

// console.log(getActualSleepHours() + " hours = actual sleep hours"); // total sleep of hours amount = 26

// function getIdealSleepHours(amountOfDays) {
//   return amountOfDays * 8;
// }

// console.log(getIdealSleepHours(4) + " hours = ideal sleep hours");

// function calculateSleepDebt() {
//   const actualSleepHours = getActualSleepHours();
//   const idealSleepHours = getIdealSleepHours(4);
//   if (actualSleepHours === idealSleepHours) {
//     console.log("You have got the perfect amount of sleep.");
//   } else if (actualSleepHours > idealSleepHours) {
//     console.log("You have got more sleep than neeeded.");
//   } else if (actualSleepHours < idealSleepHours) {
//     console.log("You should get some rest.");
//   } else {
//     console.log("Erorr! Something went wrong, please check your code.");
//   }
// }

// calculateSleepDebt(); // i need 2 more hours to get the ideal plan

// Blocks and Scope
// const city = "New York City";
// function logCitySkyline() {
//   let skyscraper = "Empire State Building";
//   return "The stars over the " + skyscraper + " in " + city;
// }
// console.log(logCitySkyline());

// global scope
// const satellite = "The Moon";
// const galaxy = "The Milky Way";
// const stars = "North Star";

// function callMyNightSky() {
//   return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
// }

// console.log(callMyNightSky());

// const logVisibleLightWaves = () => {
//   let lightWaves = "Moonlight";
//   let region = "The Arctic";
//   // Add if statement here:
//   if (region === "The Arctic") {
//     let lightWaves = "Northern Lights"; // Notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.
//     console.log(lightWaves);
//   }
//   console.log(lightWaves);
// };

// logVisibleLightWaves();

// function getUserChoice(userInput) {
//   userInput = userInput.toLowerCase();
//   if (
//     userInput === "rock" ||
//     userInput === "paper" ||
//     userInput === "scissors" ||
//     userInput === "bomb"
//   ) {
//     return userInput;
//   } else {
//     console.log("Error!");
//   }
// }

// function getComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3);
//   if (randomNumber === 0) {
//     return "rock";
//   } else if (randomNumber === 1) {
//     return "paper";
//   } else if (randomNumber === 2) {
//     return "scissors";
//   }
// }

// function determineWinner(userChoice, computerChoice) {
//   if (userChoice === computerChoice) {
//     return "This game was a tie!";
//   }
//   if (userChoice === "rock") {
//     if (computerChoice === "paper") {
//       return "Sorry, computer won!";
//     } else {
//       return "Congratulations, you won!";
//     }
//   }

//   if (userChoice === "paper") {
//     if (computerChoice === "scissors") {
//       return "Sorry, computer won!";
//     } else {
//       return "Congratulations, you won!";
//     }
//   }

//   if (userChoice === "scissors") {
//     if (computerChoice === "rock") {
//       return "Sorry, computer won!";
//     } else {
//       return "Congratulations, you won!";
//     }
//   }

//   if (userChoice === "bomb") {
//     return "Congratulations, you won!";
//   } else {
//     return "Please drink more water";
//   }
// }

// const userChoice = getUserChoice("paper");
// const computerChoice = getComputerChoice();
// console.log("You threw: " + userChoice);
// console.log("The computer threw: " + computerChoice);
// console.log(determineWinner(userChoice, computerChoice));

// function additional(param1, param2) {
//   return param1 + param2;
// }
// function penguarangan(param1, param2) {
//   return param1 - param2;
// }
// function perkalian(param1, param2) {
//   return param1 * param2;
// }

// function showResult(param1, param2) {
//   // 0, -5
//   const hasil = param1 / param2; // // 0 : -5 = 0
//   return `Hasilnya adalah ${hasil}`; //
// }

// function getCalculation(angka1, angka2) {
//   const first = penguarangan(angka1, angka2); // -5
//   const second = additional(angka1, first); // 5 + (-5) = 0
//   const third = perkalian(second, first); // -5 * 0 = 0
//   return showResult(third, first); // 0 dan -5
// }

// console.log(getCalculation(5, 10));

// function subtraction(param1, param2) {
//   return param1 + param2; // 5 + 5 = 10
// }
// function additional(param1, param2) {
//   return param1 - param2; // 10 - 10 = 0
// }
// function formula(param1, param2) {
//   return param1 * param2 + 50; // 0 * 5 = 0 + 50 = 50
// }

// function showResult(param1, param2) {
//   const hasil = param1 - param2 + 5; // 50 - 10 + 5 = 45
//   return `Result is ${hasil}`;
// }

// function getCalculation(angka1, angka2) {
//   // 5 dan 10
//   const first = subtraction(angka1, 5); // 10
//   const second = additional(angka2, first); // 0
//   const third = formula(second, angka1); //  75
//   return showResult(third, first); // 75 dan 10
// }

// console.log(getCalculation(5, 10)); // Result is 45

// const time = 12;
// if (time > 12) {
//   console.log("Time to eat");
// } else if (time === 12) {
//   console.log("Let`s go home");
// }

// ===, !==, >=, <=, >, <

// function counting(pa1, pa2, pa3) {
//   if (pa3 === 1) {
//     return pa3 + pa1;
//   }
//   if (pa3 === 2) {
//     //
//     return pa2 - pa1;
//   }
//   return pa1 * pa2;
// }

// function conditioning(p1, p2, p3) {
//   const conditionOne = p1 + p2;
//   if (conditionOne > p3) {
//     //
//     return counting(conditionOne, p1, 1); //
//   }
//   if (conditionOne === p3) {
//     //
//     return counting(p2, conditionOne, 2);
//   }

//   return counting(conditionOne, p1, 3);
// }

// console.log(conditioning(5, 6, 2)); // 12
// console.log(conditioning(1, 3, 4)); // 1
// console.log(conditioning(1, 1, 3)); // 2

// const namaDiri = {
//   nama: "Anton",
//   umur: 4,
//   anak: ["Kalo", "Joki"],
//   riwayatKerja: [
//     {
//       namaKantor: "Atlas",
//       lamaKerja: 50,
//     },
//     {
//       namaKantor: "Git",
//       lamaKerja: 20,
//     },
//   ],
// };

// function removeValue(p1) {
//   p1.riwayatKerja.pop();
//   return p1;
// }

// function changeValue(p2) {
//   p2.riwayatKerja[0].lamaKerja = 5;
//   return p2;
// }

// function addValue(p3) {
//   p3.anak.push("Coki");
//   return p3;
// }

// function changeData(param1, param2) {
//   if (param2 === 1) {
//     return removeValue(param1);
//   } else if (param2 === 2) {
//     return changeValue(param1);
//   } else {
//     return addValue(param1);
//   }
// }

// console.log(changeData(namaDiri, 1));
// console.log(changeData(namaDiri, 2));
// console.log(changeData(namaDiri, 3));

// BUATLAH 4 FUNCTIONS BLYAAAAAAAAAAA

// FUNCTION 0) Buat sebuah function dimana saat function tsb dicall, mengirimkan 2 argguments:
// 1) variabel dataDiri diatas
// 2) satu buah angka antara 1-3

// FUNCTION 1)buat sebuah function yang menerima data diri, dimana di function tersebut akan menghpaus value terakhir di riwayat kerja dari dataDiri tsb,

// FUNCTION 2)buat sebuah function yang menerima data diri, dimana di function tersebut merubah lama kerja di riwayat kerja ke-1 ke angka 5

// FUNCTION 3)buat sebuah function yang menerima data diri, dimana di function tsb menambahkan anak dari orang terseut,valuenya bebas

// dalam FUNCTION KE 0 NIH YAAAAA , JIKAAAAAAAAAAA param ke-2 sama dengan 1, panggil function ke 1 dan kirim dataDiri,AN JIKAAAAAAAAAA param ke-2 sama dengan 2, panggil function ke 2 dan kirim dataDiri, DAN JIKAAAAA  param ke-2 sama dengan 3 maka panggil function ke 3 dan kirim dataDiri

// const namaGuru = {
//   nama: "Anton",
//   gaji: 5000,
//   listSiswa: [
//     {
//       nama: "Beko",
//       umur: 20,
//     },
//     {
//       nama: "Alik",
//       umur: 23,
//     },
//   ],
// };

// //function ke 0
// function ubahDataDiri(param1, param2) {
//   if (param2 === 1) {
//     return tambahSiswa(param1);
//   } else if (param2 > 1) {
//     return kurangSiswa(param1);
//   }
// }

// //function ke 1
// function tambahSiswa(param1) {
//   param1.listSiswa.push({ nama: "Aremania", umur: 22 });
//   return param1;
// }

// //function ke 2
// function kurangSiswa(param1) {
//   param1.listSiswa.shift();
//   return param1;
// }

// console.log(ubahDataDiri(namaGuru, 1));
// console.log(ubahDataDiri(namaGuru, 99));

//manggil function, namaFuunction()
// Buatlah sebuah function ke-0 bernama ubahDataDiri yang mengirimkan argumen namaGuru dan angka antara 1-10 (bebas angka berapa aja)
// buatlah sebuah function ke-1 tambahSiswa yang mengirimkan argumen dari PARAMETER PERTAMA function ke 0, dimana di function tsb kita harus menambahkan listSiswa dengan nama dan umur apapun
// buatlah sebuah function ke-2 kurangSiswa yang mengirimkan argumen dari PARAMETER PERTAMA function ke-0, dimana di fnct tsb kita harus menghapus siswa pertama dari listSiswa
// lalu di function ke-0 buat, jika parameter ke duanya adalah 1, maka call function ke-1, dan jika parameter ke duanya lebih besar dari 1 maka call function ke 2
// CALL FUNCTION 0 tsb dengan 2 arguments

// const namaGuru = {
//   nama: "Anton",
//   riwayatKerja: [
//     {
//       sekolah: "SMA 4 Pekabanrau",
//       lamaMengajar: 5,
//     },
//     {
//       sekolah: "SMA Penabur",
//       lamaMengajar: 10,
//     },
//   ],
//   listSiswa: [
//     {
//       nama: "Beko",
//       umur: 25,
//     },
//     {
//       nama: "Alik",
//       umur: 20,
//     },
//   ],
// };

// function ubahDataDiri(param1, param2, param3) {
//   if (param2 === 1) {
//     return lamaMengajarr(param1, param3);
//   } else if (param2 === 2) {
//     return nambahUmur(param1, param3);
//   }
// }

// function lamaMengajarr(param1, param3) {
//   param1.riwayatKerja[0].lamaMengajar += param3;
//   return param1;
// }

// function nambahUmur(param1, param3) {
//   param1.listSiswa[1].umur += param3;
//   return param1;
// }

// console.log(ubahDataDiri(namaGuru, 1, 4));
// console.log(ubahDataDiri(namaGuru, 2, 4));

// Buatlah sebuah function, dimana function tersebut menerima tiga parameter, pertama adalah namaGuru, kedua adalah angka 1-2 (bebas berapa aja), ketiga adalah angka 1-5 (bebas berapa aja)

// jika parameter ke-2 adalah 1, maka akan memanggil sebuah function yang menigirmkan param ke-1 dan ke-3, dimana di function tsb akan menambahkan lamaMengajar PERTAMA di riwayatKerja dengan param yang dikirimkan, misal param ke-3 adalah 5 dan lamaMengajar pertama di riwayatKerja adalah 5, maka lamaMengajar pertama di riwayatKerja menjadi 10

// jika parameter ke-2 adalah 2, maka akan memanggil sebuah function yang menigirmkan param ke-1 dan ke-3, dimana di function tsb akan menambahkan umur KEDUA di listSiswa dengan param yang dikirimkan, misal param ke-3 adalah 2 dan umur KEDUA di listSiswa adalah 20, maka umur KEDUA di listSiswa menjadi 22

// const dataGuru = [
//   {
//     nama: "Anton",
//     riwayatKerja: [
//       {
//         sekolah: "SMA 4 Pekabanrau",
//         lamaMengajar: 5,
//       },
//       {
//         sekolah: "SMA Penabur",
//         lamaMengajar: 10,
//       },
//     ],
//     listSiswa: [
//       {
//         nama: "Anji",
//         umur: 29,
//       },
//       {
//         nama: "Tai",
//         umur: 30,
//       },
//     ],
//   },
//   {
//     nama: "Marsel",
//     riwayatKerja: [
//       {
//         sekolah: "GImnaziya 12 Kajan",
//         lamaMengajar: 5,
//       },
//       {
//         sekolah: "Shkola 2 Bishkek",
//         lamaMengajar: 10,
//       },
//     ],
//     listSiswa: [
//       {
//         nama: "Memek",
//         umur: 20,
//       },
//       {
//         nama: "Alik",
//         umur: 15,
//       },
//     ],
//   },
// ];

// function switchStudents(parameter) {
//   const tampunganAnton = parameter[0].listSiswa;
//   const tampunganMarsel = parameter[1].listSiswa;
//   parameter[0].listSiswa = tampunganMarsel;
//   parameter[1].listSiswa = tampunganAnton;
//   return parameter;
// }

// // const taiTai = switchStudents(dataGuru);
// // console.log(taiTai[0].listSiswa);
// // console.log(taiTai[1].listSiswa);

// function app(param1, param2) {
//   const tampSwitch = switchStudents(param1);
//   if (param2) {
//     return tampSwitch[0].listSiswa;
//   } else if (!param2) {
//     return tampSwitch[1].listSiswa;
//   }
// }

// console.log(app(dataGuru, true));
// console.log(app(dataGuru, false)); //salah satu aja

// buatlah sebuah function bernama "app" dimana menerima parameter dataGuru dan true/false.

// kedua,buat  function bernama switchStudents yang mengirimkan dataGuru, dimana di function tersebut kita menukar listSiswa 2 guru tsb, listSiswa Marsel menjadi listSiswa si Anton, dan sebaliknya, panggil dataGuru di function app

// lalu jika parameter ke-2 dari function app adalah true maka return list siswa anton setelah diupdate di function switchStudents , dan jika parameter ke-2 dari function app adlaha false maka return list siswa Marsel setelah diupdate di function switchStudent

// The scope of `random` is too loose

// function getRandEvent() {
//   const random = Math.floor(Math.random() * 3);
//   if (random === 0) {
//     return "Marathon";
//   } else if (random === 1) {
//     return "Triathlon";
//   } else if (random === 2) {
//     return "Pentathlon";
//   }
// }

// // The scope of `days` is too tight
// function getTrainingDays(event) {
//   let days = "";
//   if (event === "Marathon") {
//     days = 50;
//   } else if (event === "Triathlon") {
//     days = 100;
//   } else if (event === "Pentathlon") {
//     days = 200;
//   }

//   return days;
// }

// // The scope of `name` is too tight
// function logEvent(event) {
//   const name = "Nala";
//   console.log(`${name}'s event is: ${event}`);
// }

// const name = "Nala";
// const name2 = "Warren";

// function logTime(days) {
//   console.log(`${name}'s time to train is: ${days} days`);
// }

// const event = getRandEvent();
// const days = getTrainingDays(event);
// const event2 = getRandEvent();
// const days2 = getTrainingDays(event2);
// // Define a `name` variable. Use it as an argument after updating logEvent and logTime

// logEvent(name, event);
// logTime(name, days);
// logEvent(name2, event2);
// logTime(name2, days2);

// function greetWorld() {
//   return "Hello, World!";
// }

// console.log(greetWorld());

// function agreeOrDisagree(param1, param2) {
//   if (param1 === param2) {
//     return "You agree!";
//   } else if (param1 !== param2) {
//     return "You disagree!";
//   }
// }

// console.log(agreeOrDisagree("strong", "strong"));

// function lifePhase(param1) {
//   if (param1 >= 0 && param1 <= 3) {
//     return "baby";
//   } else if (param1 >= 4 && param1 <= 12) {
//     return "child";
//   } else if (param1 >= 13 && param1 <= 19) {
//     return "teen";
//   } else if (param1 >= 20 && param1 <= 64) {
//     return "adult";
//   } else if (param1 >= 65 && param1 <= 140) {
//     return "senior citizen";
//   } else if (param1 < 0 || param1 > 140) {
//     return "This is not a valid age";
//   }
// }

// console.log(lifePhase(5));

// Write your function here:

// function finalGrade(param1, param2, param3) {
//   if (param1 < 0 || param1 > 100) {
//     return "You have entered an invalid grade.";
//   } else if (param2 < 0 || param2 > 100) {
//     return "You have entered an invalid grade.";
//   } else if (param3 < 0 || param3 > 100) {
//     return "You have entered an invalid grade.";
//   }
//   const averageNum = (param1 + param2 + param3) / 3;
//   if (averageNum >= 0 && averageNum <= 59) {
//     return "F";
//   } else if (averageNum >= 60 && averageNum <= 69) {
//     return "D";
//   } else if (averageNum >= 70 && averageNum <= 79) {
//     return "C";
//   } else if (averageNum >= 80 && averageNum <= 89) {
//     return "B";
//   } else if (averageNum >= 90 && averageNum <= 100) {
//     return "A";
//   }
// }

// // console.log(finalGrade(80, 90, 100));

// // Uncomment the line below when you're ready to try out your function
// console.log(finalGrade(99, 92, 95)); // Should print 'A'

// // We encourage you to add more function calls of your own to test your code!

// const rollTheDice = () => {
//   let die1 = Math.floor(Math.random() * 6 + 1);
//   let die2 = Math.floor(Math.random() * 6 + 1);
//   return die1 + die2;
// };

// function reportingForDuty(param1, param2) {
//   return `${param1} ${param2} reporting for duty!`;
// }

// console.log(reportingForDuty("Private", "Fido")); //

// function calculateWeight(param1, param2) {
//   if (param2 === "Jupiter" && param1 === 100) {
//     param2 * 0.378;
//   }
//   return param2;
// }

// // Uncomment the line below when you're ready to try out your function
// console.log(calculateWeight(100, "Jupiter"));

// const calculateWeight = (earthWeight, planet) => {
//   switch (planet) {
//     case "Mercury":
//       return earthWeight * 0.378;
//     case "Venus":
//       return earthWeight * 0.907;
//     case "Mars":
//       return earthWeight * 0.377;
//     case "Jupiter":
//       return earthWeight * 2.36;
//     case "Saturn":
//       return earthWeight * 0.916;
//     default:
//       return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
//   }
// };

// console.log(calculateWeight(100, "Jupiter"));

// function naonSihMemek() {
//   console.log("tai");
//   return "taiUcing";
// }

// naonSihMemek();

// function truthyOrFalsy(sky) {
//   if (sky === "blue") {
//     return true;
//   } else if (sky === "red") {
//     return false;
//   }
// }
// console.log(truthyOrFalsy("blue"));

// function naonSihMemek() {
//   console.log("tai");
//   return "taiUcing";
// }

// naonSihMemek();

// const truthyOrFalsy = (parameter) => (parameter ? true : false);

// function numImaginaryFriends(parameter) {
//   const calculateImaginaryFriends = Math.ceil((parameter * 25) / 100);
//   return calculateImaginaryFriends;
// }

// console.log(numImaginaryFriends(20));

// function sillySentence(adjective, verb, noun) {
//   return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
// }

// console.log(sillySentence("excited", "love", "functions"));

// function finalGrade(midterm, final, homework) {
//   if (
//     midterm < 0 ||
//     midterm > 100 ||
//     final < 0 ||
//     final > 100 ||
//     homework < 0 ||
//     homework > 100
//   ) {
//     return "You have entered an invalid grade.";
//   }
//   let average = (midterm + final + homework) / 3;
//   if (average < 60) {
//     return "F";
//   } else if (average < 70) {
//     return "D";
//   } else if (average < 80) {
//     return "C";
//   } else if (average < 90) {
//     return "B";
//   } else {
//     return "A";
//   }
// }

// console.log(finalGrade(99, 92, 95));

/* 
Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

// const howOld = (age, year) => {
//   // The following two lines make it so that our function always knows the current year.
//   let dateToday = new Date();
//   let thisYear = dateToday.getFullYear();
//   // It is totally ok if your function used the current year directly!

//   const yearDifference = year - thisYear;
//   const newAge = age + yearDifference;
//   if (newAge > age) {
//     return `You will be ${newAge} in the year ${year}`;
//   } else if (newAge < 0) {
//     return `The year ${year} was ${-newAge} years before you were born`;
//   } else {
//     return `You were ${newAge} in the year ${year}`;
//   }
// };

// console.log(howOld(22, 2027));

// const whatRelation = (percentSharedDNA) => {
//   if (percentSharedDNA === 100) {
//     return "You are likely identical twins.";
//   } else if (percentSharedDNA >= 35 && percentSharedDNA <= 99) {
//     return "You are likely parent and child or full siblings.";
//   } else if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
//     return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
//   } else if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
//     return "You are likely 1st cousins.";
//   } else if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
//     return "You are likely 2nd cousins.";
//   } else if (percentSharedDNA === 1 && percentSharedDNA === 2) {
//     return "You are likely 3rd cousins";
//   } else {
//     return "You are likely not related.";
//   }
// };

// console.log(whatRelation(34));
// // Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

// console.log(whatRelation(3));
// // Should print 'You are likely 2nd cousins.'
// Write your function here:

// function tipCalculator(quality, total) {
//   if (quality === "bad") {
//     return total * 0.05;
//   } else if (quality === "ok") {
//     return total * 0.15;
//   } else if (quality === "good") {
//     return total * 0.2;
//   } else if (quality === "excellent") {
//     return total * 0.3;
//   } else {
//     return total * 0.18;
//   }
// }

// console.log(tipCalculator("good", 100)); //should return 20

// Write your function here:

// function toEmoticon(situation) {
//   switch (situation) {
//     case "shrug":
//       return '|_{"}_|';
//       break;
//     case "smiley face":
//       return ":)";
//       break;
//     case "frowny face":
//       return ":(";
//       break;
//     case "winky face":
//       return ";)";
//       break;
//     case "heart":
//       return "<3";
//       break;
//     default:
//       return "|_(* ~ *)_|";
//       break;
//   }
// }

// console.log(toEmoticon("whatever"));
// Should print  '|_(* ~ *)_|'

// function isEven(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(20));

// function numberDigits(x) {
//   if (x >= 0 && x <= 9) {
//     return `One digit: ${x}`;
//   } else if (x >= 10 && x <= 99) {
//     return `Two digits: ${x}`;
//   } else {
//     return `The number is: ${x}`;
//   }
// }

// console.log(numberDigits(129));

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop === "tracks") {
//     records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
//     records[id][prop].push(value);
//   } else {
//     records[id][prop] = value;
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");

// After updateRecords(recordCollection, 5439, "artist", "ABBA"),                 artist should be the string ABBA
// After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"),  tracks should have the string Take a Chance on Me as the last and only element.
// After updateRecords(recordCollection, 2548, "artist", ""),                     artist should not be set
// After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"),     tracks should have the string Addicted to Love as the last element.
// After updateRecords(recordCollection, 2468, "tracks", "Free"),                 tracks should have the string 1999 as the first element.
// After updateRecords(recordCollection, 2548, "tracks", ""),                     tracks should not be set
// After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"),          albumTitle should be the string Riptide

// const dataSiswa = [
//   {
//     nama: "Anjul",
//     alamat: "Bekasi",
//     mapel: [
//       {
//         namaMapel: "Math",
//         nilai: 5,
//       },
//       {
//         namaMapel: "Science",
//         nilai: 3,
//       },
//     ],
//   },
//   {
//     nama: "Aksam",
//     alamat: "Jakarta",
//     mapel: [
//       {
//         namaMapel: "Math",
//         nilai: 1,
//       },
//       {
//         namaMapel: "Science",
//         nilai: 1,
//       },
//     ],
//   },
// ];

// function getScore(param1, param2, param3) {
//   if (param2 === "Eropa") {
//     return getScoreEurope(param1, param3);
//   } else if (param2 === "Russia") {
//     return getScoreRussia(param1, param3);
//   }
// }

// console.log(getScore(dataSiswa, "Eropa", 1)); // mengirim argumen ke getScore, berupa dataSiswa, Eropa/Russia, 1/2

// function getScoreEurope(param1, param2) {
//   // param1, param3 dari getScore, dataSiswa dan 2
//   if (param2 === 1) {
//     if (param1[0].mapel[0].nilai > param1[1].mapel[0].nilai) {
//       // membandingkan mapel pertama each students
//       return "Nilai murid pertama adalah 1.";
//     } else {
//       return "Nilai murid kedua adalah 1."; // situasi terbalik dr if parent
//     }
//   } else if (param2 === 2) {
//     if (param1[0].mapel[1].nilai > param1[1].mapel[1].nilai) {
//       // membandingkan mapel kedua each students
//       return "Nilai murid pertama adalah 1.";
//     } else {
//       return "Nilai murid kedua adalah 1."; // situasi terbalik dr if parent
//     }
//   }
// }

// function getScoreRussia(param1, param2) {
//   if (param2 === 1) {
//     if (param1[0].mapel[0].nilai > param1[1].mapel[0].nilai) {
//       return "Nilai murid pertama adalah 5.";
//     }
//     return "Nilai murid kedua adalah 5.";
//   } else if (param2 === 2) {
//     if (param1[0].mapel[1].nilai > param1[1].mapel[1].nilai) {
//       return "Nilai murid pertama adalah 5.";
//     }
//     return "Nilai murid kedua adalah 5.";
//   }
// }

// Buatlah sebuah function bernama getScore dimana menerima 3 parameter,pertama adalah dataSiswa dan kedua, adalah "Eropa/Rusia", dan ketiga adalah angka 1 atau angka 2

// Jika parameter kedua adalah Eropa, maka akan memanggil function bernama getScoreEurope yang menerima 2 parameter, dimana argumen pertamanya adalah parameter pertama getScore, dan argumen keduanya adalah parameter ke 3 dari getScore,
// di function tsb  JIKAAAA parameter ke-2 nya adalah 1, maka akan membandingkan (JIKAAAAAA) nilai dari mapel PERTAMA setiap siswa,
// JIKAAAA parameter ke-2 nya adlah 2, maka akan memandingkan(JIKAAAAA) nilai dari mapel kedua, setiap siswa,
// dan jika nilai pertama dari murid pertama tersebut lebih besar maka return "Nilai murid pertama adalah 1",
// dan jika nilai pertama dari murid kedua tersebut lebih besar maka return "Nilai murid kedua adalah 1"

// Jika parameter kedua adalah Rusia, maka akan memanggil function bernama getScoreRussia yang menerima 2 parameter, dimana argumen pertamanya adalah parameter pertama getScore, dan argumen keduanya adalah parameter ke-3 dari getScore,
// di function tsb jika parameter ke-2 nya adalah 1, maka akan membandingkan nilai dari mapel pertama setiap siswa,
// jika parameter ke-2 nya adlah 2, maka akan memandingkan nilai dari mapel kedua, setiap siswa,
// dan jika nilai pertama dari murid pertama tersebut lebih besar maka return "Nilai murid pertama adalah 5",
// dan jika nilai pertama dari murid kedua tersebut lebih besar maka return "Nilai murid kedua adalah 5"

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j]);
//   }
// }

// var i = 0;
// setInterval(() => {
//   console.log("iteration " + i);
//   i++;
// }, 100);

// let humanScore = 0;
// let computerScore = 0;
// let currentRoundNumber = 1;

// function generateTarget() {
//   return Math.floor(Math.random() * 10);
// }

// function compareGuesses(humanGuess, computerGuess, targetGuess) {
//   const humanDifference = Math.abs(targetGuess - humanGuess);
//   const computerDifference = Math.abs(targetGuess - computerGuess);
//   return humanDifference <= computerDifference;
// }

// function updateScore(winner) {
//   if (winner === "human") {
//     humanScore++;
//   } else if (winner === "computer") {
//     computerScore++;
//   }
// }

// const advanceRound = () => currentRoundNumber++;

// buat sebulah function bernama oddOrEven dimana menerima 1 parameter berjenis number, dimana di function tersebut akan mendeteksi apakah number itu adalah genap apa ganjil, jika genap, makan akan me-return tulisan "Angka n adalah genap" jika ganjil, makan angakn me-return tulisan "Angka n adalah ganjil", dimana n adalah parameter tsb

// const oddOrEven = (num) => {
//   if (num % 2 === 0) {
//     return `Angka ${num} adalah genap`;
//   } else if (Math.abs(num % 2) == 1) {
//     return `Angka ${num} adalah ganjil`;
//   }
// };

// console.log(oddOrEven(3));

// function oddOrEven(p1) {
//   return p1 % 2 === 0 ? `angka ${p1} adalah genap` : `angka ${p1} adalah genap`;
// }

// console.log(oddOrEven(2));

//tanpa console.log, function tidak menampilkan apa yang direturn

// const dataSensus = [
//   {
//     nama: "Untung",
//     listAnak: ["Koali", "Panci"],
//   },
//   {
//     nama: "Jaya",
//     listAnak: ["Sansay"],
//   },
//   {
//     nama: "Jaya",
//     listAnak: ["Sansay", "Bacu", "Lanjay"],
//   },
// ];

// // console.log(dataSensus[0].listAnak.length);

// const cekCek = (param1, param2) => {
//   if (param2 === 1) {
//     return param1[0].listAnak.length;
//   } else if (param2 === 2) {
//     return param1[1].listAnak.length;
//   } else if (param2 === 3) {
//     return param1[2].listAnak.length;
//   }
// };

// const app = (param1, param2) => {
//   const whichAnak = cekCek(param1, param2);
//   if (whichAnak === 1) {
//     return "anak sedikit";
//   } else if (whichAnak === 2) {
//     return "sudah mengikuti program KB";
//   } else if (whichAnak === 3) {
//     return "kelebihan anak";
//   }
// };

// console.log(app(dataSensus, 2));

// const tai = ["memek", "kontol"];
// console.log(tai.length);

// buat sebuat function dimana menerima 2 buat parameter, parameter pertama adalah dataSensus, kedua adalah angka 1-3, dimana parameter ke dua tsb adalah urutan dataSensus

// jika listAnak urutan dataSensus tsb adalah 1, maka kita return 'anak sedikit', jika listAnak urutan dataSensus tsb adalah 2, maka return 'sudah mengikuti program KB', jika listAnak urutan dataSensus tsb adalah 3 maka return 'kelebihan anak'

// const dataSensus = [
//   {
//     nama: "Untung",
//     listAnak: ["Koali", "Panci"],
//   },
//   {
//     nama: "Jaya",
//     listAnak: ["Sansay"],
//   },
//   {
//     nama: "Jaya",
//     listAnak: ["Sansay", "Bacu", "Lanjay"],
//   },
// ];

// function app(param1, param2) {
//   if (param1[param2].listAnak.length === 1) {
//     return "anak sedikit";
//   } else if (param1[param2].listAnak.length === 2) {
//     return "sudah mengikuti KB";
//   } else if (param1[param2].listAnak.length === 3) {
//     return "kelebihan anak";
//   }
// }

// console.log(app(dataSensus, 1));

// buat sebuat function dimana menerima 2 buat parameter, parameter pertama adalah dataSensus, kedua adalah angka 0-2, dimana parameter ke dua tsb adalah urutan dataSensus

// jika listAnak urutan dataSensus tsb adalah 1, maka kita return 'anak sedikit', jika listAnak urutan dataSensus tsb adalah 2, maka return 'sudah mengikuti program KB', jika listAnak urutan dataSensus tsb adalah 3 maka return 'kelebihan anak'

// buat sebuah function yang menerima 3 parameter, angka1, angka2 dan op, dimana op (a)

// jika op adalah add, maka return
// "Sum of  angka1 and angka2 is hasilPenambahan"

// jika op adalah subtract, maka return
// "Difference of  angka1 and angka2 is hasilPengurangan"

// jika op adalah multiply, maka return
// "Product of  angka1 and angka2 is hasilPerkalian"

// const data = (param1, param2, param3) => {
//   if (param3 === "+") {
//     return `Sum of ${param1} and ${param2} is ${param1 + param2}`;
//   } else if (param3 === "-") {
//     return `Difference of ${param1} and ${param2} is ${param1 - param2}`;
//   } else if (param3 === "*") {
//     return `Product of ${param1} and ${param2} is ${param1 * param2}`;
//   } else if (param3 === "/") {
//     return `Division of ${param1} and ${param2} is ${param1 / param2}`;
//   }
// };

// console.log(data(5, 5, "+"));
// console.log(data(5, 5, "-"));
// console.log(data(5, 5, "*"));
// console.log(data(5, 5, "/"));

// buat sebuah function yang menerima 3 function, param pertama adalah angka dengan decimal, param kedua adalah angka dengan decimal, dan param ke-tiga adalah "atas" atau "bawah"

// di function tsb tambahkan param pertama dan param kedua, jika, param ke-3 adalah "atas", maka hasil penambahan param satu dan param dua dibulatkan ke angka lebih besar, contoh 1.5 + 2.1 = 3.6 menjadi 4

// di function tsb tambahkan param pertama dan param kedua, jika, param ke-3 adalah "bawah", maka hasil penambahan param satu dan param dua dibulatkan ke angka lebih besar, contoh 1.5 + 2.1 = 3.6 menjadi 3

// const app = (param1, param2, param3) => {
//   const pertambahan = param1 + param2;
//   if (param3 === "atas") {
//     return Math.ceil(pertambahan);
//   } else if (param3 === "bawah") {
//     return Math.floor(pertambahan);
//   }
// };

// console.log(app(45.6, 12.3, "bawah"));
// console.log(app(45.6, 12.3, "atas"));

// const groceryList = [
//   "orange juice",
//   "bananas",
//   "coffee beans",
//   "brown rice",
//   "pasta",
//   "coconut oil",
//   "plantains",
// ];

// groceryList.shift();
// groceryList.unshift("popcorn");
// console.log(groceryList.slice(1, 4)); // mengambil data di array secara spesifik (first, last+1)
// console.log(groceryList);
// const pastaIndex = groceryList.indexOf("pasta");
// console.log(pastaIndex);

// let secretMessage = [
//   "Learning",
//   "is",
//   "not",
//   "about",
//   "what",
//   "you",
//   "get",
//   "easily",
//   "the",
//   "first",
//   "time,",
//   "it",
//   "is",
//   "about",
//   "what",
//   "you",
//   "can",
//   "figure",
//   "out.",
//   "-2015,",
//   "Chris",
//   "Pine,",
//   "Learn",
//   "JavaScript",
// ];
// // console.log(secretMessage.length) // 24
// secretMessage.pop();
// // console.log(secretMessage.length) // 23
// secretMessage.push("to", "Program");
// // console.log(secretMessage.length) // 25
// // console.log(secretMessage.indexOf('easily'))
// secretMessage[7] = "right"; // renames 'easily' to 'right'
// // console.log(secretMessage[7]) // right
// secretMessage.shift(); // removes first element
// secretMessage.unshift("Programming"); // adds first element
// secretMessage.splice(6, 5, "know,"); // starts from 6, deletes 5 items after it

// console.log(secretMessage.join(" ")); // Array.prototype.join(), creates and returns a new string by concatenating all of the elements in an array

// //LOOPLOOPLOOP, codecademy, 12 oct 2022, 12-10-2022
// for (let counter = 5; counter <= 10; counter++) {
//   console.log(counter);
// }

// // The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
// for (let counter = 3; counter >= 0; counter--) {
//   console.log(counter);
// }

// const vacationSpots = ["Bali", "Paris", "Tulum"];

// // Write your code below
// for (let i = 0; i < vacationSpots.length; i++) {
//   console.log(`I would love to visit ${vacationSpots[i]}`);
// }

// Write your code below

// Write your code below
// let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
// let tinasFollowers = ["Sam", "Marta", "Elle"];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   // bobsFollowers.length = 4
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     // tinasFollowers.length = 3
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(" " + bobsFollowers[i]);
//     }
//   }
// }
// console.log(`The both loops have the strings: ${mutualFollowers}`);

// const cards = ["diamond", "spade", "heart", "club"];

// let currentCard;

// while (currentCard != "spade") {
//   currentCard = cards[Math.floor(Math.random() * 4)];
//   console.log(currentCard);
// }

// // A for loop that prints 1, 2, and 3
// for (let counterOne = 1; counterOne < 4; counterOne++) {
//   console.log(counterOne);
// }

// // A while loop that prints 1, 2, and 3
// let counterTwo = 1;
// while (counterTwo < 4) {
//   console.log(counterTwo);
//   counterTwo++;
// }

//DO WHILE LOOP
// x = 0;
// i = 0;

// do {
//   x = x + i;
//   console.log(x);
//   i++;
// } while (i < 5);

//reverse for loop
// const items = ["apricot", "banana", "cherry"]; // length = 3

// for (let i = items.length - 1; i >= 0; i -= 1) {
//   // 2, i lebih/sama dengan 0, maka i dikurangi 1
//   console.log(`${i}. ${items[i]}`); // i. items[i]
// }

// 2.., lebih dr 0? yes, 2, cherry
// 1.., lebih dr 0? yes, 1, banana
// 0.., sama dengan 0? yes, 0, apricot
// 2. cherry
// 1. banana
// 0. apricot

// const items = ["apricot", "banana", "cherry"]; // length = 3

// for (let i = 0; i < items.length; i++) {
//   console.log(`${i}. ${items[i]}`);
// }

// 0.., lebih dari 3? yes
// 0. apricot, // items[array(i, j)]

// Write your code below

// const cupsOfSugarNeeded = 5;
// let cupsAdded = 0;

// do {
//   cupsAdded++;
//   console.log(cupsAdded + " cup was added");
// } while (cupsAdded < cupsOfSugarNeeded);

// const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// for (let i = 0; i < rapperArray.length; i++) {
//   if (i === 2) {
//     continue;
//   }
//   console.log(rapperArray[i]);
//   // output:: Lil' Kim, Jay-Z, Tupac, the [2] skipped because 'continue' statement
// }

// for (let i = 0; i < rapperArray.length; i++) {
//   if (i > 2) {
//     break;
//   }
//   console.log(rapperArray[i]);
//   // output: Lil' Kim, Jay-Z, Notorious B.I.G., the [3] skipped because 'break' statement
// }

// function skipNumbers(num) {
//   let angkaGenap = [];
//   for (let i = 0; i < 20; i++) {
//     if (i === num) {
//       // i === 10, 10 was skipped because of 'continue' statement
//       continue;
//     }
//     if (i % 2 === 0) {
//       angkaGenap.push(i);
//     }
//   }
//   return angkaGenap;
// }

// console.log(skipNumbers(10)); // [0, 2, 4, 6, 8, 12, 14, 16, 18]

// function skipNumbers(num) {
//   let angkaGenap = [];
//   for (let i = 0; i < 20; i++) {
//     if (i === num) {
//       // i === 10, when it reaches 10, it would be stopped because of 'break' statement
//       break;
//     }
//     if (i % 2 === 0) {
//       angkaGenap.push(i);
//     }
//   }
//   return angkaGenap;
// }

// console.log(skipNumbers(10)); // [ 0, 2, 4, 6, 8 ]

// const animal = "cat"; // length = 3

// for (let i = 0; i < animal.length; i++) {
//   console.log(animal[i]);
//   for (let j = 1; j < 4; j++) {
//     console.log(j);
//   }
// }

// // Setup;
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   console.log(myArr[i]);
//   total += myArr[i];
//   console.log(total);
// }

// const input = "what doesnt kill you makes you wish you were dead"; // length = 49
// const vowels = ["a", "i", "u", "e", "o"]; // length = 5
// const resultArray = [];

// for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
//   // length = 49
//   for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
//     // length = 5
//     if (input[inputIndex] === vowels[vowelIndex]) {
//       resultArray.push(input[inputIndex]);
//     }
//   }
// }

// const whaleTalk = resultArray.join("").toUpperCase();
// console.log(whaleTalk); // AOEIOUAEOUIOUEEEA
// // console.log(whaleTalk.length); // 17

// const strangeBirds = [
//   "Shoebill",
//   "Cockatrice",
//   "Basan",
//   "Terrorbird",
//   "Parotia",
//   "Kakapo",
// ];

// for (const bird of strangeBirds) {
//   if (bird === "Basan") {
//     continue;
//   }
//   console.log(bird);
// }

// const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Yoshi", "Snorlax"];

// // Write your code below
// for (const pokemon of pokemonList) {
//   if (pokemon === "Yoshi") {
//     continue;
//   }
//   console.log(`You caught a ${pokemon}`);
// }

// const obj = { a: 1, b: 2, c: 3 };

// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }

// const fasterShip = {
//   "Fuel Type": "Turbo Fuel",
//   color: "silver",
// };

// console.log(fasterShip["Fuel Type"]); // selecting key as a string

// let spaceship = {
//   "Fuel Type": "Turbo Fuel",
//   "Active Mission": true,
//   homePlanet: "Earth",
//   numCrew: 5,
// };

// let propName = "Active Mission";

// const isActive = spaceship[propName];
// console.log(isActive);

// let spaceship = {
//   "Fuel Type": "Turbo Fuel",
//   homePlanet: "Earth",
//   color: "silver",
//   "Secret Mission": "Discover life outside of Earth.",
// };

// spaceship.color = "glorious gold";
// spaceship.numEngines = 5;
// delete spaceship["Secret Mission"]; // removes 'secret mission' key !important.... // DELETE
// console.log(spaceship);

// let retreatMessage =
//   "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

// const alienShip = {
//   retreat() {
//     console.log(retreatMessage);
//   },
//   takeOff() {
//     console.log("Spim... Borp... Glix... Blastoff!");
//   },
// };

// alienShip.retreat();
// alienShip.takeOff();

// loop, 14 oct 2022, rumah fakhrul
// syntax
// for (let i = 0; i < 10; i = i + 3) // for (start; limit/condition; action) first step, second step, last step;
//   console.log("hello", i);
// }

// bikin loop dari 1 sampe 50, dimana penambahan adalah +1

// dan didalam loop tsb, harus identifikasi, jika varibelnya genap makan print
// "angka i adalah genap"

// jika var adalah ganjil maka print
// "angka i adalah ganjil"

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(`angka ${i} adalah genap`);
//   } else {
//     console.log(`angka ${i} adalah ganjil`);
//   }
// }

// bikin gambr seperti ini di console

// *
// **
// ***
// ****

// let star = "";

// for (let i = 1; i <= 4; i = i + 1) {
//   star += "*";
//   console.log(star);
// }

// console.log(star);

// Soal 3
/*

+++++
++++
+++
++
+

*/
// let plusik = "";
// for (let i = 5; i >= 1; i--) {
//   console.log((plusik += "+"));
// }

// let tambah = "++++++";
// for (let i = 0; i < 5; i++) {
//   tambah = tambah.slice(0, -1);
//   console.log(tambah);
// }

// let m = "++++++";
// let n = "+";

// for (let i = 0; i < 9; i++) {
//   m = m.slice(0, -1);
//   if (m.length < 1) {
//     n += "+";
//     console.log(n);
//   } else {
//     console.log(m);
//   }
// }

//   *
//  ***
// *****

// let memek = " ";
// for (let i = 1; i <= 3; i++) {
//   memek += "* ";

//   console.log(memek);
// }

// const array = [5, 2, 1, 8, 9];

// for (let i = 0; i < array.length; i++) {
//   // console.log(array[i]);
//   if (array[i] % 2 === 0) {
//     console.log(`angka ${array[i]} adalah genap.`);
//   } else {
//     console.log(`angka ${array[i]} adalah ganjil.`);
//   }
// }

// dengan array tsb, buatlah sebuah array yang LIMITNYA BEDASARKAN PANJANG DARI array tsb,

// lalu jika value nya genap cl: angka i adalah genap
// jika valuenya ganjil maka cl: angka i adalah ganjil
// contoh: angka 1 adalah ganjil

// const users = [
//   {
//     id: 1,
//     first_name: "Robert",
//     last_name: "Schwartz",
//     email: "rob23@gmail.com",
//   },
//   {
//     id: 2,
//     first_name: "Lucy",
//     last_name: "Ballmer",
//     email: "lucyb56@gmail.com",
//   },
//   {
//     id: 3,
//     first_name: "Anna",
//     last_name: "Smith",
//     email: "annasmith23@gmail.com",
//   },
//   {
//     id: 4,
//     first_name: "Robert",
//     last_name: "Brown",
//     email: "bobbrown432@yahoo.com",
//   },
//   {
//     id: 5,
//     first_name: "Roger",
//     last_name: "Bacon",
//     email: "rogerbacon12@yahoo.com",
//   },
// ];

// buat return nya sebuah array, yang isinya object berisi hanya id dan email setiap orang
// let newArr3 = [];
// for (let i = 0; i < users.length; i++) {
//   // length = 5
//   let newObj = {
//     id: users[i].id,
//     email: users[i].email,
//   };
//   newArr3.push(newObj);
// }

// console.log(newArr3);

// halo2
// halo4
// halo6

// for (let i = 2; i <= 6; i = i + 2) {
//   console.log(`halo${i}`);
// }

// buat sebuah array dari 0 sampai 10 dimana, penambahannya 1

// ekspektasi:
// jika angka itu adalah genap, maka tampilan ke terminal, jika ganjil, abaikan

// for (let i = 8; i >= 0; i -= 4) {
//   console.log(`balik ${i}`);
// }

// const namaMurid = ["Adam", "Levigne", "Angka", "Jado"];

// for (let i = 0; i < namaMurid.length; i++) {
//   //length = 4
//   if (i % 2 === 0) {
//     console.log(`${namaMurid[i]} Genap`);
//   } else {
//     console.log(`${namaMurid[i]} Ganjil`);
//   }
// } //  Adam Genap Levigne Ganjil Angka Genap Jado Ganjil

// const users = [
//   {
//     id: 1,
//     first_name: "Robert",
//     last_name: "Schwartz",
//     email: "rob23@gmail.com",
//   },
//   {
//     id: 2,
//     first_name: "Lucy",
//     last_name: "Ballmer",
//     email: "lucyb56@gmail.com",
//   },
//   {
//     id: 3,
//     first_name: "Anna",
//     last_name: "Smith",
//     email: "annasmith23@gmail.com",
//   },
//   {
//     id: 4,
//     first_name: "Robert",
//     last_name: "Brown",
//     email: "bobbrown432@yahoo.com",
//   },
//   {
//     id: 5,
//     first_name: "Roger",
//     last_name: "Bacon",
//     email: "rogerbacon12@yahoo.com",
//   },
// ];

// const urutan = [2, 3];

// for (let i = 0; i < users.length; i++) {
//   if (i === urutan[0] || i === urutan[1]) {
//     users[i].first_name = "atcislit";
//   }
// }
// console.log(users);

//   buat sebuah loop yang menentukan kalau urutan users tersebut 2/3, maka first_name nya jadi "acislit"

// const users = [
//   {
//     id: 1,
//     first_name: "Robert",
//     last_name: "Schwartz",
//     email: "rob23@gmail.com",
//   },
//   {
//     id: 2,
//     first_name: "Lucy",
//     last_name: "Ballmer",
//     email: "lucyb56@gmail.com",
//   },
//   {
//     id: 3,
//     first_name: "Anna",
//     last_name: "Smith",
//     email: "annasmith23@gmail.com",
//   },
//   {
//     id: 4,
//     first_name: "Robert",
//     last_name: "Brown",
//     email: "bobbrown432@yahoo.com",
//   },
//   {
//     id: 5,
//     first_name: "Roger",
//     last_name: "Bacon",
//     email: "rogerbacon12@yahoo.com",
//   },
// ];

// const cariAngka = [1, 35, 3, 107, 34, 467, 34, 345, 223]; //10

// function myApp(param1, param2) {
//   if (param2 === 1) {
//     let tampungan = 999;
//     //cari angka terkecil
//     for (let i = 0; i < param1.length; i++) {
//       if (param1[i] < tampungan) {
//         tampungan = param1[i];
//       }
//     }
//     return tampungan;
//   } else {
//     //cari angka terbesar
//     let tampunganBesar = 0;
//     for (let j = 0; j < param1.length; j++) {
//       if (param1[j] > tampunganBesar) {
//         tampunganBesar = param1[j];
//       }
//     }
//     //j=2
//     //param1.length = 10
//     //param1[j]=3
//     //tampunganBesar=35
//     return tampunganBesar;
//   }
// }

// console.log(myApp(cariAngka, 1));
// console.log(myApp(cariAngka, 2));

// let spaceship = {
//   passengers: [{ name: "Space Cat" }],
//   telescope: {
//     yearBuilt: 2018,
//     model: "91031-XLT",
//     focalLength: 2032,
//   },
//   crew: {
//     captain: {
//       name: "Sandra",
//       degree: "Computer Engineering",
//       encourageTeam() {
//         console.log("We got this!");
//       },
//       "favorite foods": ["cookies", "cakes", "candy", "spinach"],
//     },
//   },
//   engine: {
//     model: "Nimbus2000",
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: "HD",
//     },
//     "back-up": {
//       battery: "Lithium",
//       terabytes: 50,
//     },
//   },
// };

// let capFave = spaceship.crew.captain["favorite foods"][0];

// let firstPassenger = spaceship.passengers[0];
// console.log(firstPassenger);

// let spaceship = {
//   fuelType: "Turbo Fuel",
//   homePlanet: "Earth",
// };

// function greenEnergy(obj) {
//   obj.fuelType = "avocado oil";
//   obj.disabled = true;
//   return obj;
// }

// console.log(greenEnergy(spaceship));

// let spaceship = {
//   crew: {
//     captain: {
//       name: "Lily",
//       degree: "Computer Engineering",
//       cheerTeam() {
//         console.log("You got this!");
//       },
//     },
//     chiefOfficer: {
//       name: "Dan",
//       degree: "Aerospace Engineering",
//       agree() {
//         console.log("I agree, captain!");
//       },
//     },
//     medic: {
//       name: "Clementine",
//       degree: "Physics",
//       announce() {
//         console.log(`Jets on!`);
//       },
//     },
//     translator: {
//       name: "Shauna",
//       degree: "Conservation Science",
//       powerFuel() {
//         console.log("The tank is full!");
//       },
//     },
//   },
// };

// for (let crewMember in spaceship.crew) {
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }

// for (let crewMember in spaceship.crew) {
//   console.log(
//     `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
//   );
// }

// const robot = {
//   model: "B-4MI",
//   mobile: true,
//   greeting() {
//     console.log(`I'm model ${this.model}, how may I be of service?`);
//   },
// };

// const massProdRobot = (model, mobile) => {
//   return {
//     model,
//     mobile,
//     greeting() {
//       console.log(`I'm model ${this.model}, how may I be of service?`);
//     },
//   };
// };

// const shinyNewRobot = massProdRobot("TrayHax", true);

// const chargingStation = {
//   _name: "Electrons-R-Us",
//   _robotCapacity: 120,
//   _active: true,
//   _chargingRooms: ["Low N Slow", "Middle of the Road", "In and Output"],

//   set robotCapacity(newCapacity) {
//     if (typeof newCapacity === "number") {
//       this._robotCapacity = newCapacity;
//     } else {
//       console.log(`Change ${newCapacity} to a number.`);
//     }
//   },
//   get robotCapacity() {
//     return this._robotCapacity;
//   },
// };

// const robot = {
//   model: "1E78V2",
//   energyLevel: 100,
//   provideInfo() {
//     return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
//   },
// };

// console.log(robot.provideInfo());

// const robot = {
//   energyLevel: 95,
//   checkEnergy() {
//     console.log(`Energy is currently at ${this.energyLevel}%.`);
//   },
// };

// robot.checkEnergy();

// const robot = {
//   _energyLevel: 10,
//   recharge() {
//     this._energyLevel += 30;
//     console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
//   },
// };

// robot.recharge();

// const robot = {
//   _model: "1E78V2",
//   _energyLevel: 40,
//   get energyLevel() {
//     if (typeof this._energyLevel === "number") {
//       return `My current energy level is ${this._energyLevel} (out of 100).`;
//     } else {
//       return `System malfunction: cannot retrieve energy level.`;
//     }
//   },
// };

// console.log(robot.energyLevel);

// const robot = {
//   _model: "1E78V2",
//   _energyLevel: 100,
//   _numOfSensors: 15,
//   get numOfSensors() {
//     // GETGETGET
//     if (typeof this._numOfSensors === "number") {
//       return this._numOfSensors;
//     } else {
//       return "Sensors are currently down.";
//     }
//   },
//   set numOfSensors(num) {
//     // SETSETSET
//     if (typeof num === "number" && num >= 0) {
//       this._numOfSensors = num;
//     } else {
//       console.log("Pass in a number that is greater than or equal to 0");
//     }
//   },
// };

// robot.numOfSensors = 20;
// console.log(robot.numOfSensors);

// christmas tree
// for (let i = 0; i < 3; i++) {
//   let m = "";
//   if (i === 0) {
//     m += "  *  ";
//   } else if (i === 1) {
//     m += " *** ";
//   } else {
//     m += "*****";
//   }
//   console.log(m);
// }

// 10. Use for loop to iterate from 0 to 10 and print the sum of all numbers.

// let initialNum = 0;
// for (let i = 0; i <= 10; i++) {
//   initialNum += i;
// }

// console.log(initialNum);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// expected output :  [2550, 2500]

// let even = 0;
// let odd = 0;
// let newArr;
// for (i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
//   newArr = [even, odd];
// }

// console.log(newArr);

// const nilaiTengah = [1, 2, 3, 4, 5, 5, 5, 4, 3, 3]; //genap 5+5/2
// const nilaiTengah2 = [1, 2, 3, 4, 9, 5, 5, 4, 3]; //ganjil  9

// for (let i = 0; i < nilaiTengah.length; i++) {}

// for (let i = 1; i < 6; i += 2) {
//   let k = 0;
//   for (let j = 0; j < 2; j++) {
//     k = k + i;
//     console.log(k);
//   }
// }

// let tampung = "";
// for (let i = 0; i < 4; i++) {
//   tampung += "+";
//   console.log("halo");
//   for (let j = 0; j < i; j += 1) {
//     console.log(tampung, i);
//   }
//   tampung = "";
// }

// console.log(tampung);

// tampung = "+"
// halo,
// i = 3, j = 0

// log = halo, halo, + 1, halo, + 2, + 2, halo, + 3, + 3, + 3

// Dikasih

// DI CONSOLE LOG
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777

// const antri = ["1", "2", "3", "4", "5", "6", "7"];

// for (let i = 0; i < antri.length; i++) {
//   // length = 7
//   let tamp = "";
//   for (let j = 0; j < i + 1; j++) {
//     tamp += antri[i];
//   }
//   console.log(tamp);
// }

// const antri = ["1", "2", "3", "4", "5", "6"];
// //              0 ,  1 ,  2 ,  3 ,  4 ,  5

// let string = "";
// let counter = antri[0]; // 1
// for (let i = 1; i <= antri.length - 3; i++) {
//   for (j = 1; j <= i; j++) {
//     string += counter;
//     counter++;
//   }
//   string += "\n";
// }
// console.log(string);

// // DI CONSOLE LOG
// // 1 || 0
// // 23 || 1, 2
// // 456 || 3, 4, 5

// console.log(angka[0][1]);
// KELUAR
// [[1,9,3],[3,9,3],[9,7,9]
// pattern: ubah genap menjadi ganjil

// const angka = [
//   [1, 2, 3], // [0][0, 1, 2]
//   [3, 2, 3], // [1][0, 1, 2]
//   [6, 7, 4], // [2][0, 1, 2]
// ];

// for (let i = 0; i < angka.length; i++) {
//   // length = 3, i = 0, 1, 2
//   for (let j = 0; j <= angka.length; j++) {
//     // i = 0, 1, 2, j = 0, 1, 2
//     if (angka[i][j] % 2 === 0) {
//       angka[i][j] = 9;
//     }
//   }
// }

// console.log(angka);

// const angka = [
//   [1, 2, 3], // [0][0, 1, 2]
//   [3, 2, 5], // [1][0, 1, 2]
//   [6, 7, 4], // [2][0, 1, 2]
// ];
// // yang keluar
// // [[3,2,1],
// // [5,2,3],
// // [4,7,6]]
// // pattern: ubah urutan array (descesding)
// // 0,, 210
// // 1,, 210
// // 2.. 210

// let newArr2 = [];
// for (let i = 0; i < angka.length; i++) {
//   // i = 0, 1, 2 < length = 3
//   let newArr = [];
//   for (let j = angka.length - 1; j >= 0; j--) {
//     // j = 0, 1, 2 >= length = 2
//     newArr.push(angka[i][j]);
//   }
//   newArr2.push(newArr);
// }

// console.log(newArr2);

// const angka = [
//   [1, 2, 3, 4, 5], // [0], [0, 1, 2, 3, 4]
//   [2, 4, 5, 8, 5], // [1], [0, 1, 2, 3, 4]
//   [3, 3, 5, 4, 2], // [2], [0, 1, 2, 3, 4]
//   [4, 5, 4, 8, 9], // [3], [0, 1, 2, 3, 4]
// ];

// // yang keluar
// //  [[1,2,3,4,5],[2,*,*,*,*],[3,*,*,*,*],[4,*,*,*,*]]
// const tamp = [];
// for (let i = 0; i < angka.length; i++) {
//   if (i === 0) {
//     tamp.push(angka[i]);
//   } else {
//     const tamp2 = [];
//     for (let j = 0; j < angka[i].length; j++) {
//       if (j === 0) {
//         tamp2.push(angka[i][j]);
//       } else {
//         tamp2.push("*");
//       }
//     }
//     tamp.push(tamp2);
//   }
// }

// console.log(tamp);

// let angka = [
//   [1, 2, 3, 4, 5], // [0], [0, 1, 2, 3, 4]
//   [2, 4, 5, 8, 5], // [1], [0, 1, 2, 3, 4]
//   [3, 3, 5, 4, 2], // [2], [0, 1, 2, 3, 4]
//   [4, 5, 4, 8, 9], // [3], [0, 1, 2, 3, 4]
// ];

// // pattern: 0,0 | 1,1 | 2,2 | 3,3

// for (let i = 0; i < angka.length; i++) {
//   // length = 4, i = 0, 1, 2, 3
//   for (let j = i; j === i; j++) {
//     // j = 0, 1, 2, 3
//     angka[i][j] = "*";
//   }
// }

// console.log(angka);

// #
// ##
// ###
// ####
// #####
// ######
// #######

// const n = 7;
// for (let i = 1; i <= n; i++) {
//   // i = 1, 2, 3, 4, 5, 6, 7
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     // j = 1, 2, 3, 4, 5, 6, 7
//     str += "#";
//   }
//   console.log(str);
// }

// const twoSum = (array, target) => {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] + array[j] === target && i) {
//         arr.push(i, j);
//         break;
//       }
//     }
//   }
//   return arr;
// };

// console.log(twoSum([2, 7, 11, 15], 13));

/*
 * write code that will calculate the sum of each row and find the sum of row that even
 * return function using template literal
 * i must truthy value
 * return function must "This row total: ${row} and is even"
 */
// const arr = [
//   [1, 2, 3],
//   // [0] [0, 1, 2]
//   [2, 3, 1, 6, 71],
//   // [1] [0, 1, 2, 3, 4]
//   [3, 4, 7, 2],
//   // [2] [0, 1, 2, 3]
// ];

// // console.log(arr[0].reduce((a, b) => a + b, 0)); // 6
// // console.log(arr[1].reduce((a, b) => a + b, 0)); // 83
// // console.log(arr[2].reduce((a, b) => a + b, 0)); // 16, truthy and it's an even number!

// const totalRow = (arr) => {
//   // write your code here
//   let row = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sumChecker = arr[i].reduce((a, b) => a + b, 0);
//     if (sumChecker % 2 === 0 && i) {
//       row = sumChecker;
//     }
//   }
//   return `This row total: ${row} and is even`;
// };

// console.log(totalRow(arr));

// salahan tapi jadi referensi
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [7, 69, 2, 221, 8974];

// const minMax = (arr) => {
//   const sum = arr.reduce((a, b) => a + b, 0);
//   const min = Math.min.apply(Math, arr);
//   const max = Math.max.apply(Math, arr);
//   return `The sum is: ${sum}, the max: ${max} and the min: ${min}`;
// };

// console.log(minMax(arr));
// console.log(minMax(arr2));

// updated;
// let arr = [1, 2, 3, 4, 5];
// // [0, 1, 2, 3, 4]
// let arr2 = [7, 69, 2, 221, 8974];
// // [0, 1, 2, 3, 4]

// const minMax = (arr) => {
//   let sortedArr = arr.sort(function (a, b) {
//     return a - b;
//   }); // ini sudah tersortir, ascending
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < sortedArr.length; i++) {
//     // length = 5, i = 0, 1, 2, 3, 4. stops at 4.
//     if (i !== 0) {
//       // berarti itu i = 1, 2, 3, 4.
//       max += sortedArr[i];
//     }
//     if (sortedArr.length - 1 !== i) {
//       // length = 4, i = 0, 1, 2, 3, 4.
//       // berarti tereksekusi yang 0, 1, 2, 3.
//       min += sortedArr[i];
//     }
//   }
//   return `The max is: ${max}, the min is: ${min}`;
// };

// console.log(minMax(arr));
// console.log(minMax(arr2));

// let candles = [8, 4, 6, 4, 6, 7, 2, 7, 9, 9];

// const birthdayCakeCandles = (candles) => {
//   let max = candles[0];
//   let units = 0;
//   for (i = 0; i < candles.length; i++) {
//     if (candles[i] > max) {
//       max = candles[i]; // max = 6
//     }
//   }
//   for (let j = 0; j < candles.length; j++) {
//     if (candles[j] === max) {
//       units++; // setiap (candles[j] === 9), maka units += 1
//     }
//   }
//   return units; // output = 2
// };

// console.log(birthdayCakeCandles(candles));

// TUGAS: return jumlah unit value terbesar

/* 
1
12
123
1234
12345
*/

// n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += j;
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += i;
//   }
//   console.log(str);
// }

// 1;
// 21; // [1] >= 1
// 321;
// 4321;
// 54321;
// 654321;

// const n = 6;
// for (let i = 1; i <= n; i++) {
//   // n = 6, i = 1, 2, 3, 4, 5, 6;
//   let str = "";
//   for (j = i; j >= 1; j--) {
//     str += j;
//   }
//   console.log(str);
// }

// var arr = [
//   [0, 1, 1],
//   [0, 1, 0],
//   [1, 0, 0],
// ];
// var zeroCount = 0;
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[0].length; j++) {
//     if (arr[i][j] === 0) {
//       zeroCount++;
//     }
//   }
// }

// console.log(zeroCount); //5

/*
 * write a codes that will filter the grade
 * If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
 * If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 * Example:
 *  grade = 84 round to 85 (85 - 84 is less than 3)
 *  grade = 29 do not round (29 is less than 38)
 *  grade = 57 do not round (60 - 57 is 3 or higher)
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

//kalau selisih kurang dari 3, round!
// 75-63 = 2, round!
// 70-67 = 3, gadiround
// 70-66 = 4, gadiround

// const grades = [73, 67, 38, 33, 78, 35];
// // expected output [75, 67, 40, 33, 80, 35]

// const gradingStudent = (grades) => {
//   let newGrades = [];
//   for (let i = 0; i < grades.length; i++) {
//     const roundedGrades = Math.ceil(grades[i] / 5) * 5;
//     // Rounds up to the next multiple 5, example: 66 to 70, 69 to 70
//     if (roundedGrades - grades[i] < 3 && grades[i] >= 38) {
//       // kalau selisih kurang dari 3 dan grade >= 38
//       newGrades.push(roundedGrades);
//     } else {
//       newGrades.push(grades[i]);
//     }
//   }
//   return newGrades;
// };

// console.log(gradingStudent(grades));

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

// 123
// 123456
// 123456789

// for (let i = 1; i <= 3; i++) {
//   // i = 1, 2, 3
//   let str = "";
//   for (let j = 1; j <= i * 3; j++) {
//     // j = 1, 6, 9
//     str += j;
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 3; i += counter) {
//   let str = "";
//   count = 1;
//   for (let j = 1; j <= i; j++) {
//     count++;
//     if (j !== 1) {
//       str += count + j;
//     } else {
//       str += j;
//     }
//   }
//   console.log(str);
// }

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     // j kurang dari 5
//     if (i === 0 || i === 4) {
//       str += "*";
//     } else {
//       if (j === 0 || j === 4) {
//         str += "*";
//       } else {
//         str += " ";
//       }
//     }
//   }
//   console.log(str);
// }

// 1 2 4
// 7 11 16
// 22 29 37

// let angka = 1;
// let indicator = 1;
// for (let i = 0; i < 3; i++) {
//   const tampung = [];
//   for (let j = 0; j < 3; j++) {
//     tampung.push(angka);
//     angka += indicator;
//     indicator++;
//   }
//   console.log(tampung);
// // }
// const arr = [
//   [0, 1, 1], // [0]
//   [1, 1, 0], // [1]
//   [1, 0, 0], // [2]
//   [1, 1, 0], // [3]
//   [0, 0, 0], // [4]
// ];

// // harus keluar di console angka 8,
// // angka 8 tersebut di dapatkan dari jumlah 0
// let tamp = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] === 0) {
//       tamp++;
//     }
//   }
// }
// console.log(tamp);

// // // buat function yang menretrun [17,24,49,64,46]
// const arr1 = [7, 2, 26, 22, 34];
// const arr2 = [10, 22, 23, 42, 12];
// const urutin = (arr1, arr2) => {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push(arr1[i] + arr2[i]);
//   }
//   return newArr;
// };

// console.log(urutin(arr1, arr2));

// membuat fungsi yang mereturn
// [
//   [7, 13, 12], patternnya adalah [x = (0, 1, 2)] || [x = (0, 1, 2)] || [0 + 1 + 2]
//   [11, 6, 12], patternnya adalah [x = (0, 1, 2)] || [x = (0, 1, 2)] || [0 + 1 + 2]
//   [7, 12, 9],  patternnya adalah [x = (0, 1, 2)] || [x = (0, 1, 2)] || [0 + 1 + 2]
// ]

// const angka = [
//   [
//     [1, 2, 4], // [0][0][0, 1, 2]
//     [2, 5, 6], // [0][1][0, 1, 2]
//     [5, 4, 3], // [0][2][0, 1, 2]
//   ],
//   [
//     [2, 4, 5], // [1][0][0, 1, 2]
//     [1, 2, 3], // [1][1][0, 1, 2]
//     [5, 4, 3], // [1][2][0, 1, 2]
//   ],
//   [
//     [1, 2, 4], // [2][0][0, 1, 2]
//     [2, 5, 6], // [2][1][0, 1, 2]
//     [2, 4, 3], // [2][2][0, 1, 2]
//   ],
// ];

// // let newArr1 = [];
// for (let i = 0; i < angka.length; i++) {
//   // let newArr2 = [];
//   for (let j = 0; j < angka[i].length; j++) {
//     let count = 0;
//     for (let k = 0; k < angka[i][j].length; k++) {
//       count += angka[i][j][k];
//     }
//     newArr2.push(count);
//   }
//   newArr1.push(newArr2);
// }

// console.log(newArr1);

// console.log(newArr1[0]);

// keluar: bentuk array dengan angka hanya muncul satu kali

// 30 okt 2022

// eliminate duplicated numbers!
// const angka = [2, 2, 5, 6, 8, 5, 9, 9, 3, 2, 1, 4, 7, 6, 7];
// const angka2 = [];

// for (let i = 0; i < angka.length; i++) {
//   // const i of angka
//   let noRepeat = true;
//   for (let j = 0; j < angka.length; j++) {
//     // const j of angka2
//     if (angka[i] === angka2[j]) {
//       noRepeat = false;
//     }
//   }
//   if (noRepeat === true) {
//     angka2.push(angka[i]);
//   }
// }

// console.log(angka2);

// let followerJaka = ["Malika", "Sani", "Jes", "Logan"];
// let followerAnton = ["Jes", "Malika", "Loi", "Logan", "Memek"];
// let mutualFriend = [];

// const searchFriend = (jaka, anton) => {
//   for (let i = 0; i < jaka.length; i++) {
//     for (let j = 0; j < anton.length; j++) {
//       if (jaka[i] === anton[j]) {
//         mutualFriend.push(anton[j]);
//       }
//     }
//   }
//   return mutualFriend;
// };

// console.log(searchFriend(followerJaka, followerAnton));

// let followerJaka = ["Malika", "Sani", "Jes", "Logan", "Loi"];
// let followerAnton = ["Loi", "Jes", "Loi", "Logan", "Jes", "Sani", "Loi"];
// let onlyThem = [];

// console.log(followerJaka.slice(1, 3));
// Yang kelar Malika, Sani, Jes, Logan, Loi

// let mergedArray = [...followerAnton, ...followerJaka];
// console.log(mergedArray);

// const searchFriend = (jaka, anton) => {
//   for (let i = 0; i < jaka.length; i++) {
//     let noRepeat = true;
//     for (let j = 0; j < jaka.length; j++) {
//       if (jaka[i] === onlyThem[j]) {
//         noRepeat = false;
//       }
//     }
//     if (noRepeat) {
//       onlyThem.push(jaka[i]);
//     }
//   }
//   for (let k = 0; k < anton.length; k++) {
//     let noRepeat = true;
//     for (let l = 0; l < anton.length; l++) {
//       if (anton[k] === onlyThem[l]) {
//         noRepeat = false;
//       }
//     }
//     if (noRepeat) {
//       onlyThem.push(anton[k]);
//     }
//   }
//   return onlyThem;
// };

// console.log(searchFriend(followerJaka, followerAnton));

// *****
// *****
// *****
// *****
// *****

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = i; j < 5; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += "*";
//   }
//   console.log(str);
// }

// for (let i = 1; i <= 5; i++) {
//   let empty = "";
//   // for spaces
//   for (let j = i; j <= 5; j++) {
//     empty += " ";
//   }
//   // first triangle
//   for (let k = 1; k <= i; k++) {
//     empty += "*";
//   }
//   for (let k = 1; k <= i - 1; k++) {
//     empty += "*";
//   }
//   for (let j = i; j <= 5; j++) {
//     empty += ".";
//   }
//   for (let j = i; j <= 5; j++) {
//     empty += ".";
//   }
//   for (let k = 1; k <= i; k++) {
//     empty += "*";
//   }
//   for (let k = 1; k <= i - 1; k++) {
//     empty += "*";
//   }
//   // print
//   console.log(empty);
// }

// let arr = [1, 2, 3, 4, 5];
// let d = 6;

// for (let i = 0; i < d; i++) {
//   arr.push(arr.shift());
// }

// console.log(arr);

// const robotFactory = (model, mobile) => {
//   return {
//     model,
//     mobile,
//     beep() {
//       console.log("Beep Boop");
//     },
//   };
// };

// const tinCan = robotFactory("P-500", true);
// tinCan.beep();

// const robot = {
//   model: "1E78V2",
//   energyLevel: 100,
//   functionality: {
//     beep() {
//       console.log("Beep Boop");
//     },
//     fireLaser() {
//       console.log("Pew Pew");
//     },
//   },
// };

// const { functionality } = robot;
// functionality.beep();

// const robot = {
//   model: "SAL-1000",
//   mobile: true,
//   sentient: false,
//   armor: "Steel-plated",
//   energyLevel: 75,
// };

// // What is missing in the following method call?
// const robotKeys = Object.keys(robot);

// console.log(robotKeys);

// // Declare robotEntries below this line:
// const robotEntries = Object.entries(robot);
// console.log(robotEntries);

// // Declare newRobot below this line:
// const newRobot = Object.assign(
//   { laserBlaster: true, voiceRecognition: true },
//   robot
// );

// console.log(newRobot);

// const menu = {
//   _meal: "",
//   _price: 0,
//   set meal(mealToCheck) {
//     if (typeof mealToCheck === "string") {
//       return (this._meal = mealToCheck);
//     }
//   },

//   set price(priceToCheck) {
//     if (typeof priceToCheck === "number") {
//       return (this._price = priceToCheck);
//     }
//   },

//   get todaySpecial() {
//     if (this._meal && this._price) {
//       return `Today's meal is ${this._meal} for ${this._price}!`;
//     } else {
//       return `Meal or price not set correctly`;
//     }
//   },
// };

// menu.meal = "Indomie";
// menu.price = 1900;
// console.log(menu.todaySpecial);

// const team = {
//   _players: [
//     {
//       firstName: "Ryan",
//       lastName: "Pratama",
//       age: 22,
//     },
//     {
//       firstName: "Chainsaw",
//       lastName: "Man",
//       age: 18,
//     },
//     {
//       firstName: "Hayakawa",
//       lastName: "Aki",
//       age: 17,
//     },
//   ],

//   _games: [
//     { opponent: "Power", teamPoints: 55, opponentPoints: 60 },
//     { opponent: "Makima", teamPoints: 50, opponentPoints: 45 },
//     { opponent: "Pochita", teamPoints: 70, opponentPoints: 75 },
//   ],
//   get players() {
//     return this._players;
//   },
//   get games() {
//     return this._games;
//   },
//   addPlayer(newFirstName, newLastName, newAge) {
//     let player = {
//       firstName: newFirstName,
//       lastName: newLastName,
//       age: newAge,
//     };
//     this.players.push(player);
//   },
//   addGame(newOpponent, newTeamPoints, newOpponentPoints) {
//     let game = {
//       opponent: newOpponent,
//       teamPoints: newTeamPoints,
//       opponentPoints: newOpponentPoints,
//     };
//     this.games.push(game);
//   },
// };

// team.addPlayer("Bugs", "Bunny", 76);
// console.log(team.players);

// team.addGame("Eren", 100, 90);
// console.log(team.games);

// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//   for (let i = 1; i <= 1000000; i++) {
//     if (2 + 2 != 4) {
//       console.log("Something has gone very wrong :( ");
//     }
//   }
// };

// // Write your code below
// const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// isTwoPlusTwo();
// console.log(isTwoPlusTwo.name);

// const higherOrderFunc = (param) => {
//   param();
//   return `I just invoked ${param.name} as a callback function!`;
// };

// const anotherFunc = () => {
//   return "I'm being invoked by the higher-order function!";
// };

// console.log(higherOrderFunc(anotherFunc));

// const addTwo = (num) => {
//   return num + 2;
// };

// const checkConsistentOutput = (num, val) => {
//   let checkA = val + 2;
//   let checkB = num(val);
//   if (checkA === checkB) {
//     return num(val);
//   } else {
//     return "inconsistent results";
//   }
// };

// console.log(checkConsistentOutput(addTwo, 10));

// const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

// artists.forEach((artist) => {
//   console.log(artist + " is one of my favorite artists.");
// });

// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map((number) => {
//   return number * number;
// });

// console.log(squareNumbers);

// const things = ["desk", "chair", 5, "backpack", 3.14, 100];

// const onlyNumbers = things.filter((thing) => {
//   return typeof thing === "number";
// });

// console.log(onlyNumbers);

// .forEach()
// const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
// fruits.forEach((fruits) => {
//   console.log(`I want to eat a ${fruits}`);
// });

// const printFruits = (elements) => {
//   console.log(`I want to eat a ${elements}`);
// };

// fruits.forEach(printFruits);

// .map()
// const animals = [
//   "Hen",
//   "elephant",
//   "llama",
//   "leopard",
//   "ostrich",
//   "Whale",
//   "octopus",
//   "rabbit",
//   "lion",
//   "dog",
// ];

// // Create the secretMessage array below
// const secretMessage = animals.map((animal) => {
//   return animal[0];
// });

// console.log(secretMessage.join(""));

// // .map()
// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// const smallNumbers = bigNumbers.map((number) => {
//   return number / 100;
// });

// console.log(smallNumbers);

// .filter()
// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter((num) => {
//   if (num < 250) {
//     return num;
//   }
// });

// console.log(smallNumbers);

// const favoriteWords = [
//   "nostalgia",
//   "hyperbole",
//   "fervent",
//   "esoteric",
//   "serene",
// ];

// // Call .filter() on favoriteWords below

// const longFavoriteWords = favoriteWords.filter((word) => {
//   if (word.length > 7) {
//     return word;
//   }
// });

// console.log(longFavoriteWords);
