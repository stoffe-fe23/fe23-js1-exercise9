
/*************************************************************************************
Skapa ett objekt som heter book
*************************************************************************************/
const book = {
    title: "Some kind of Book",
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

/*************************************************************************************
Skapa objektet hund 
*************************************************************************************/
const dog = {
    name: "Benji",
    breed: "Border collie",
    bark() {
        console.log(`Woff, jag heter ${this.name}!`);
    }
}

console.log(dog.name, dog.breed);
dog.bark();

/*************************************************************************************
Skapa objektet bil 
*************************************************************************************/

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

// Inte i uppgiften, men... Testa med constructor-funktion också...
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;

    this.getInfo = function() {
        console.log(this.make + " CARINFO", this.make, this.model, this.year, this.speed);
    }

    this.increaseSpeed = function(newSpeed) {
        for (let i = this.speed; i <= newSpeed; i = i + 5) {
            this.speed = i;
            console.log(this.make + " Accelerating: ", this.speed, newSpeed);
        }
    }

    this.brake = function() {
        for (let i = this.speed; i >= 0; i = i - 10) {
            this.speed = i;
            console.log(this.make + ": Stopping", this.speed, 0);
        }
    }
}

// Skapa bilobjekt
const volvo = new Car("Volvo", "740", 1990);
volvo.getInfo();
//volvo.increaseSpeed(80);
//volvo.brake();

// Klona bilobjekt och ändra
const saab = {};
Object.assign(saab, volvo);
saab.make = "Saab";
saab.model = "Discontinued";
saab.getInfo();
//saab.increaseSpeed(60);
//saab.brake();
volvo.getInfo();

/*************************************************************************************
    Person - objekt-properties
*************************************************************************************/

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

/*************************************************************************************
    KLONA TIDIGARE OBJEKT
*************************************************************************************/

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
        let objectProperty = {};
        Object.assign(objectProperty, newPerson[prop]);
        newPerson[prop] = objectProperty;
    }
}

newPerson.adress.street = "Fiktiva vägen 12";
newPerson.adress.city = "Ingalunda";
newPerson.role = "Samurai";
console.log("PEOPLE", person, newPerson);

/*************************************************************************************
 Objekt som argument
*************************************************************************************/

displayBook(book);

/*************************************************************************************
Kortlek 
*************************************************************************************/

// Skapa
const cardColors = ["Klöver", "Ruter", "Hjärter", "Spader"];
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Knekt", "Dam", "Kung", "Ess"];
const deck = [];

for (let colorIdx = 0; colorIdx < cardColors.length; colorIdx++) {
    for (let valueIdx = 0; valueIdx < cardValues.length; valueIdx++) {
        const card = {
            suit: cardColors[colorIdx],
            value: cardValues[valueIdx],
            weight: valueIdx,
            getSuitWeight: getCardSuitWeight
        }
        deck.push(card);
    }
}

// Hämta 2 kort slumpmässigt och visa det högsta av de två
let randCards = getRandomCards(deck, 2);
let highestCard = getHighestCard(randCards[0], randCards[1]);
addMessage(`Dragna kort: ${randCards[0].suit} ${randCards[0].value}, ${randCards[1].suit} ${randCards[1].value}`);
addMessage(`Högsta kortet: ${highestCard.suit} ${highestCard.value}`);


// Blanda
const shuffled = getShuffledDeck(deck);
displayDeck(deck, "Original", document.body);
displayDeck(shuffled, "Blandad!", document.body);


////////////////////////////////////////////////////////////////////////////
// Metod i card-objekt som returnerar vikt-värde beroende på kortets färg
function getCardSuitWeight() {
    switch (this.suit) {
        case "Klöver": return 1; break;
        case "Ruter": return 2; break;
        case "Hjärter": return 3; break;
        case "Spader": return 4; break;
    }
    return 0;
}


////////////////////////////////////////////////////////////////////////////
// Returnera högsta kortet av de angivna
function getHighestCard(firstCard, secondCard) {
    if (firstCard.weight > secondCard.weight) {
        return firstCard;
    }
    else if (secondCard.weight > firstCard.weight) {
        return secondCard;
    }
    else {
        // Samma värde, kolla färg istället. 
        if (firstCard.getSuitWeight() > secondCard.getSuitWeight()) {
            console.log("SAME VALUE", `${firstCard.suit} is higher than ${secondCard.suit}`);
            return firstCard;
        }
        else if (secondCard.getSuitWeight() > firstCard.getSuitWeight()) {
            console.log("SAME VALUE", `${secondCard.suit} is higher than ${firstCard.suit}`);
            return secondCard;
        }
    }

    // Korten är identiska så spelar ingen roll vilket av dem som returneras...
    return firstCard;
}


////////////////////////////////////////////////////////////////////////////
// Välj numCards kort slumpmässigt från cardDeck
function getRandomCards(cardDeck, numCards) {
    const result = [];
    for (let i = 1; i <= numCards; i++) {
        let randIndex = Math.floor(Math.random() * cardDeck.length);

        // Så vi inte får samma kort mer än en gång...
        while (result.includes(cardDeck[randIndex])) {
            randIndex = Math.floor(Math.random() * cardDeck.length);
        }    

        result.push(cardDeck[randIndex]);
    }
    return result;
}


////////////////////////////////////////////////////////////////////////////
// Blanda kortleken och returnera en blandad kopia
function getShuffledDeck(cardDeck) {
    const shuffledDeck = [];
    Object.assign(shuffledDeck, cardDeck);

    for (let index = shuffledDeck.length-1; index > 0; index--) {
        // Välj ett återstående kort (mellan 0 och nuvarande) slumpmässigt och byt dess plats med nuvarande kortet
        const randomIndex = Math.floor(Math.random() * (index + 1));
        const currentCard = shuffledDeck[index];
        shuffledDeck[index] = shuffledDeck[randomIndex];
        shuffledDeck[randomIndex] = currentCard;
    }
    return shuffledDeck;
}


////////////////////////////////////////////////////////////////////////////
// Visa en kortlek på sidan
function displayDeck(cardDeck, title, target) {
    const deckDiv = document.createElement("div");
    const deckH2 = document.createElement("h2");

    deckH2.innerText = title;
    deckDiv.classList.add("deckbox");
    deckDiv.appendChild(deckH2);

    for (const card of cardDeck) {
        const cardDiv = document.createElement("div");
        cardDiv.innerText = `${card.suit} ${card.value}`;
        deckDiv.appendChild(cardDiv);
    }

    target.appendChild(deckDiv);
}

////////////////////////////////////////////////////////////////////////////
// Visar angivet bok-objekt på sidan
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

////////////////////////////////////////////////////////////////////////////
// Lägg till text i meddelanderutan överst på sidan...
function addMessage(message) {
    document.querySelector("#output").innerHTML += `<div>${message}</div>`;
}
