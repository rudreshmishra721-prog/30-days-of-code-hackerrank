function processData(input) {
    let lines = input.trim().split("\n");
    let T = parseInt(lines[0]);

    for (let i = 1; i <= T; i++) {
        let n = parseInt(lines[i]);
        if (isPrime(n)) {
            console.log("Prime");
        } else {
            console.log("Not prime");
        }
    }
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    // Check only odd divisors up to sqrt(n)
    let limit = Math.floor(Math.sqrt(n));
    for (let i = 5; i <= limit; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
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
