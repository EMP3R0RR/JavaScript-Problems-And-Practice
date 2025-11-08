//Check if a number is a palindrome

let num = parseInt(prompt("Enter a number:"));
let original = num;
let reversed = 0;

while (num !== 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
}

if (reversed === original) console.log("Palindrome");
else console.log("Not a palindrome");
