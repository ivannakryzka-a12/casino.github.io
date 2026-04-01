const { users } = require("./auth");

function showBalance(username) {
    console.log(`Баланс: ${users[username].balance} грн`);
}

function depositBalance(username, amount) {
    if (amount > 0) {
        users[username].balance += amount;
        console.log("Баланс поповнено.");
        console.log(`Новий баланс: ${users[username].balance} грн`);
    } else {
        console.log("Невірна сума.");
    }
}

module.exports = { showBalance, depositBalance };