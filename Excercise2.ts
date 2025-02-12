// Excercise 1
// Create a function to check if two objects are equal 
// Instances: Input : { a: 2 } & { a: 1 } & Output: false

function myInput1(a:number, b:number) {
    return a === b? "equal" : "not equal";
}
let result = myInput1(1,1);
console.log(result);

// Excercise 2
// Create a function to get the intersection of two objects
// Instances: Input : { a: 1, b: 2 } & { a: 1, c: 3 } - Output: { a: 1 }
let firstObj = {
    a: 1,
    b: 2,
}

let secondObj = {
    a: 1,
    c: 3,
}

let myIntersection = (firstObj: number, secondObj: number) => {
    return Object.keys(firstObj).filter(k => Object.hasOwn(secondObj,k))

}
console.log(myIntersection(firstObj,secondObj));

// Excercise 3
// Create a function to merge two array of student data and remove duplicate data
//  Student data : name & email

interface Istudent {
    nama: string;
    email: string;
    
}

class student implements Istudent {
    nama: string;
    email: string;

    constructor(nama:string, email:string){
        this.nama = nama;
        this.email = email;
    }
}

const listStudentArr1: Istudent[] = [
    new student("student1","student1@gmail.com"),
    new student("student2","student2@gmail.com")
]
console.log(listStudentArr1);

const listStudentarr2: Istudent[] = [
    new student("student1","student1@gmail.com"),
    new student("student3","student3@gmail.com"),
]
console.log(listStudentarr2);

// Excercise 4
// remove duplicte array of object

function mergeStudent(a: Istudent[],b: Istudent[] ){
    const mergeab: Istudent[] = a.concat(b);
    console.log(mergeab);
    return [...new Set(mergeab)];
}
console.log(mergeStudent(listStudentArr1,listStudentarr2));

// Excercise 5
// Create a function that can accept input as an array of objects and switch all values into property and 
// property into value
// Example : Input : [{ name: ‘David’, age: 20 }] and Output : [{ David: ‘name’, 20: ‘age’}]

class sValue extends student {
    age: number;
    addAge (age:number){
        this.age = age;
    }
}
const arrysValue: Istudent = new sValue("David", "20");
console.log(arrysValue);


function swapKeyValue(obj: any){
    return Object.fromEntries(Object.entries(obj).map(([key , value]) => [value , key]));
}
const swapped = swapKeyValue(arrysValue);
console.log(swapped);


// Excercise 6
// Create a function to find a factorial number using recursion
// Example: Input : 5 and Output: 5! = 5 x 4 x 3 x 2 x 1 = 12
// n!= 5*(n-1)*(n-2)*(n-3).......n

function factorial(n:number): any {
    if (n === 0 || n === 1) {
        return 1;
    }
   return n * factorial(n - 1);
}
console.log(factorial(5));

// Excercise 7
// Shooting Game
// Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health < 0

interface Iplayer {
    name: string;
    health: number;
    power: number;
}

class player implements Iplayer{
    name: string;
    health: number = 100;
    power: number = 10;
    
    constructor (name: string, health: number, power: number){
        this.name = name;
        this.health = health;
        this.power = power;
    }

getRandomItem (){
    const random = Math.random();
    if(random < 0.5 ){
        this.health +=10;
        console.log(`${this.name} mendapatkan item: +10 Health (Health: ${this.health}) `);
    } else {
        this.power +=10;
        console.log(`${this.name} mendapatkan item: 10 Power (Power: ${this.power})`)
    }

  }
  shootingGame(lawan: string) {
    console.log(`${this.name} menyerang ${lawan.name} dengan kekuatan ${this.power}`);
    lawan.health -= this.power;
    console.log(`Health ${lawan.name} sekarang: ${lawan.health}`);
 }

}
const startGame = (player1: string, player2: string) => {
    console.log("Start Game");
        while(player1.health > 0 && player2.health > 0){
            console.log("=== Giliran Player 1 ===");
            player1.getRandomItem();
            player1.shootingGame(player2);
            if (player2.health <= 0)
            break;

            console.log("\n== Giliran Player 2 ===");
            player2.getRandomItem();
            player2.shooingGame(player1);
        }
         console.log("===== permainan selesai ====");
         if (player1.health <= 0 && player2.health <= 0) {
            console.log("hasil seri");
            }else if (player1 <= 0){
                console.log(`${player2.name} sebagai pemenang`);
            }else {
                console.log(`${player1.name} sebagai pemenang`);
            }
        }
const player1 = new player("player 1");
const player2 = new player("player 2")

startGame(player1,player2);










