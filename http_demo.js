const http = require('http');

//To create a Server Object
http.createServer((req, res) =>{
    //write response
    res.write('Hello Kleitos!')
    res.end()

    //In order for this to run, it needs to take in and listen on a port by taking in .listener(5000, ())

}).listen(5000, () => {
    console.log("Hello Cletus, your first simple and basic server is running....")
})