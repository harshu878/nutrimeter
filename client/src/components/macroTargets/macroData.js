import { data } from "../../pages/diary/diary.data"


export const macroTargets = (foodItemsInList, per) => {
    if (foodItemsInList) var { main, Fat } = data(foodItemsInList)
    let targets = [
        { title: 'Energy', value: per },
        { title: 'Protein', value: main[2].cal },
        { title: 'Fat', value: Fat[3].cal },
        { title: 'Carbs', value: main[0].cal },
    ]
    return { targets }
}
export const colorOfBar = (val) => {
    if (val <= 30) return 'yellow'
    else if (val > 30 && val < 70) return 'orange'
    else return 'green'
}