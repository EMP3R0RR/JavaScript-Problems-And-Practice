//Number Triangle (1 increasing each row)
let rows = 4;
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j;
    }
    console.log(line);
}

//The Slightly Easier Node Option (prompt-sync) o take user input from he console using prompt. install command: npm install prompt-sync. 

//Find the factorial of a given number (e.g., 5! = 120).
const prompt = require('prompt-sync')();
let  n=prompt("Please enter your number:");
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log("Factorial:", fact);

//Sum of digits of a number (e.g., 123 -> 1 + 2 + 3 = 6).
let num = ("Enter a number:");
let sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of digits:", sum);
