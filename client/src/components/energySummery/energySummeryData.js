export const colorOfCircle = (val) => {
    if (val <= 30) return 'yellow.400'
    else if (val > 30 && val < 70) return 'orange.400'
    else return 'green.400'
}

export const getTotalEnergy = (foodItemsInList, baseValue) => {
    let total = foodItemsInList.reduce((acc, ele) => acc + ele.totalEnergy, 0)
    let per = (total / baseValue) * 100
    let remaining = baseValue - total
    let remPer = 100 - (remaining / baseValue) * 100
    return { total, per, remaining, remPer }
}
