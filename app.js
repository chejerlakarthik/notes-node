console.log('Starting notes-node app.js');

const fs = require('fs');
const os = require('os')
const notes = require('./notes');
const _ = require('lodash');

var user = os.userInfo();

var sum = notes.add(10,-3);
console.log(`Sum is ${sum}`);

var diff = notes.sub(10,-3);
console.log(`Difference is ${diff}`);

fs.appendFile('greetings.txt', `Created using NodeJS by ${user.username}\n`, (err) => {
    if (err) throw err;
    console.log('The data was appended to file!');
});

// lodash - reverse an array
var nums = [2,3,5,99,7,11,13,17,19,23,29]
console.log(_.reverse(nums));