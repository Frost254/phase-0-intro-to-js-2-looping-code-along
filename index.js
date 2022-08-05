// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

let newArray = [];

const writeCards = (name, eventname) => {
    for (let i = 0; i < name.length; i++) {
        let message = `Thank you, ${name[i]}, for the wonderful surprise gift!`;
        newArray.push(message);
    }
    return newArray;
}

const countDown = integer => {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}