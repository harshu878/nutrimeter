

export const daysInMonth = (m) => {
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
        return new Array(31).fill(0).map((_, ind) => 0 + (ind + 1));
    }
    if (m === 2) return new Array(28).fill(0).map((_, ind) => (ind + 1));
    else return new Array(30).fill(0).map((_, ind) => (ind + 1));
}

export const dateWiseData = (allItems) => {
    var dataArray = []
    for (let i = 1; i <= 31; i++) {
        let tot = 0
        for (let j = 0; j < allItems.length; j++) {
            if (
                Number(allItems[j].time[0] + allItems[j].time[1]) === i
            ) {
                tot += allItems[j].totalEnergy
            }
        }
        dataArray.push([i, tot])
    }
    return dataArray;
}

export const chartData = (dataArray, title) => {
    const data = {
        labels: daysInMonth(new Date().getMonth() + 1),
        datasets: [
            {
                label: title,
                data: dataArray?.map(ele => ele[1]),
                backgroundColor: new Array(31).fill(0).map(ele => ele = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`),
                borderColor: new Array(31).fill(0).map(ele => ele = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`),
                borderWidth: 1,
            },
        ],
    }
    return data;
}




function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}




/*=============================================
=            Dougnet Chart Data            =
=============================================*/

export const singleProductData = (product) => {
    let title = product.Category
    let protein = product.Data.Protein;
    let carb = product.Data.Carbohydrate;
    let fat = product.Data.Fat['Total Lipid']
    return {
        labels: [
            'Protein',
            'Carbohydrate',
            'Fat'
        ],
        datasets: [{
            label: title,
            data: [protein, carb, fat],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 3,
        }],
       
    }
}



/*=====  End of Dougnet Chart Data  ======*/




