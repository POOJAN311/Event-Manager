const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Poojan:PJ3112002@cluster11.wlw2p.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster11')
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;