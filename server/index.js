const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4004;

app.use(express.json());

app.get('/api/estimates', ctrl.getEstimates);
app.post('/api/estimates', ctrl.addEstimate);
app.delete('/api/estimates/:id', ctrl.deleteEstimate);

app.listen(port, () => console.log(`active on port ${port}`));