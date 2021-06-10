const app = require('express')();
require('dotenv').config();

app.get('/test', (req, res) => {
    res.end('test page');
});

app.get('/env', (req, res) => {
    res.json({ name_env: process.env.name });
});

app.get('/', (req, res) => {
    res.json({ message: 'bagaskara' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
