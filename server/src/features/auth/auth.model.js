const mongoose = require("mongoose");


const authSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: {
        type: String, minLength: 6
    },
    age: { type: Number }
},
    { timestamps: true }
)

module.exports = Users = mongoose.model('user', authSchema);