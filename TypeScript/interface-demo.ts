interface Person {
    firstName: string;
    lastName: string;
    age?: number;
 
    display(): void;
 }
 
 class Customer implements Person {
    firstName: string = 'Hari';
    lastName: string = 'Krishna';
    age: number = 25;
    city: string = 'Bengaluru';	// the class can have additional properties
                             // and methods
    display() {
       console.log(`Customer Name: ${this.firstName} ${this.lastName}`);
       console.log(`Age: ${this.age}`);
       console.log(`City: ${this.city}`);
    }
 }
 
 const c1: Customer = new Customer();
 c1.display();

 console.log(namesz);
 