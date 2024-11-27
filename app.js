const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.render('home')
});


app.listen(process.env.PORT, () => {
    console.log('Server is running');
});