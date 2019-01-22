const express = require('express');
const bodyParser = require('body-parser');

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', require('./app/src/routes'));

app.listen(2009);