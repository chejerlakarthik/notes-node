console.log('Starting notes.js');

module.exports.add = function (a,b){
    return a+b;
}

// Using arrow functions (ES6) instead of anonymous functions
module.exports.sub = (a,b) => {
    return a-b;
}