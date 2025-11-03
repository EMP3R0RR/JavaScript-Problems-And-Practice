//Number Triangle (1 increasing each row)
let rows = 4;
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j;
    }
    console.log(line);
}
