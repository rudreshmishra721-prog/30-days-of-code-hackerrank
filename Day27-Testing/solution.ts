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

// Function to be tested
function minimum_index(seq: number[]): number {
    if (seq.length === 0) {
        throw new Error("Cannot get the minimum value index from an empty sequence");
    }
    let minIdx = 0;
    for (let i = 1; i < seq.length; i++) {
        if (seq[i] < seq[minIdx]) {
            minIdx = i;
        }
    }
    return minIdx;
}

// Test data classes
class TestDataEmptyArray {
    static get_array(): number[] {
        return []; // empty array
    }
}

class TestDataUniqueValues {
    static get_array(): number[] {
        return [5, 10, 3, 7]; // unique values
    }
    static get_expected_result(): number {
        return 2; // index of minimum value (3)
    }
}

class TestDataExactlyTwoDifferentMinimums {
    static get_array(): number[] {
        return [4, 2, 6, 2, 9]; // min value (2) occurs twice (index 1 and 3)
    }
    static get_expected_result(): number {
        return 1; // first index of minimum value
    }
}

// Test runner
function TestWithEmptyArray() {
    try {
        let seq = TestDataEmptyArray.get_array();
        let result = minimum_index(seq);
    } catch (e) {
        return;
    }
    throw new Error("Exception wasn't thrown as expected");
}

function TestWithUniqueValues() {
    let seq = TestDataUniqueValues.get_array();
    if (seq.length < 2) {
        throw new Error("less than 2 elements in the array");
    }
    let expected_result = TestDataUniqueValues.get_expected_result();
    let result = minimum_index(seq);
    if (result !== expected_result) {
        throw new Error("Result is different than the expected result");
    }
}

function TestWithExactlyTwoDifferentMinimums() {
    let seq = TestDataExactlyTwoDifferentMinimums.get_array();
    if (seq.length < 2) {
        throw new Error("less than 2 elements in the array");
    }
    let expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result();
    let result = minimum_index(seq);
    if (result !== expected_result) {
        throw new Error("Result is different than the expected result");
    }
}

function main() {
    TestWithEmptyArray();
    TestWithUniqueValues();
    TestWithExactlyTwoDifferentMinimums();
    console.log("OK");
}