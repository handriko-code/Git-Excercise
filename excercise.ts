// Problem: Write a code to display the multiplication table of a given intege
// Instance:  Number → 9






// Problem: Write a code to remove the first occurrence of a given “search string” from a string
// instance: string = “Hello world”, search string = “ell” → “Ho world”
let word: string = "Hello World";
let x:number = 1;
let result1 = " ";
for (let i = 0; i < word.length; i++) {
    if (i === x ) {
        result1 = word.slice(i,4);
        console.log(word.replace(`${result1}`, "")); 
    }
}



// Problem: Write a code to capitalize the first letter of each word in a string
// Instance: "hello world" changed into "Hello World"

let myword: string = "apa kabar";
let _split = myword.split(" ");
for (let i = 0; i <_split.length; i++) {
   _split[i] = _split[i] [0].toUpperCase() + _split[i].substring(1);
    
}
console.log(_split.join(" "))

// Problem: Write a code to swap the case of each character from strin
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

// Proble: Write a code to find the largest of two given integers
// Instance: num1 = 42, num2 = 27 the largest is 42

let num1: number = 42;
let num2: number = 27;
let result = (num1 > num2? `${num1} is largest number` : `${num2} is largest number`)
console.log(result);

// Problem: Write a conditional statement to sort three numbers
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

// Problem: Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data 
// Instance:  “hello” → 1
let data= "hello";
if (isNaN(data))  {
    console.log(`${data} is 1`);
}else if (!isNaN(data)){
   console.log(`${data} is 2`);
}else {
    console.log(`${data} is 3`);
}



// Problem: Write a code to change every letter a into * from a string of input
// Instance: ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y

let wording: string = "An apple a day keeps the doctor away";
let _result = wording.toLowerCase();
console.log(_result.replace(/a/g, "*"))

