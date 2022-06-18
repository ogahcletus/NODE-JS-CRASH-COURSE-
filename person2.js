/*console.log('Hello Cletus Okibe Ogah, Welcome to the World of Node.js');

const person = require('./person')

console.log(person);
console.log(person.name); 

*/

//For the class

const Person = require('./ClassPerson');
const person = require('./person');

const person1 = new Person ('Cletus Ogah', 46);

console.log(person1);

person1.greetings();
