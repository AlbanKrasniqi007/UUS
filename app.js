const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs')

app.use('/static', express.static('static'))

const DepartamentModel = require("./model/DepartamentModel")
const UsersModel = require("./model/UsersModel")
const LoginModel = require("./model/LoginModel")
app.get('/', (req, res) => {
    res.render('home')
});
app.get('/erasmus', (req, res) => {
    res.render('erasmus')
});
app.get('/applyerasmus', (req, res) => {
    res.render('applyerasmus')
});
app.get('/apply', (req, res) => {
    res.render('apply')
});
app.get('/ourpartners', (req, res) => {
    res.render('ourpartners')
});
app.get('/footer', (req, res) => {
    res.render('footer')
});
app.get('/navbar', (req, res) => {
    res.render('navbar')
});
const login = require('./routes/LoginRoute')
app.use('/login',login)

app.listen(process.env.PORT, () => {
    console.log('Server is running');
});