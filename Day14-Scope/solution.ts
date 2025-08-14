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

class Difference {
    private elements: number[];
    public maximumDifference: number;

    constructor(elements: number[]) {
        this.elements = elements;
        this.maximumDifference = 0;
    }

    computeDifference(): void {
        let maxDiff = 0;
        for (let i = 0; i < this.elements.length; i++) {
            for (let j = i + 1; j < this.elements.length; j++) {
                const diff = Math.abs(this.elements[i] - this.elements[j]);
                if (diff > maxDiff) {
                    maxDiff = diff;
                }
            }
        }
        this.maximumDifference = maxDiff;
    }
}

function main() {
    const n: number = parseInt(readLine());
    const a: number[] = readLine().split(' ').map(Number);

    const d = new Difference(a);
    d.computeDifference();

    console.log(d.maximumDifference);
}
//updated