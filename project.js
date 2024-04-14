// 1. Deposit money--DONE
// 2. Determine number of lines to bet on--DONE
// 3. Collect a bet amount from the player
// 4. spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Deposit amount is not a number. Please try again.");
        return deposit();
        } else {
            return numberDepositAmount;
        }
    }
}

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
        
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines. Please try again.");
        } else {
            return numberOfLines;
        }
    }
}

const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter bet amount: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
        } else {
            return numberBet;
        }
    }
}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);