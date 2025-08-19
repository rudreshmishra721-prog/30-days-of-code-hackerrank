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

// Define the interface (simulated in TypeScript)
interface AdvancedArithmetic {
    divisorSum(n: number): number;
}

// Implement the interface
class Calculator implements AdvancedArithmetic {
    divisorSum(n: number): number {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);
    const myCalculator = new Calculator();

    console.log("I implemented: AdvancedArithmetic");
    console.log(myCalculator.divisorSum(n));
}
