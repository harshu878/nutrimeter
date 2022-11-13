const express = require("express");
const UserProfiles = require('./user.model')
const Users = require('../auth/auth.model')
const Products = require('../foodProducts/products.model')

const authMiddleWare = async (req, res, next) => {
    if (!req.headers.token) return res.send({ error: "token is required!" })
    const [email, userId, password] = req.headers.token.split('_#_');
    try {
        let user = await Users.findOne({ email });
        if (user) {
            if (user.password === password) {
                req.userId = userId;
                next();
            } else {
                res.status(401).send({ error: "Not authorised to perform this action!" });
            }
        } else {
            res.status(404).send({ error: 'User with is email:' + email + 'not exist!' });
        }
    } catch (error) {
        res.status(401).send(error)
    }
}

const app = express.Router();
app.use(authMiddleWare)

app.get('/getitems', async (req, res) => {
    const userId = req.userId;
    let userProfile = await UserProfiles.findOne({ user: userId });
    if (userProfile) return res.send(userProfile);
    res.send([])
})

app.post('/additem', async (req, res) => {
    let { product, serving } = req.body;
    serving = Number(serving);
    const userId = req.userId;
    //
    let existingProduct = await Products.findById(product)
    try {
        let userProfile = await UserProfiles.findOne({ user: userId });
        if (userProfile) {
            let date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
            let isExist = false;
            userProfile.products.forEach(ele => {
                if (ele.time === date && ele.productId === product) isExist = true;
            })
            let updatedUserProfile;
            if (isExist) {
                updatedUserProfile = {
                    ...userProfile._doc,
                    products: userProfile.products.map(ele => {
                        if (ele.time == date && ele.productId === product) {
                            return {
                                ...ele._doc,
                                servings: serving,
                                totalEnergy: addTotalEnergy(existingProduct, serving),
                                product: updatedProduct(existingProduct, serving),
                            }
                        } else return ele;
                    })
                }
            } else {
                updatedUserProfile = {
                    ...userProfile._doc,
                    products: [
                        ...userProfile.products,
                        {
                            productId: product,
                            servings: serving,
                            totalEnergy: addTotalEnergy(existingProduct, serving),
                            product: updatedProduct(existingProduct, serving),
                            time: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
                        }]
                }
            }
            let updatedResult = await UserProfiles.findByIdAndUpdate(userProfile.id, updatedUserProfile, { new: true })
            res.send(updatedResult)

        } else {
            let data = {
                user: userId,
                products: [
                    {
                        productId: product,
                        product: updatedProduct(existingProduct, serving),
                        servings: serving,
                        totalEnergy: addTotalEnergy(existingProduct, serving),
                        time: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
                    }
                ]
            }
            let newUserProfile = await UserProfiles.create(data)
            res.send(newUserProfile);
        }
    } catch (error) {
        res.status(401).send(error);
    }
})


app.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const userId = req.userId;
    // let userProfile = await UserProfiles.findOne({ user: userId });
    try {
        let updatedUserProfile2 = await UserProfiles.updateMany({ user: userId }, { $pull: { products: { _id: id } } }, { new: true })
        res.send(updatedUserProfile2);
    } catch (error) {
        res.status(401).send(error)
    }
})



module.exports = app;



function addTotalEnergy(product, serving) {
    let fat = product.Data.Fat['Total Lipid'];
    let carb = product.Data.Carbohydrate
    let prot = product.Data.Protein
    let tot = (fat * 9) + (carb * 4) + (prot * 4);
    return tot * (serving);
}

function updatedProduct(product, serving) {
    let mins = product.Data
    for (let i in mins.Fat) {
        if (typeof product.Data.Fat[i] === 'number') product.Data.Fat[i] *= serving;
    }
    for (let i in mins['Major Minerals']) {
        if (typeof mins['Major Minerals'][i] === 'number') mins['Major Minerals'][i] *= serving;
    }
    for (let i in mins.Vitamins) {
        if (typeof mins.Vitamins[i] === 'number') mins.Vitamins[i] *= serving;
    }
    for (let i in mins) {
        if (typeof mins[i] === 'number') mins[i] *= serving;
    }
    return product;
}


