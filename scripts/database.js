const database = {
    fish: [
        {
            name: "'Pepe'",
            species:"Peeper",
            img: "https://static.wikia.nocookie.net/subnautica/images/b/be/Peeper_Fauna.png/",
            food: "crustaceans",
            size: 3,
            locationHarvested: "Deep Sea"
        },
        {
            name: "'Fido'",
            species: "Bladderfish",
            img: "https://static.wikia.nocookie.net/subnautica/images/f/f4/Bladderfish_Fauna.png/",
            food: "crustaceans",
            size: 3,
            locationHarvested: "Deep Sea"
        },
        {
            name: "'Cuddles'",
            species: "Cuddlefish",
            img: "https://static.wikia.nocookie.net/subnautica/images/b/bb/Cuddlefish_Fauna.png/",
            food: "crustaceans",
            size: 5,
            locationHarvested: "Deep Sea"
        },
        {
            name: "'Key'",
            species: "Holefish",
            img: "https://static.wikia.nocookie.net/subnautica/images/1/13/Holefish_Fauna.png/",
            food: "crustaceans",
            size: 8.5,
            locationHarvested: "Deep Sea"
        },
        {
            name: "'Fluffy'",
            species: "Sea Dragon Leviathan",
            img: "https://static.wikia.nocookie.net/subnautica/images/a/a3/Sea_Dragon_Leviathan_Fauna.png/",
            food: "crustaceans",
            size: 23,
            locationHarvested: "Deep Sea"
        }
    ],
    careTips: [

        {
            name: "Tip 1",
            content: "Provide enough space."
        },
        {
            name: "Tip 2",
            content: "Keep water balanced."
        },
        {
            name: "Tip 3",
            content: "Feed fish a balanced diet."
        }
    ],
    locationsHarvested: [
        {
            id: 1,
            name: "Lizard Islands - Australia"
        },
        {
            id: 2,
            name: "Tanzania - Africa"
        },
        {
            id: 3,
            name: "Gulf of Chiriqui - Panama"
        },
        {
            id: 4,
            name: "Iliamna Lake - Alaska"
        },
        {
            id: 5,
            name: "Kiritimati - South of Hawaii"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}

export const getCareTips = () => {
    return database.careTips.map(tip => ({ ...tip }))
}

export const getLocations = () => {
    return database.locationsHarvested.map(location => ({...location}))
}