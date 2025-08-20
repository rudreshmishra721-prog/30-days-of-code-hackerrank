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
    const n = parseInt(readLine().trim(), 10);
    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    let numSwaps = 0;

    // Bubble Sort
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                // swap
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                numSwaps++;
            }
        }
        // If no elements were swapped during a pass, stop
        if (numSwaps === 0) {
            break;
        }
    }

    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n - 1]}`);
}
//lastUpdated 20-08-25