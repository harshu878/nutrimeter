export const data = (foodItemsInList, baseVal = 2400) => {
    let fat = {
        'Monosaturated Fat': foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Fat['Monosaturated Fat'],
            0,
        ),
        'Polysaturated Fat': foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Fat['Polysaturated Fat'],
            0,
        ),
        'Saturated Fat': foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Fat['Saturated Fat'],
            0,
        ),
        'Total Lipid': foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Fat['Total Lipid'],
            0,
        ),
    }
    let major = {
        Copper: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data['Major Minerals'].Copper,
            0,
        ),
        Magnesium: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data['Major Minerals'].Magnesium,
            0,
        ),
        Phosphorus: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data['Major Minerals'].Phosphorus,
            0,
        ),
        Potassium: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data['Major Minerals'].Potassium,
            0,
        ),
        Zinc: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data['Major Minerals'].Zinc,
            0,
        ),
    }
    let Vitamins = {
        VitaminA: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Vitamins['Vitamin A - RAE'],
            0,
        ),
        VitaminB12: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Vitamins['Vitamin B12'],
            0,
        ),
        VitaminB6: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Vitamins['Vitamin B6'],
            0,
        ),
        VitaminC: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Vitamins['Vitamin C'],
            0,
        ),
        VitaminE: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Vitamins['Vitamin E'],
            0,
        ),
        VitaminK: foodItemsInList.reduce(
            (acc, ele) => acc + ele.product.Data.Vitamins['Vitamin K'],
            0,
        ),
    }

    //4
    let AlphaCarotene = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data['Alpha Carotene'],
        0,
    )
    let BetaCarotene = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data['Beta Carotene'],
        0,
    )
    let BetaCryptoxanthin = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data['Beta Cryptoxanthin'],
        0,
    )
    let Choline = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Choline,
        0,
    )
    let Fiber = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Fiber,
        0,
    )
    let LuteinandZeaxanthin = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data['Lutein and Zeaxanthin'],
        0,
    )
    let Lycopene = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Lycopene,
        0,
    )
    let Niacin = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Niacin,
        0,
    )
    let Retinol = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Retinol,
        0,
    )
    let Riboflavin = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Riboflavin,
        0,
    )
    let Selenium = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Selenium,
        0,
    )
    let Thiamin = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Thiamin,
        0,
    )

    //5
    let Carbohydrate = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Carbohydrate,
        0,
    )
    let Cholesterol = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Cholesterol,
        0,
    )
    let Protein = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Protein,
        0,
    )
    let SugarTotal = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data['Sugar Total'],
        0,
    )
    let Water = foodItemsInList.reduce(
        (acc, ele) => acc + ele.product.Data.Water,
        0,
    )

    let main = [
        { title: 'Carbohydrate', cal: Carbohydrate },
        { title: 'Cholesterol', cal: Cholesterol },
        { title: 'Protein', cal: Protein },
        { title: 'SugarTotal', cal: SugarTotal },
        { title: 'Water', cal: Water },
    ]

    let Fat = [
        { title: 'Monosaturated Fat', cal: fat["Monosaturated Fat"] },
        { title: 'Polysaturated Fat', cal: fat["Polysaturated Fat"] },
        { title: 'Saturated Fat', cal: fat["Saturated Fat"] },
        { title: 'Total Lipid', cal: fat["Total Lipid"] },
    ]

    let Major = [
        { title: 'Copper', cal: major.Copper },
        { title: 'Magnesium', cal: major.Magnesium },
        { title: 'Phosphorus', cal: major.Phosphorus },
        { title: 'Potassium', cal: major.Potassium },
        { title: 'Zinc', cal: major.Zinc },
    ]

    let vitamins = [
        { title: 'VitaminA', cal: Vitamins.VitaminA },
        { title: 'VitaminB12', cal: Vitamins.VitaminB12 },
        { title: 'VitaminB6', cal: Vitamins.VitaminB6 },
        { title: 'VitaminC', cal: Vitamins.VitaminC },
        { title: 'VitaminE', cal: Vitamins.VitaminE },
        { title: 'VitaminK', cal: Vitamins.VitaminK },
    ]

    let micro = [
        { title: 'AlphaCarotene', cal: AlphaCarotene },
        { title: 'BetaCarotene', cal: BetaCarotene },
        { title: 'BetaCryptoxanthin', cal: BetaCryptoxanthin },
        { title: 'Choline', cal: Choline },
        { title: 'Fiber', cal: Fiber },
        { title: 'LuteinandZeaxanthin', cal: LuteinandZeaxanthin },
        { title: 'Lycopene', cal: Lycopene },
        { title: 'Niacin', cal: Niacin },
        { title: 'Retinol', cal: Retinol },
        { title: 'Riboflavin', cal: Riboflavin },
        { title: 'Selenium', cal: Selenium },
        { title: 'Thiamin', cal: Thiamin },
    ]

    return { main, micro, vitamins, Major, Fat }
}