const fs = require('fs');

if (process.argv.length < 4) {
    console.log('Usage: node app.js day1 part1');
    return;
}

let input = '';
try {
    input = fs.readFileSync(`${process.argv[2]}/input.txt`).toString().replaceAll('\r','').split('\n');
} catch (err) {
    console.log(`Save the input for this day to ${process.argv[2]}/input.txt`);
    return;
}
const script = fs.readFileSync(`${process.argv[2]}/${process.argv[3]}.js`).toString();

f=eval(script);
console.log(f(input));