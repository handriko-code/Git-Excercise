const angka = [1, 2, 3];
const newangka = angka.forEach((num) => num * 2);
     console.log(newangka);



// Stact
// LIPO (last input - firt out)

let stact: number[] = [];
stact.push(1);
stact.push(2);
stact.push(3);
//stact.pop();
//stact.pop();
//stact.pop();

console.log(stact[0]);
console.log(stact[1]);
console.log(stact[2]);
console.log(stact);


// FIFO 
// firts in - first out
stact.shift();
console.log(stact);
stact.unshift(1);
console.log(stact);

// Macam - macam array
//1. array berisi function

const fungsiarray: any[] = [
    () => console.log("Halo"), // index 0
    (nama: string) => console.log(`Halo ${nama}`), // index 1
    (a: number , b: number) => console.log(a + b) //index 2
];

fungsiarray[0]();
fungsiarray[1]("Budi");
fungsiarray[2](2,3);

// NESTED ARRAY/ARRAY BERISI ARRAY

const array2:number[] = [];
array2.push(1);
array2.push(2);
array2.push(3);

console.log(array2);
const array3: number[] = []
array3.push(array2);
console.log(array3);

console.log(array3[0][0]);
console.log(array3[0][2]);

// array berisi object

const carObj = {
    namamobil: string = "toyota",
    tahun: number = 1999,
    warna: string = "merah",
}
console.log(carObj.namamobil);

const cararray: any [] = [];
cararray.push(carObj);

console.log(cararray);

console.log(cararray[0]["tahun"] +" "+ cararray[0]["warna"]);
console.log(cararray[0]["namamobil"]);

// kombinasi: array berisi array, function dan object

const arraycombain: any[] = [
    (sapa: string) => console.log(`Halo ${sapa}`),
    [1,2,3],
    [4,5,6],
    {nama: "Diana" , hoby: ["membaca","makan"]}
]

arraycombain[0]("halo");
console.log(arraycombain[1][1]);
console.log(arraycombain[3]["nama"]);
console.log(arraycombain[3]["hoby"]);
console.log(arraycombain[3].hoby[0])


// array bilt in method
// reduce(): menjumlahkan seluruh elemen didalam array reduce= 1 + 2 + 3 + 4 = 10
// reduce (acumulator, elemn array) => acumulator + elemen array, nilai awal=0
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// find() : memenuhi syarat pertama yang diambil [10,20,30,50], contoh fileter num >= 15 maka yg memenuhi syarat [20,30,50] dan outputnya pertama = 20 yg diambil

const numberfind: number[] =  [10, 15, 20, 30, 60]
console.log(numberfind.find((x) => x >= 15));


// inlcude() : mengecek apakah ada value yg kita cari, jika ada maka akan meretur nila "true"
let fruits: string [] = ["apple", "banana", "cherry"];
console.log(fruits.includes("cherry"));

//sort

let x = Date.parse('March 30, 2011');
console.log(x);