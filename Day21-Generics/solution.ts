'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// Generic function
function printArray<T>(arr: T[]): void {
    for (let item of arr) {
        console.log(item);
    }
}

function main() {
    // Example usage:
    const intArray: number[] = [1, 2, 3];
    const stringArray: string[] = ['Hello', 'World'];

    printArray(intArray);
    printArray(stringArray);
}

