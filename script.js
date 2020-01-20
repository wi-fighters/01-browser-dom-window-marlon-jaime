(()=> {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // 
    console.log(`....................................${randomNumber}`);

    const promptForGuesses = number => {
        let attempts = 0; // 1
        let userNumber = prompt("Guess a number between 1 and 10"); // 
        
        if(userNumber === null) {
            return;
        }

        if (attempts < 3){
            userNumber = parseInt(userNumber, 10);
            attempts += 1;

            if(userNumber === randomNumber){
                alert(`Success! The number was ${randomNumber}! Attempts: ${attempts}`);
                return;
            } else {
                userNumber = prompt("Nope, try again!");
                return;
            }
        } else {
            alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
            return;
        }
    };

    promptForGuesses(randomNumber);

})();