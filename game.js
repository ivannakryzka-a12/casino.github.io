const { users } = require("./auth");

function slotGame(username, bet) {
    if (bet <= 0) {
        console.log("Ставка має бути більшою за 0.");
        return;
    }

    if (bet > users[username].balance) {
        console.log("Недостатньо коштів.");
        return;
    }

    users[username].balance -= bet;

    const result = Math.random() < 0.5;

    if (result) {
        users[username].balance += bet * 2;
        console.log("Ви виграли!");
    } else {
        console.log("Ви програли.");
    }

    console.log(`Поточний баланс: ${users[username].balance} грн`);
}

module.exports = { slotGame };