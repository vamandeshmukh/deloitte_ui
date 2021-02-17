class Book {
    name: string;
    author: string;

    constructor(name: string, author: string) {
        this.name = name;
        this.author = author;
    }

    show() {
        console.log(`Book name: ${this.name}`);
        console.log(`Author: ${this.author}`);
    }

    show2 = () => {
        console.log(`Book name: ${this.name}`);
        console.log(`Author: ${this.author}`);
    }
}
let book1: Book = new Book(
    'Mind is your Business', 'Sadhguru'
);
book1.show();
book1.show2();

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' barks.');
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters} m.`);
    }
}

class Dog extends Animal {
    private color: string;	// subclass property	

    constructor(name: string, color: string = 'white') {
        super(name);	// call to superclass constructor
        this.color = color;
    }
    bark() {
        console.log('Woof! Woof!');
    }

    speak() {
        console.log(this.name + ' barks.');
    }

    describe() {	// subclass method
        console.log(`${this.name} is ${this.color} in color.`);
    }
}

const dog = new Dog('Cooper');
dog.bark();
dog.move(10);

class Lion extends Animal {
    speak() {
        super.speak();		// call to superclass method
        console.log(this.name + ' roars.');
    }
}


let a = new Animal('Cooper');
a.speak(); 	// output: Cooper makes a noise.

let d = new Dog('Snowy');
d.speak(); 	// output: Snowy barks.
d.describe(); 	// output: Snowy is white in color.

let l = new Lion('Leo');
l.speak(); 	// output: Leo makes a noise.
				//         Leo roars.

