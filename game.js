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
        const win = bet * 2;
        users[username].balance += win;
        console.log("Ви виграли у слот!");
        console.log(`Ваш виграш: ${win} грн`);
    } else {
        console.log("Ви програли у слот.");
    }

    console.log(`Поточний баланс: ${users[username].balance} грн`);
}

module.exports = { slotGame };