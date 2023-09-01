const queens = []
const tributeChest = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`
}

const payTribute = (tributeId, tributeDescription, queenId) => {
        const tribute = {
            id: tributeId,
            description: tributeDescription,
            queenId: queenId
        }

        tributeChest.push(tribute)
    
    }

    createQueen(1, "Athena Perez")
    createQueen(2, "Charisse Ford")
    createQueen(3, "Jenna Solis")
    createQueen(4, "Halle Berry")


for (const queenObject of queens) {

    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
    
}


payTribute(1, "All of my love and affection", 1)
payTribute(2, "Money", 2)
payTribute(3, "Roses", 3)
payTribute(4, "My house", 4)


// console.log(queens)

// iterate the queen object to show tribute for each one
for (const queen of queens) {
        
    // Each queen will look at every item to see if it is hers
        for (const tribute of tributeChest){
           if (tribute.queenId === queen.id) {
            console.log(`${queen.name} has tribute ${tribute.description}.`)
           } 
           
        }
}