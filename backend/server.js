import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Comment from './models/comment';

// create instances
const app = express();
const router = express.Router();

//set port to a predetermined port if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

//db config -- set URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//configue the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//set rout path & initialize API
router.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
});

router.get('/comments', (req, res) => {
    Comment.find((err, comments) => {
        if(err) return res.json({ success: false, error: err});
        return res.json({ success: true, data: comments });
    });
});

router.post('/comments', (req, res) => {
    const comment = new Comment();
    //use body parser for req.body
    const { author, text } = req.body;
    if(!author || !text){
        //throw error. It can also be check on the front end()
        return res.json({
            success: false,
            error: 'Author or comment is blank.'
        });
    }
    comment.author = author;
    comment.text = text;
    comment.save(err => {
        if(err) return res.json({ success: false, error: err});
        return res.json({ success: true });
    });
});

//use routter configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
