const express = require('express');
const app = express();
// const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const port = 8000;

const db = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// app.use(expressLayout);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));

app.listen(port, err => {
    if(err) {console.log('Error in running the server');};
    console.log('Server is up and running at:', port);
})