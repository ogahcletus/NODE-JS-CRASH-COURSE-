const EventEmitter = require('events');

//create event class

class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter

//Event Listener
myEmitter.on('event', () =>{
    console.log('Event Fired..!')
})

//Init Event

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

//A practical example of the use of event emitter is by creating a logger