const randomNumber = Math.floor(Math.random() * 10 + 1); // 1

console.log(`....................................${randomNumber}`);

const promptForGuesses = number => {

    let attempts = 0; // 2

    let userNumber = prompt("Guess a number between 1 and 10"); // 2

    while(attempts < 3){
        attempts =+ 1;

        if(parseInt(userNumber) === randomNumber) {
            attempts = 3;
            alert(`Success! The number was ${randomNumber}`);
        } else {
            attempts =+ 1;
            userNumber = prompt("Nope, sorry, try again"); // 3
        }
    }
}

promptForGuesses(randomNumber);