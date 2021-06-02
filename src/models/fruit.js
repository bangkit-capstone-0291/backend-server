const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: Buffer
    }
}, {
    timestamps : true
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit