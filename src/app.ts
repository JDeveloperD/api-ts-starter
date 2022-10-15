import express from 'express';

const app = express();

app.use('/api', (req, res) => { return res.status(200).json({ info: 'api-ts-stater' }) })

export default app;
