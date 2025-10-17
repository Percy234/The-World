import mongoose     from    "mongoose";
const { Schema }    =       mongoose;

const Animal = new Schema({
    name: { type: String, require: true },
    type: { type: Array, default: []},
    category: { type: String, require: true }
})

const model = mongoose.model('Animal', Animal);
export default Animal;