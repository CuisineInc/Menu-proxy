require('newrelic');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/restaurants/:id', express.static('public'));
app.listen(port, () => console.log('port ' + port + ' is listening...'));