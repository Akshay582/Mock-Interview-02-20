const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cNinjas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', () => {
    console.log('Error found in connecting to the cNinjas db');
});

db.once('open', () => {
    console.log('The MonogoDB is running.');
});