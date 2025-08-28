'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const N = parseInt(readLine().trim(), 10);

    let names = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().trim().split(' ');

        const firstName = firstMultipleInput[0];
        const emailID = firstMultipleInput[1];

        if (/@gmail\.com$/.test(emailID)) {
            names.push(firstName);
        }
    }

    names.sort();

    for (let name of names) {
        console.log(name);
    }
}
