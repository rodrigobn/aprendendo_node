const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({user: `Rodrigo`})
    res.send(`Hello`)
});

app.listen(3001);