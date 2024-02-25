const db = require("../config/connection");

const User = {
    getAllUsers: (callback) => {
        db.query("SELECT * FROM users", callback);
    },
    getUserById: (id, callback) => {
        db.query("SELECT * FROM users WHERE id = ?", id, callback);
    },
    createUser: (userData, callback) => {
        db.query("INSERT INTO users SET ?", userData, callback);
    },
    updateUser: (id, userData, callback) => {
        db.query("UPDATE users SET ? WHERE id = ?", [userData, id], callback);
    },
    deleteUser: (id, callback) => {
        db.query("DELETE FROM users WHERE id = ?", id, callback);
    },
};

module.exports = User;
