//The OS Module gives us information about the environment which is the operating system.

const os = require('os');

//To get the platform
console.log(os.platform());

//To get the CPU Architecture

console.log(os.arch());

//To get CPU Core info

console.log(os.cpus());

//To get info on Free Memory

console.log(os.freemem());

//We can also get Total memory with totalmem

console.log(os.totalmem());

//Home directory
console.log(os.homedir());

//Uptime; which is the amount of time(secs) your system has been up

console.log(os.uptime());