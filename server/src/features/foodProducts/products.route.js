const express = require("express");
const foodProducts = require('./products.model')



const app = express.Router();

app.get('/', async (req, res) => {
    const { page = 1, limit = 15, q } = req.query;
    let products
    try {
        if (q) {
            const regex = new RegExp(q, 'i');
            products = await foodProducts.find({ Category: regex}); 
        } else {
            products = await foodProducts.find().limit(limit).skip((page - 1) * limit);
        }
        res.send(products);
    } catch (error) {
        res.status(401).send(error);
    }
})


app.get('/allcategories', async (req, res) => {
    let products = await foodProducts.find({}, { Category: 1 })
    let categories = [], temp = {};
    products.forEach(ele => {
        temp[ele.Category] = 1;
    })
    for (let i in temp) categories.push(i);
    res.send(categories);
})


app.get('/:id', async (req, res) => {
    try {
        let product = await foodProducts.findById(req.params.id);
        res.send(product);
    } catch (error) {
        res.status(401).send(error);
    }
})




module.exports = app;