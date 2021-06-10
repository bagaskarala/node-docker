const app = require('express')();

app.get('/test', (req, res) => {
    res.end('test page');
});

app.get('/', (req, res) => {
    res.json({ message: 'bagaskara' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
