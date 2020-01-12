const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dgram = require('dgram');

app.use(cors());
app.use(bodyParser.json());

app.listen(4000, () => {
    console.log('On port 4000');
});