let mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// let connection  =  mongoose.connection
// connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
// connection.once('open', function() {
//    console.log('Connection successful')
// });
module.exports = mongoose.connect('mongodb://localhost/test',{useNewUrlParser:true, useCreateIndex:true});;
