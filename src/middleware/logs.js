const logRequest = (req, res, next) => {
    console.log("Terjadi request ke PATH:", req.path); // Menampilkan body permintaan yang telah diparsing
    next();
};

module.exports = logRequest;
