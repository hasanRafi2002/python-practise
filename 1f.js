process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    let s = input.trim(); 
    let reversedString = s.split("").reverse().join(""); 
    console.log(reversedString); 
});
