(()=> {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const promptForGuesses = number => {
        let attempts = 0;
        let userNumber = prompt("Guess a number between 1 and 10"); // 
        
        if(userNumber === null) {
            return;
        }

        for(let i = 3; i > attempts; i--){        
                userNumber = parseInt(userNumber, 10);
                attempts += 1;

                if(userNumber === randomNumber){
                    console.log("SUCCESS");
                    alert(`Success! The number was ${randomNumber}! Attempts: ${attempts}`);
                    return;
                } else {
                    console.log("WRONG");
                    userNumber = prompt("Nope, try again!");
                }
        }
        
        alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
        return;
    };

    promptForGuesses(randomNumber);

})();