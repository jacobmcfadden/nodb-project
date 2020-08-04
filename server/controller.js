const estimates = require('./data.json');
let id = 11;

module.exports = {
    getEstimates: (req, res) => {
        res.status(200).send(estimates);
    },
    addEstimate: (req, res) => {
        const { date, title, propertyName, streetAddress, cityStateZip, mgtCo, client, estimateNotes, scope, totalPrice } = req.body;
        if(!date || !title || !propertyName || !mgtCo || !client ) {
            res.status(405).send('Missing estimate input please review');
        } else {
            const newEstimate = {
                id,
                status: "pending",
                approved: false,
                date,
                title,
                propertyName,
                streetAddress,
                cityStateZip,
                mgtCo,
                client,
                estimateNotes,
                scope,
                totalPrice
            };
            estimates.push(newEstimate);
            id++;
            res.status(200).send(estimates);
            }
        },
    deleteEstimate: (req, res) => {
        
    }
    }
