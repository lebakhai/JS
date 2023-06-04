const express = require('express');
const app = express();
const port = 1312;

app.get('/', (req, res) => res.send('Hi'));

app.listen(port, () => console.log(`Success at port: ${port}`))