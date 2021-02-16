
class Book {

    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    read() {
        console.log(this.title);
    }

    read2 = () => { console.log('read2'); };

}

let book = new Book('Let Us C', 'Kanitkar');

book.read2();
book.read();
