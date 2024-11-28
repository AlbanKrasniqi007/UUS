const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs')

app.use('/static', express.static('static'))

app.get('/', (req, res) => {
    res.render('home')
});
app.get('/erasums', (req, res) => {
    res.render('erasmus')
});


app.listen(process.env.PORT, () => {
    console.log('Server is running');
});