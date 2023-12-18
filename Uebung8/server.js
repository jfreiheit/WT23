const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes')

const app = express();
const PORT = 4000;

app.use(express.json())
app.use(cors());
app.use('/', routes)

app.listen(PORT, (err) => {
    if(err) {
        console.log('backend not started', err)
    } else {
        console.log(`Server started and listening on port ${PORT} ...`)
    }
})