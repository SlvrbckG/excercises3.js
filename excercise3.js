//Boolean values from functions 

function isLess(a, b) {
    // Only change code below this line
    return a <= b
    // Only change code above this line
  }
  
isLess(10, 15);

//Counting Cards

let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }

  return count + " " + holdbet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//Build JavaScript Objects

const myDog = {
    // Only change code below this line
  name: "Kai",
  legs: 4,
  tails: 1,
  friends: ["Akiko", "Bunny"]
  
  
    // Only change code above this line
};

//Accessing Object Properties with Dot Notation

  const testObj1 = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj1.hat;      // Change this line
  const shirtValue = testObj1.shirt;    // Change this line

//Accessing Object Properties with Bracket Notation

  // Setup
  const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

//Accessing Object Properties with Variables

// Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj3[playerNumber];   // Change this line

//Updating Object Properties

// Setup
const myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
myDog1.name = "Happy Coder"

//Add New Properties to a JavaScript Object

const myDog2 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
myDog2.bark = "woof!"
  
//Delete Properties from a JavaScript Object

// Setup
const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
delete myDog3.tails;

//Using Objects for Lookups

// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookUp = {
      "alpha":"Adams",
      "bravo":"Boston",
      "charlie":"Chicago",
      "delta":"Denver",
      "echo":"Easy",
      "foxtrot":"Frank"
    };
   result = lookUp[val];
    // Only change code above this line
    return result;
}
  
phoneticLookup("charlie");

//Testing Objects for Properties

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
}

//Manipulating Complex Objects

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      artist: "Keane",
      title: "spiraling",
      "release_year": 2015,
      formats: [
        "Spotify",
        "CD"
      ]
    }
];

//Accessing Nested Objects

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
const secondTree = myPlants[1].list[1];

//Record Collection

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === '') {
      delete records[id][prop];
    } else if (prop === 'tracks') {
      records[id][prop] = records[id][prop] || []; 
      records[id][prop].push(value);
    } else {
      records[id][prop] = value;
    }
    return records;
}
  
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//Iterate with JavaScript While Loops

// Setup
const myArray = [];

// Only change code below this line
var i = 5 
while (i >= 0) {
  myArray.push(i);
  i--
}

//Iterate with JavaScript For Loops

// Setup
const theArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  theArray.push(i);
}

//Iterate Odd Numbers With a For Loop

// Setup
const ourArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  ourArray.push(i);
}

//Count Backwards With a For Loop

// Setup
const thisArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  thisArray.push(i);
}

//Iterate Through an Array with a For Loop

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;

for( let i =0; i < myArr.length; i++) {
  total += myArr[i]
}

//Nesting For Loops

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (var i=0; i < arr.length; i++) {
      for (var j=0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
  
    // Only change code above this line
    return product;
  }
  
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Iterate with JavaScript Do...While Loops

// Setup
const thatArray = [];
let i = 10;

// Only change code below this line
do {
  thatArray.push(i);
  i++;
} while (i < 11);

//Replace Loops using Recursion

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
    // Only change code above this line
}

//Profile Lookup

// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i = 0; i < contacts.length; i++) {
       if(contacts[i].firstName === name) {
         return contacts[i][prop] || "No such property"
    }
  } return "No such contact";
    // Only change code above this line
  }
  
lookUpProfile("Akira", "likes");

//Generate Random Whole Numbers with JavaScript

function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
}

//Generate random  whole numbers within a range

function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    // Only change code above this line
}

//Use the parseInt Function

function convertToInteger(str) {
    return parseInt(str)
  }
  
convertToInteger("56");

//Use the parseInt Function with a Radix

function convertToInteger(str) {
    return parseInt(str, 2)
  }
  
convertToInteger("10011");

//Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal"
  }
  
checkEqual(1, 2);

//Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return (num > 0) ? "positive"
      : (num == 0) ? "zero"
      : "negative"
  }
  
checkSign(10);

//Use Recursion to Create a Countdown

//example.

function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
console.log(countup(5));

//excercise

// Only change code below this line
function countdown(n){
    if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
// Only change code above this line

//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  
    if (endNum == startNum) {
    return [startNum];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
}