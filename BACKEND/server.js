const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser =  require('body-parser');

const postAPI = require('./src/apis/post');
const commentAPI = require('./src/apis/comment');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 2080;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Synced');
});

app.route('/').get((req, res) => {
    res.send('Social Media App');
});

app.use('/post', postAPI());
app.use('/comment', commentAPI());

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});

