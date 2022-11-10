const mongoose = require("mongoose");

const ProductSchema = {
    Category: String,
    Description: String,
    'Nutrient Data Bank': Number,
    Data: {
        'Alpha Carotene': Number,
        "Beta Carotene": Number,
        "Beta Cryptoxanthin": Number,
        "Carbohydrate": Number,
        "Cholesterol": Number,
        "Choline": Number,
        "Fiber": Number,
        "Lutein and Zeaxanthin": Number,
        "Lycopene": Number,
        "Niacin": Number,
        "Protein": Number,
        "Retinol": Number,
        "Riboflavin": Number,
        "Selenium": Number,
        "Sugar Total": Number,
        "Thiamin": Number,
        "Water": Number,
        Fat: {
            "Monosaturated Fat": Number,
            "Polysaturated Fat": Number,
            "Saturated Fat": Number,
            "Total Lipid": Number,
        },
        "Major Minerals": {
            "Calcium": Number,
            "Copper": Number,
            "Iron": Number,
            "Magnesium": Number,
            "Phosphorus": Number,
            "Potassium": Number,
            "Sodium": Number,
            "Zinc": Number,
        },
        Vitamins: {
            "Vitamin A - RAE": Number,
            "Vitamin B12": Number,
            "Vitamin B6": Number,
            "Vitamin C": Number,
            "Vitamin E": Number,
            "Vitamin K": Number
        }
    }
}




const userProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    products: [
        {
            productId: {
                type: String,
                // ref: 'foodProduct',
                required: true,
            },
            product: ProductSchema,
            servings: {
                type: Number,
                required: true,
            },
            totalEnergy: Number,
            time: String,
        }
    ]
},
    { timestamps: true }
)

module.exports = UserProfiles = mongoose.model('userprofile', userProfileSchema);


