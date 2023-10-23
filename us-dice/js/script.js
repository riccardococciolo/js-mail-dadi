const userNumber = (Math.floor(Math.random() * 6)) + 1;
console.log(userNumber);

const computerNumber = (Math.floor(Math.random() * 6)) + 1;
console.log(computerNumber);

let result = "";

if (userNumber > computerNumber) {
    result = "Hai vinto!!!"
} else if (userNumber < computerNumber) {
    result = "Hai perso =("
} else {
    result = "Pareggio, oggi sei fortunato."
}

console.log(result);