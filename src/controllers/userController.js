const User = require("../models/userModel");
const response = require("../config/response");

const userController = {
    // Menampilkan users
    getAllUsers: (req, res) => {
        User.getAllUsers((err, results) => {
            if (err) {
                res.status(500).send("Internal Server Error");
                return;
            }
            response(200, results, "Read data users", res);
        });
    },

    // Menampilkan user berdasarkan id
    getUserById: (req, res) => {
        const userId = req.params.id;
        User.getUserById(userId, (err, user) => {
            if (err) {
                res.status(500).send("Server Error");
                return;
            }
            if (!user) {
                res.status(404).json({ error: "User not found" });
                return;
            }
            response(200, user, "Read spesifik data by id", res);
        });
    },

    // Menambah user
    createUser: (req, res) => {
        const userData = req.body;
        User.createUser(userData, (err, result) => {
            if (err) {
                res.status(500).send("Server Error");
                return;
            }
            response(200, result, "User added successfully", res);
        });
    },

    // Modifikasi data user
    updateUser: (req, res) => {
        const id = req.params.id;
        const userData = req.body;
        User.updateUser(id, userData, (err, result) => {
            if (err) {
                res.status(500).send("Server Error");
                return;
            }
            response(200, result, "User updated successfully", res);
        });
    },

    // Menghapus user
    deleteUser: (req, res) => {
        const id = req.params.id;
        User.deleteUser(id, (err, result) => {
            if (err) {
                res.status(500).send("Server Error");
                return;
            }
            response(200, result, "User deleted successfully", res);
        });
    },
};

module.exports = userController;
