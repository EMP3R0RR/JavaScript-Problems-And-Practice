//print a pyramid with * where there are 4 rows.

let rows = 4;

for (let i = 1; i <= rows; i++) {
    let line = "";

    // print spaces first
    for (let space = 1; space <= rows - i; space++) {
        line += " ";
    }

    // print stars
    for (let star = 1; star <= 2 * i - 1; star++) {
        line += "*";
    }

    console.log(line);
}
