const fs = require('fs');

if (process.argv.length < 4) {
    console.log('Usage: node app.js day1 part1');
    return;
}

let input = fs.readFileSync(`${process.argv[2]}/input.txt`).toString().split('\n');
const script = fs.readFileSync(`${process.argv[2]}/${process.argv[3]}.js`).toString();

console.log(eval(script));