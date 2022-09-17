'use strict';
/*
const bookings = [];

const createBooking = function(
    //ES 6, better and cleaner
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers 
    ) {
    //ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800)
createBooking('LH123', 2);
createBooking('LH123', 5)
*/
/*
const flight = 'LH234'
const jonas = {
    name: 'Michael Orinion',
    passport: 235324684
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 235324684) {
        alert('Checked in')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 100000);
    //console.log(person.passport);
}

newPassport(jonas);
checkIn(flight, jonas);
*/
/*
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return[first.toUpperCase(), ...others].join(' ');
};


////////////////// Higher Order Function /////////////////////////////
const trasnformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed: ${fn.name}`);
}
trasnformer('JavaScript is the best', upperFirstWord);
trasnformer('JavaScript is the best', oneWord);


// JS uses callbacks all the time
const high5 = function() {
    console.log('Waving');
}

document.body.addEventListener('click', high5);
['Michael', 'Frances', 'Orinion'].forEach(high5);
*/



///////////// Functions Returning Functions //////////////////
/*
const greet = function(greeting) {
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey')
greeterHey('jonas');
greeterHey('Mico')

greet('Hello')('Mico');

//Challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);


greetArr('Hi')('Mico')
*/
/*
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book: function(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight
        ${this.iataCode}${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
    },
};

lufthansa.book(239, 'Michael Orinion');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);


const eurowings = {
    airline: "Eurowings",
    iataCode: 'EW',
    bookings: [],

};

const book = lufthansa.book;

//Does not work
// book(23, 'Frances Tolentino')

// .call( ) method
book.call(eurowings, 23, "Frances Tolentino")
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 699, 'Mico Coco');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss);

//better and more advance
book.call(swiss, ...flightData);

//Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23,'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Michael Orinion');
bookEW23('Frances Tolentino');

//With Event listeners
lufthansa.planes = 300
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++
    console.log(this.planes);
}
document.querySelector('.buy').addEventListener(
    'click', lufthansa.buyPlane.bind(lufthansa) 
    );


// Partial appllication
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT2(23));
*/


////////////////////////// CODING CHALLENGE 1 //////////////////////

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose,
and an array with the number of replies for each option.
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object.
The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the 
  selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, 
  
  if the option is 3, increase the value AT POSITION 3 of the array by 1. 
  Make sure to check if the input is a number and if the number makes 
  sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), which can be 
either 'string' or 'array'. If type is 'array', simply display the 
results array as it is, using console.log(). This should be the default 
option. If type is 'string', display a string like "Poll results are 13, 
2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' 
method call.

HINT: Use many of the tools you learned about in this and the last 
section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the 
test data. Use both the 'array' and the 'string' option. Do NOT put the 
arrays in the poll object! So what shoud the this keyword look like in 
this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// document.querySelector('.pol').addEventListener('click' )

//const registerNewAnswer = prompt('Your Answer');
/*
const poll = {
    question: 'What is yout favorite programming langauge?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    //This gnenerates [0, 0, 0, 0]. More in the next section =>
    answers: new Array(4).fill(0),
    registerNewAnser() {
        //Get Answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
        );
        console.log(answer);

        //Register answer
        typeof answer === 'number' && answer < this.answers.length && 
        this.answers[answer]++;

       this.displayResults();
       this.displayResults('string');
    },
    displayResults: function(type = 'array') {
        if(type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
}
// poll.registerNewAnser();

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnser.bind(poll) );

poll.displayResults.call({answers: [5, 2, 3]}, 'string')
*/

///// Immediately Invoked Function Expressions (IIFE) ////
/*
const runOnce = function() {
    console.log('This will never run again');
}
runOnce();

(function() {
    console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23; // not accesible beccause of const 
    var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);
*/

//////////////////////// Closures /////////////////////////
/*
const secureBooking = function() {
    let passengerCount = 0; 

    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker(); //1 passenger
booker(); //2 passenger
booker(); //3 passenger

console.dir(booker);
*/

//Examples
//Example 1
/*
let f;

const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}

g();
f(); //1554
// console.dir(f);

// Re - assigned f function
h();
f(); //1554
// console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 300;
boardPassengers(perGroup, 3)
*/

////////////////////////// coding challenge 2 ///////////////////////

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event 
listener that changes the color of the selected h1 element ('header') 
to blue, each time the BODY element is clicked. Do NOT select the h1 
element again!

And now explain to YOURSELF (or someone around you) WHY this worked! 
Take all the time you need. Think about WHEN exactly the callback 
function is executed, and what that means for the variables involved in 
this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  
  document.querySelector('body').addEventListener('click', function() {
      header.style.color = 'blue';
    });
})();
























































