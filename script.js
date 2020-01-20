(()=> {
    const randomNumber = (Math.floor(Math.random() * 10) + 1).toString();
    console.log(randomNumber);
    let userNumber = prompt("Guess a number between 1 and 10");
    let attempts = 1;
            
    while (attempts < 3) { 
        if (userNumber === null) {
            return;
        }
        if (userNumber !== randomNumber) {
            userNumber = prompt("Nope, try again!");
            attempts += 1;
        }
        if (userNumber === randomNumber){
            return alert(`Success! The number was ${randomNumber}! Attempts: ${attempts}`);
        }        
    }
    return alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
})();