module.exports = (error, req, res, next) => {
    if (error) res.status(400).json({ message: error.message });
    next();
};