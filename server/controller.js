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
        const {id} = req.params;
        const index = estimates.findIndex(estimate => estimate.id === +id)
        if(index === -1){
            res.status(404).send('estimate not found in list')
        } else {
            estimates.splice(index, 1);
            res.status(200).send(estimates)
        }
    },
    approveEstimate: (req, res) => {
        const {id} = req.params;
        const index = estimates.findIndex(estimate => estimate.id === +id)
        if(index === -1){
            res.status(404).send('estimate not found in list')
        } else {
            estimates[index].approved = !estimates[index].approved
            res.status(200).send(estimates)
        }
    },
    updateEstimate: (req, res) => {
        
        const {id} = req.params;
        console.log('hit', id)
        const index = estimates.findIndex(estimate => estimate.id === +id);
        console.log('index', index);
        if(index === -1){
            res.status(404).send('estimate not found in list')
        } else {
            estimates[index] = req.body.body;
            console.log(estimates[index])
            res.status(200).send(estimates);
            console.log('sent');
        }
    }
}