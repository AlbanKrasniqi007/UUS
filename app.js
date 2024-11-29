const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs')

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
    res.render('home')
});
app.get('/erasmus', (req, res) => {
    res.render('erasmus')
});
app.get('/applyerasmus', (req, res) => {
    res.render('applyerasmus')
});
app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/apply', (req, res) => {
    res.render('apply')
});

app.listen(process.env.PORT, () => {
    console.log('Server is running');
});