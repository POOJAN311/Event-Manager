// const express = require('express');
// const connectDB = require('./db.js')
// const cors = require('cors')
// const itemModel = require('./models/Items.js')

// const app = express()
// app.use(express.json())
// app.use(cors())
// connectDB();

// app.get('/', async (req, res) => {
//     const items = await itemModel.find()
//     res.json(items)
// })

// app.listen(3000, () => {
//     console.log("app is running.");
// })

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');
const Data = require('./models/Items');

const app = express();
app.use(bodyParser.json());
app.use(cors())
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Poojan:PJ3112002@cluster11.wlw2p.mongodb.net/qrsystem?retryWrites=true&w=majority&appName=Cluster11')
        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
connectDB();

app.post('/user/submit', async (req, res) => {
    const { name, email } = req.body;
    const uniqueCode = uuidv4();
    const qrImage = await QRCode.toDataURL(uniqueCode);

    const newData = new Data({ name, email, uniqueCode });
    await newData.save();

    res.json({ message: 'Data saved', qrImage });
});

app.post('/admin/scan', async (req, res) => {
    const { uniqueCode } = req.body;
    const data = await Data.findOne({ uniqueCode });

    if (data) {
        data.count += 1;
        await data.save();
        res.json({ message: 'Data matched and count updated', data });
    } else {
        res.status(404).json({ message: 'Data not found' });
    }
});


app.listen(5000, () => console.log('Server running on port 5000'));