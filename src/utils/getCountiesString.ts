export const getCountiesString = (countries: { name: string }[]) => {
    if (countries) {
        const resultArray = []
        for (let i = 0; i < countries.length; i++) {
            const item = countries[i]
            resultArray.push(item.name)
        }
        return resultArray.join(', ')
    }
    return '-'
}

