const { registerUser, loginUser } = require("./auth");
const { showBalance, depositBalance } = require("./balance");
const { slotGame } = require("./game");

let currentUser = null;

registerUser("user1", "123");
currentUser = loginUser("user1", "123");

showBalance(currentUser);
depositBalance(currentUser, 100);
slotGame(currentUser, 50);
showBalance(currentUser);