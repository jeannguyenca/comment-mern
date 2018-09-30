import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//create new instance of the mongoose.Schema
//the Schema takes an object that shows the shape of
//the database entries

const CommentsSchema = new Schema({
    author: String,
    text: String
}, {timestamps: true });

export default mongoose.model('Comment', CommentsSchema);
