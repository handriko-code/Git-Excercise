// Problem 1: Write a code to display the multiplication table of a given intege
// Instance:  Number → 9
let limit: number = 10;
const input: number = 9;
let result1: number = 0;
 for (let i = 0; i <= limit; i++) {
    result1 = input * i;
    console.log(result1);
 }


// Problem 2: Write a code to check whether a string is a palindrome or not.
// Instance: : ‘madam’ → palindrome
const text1: string = "madam";
const splText= text1.split("");
const reverseText = splText.reverse();
const mergetext = reverseText.join();
let result2 = text1 === mergetext? "palindrome" : "not palindrome";
console.log(`${text1} word is ${result2}`); 



// Problem 3: Write a code to convert centimeter to kilomete
// Instance: 100000 → “1 km”
let input1: number = 1;
let conversion: number = input1 * 10;
console.log(`converting ${input1} cm = ${conversion} km`);


// Problem 4: Write a code to format number as currency (IDR)
// Instance:  1000 → “Rp. 1.000,00”
let num: number = 1000000;
let text2 = num.toLocaleString("id-ID",{style:"currency", currency:"IDR"});
console.log(`formating number ${num} changed into ${text2}`)


// Problem 5: Write a code to remove the first occurrence of a given “search string” from a string
// instance: string = “Hello world”, search string = “ell” → “Ho world”
let word: string = "Hello World";
let x:number = 1;
let result3 = " ";
for (let i = 0; i < word.length; i++) {
    if (i === x ) {
        result3 = word.slice(i,4);
        console.log(word.replace(`${result3}`, "")); 
    }
}


// Problem 6: Write a code to capitalize the first letter of each word in a string
// Instance: "hello world" changed into "Hello World"
let myword: string = "apa kabar";
let _split = myword.split(" ");
for (let i = 0; i <_split.length; i++) {
   _split[i] = _split[i] [0].toUpperCase() + _split[i].substring(1);
    
}
console.log(_split.join(" "))

// Problem 7: Write a code to swap the case of each character from strin
// Instance: ‘The QuiCk BrOwN Fox’ changed into ‘ tHE qUIcK bRoWn fOX

let swap: string = "The QuiCk BrOwN Fox";
let letter: string = " ";

for (let i = 0; i < swap.length; i++) {
    if (swap[i] === swap[i].toUpperCase()) {
        letter += swap[i].toLowerCase();
    } else {
        letter += swap[i].toUpperCase();
    }
}
console.log(letter);

// Proble 8: Write a code to find the largest of two given integers
// Instance: num1 = 42, num2 = 27 the largest is 42

let num1: number = 42;
let num2: number = 27;
let result4 = (num1 > num2? `${num1} is largest number` : `${num2} is largest number`)
console.log(result4);

// Problem 9: Write a conditional statement to sort three numbers
// Instance:  num1 = 42, num2 = 27, num3 = 18 sorted into 18, 27, 42
let num3: number = 18;
if (num1 < num2 && num1 < num3) {
    if (num1 < num3) {
        console.log(num1 + "," + num2 + "," + num3);
    } else {
        console.log(num1 + "," + num3 + "," + num2);
    }
}else if (num2 < num1 && num2 < num3) {
    if (num2 < num3) {
        console.log(num2 + "," + num1 + "," + num3);
    }else {
        console.log(num2 + "," + num3 + "," + num1);
    }
}else if (num3 < num1 && num3 < num2) {
    if (num1 < num2) {
        console.log(num3 + "," + num1 + "," + num2)
    }else {
        console.log(num3 + "," + num2 + "," + num1)
    }
}

// Problem 10: Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data 
// Instance:  “hello” → 1
let data = "hello";
if (isNaN(data))  {
    console.log(`${data} is 1`);
}else if (!isNaN(data)){
   console.log(`${data} is 2`);
}else {
    console.log(`${data} is 3`);
}


// Problem 11: Write a code to change every letter a into * from a string of input
// Instance: ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y
let wording: string = "An apple a day keeps the doctor away";
let result5 = wording.toLowerCase();
console.log(result5.replace(/a/g, "*"))

