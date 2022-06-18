

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        
    }

    // now create a method caled greetings:

    greetings() {
        console.log('My name is ' + this.name + ' and my age is '+ this.age)
    }

}


module.exports = Person;