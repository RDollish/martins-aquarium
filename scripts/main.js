// Import the function that returns a copy of the fish array
// const { database } = require("./database.js")

import { getFish } from "./database.js"
import { getCareTips } from "./database.js"
import { getLocations } from "./database.js"
const fishes = getFish()
export const GetFish = () => {
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
    let htmlString = `<h2>Fish Collection</h2><article class="fish_list">`

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish_card">
            <div><img  class="fish__image image--card" src="${fish.img}" /></div>
            <div class="fish_properties">
                <ul>
                    <li>${fish.name}</li>
                    <li>${fish.species}</li>
                    <li>${fish.size}</li>
                    <li>${fish.locationHarvested}</li>
                    <li>${fish.food}</li>
                </ul>
            </div>
        </section>
`
    }
    htmlString += `</article>`

        return htmlString
}
console.log(GetFish())

// export 
const tips = getCareTips()

const getFishTips = () => {


    let htmlString = `<aside><h2>Martin's Super Duper Tips</h2><div class="martins_tips"></div><section>
    <ul class="cleaning_tips">`

    for (const tip of tips) {
        htmlString += `<li>${tip.content}</li>`
            
    }
    
    htmlString += `</ul></section>`

    return htmlString
}


// export 
const locations = getLocations()
const getFishLocations = () => {

    let htmlString = `<div class= "locations"></div><ul class="locations">`

    for (const location of locations) {
        htmlString += `<li>${location.name}</li>`
    }

    htmlString += `</ul></section>`

    return htmlString
}

const parentHTMLElement = document.querySelector(".fish-collection")
parentHTMLElement.innerHTML = GetFish()

const parentHTMLElement2 = document.querySelector(".harvesting-tips")
parentHTMLElement2.innerHTML = getFishTips()

const parentHTMLElement3 = document.querySelector(".aside")
parentHTMLElement3.innerHTML = getFishLocations()