const fs = require('fs');
const path = require('path');

/*Create Folder: fs.mkdir
By default, these are async method, although there is also a sync method. If you choose the sync method, you will wait until the system is complete...
But with the async method, you can call it and it keeps going until the process is complete in the call back 
so, in most cases, the async method is preferred

To create a folder called test in the current directory, use join
*/
/*
fs.mkdir(path.join(__dirname, "/test"), {}, function(err){
    if(err) throw err

    console.log('Folder Created....')
    
});

//You can also use the arrow function instead of function

fs.mkdir(path.join(__dirname, "/TEST2"), {}, err => {
    if(err) throw err

    console.log('Folder TEST2 using arrow function => Created....')
    
});

//Create and Write to a file

fs.writeFile(path.join(__dirname, "/test", 'hello.txt'), 'Hello Cletus, Welcome to node,js', err => {
    if(err) throw err

    console.log('File created and written to....')
    
});

//If you want to add to the text file and overwrites the previous text..

fs.writeFile(path.join(__dirname, "/test", 'hello.txt'), 'Can you see that it overwrites the previous text?', err => {
    if(err) throw err

    console.log('Text created and overwritten to....')
    
});


//If you want to append to the previous text, then use the append file

fs.writeFile(path.join(__dirname, "/test", 'hello.txt'), 'Hello Cletus, Welcome to node.js.', err => {
    if(err) throw err

    console.log('File created and written to....')
    
    //Add append file in the call back {}
fs.appendFile(path.join(__dirname, "/test", 'hello.txt'), ' You will love node.js!', err => {
    if(err) throw err

    console.log('text created and appended....!')
       
})
    
});




//we can also READ files, e.g to read the hello.txt file

fs.readFile(path.join(__dirname, "/test", 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err

    console.log(data)
    
});

*/

//we can also rename file

fs.rename(path.join(__dirname, "/test", 'hello.txt'), 
path.join(__dirname, "/test", 'cletusNode.txt'),
 err => {
    if(err) throw err

    console.log('File rename....')
    
});
