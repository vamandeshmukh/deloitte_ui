var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(name, author) {
        var _this = this;
        this.show2 = function () {
            console.log("Book name: " + _this.name);
            console.log("Author: " + _this.author);
        };
        this.name = name;
        this.author = author;
    }
    Book.prototype.show = function () {
        console.log("Book name: " + this.name);
        console.log("Author: " + this.author);
    };
    return Book;
}());
var book1 = new Book('Mind is your Business', 'Sadhguru');
book1.show();
book1.show2();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log(this.name + ' barks.');
    };
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + " m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, color) {
        if (color === void 0) { color = 'white'; }
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Dog.prototype.speak = function () {
        console.log(this.name + ' barks.');
    };
    Dog.prototype.describe = function () {
        console.log(this.name + " is " + this.color + " in color.");
    };
    return Dog;
}(Animal));
var dog = new Dog('Cooper');
dog.bark();
dog.move(10);
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lion.prototype.speak = function () {
        _super.prototype.speak.call(this); // call to superclass method
        console.log(this.name + ' roars.');
    };
    return Lion;
}(Animal));
var a = new Animal('Cooper');
a.speak(); // output: Cooper makes a noise.
var d = new Dog('Snowy');
d.speak(); // output: Snowy barks.
d.describe(); // output: Snowy is white in color.
var l = new Lion('Leo');
l.speak(); // output: Leo makes a noise.
//         Leo roars.
