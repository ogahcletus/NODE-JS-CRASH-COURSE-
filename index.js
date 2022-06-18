/* It is much easier to create servers with express, However, we are going to use only node.js for this...
Hence, we are going to be using core node modules 
*/

const http = require('http');
const path = require('path');
const fs = require('fs');

/* we can take the server as a variable
const server = http.createServer((req, res) => {
    if(req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type':'text/html'});

        res.end(content)
    })
    
    }
});



//we can also load the about.html page :

const server = http.createServer((req, res) => {
    if(req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type':'text/html'});

        res.end(content)
    })
    
    }
});

//Also note that if the server is like a REST API, we wont be serving html but JSON as illustrated below


const server = http.createServer((req, res) => {
    if(req.url === '/api/users') {

//Normally, what is done is to fetch data from the database and serve that but for this purpose we are going to define a user array as follows:
        const users = [
            {name:'Cletus Ogah', age: 46},
            {name:'Damian Ogah', age: 44}
        ]

                   //note that text/html will be replaced by application/json

            res.writeHead(200, {'Content-Type':'application/json'})
    
            res.end(JSON.stringify(users))
        
        
        }

    })
    
*/

//Now, to make server more efficient, we need to make the filepath dynamic so it can load other files like css in addition to html.

const server = http.createServer((req, res) => {
    
//Build the file path:

let filePath = path.join(__dirname, 'public', req.url==='/'? 'index.html':req.url)

//console.log(filepath)

//Next, is to get the file extension
    let extName = path.extname(filePath)

    //Set initial content type:

    let contentType = 'text/html';

    //Check the extension and set the content type using the switch statement:
    switch(extName){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
    }

    //Now, we have to load or read the file:

    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code === 'ENOENT'){
                //err code ENOENT means page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                 
                    res.writeHead(200, {'Content-Type':'text/html'});

                    res.end(content, 'utf8');

                })
                
            }else {
                //that is some other server err other than 404:
                res.writeHead(500);
                res.end('Server Error:', err.code)
            }

        }else {

            //That is, if there are no errors , the server will load only the content

            res.writeHead(200, {'Content-Type': contentType });
            res.end(content, 'utf8');
        }

    })




        
    })
    
    





          









// we can also put the PORT as a variable
const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log('Weldone Kleitos, Your server is running on', PORT)
})