(
    () => {
        const randomNumber = Math.floor(Math.random() * 10 + 1);
        const userNumber = prompt("Guess a number between 1 - 10");

        if (parseInt(userNumber) === randomNumber) {
            alert(`Success, the number was ${userNumber}`);
        } else {
            alert('Wrong, try again!');
        }
    }
)();