const data = require('./data.json');
let id = 11;

module.exports = {
    handler: (req, res) => {
        res.status(200).send(data);
    }
}