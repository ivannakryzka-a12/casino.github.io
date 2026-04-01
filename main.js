const { registerUser, loginUser } = require("./auth");
const { showBalance, depositBalance } = require("./balance");

let currentUser = null;

registerUser("user1", "123");
currentUser = loginUser("user1", "123");

showBalance(currentUser);
depositBalance(currentUser, 100);
showBalance(currentUser);
