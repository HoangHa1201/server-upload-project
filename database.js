'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://hoangha1201:27.2diem@cluster0.xbe42ik.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }, err => {
        if (err) throw err;
        console.log('Connected to MongoDB');
    });
}