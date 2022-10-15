const express = require('express');

const app = express();

app.use('/api', (req, res) => { return res.status(200).json({ info: 'api-ts-stater' }); });

const port = process.env.PORT || 4000;

app.listen(port, () => console.log('ready port'));
