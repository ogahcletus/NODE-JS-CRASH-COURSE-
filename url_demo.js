// URL Modules : works with url

const { hostname } = require('os');
const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active');


//To get the Serialized URL , that is the straight up url

console.log(myUrl.href);

console.log(myUrl.toString());

//To get Host ( or Root domain);

console.log(myUrl.host);

//to get hostname, note that host name does not include the port 8000

console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//SearchParams is used if we want to create an object from the query or search output

console.log(myUrl.searchParams);

//We can also add parameters(params) dynamically as well:

myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//We can also loop through Parameters, ie params

myUrl.searchParams.forEach((value, name) => {

    console.log(name+":"+value)
})
    











