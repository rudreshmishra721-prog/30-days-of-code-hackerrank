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
    
    const binaryString = n.toString(2)
    
    let currentStreak = 0;
    let longestStreak = 0;
    
    for (let i =0; i < binaryString.length; i++){
        if(binaryString [i]=== "1"){
            currentStreak++;
        }else{
            currentStreak = 0;
        }
        if(currentStreak > longestStreak){
            longestStreak = currentStreak;
        }
        
    }
    console.log(longestStreak);
}
