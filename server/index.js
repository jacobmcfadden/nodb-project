const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 4004;

app.use(express.json());

app.get('/api/todos', ctrl.handler)

app.listen(port, () => console.log(`active on port ${port}`));