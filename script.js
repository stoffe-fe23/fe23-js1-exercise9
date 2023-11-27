
/*
Skapa ett objekt som heter book
*/
const book = {
    title: "Some kind of book",
    author: "John Doe",
    genres: ["drama", "comedy", "sci-fi"],
    numberOfPages: 200,
    currentPage: 0,
    turnPage() {
        if (this.currentPage < this.numberOfPages) {
            this.currentPage++;
        }
    }
}

console.log(book.title, book.numberOfPages, book.currentPage);
book.turnPage();
console.log(book.title, book.numberOfPages, book.currentPage);
book.turnPage();
console.log(book.title, book.numberOfPages, book.currentPage);
book.turnPage();
console.log(book.title, book.numberOfPages, book.currentPage);

/*
Skapa objektet hund 
*/
const dog = {
    name: "Benji",
    breed: "Border collie",
    bark() {
        console.log(`Woff, jag heter ${this.name}!`);
    }
}

console.log(dog.name, dog.breed);
dog.bark();

/*
Skapa objektet bil 
*/
const car = {
    make: "Tesla",
    model: "Something",
    year: 2023,
    speed: 0,
    getInfo() {
        console.log(this.make, this.model, this.year, this.speed);
    },
    increaseSpeed(newSpeed) {
        for (let i = this.speed; i <= newSpeed; i = i + 5) {
            this.speed = i;
            console.log("Accelerating", this.speed, newSpeed);
        }
    },
    brake() {
        for (let i = this.speed; i >= 0; i = i - 10) {
            this.speed = i;
            console.log("Stopping", this.speed, 0);
        }
    }
}

car.getInfo();
car.increaseSpeed(120);
car.brake();

/*
    Person - objekt-properties
*/

let person = {
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@gritacademy.se',
    role: 'ninjah',
    adress: {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Kablam City'
    }
}
console.log(person.adress.street, person.adress.city);

/*
    KLONA TIDIGARE OBJEKT
*/

// Bok
let newBook = {};
Object.assign(newBook, book);
newBook.author = "Jane Doe";
console.log("BOOKS", book, newBook);

// Hund
const newDog = {};
Object.assign(newDog, dog);
newDog.name = "Totte";
newDog.breed = "Gatukorsning";
console.log("DOGS", dog, newDog);

// Bil
const newCar = {};
Object.assign(newCar, car);
newCar.model = "Something else";
newCar.increaseSpeed(20);
console.log("CARS", car, newCar);

// Person
const newPerson = {};
Object.assign(newPerson, person);
for (prop in newPerson) {
    if (typeof newPerson[prop] == "object") {
        let tempObj = {};
        Object.assign(tempObj, newPerson[prop]);
        newPerson[prop] = tempObj;
    }
}

newPerson.adress.street = "Fiktiva vägen 12";
newPerson.adress.city = "Ingalunda";
newPerson.role = "Samurai";
console.log("PEOPLE", person, newPerson);

// Funktion med objekt
function displayBook(theBook) {
    const newBook = document.createElement("div");
    const bookTitle = document.createElement("h2");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div")
    const bookGenres = document.createElement("ul");

    newBook.classList.add("bookbox");

    bookTitle.innerText = theBook.title;;
    bookAuthor.innerText = `Author: ${theBook.author}`;
    bookPages.innerText = `Pages: ${theBook.numberOfPages}`;

    for (const genre of theBook.genres) {
        const newGenre = document.createElement("li");
        newGenre.innerText = genre;
        bookGenres.appendChild(newGenre);
    }

    newBook.append(bookTitle, bookAuthor, bookPages, bookGenres);
    document.body.appendChild(newBook);

}

displayBook(book);

/* 
Kortlek 
*/

const cardColors = ["Hjärter", "Spader", "Ruter", "Klöver"];
const cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Kn", "D", "K"];
const deck = [];

for (let i = 0; i < cardColors.length; i++) {
    for (let j = 0; j < cardValues.length; j++) {
        const card = {
            suit: cardColors[i],
            value: cardValues[j]
        }
        deck.push(card);
    }
}
console.log("CARDS", deck);


deck.sort(sortHelper);

/*
TODO:
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/
function sortHelper(a, b) {
    // TODO: Math.random för att avgöra om det skall vara större eller mindre.
    // return a.value - b.value;
    const rnd = Math.floor(Math.random() * 3);
    switch (rnd) {
        case 0: return -1; break;
        case 1: return 0; break;
        case 2: return 1; break;
    }
}

// TODO: Gör en gång till för Hjärter/Spader etc...

console.log("SHUFFLED", deck);
