module.exports = (error, req, res, next) => {
    return res.status(400).json({
        message: error.message
    });
};