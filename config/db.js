const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb+srv://afnan:C6RYUTVjgMKDPrwI@cluster0.tnnav.gcp.mongodb.net/short-url?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('conneted to mongoDB');
    } catch (err) {
        console.error("could not connet to mongoDB");
        process.exit(1);
    }
}