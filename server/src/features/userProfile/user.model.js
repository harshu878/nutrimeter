const mongoose = require("mongoose");


const userProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    days: [
        {
            date: String,
            products: [
                {
                    product: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'foodProduct',
                        required: true,
                    },
                    servings: {
                        type: Number,
                        required: true,
                    },
                    totalEnergy: Number,
                }
            ]
        }
    ]
},
    { timestamps: true }
)

module.exports = UserProfiles = mongoose.model('userprofile', userProfileSchema);


