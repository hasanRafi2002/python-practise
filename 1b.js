process.stdin.resume();
process.stdin.setEncoding("utf-8");

let input = "";

process.stdin.on("data", function (chunk) {
    input += chunk;
});

process.stdin.on("end", function () {
    let n = parseInt(input.trim()); 

    if (n < 0) {
        console.log("Number is negative");
    } else if (n % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
});
