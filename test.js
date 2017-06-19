var myChalk = require('chalk');
var myKirbyDance = require('kirby-dance');
var cows = require ('cows');

console.log(myChalk.blue('Hello, World!'));

for (var i = 1; i<=10; i+=1){

console.log('hello errbody #' + myChalk.cyan (i));
}

console.log(myChalk.red("All.done."));

console.log(myChalk.magenta(myKirbyDance(4)));
console.log(myChalk.magenta(myKirbyDance(-4)));


for (var i = 10; i<=25 ; i+=1){

console.log(cows()[i]);
}
