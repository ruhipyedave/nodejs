var events = require('events');
var util = require('util'); // requied to be able to inherit

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg) {
    console.log(msg);
});

myEmitter.emit('someEvent', "event named: someEvent was emmited.");


//new object constructor 
var Person = function(name) {
    this.name = name;
};

//any person created using Person constrctor should inherit event emmitor
util.inherits(Person, events.EventEmitter);

//create new people
var people = [new Person("Ruhi"), new Person("Rishi"), new Person("Ridhi")];
people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + " said: " + msg);
    })
    person.emit('speak', 'hi guys...');
});


