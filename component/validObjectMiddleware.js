const { isValidObjectId } = require('mongoose');

module.exports = (req, res, next) => {
    // First, check if id is present in the request parameters
    if (!req.params.id) {
        return res.status(400).json({ message: 'Missing id in URL' });
    }

    if (isValidObjectId(req.params.id)) {
        next();  
    } else {
        return res.status(400).json({ message: 'Invalid URL (ObjectId)' });
    }
};