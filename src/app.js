const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const middlewareLogRequest = require("./middleware/logs");

// Middleware untuk parsing body (body-parser baru dalam update express.js)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Console.log setiap request
app.use(middlewareLogRequest);

// Rute untuk entitas pengguna
app.use("/users", userRoutes);

// Server running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
