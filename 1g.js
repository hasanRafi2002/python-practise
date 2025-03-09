process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    let lines = input.trim().split("\n");

    let n = parseInt(lines[0]); 
    let arr = lines[1].split(" ").map(Number); 

    let maxElement = Math.max(...arr); 
    console.log(maxElement); 
});
