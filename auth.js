const users = {};

function registerUser(username, password) {
    if (users[username]) {
        console.log("Користувач вже існує.");
    } else {
        users[username] = {
            password: password,
            balance: 0
        };
        console.log("Реєстрація успішна.");
    }
}

function loginUser(username, password) {
    if (users[username] && users[username].password === password) {
        console.log("Вхід успішний.");
        return username;
    } else {
        console.log("Неправильний логін або пароль.");
        return null;
    }
}

module.exports = { users, registerUser, loginUser };