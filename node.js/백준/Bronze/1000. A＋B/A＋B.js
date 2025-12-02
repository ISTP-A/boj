const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number)

function main() {
  console.log(input[0] + input[1])
};

main()
