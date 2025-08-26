function processData(input) {
    let lines = input.trim().split("\n");
    let [d1, m1, y1] = lines[0].split(" ").map(Number); // returned date
    let [d2, m2, y2] = lines[1].split(" ").map(Number); // due date

    let fine = 0;

    if (y1 > y2) {
        fine = 10000;
    } else if (y1 === y2) {
        if (m1 > m2) {
            fine = 500 * (m1 - m2);
        } else if (m1 === m2 && d1 > d2) {
            fine = 15 * (d1 - d2);
        }
    }

    console.log(fine);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
process.stdin.on("end", function () {
   processData(_input);
});
