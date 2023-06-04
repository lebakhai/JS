const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 1312;

app.use(morgan('combined'))

app.get('/', (req, res) => res.send('hi'));

app.listen(port, () => console.log(`Success at port: ${port}`))