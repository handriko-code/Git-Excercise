// array
// untuk mengakses  data didalam array bisa menggunakan index dimana index dimulai dari 0 (nol)
const listAlphabet: string [] = ["A","B","C","D","E"];
const listNumber: number [] = [1,2,3,4,5,6]
console.log(listAlphabet[0]);

for (let i = 0; i < listAlphabet.length; i++) {
    console.log(listAlphabet[i]);
}

// built in Method: toSring
console.log(listAlphabet.toString())

// join built in method
console.log(listAlphabet.join(""))

// pop built in method
const _e:string | undefined = listAlphabet.pop();
console.log(_e);
console.log(listAlphabet)

// push build in method
listAlphabet.push("F");
console.log(listAlphabet);

// length buil in method
console.log(listAlphabet.length);

// splice built in method
// posisi parameter splice
// 1. start dari index ke berapa
// 2. mau menghapus beberapa data, 0 jika tidak ingin menghapus
// 3. optional, jika ingin menambah data baru ke posisi start index
listAlphabet.splice(3,0, "G");
console.log(listAlphabet);

// reverse built in method
console.log(listNumber);
listNumber.reverse();
console.log(listNumber);

// sort built in method
listNumber.sort((a,b) => b - a);
console.log(listNumber);

console.log(listAlphabet);
listAlphabet.sort();
console.log(listAlphabet);

// filter built in method
// method ini sebenar melooping contoh array.filer ((a)melooping => tulis conditionnya
console.log(listAlphabet[4]);
console.log(listAlphabet.filter((a) => a ==="F"));

const listEvenNumber: number [ = listNumber.filter((x) => x % 2 === 0);
console.log(listEvenNumber);

// map built in method: me looping sebanya jumlah data nya
console.log(listNumber.map((a) => a * 2);

// for of loop
for (let value of listNumber) {
    console.log(value);
}

// FUNCTION
// function tidak akan berjalan sebelum dipanggil
// function declaration
// num1 dean num2 adalah parameter, akan menangkqp vqlue dari sebuah argumen sesuai posisinya
function pertambahan(num1:number, num2:number) {
    console.log(num1 + num2);
}

// pemanggilan sebuah fucntion
// argument
// 5 dan 5 adalah sebuah argumen, akan dilempar menjadi sebuah value parameter function
pertambahan(5 ,5); // ini adalah argumen
pertambahan(10,2); // ini adalah argumen

function greeting() { // tidak memiliii parameter seperti fucntion di atas pertambahan
    pertambahan(3,3); // ini adalah argumen yg akan aktif jika fucntion greeting di dilankan dulu
    console.log("Hello All");
}
greeting();

// function expression
// tidak punya nama function, dan hanya ditampung di dalam variable
const pengurangan = function (num1: number, num2: number) {
    console.log(num1 - num2);
}
pengurangan(5,2);

// arrow function
const perkalian = (num1: number, num2: number = 1) => {
    //console.log(num1 * num2);
    return num1 * num2; // jika akan memasukan hasilnya ke dalam sebuah variable 'hasilPerkalian' maka hrs di return
};
const hasilPerkalian: number = perkalian (6,4);
console.log(hasilPerkalian);
console.log(perkalian(2,2));
console.log(perkalian(5,3));

// default parameter
// const perkalian = (num1: number, num2: number = 1) dikasih ke parameter num2 yg terakhir, tidak bisa ke num1

console.log(perkalian(2));

const message = (message: string, nama: string = "", umur: number = 0, noHp: string = ') => {
    return `${message} ${nama}, umur kamu = ${umur}, nomor hp kamu = ${noHP}`
}
console.log(message("Hello", "Budi"));

// nested function

function getMessages(firtsName: string) {
    let email: string = "email@gmail.com"
    function sayHello() {
        return `Hello ${firstname}`;
    }
        fucntion welcome) {
        return `welcome to purwadhika, ${email}`
    }
}
console.log(getMessages("Budi"));