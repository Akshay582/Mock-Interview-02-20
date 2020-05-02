const express = require('express');
const app = express();
const methodOverride = require('method-override');
const port = 8000;

const db = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('/', require('./routes'));

app.listen(port, err => {
    if(err) {console.log('Error in running the server');};
    console.log('Server is up and running at:', port);
})