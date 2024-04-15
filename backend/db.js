const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://adityatheprogrammer6969:n1hPsEGEpnsy2WZ0@cluster0.fy38qjk.mongodb.net/business_card');
mongoose.connect('mongodb://localhost:27017/business_card')

const cardSchema = new mongoose.Schema({
    name: String,
    info: String,
    interest: {
        interest1: String,
        interest2: String,
        interest3: String
    },
    linkedin: String,
    twitter: String

    
})

const card = mongoose.model('cards', cardSchema)

module.exports = {
    card
}