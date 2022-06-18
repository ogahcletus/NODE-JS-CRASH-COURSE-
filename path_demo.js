const path = require('path');


//Base File name
console.log(__filename);
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

//You can also create objects with different parts of the paths:
//Create path object:
console.log(path.parse(__filename));

/*Concatenate paths: We use join for this
Lets say we want to create the current directory  ../test/hello.html */

console.log(path.join(__dirname, 'test', 'hello.html'));





