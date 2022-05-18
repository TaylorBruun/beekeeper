

const bees = [
    {
        name: "Duke of Venice",
        color: 'teal',
        busy: true,
        aptitude: 10,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Brabantio",
        color: 'teal',
        busy: false,
        aptitude: 7,
        favoriteFood: "Honey",
        lost: false,
    },
    {
        name: "Gratiano",
        color: 'teal',
        busy: true,
        aptitude: 3,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Lodovico",
        color: 'teal',
        busy: false,
        aptitude: 2,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Othello",
        color: 'blueviolet',
        busy: true,
        aptitude: 9,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Cassio",
        color: 'blueviolet',
        busy: true,
        aptitude: 5,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Iago",
        color: 'blueviolet',
        busy: false,
        aptitude: 6,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Roderigo",
        color: 'blueviolet',
        busy: true,
        aptitude: 4,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Montano",
        color: 'goldenrod',
        busy: true,
        aptitude: 3,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Clown",
        color: 'goldenrod',
        busy: true,
        aptitude: 1,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Desdemona",
        color: 'goldenrod',
        busy: false,
        aptitude: 4,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Emilia",
        color: 'goldenrod',
        busy: true,
        aptitude: 10,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Bianca",
        color: 'grey',
        busy: true,
        aptitude: 8,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Senator",
        color: 'grey',
        busy: false,
        aptitude: 7,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Sailor",
        color: 'grey',
        busy: false,
        aptitude: 9,
        favoriteFood: "Honey",
        lost: false,
    },

    {
        name: "Gentleman of Cyprus",
        color: 'grey',
        busy: true,
        aptitude: 5,
        favoriteFood: "Honey",
        lost: false,
    },

   




]

let currentBees = bees
let lostBee = {}

function drawBees() {
    let htmlChunk = ''
    bees.forEach(b => {
        htmlChunk += `<div class="col-3 p-5 color-${b.color} mdi mdi-bee">${b.name}</div>`
    });
    document.getElementById('bee-field').innerHTML = htmlChunk
}

function drawBeesRandomly() {
    let RemBees = []
    currentBees.forEach(b => {
        RemBees.push(b)
    });
    let RanBees = []
    for (i = 0; i < currentBees.length; ){
        // start with a random spot in the array (this might make the check for undefinedness redundant)
        // NOTE could remove the "indefinite runtime + technically no guarantee it finishes" issues by rewriting array without undefined elements each time. ??on average less performant than letting it loop without iterating on failure cases??
        let randomRemIndexNo = Math.floor(Math.random() * currentBees.length)
            if (RemBees[randomRemIndexNo] != undefined) {
                // if NOT undefined, put it in my array that is building
            RanBees.push(RemBees[randomRemIndexNo])
                // AND if NOT undefined, take it out of my old array so i cant pick it next time
            RemBees.splice(randomRemIndexNo, 1, undefined)
            // only iterate if we got a success! otherwise we wont get all array items unless INSANELY lucky
            i++
        }
        else{
            // dont do anything if we did not get a success, go back to the loop without iterating. I do not need this else section. 
        }
    }
    let htmlChunk = ''
    RanBees.forEach(r => {
        htmlChunk += `<div class="h5 col-3 p-5 color-${r.color} mdi mdi-bee">${r.name}</div>`
    })
    document.getElementById('bee-field').innerHTML = htmlChunk

}

function loseRandomBee(){
    let randIndex = Math.floor(Math.random()*bees.length)
    bees[randIndex].lost = true
    lostBee = bees[randIndex]
}

function filter(beeArg){
    let updatedCurrentBees = []
        currentBees.forEach(c => {
            if(c[beeArg] == lostBee[beeArg]){
            updatedCurrentBees.push(c)
            }
        })
    
    currentBees = updatedCurrentBees
    drawBeesRandomly()
    
}

loseRandomBee()
drawBeesRandomly()