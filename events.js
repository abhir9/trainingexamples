 const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
 

//
const myEmitter = new EventEmitter();
//if we want to use one time event then user once
//myEmitter.once('event'
//if we want to catch error event
//myEmitter.on('error'

myEmitter.on('event', function(a, b) {
  console.log(a, b, this);
  
 // async event
/* 	setImmediate(() => {
		console.log('this happens asynchronously');
		  console.log(a, b, this);
	  });  */
});
//throw and event 
myEmitter.emit('event', 'a', 'b');

//throw an error 
myEmitter.emit('error', new Error('whoops!'));




//addlistener
const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');


//removeListener

