(()=> {
    const randomNumber = Math.floor(Math.random() * 10 + 1); // 1

    console.log(`....................................${randomNumber}`);

    const promptForGuesses = number => {

        let attempts = 0; // 1

        let userNumber = prompt("Guess a number between 1 and 10"); // 5

        if(parseInt(userNumber) === randomNumber) {
            alert(`Success! The number was ${randomNumber}`);

        } else {
            while(attempts < 3){
                if(parseInt(userNumber) !== randomNumber){
                userNumber = prompt("Nope, sorry, try again");
                }
            }
            alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
        }
        attempts =+ 1;
    };


    promptForGuesses(randomNumber);
})();