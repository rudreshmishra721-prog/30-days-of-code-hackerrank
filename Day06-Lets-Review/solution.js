function processData(input) {
    const lines = input.split("\n");
    const T = parseInt(lines[0], 10);
    
    for(let i = 1; i <= T; i++){
        const S = lines[i];
        let evenChars = '';
        let oddChars = '';
        
    for(let j = 0; j < S.length; j++ ){
        
        if(j % 2 === 0){
            evenChars += S[j]
        }else{
            oddChars += S[j]
        }
    }     
    console.log(`${evenChars} ${oddChars}`)
} 
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

// updated on 07/08/2025