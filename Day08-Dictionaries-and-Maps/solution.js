function processData(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const phoneBook = {}
    
    for (let i = 1; i <= n; i++){
        const [name , number] = lines[i].split(' ');
        phoneBook[name] = number;
    }
        
        for(let i = n + 1; i < lines.length ; i++){
            const queryName = lines[i]
            
            if(phoneBook.hasOwnProperty(queryName)){
                console.log(`${queryName}=${phoneBook[queryName]}`)
            }else{
                console.log('Not found')
            }
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
