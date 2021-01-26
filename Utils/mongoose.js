const config = require('../config.json')
module.exports = function mongoose(mongoose) {
    const dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
        poolSize: 5,
        connectTimeoutMS: 10000,
        family: 4
    };
    
    mongoose.connect(config.mongo, dbOptions);
    mongoose.set('useFindAndModify', false);
    mongoose.Promise = global.Promise;
    
    mongoose.connection.on('connected', () => {
        console.log('Mongoose has successfully connected!');
    });
    
    mongoose.connection.on('err', err => {
        console.error(`Mongoose connection error: \n${err.stack}`);
    });
    
    mongoose.connection.on('disconnected', () => {
        console.warn('Mongoose connection lost');
    });
}