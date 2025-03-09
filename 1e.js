process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    let lines = input.trim().split("\n");
    
    let n = parseInt(lines[0]); 
    let dictionary = {}; 
    
    for (let i = 1; i <= n; i++) {
        let [key, value] = lines[i].split(" ");
        dictionary[key] = parseInt(value); 
    }

    let lookupKey = lines[n + 1]; 

    console.log(dictionary.hasOwnProperty(lookupKey) ? dictionary[lookupKey] : "Not Found");
});
