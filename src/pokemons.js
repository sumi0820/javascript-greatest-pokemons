// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

const getAllFirePokemons = (pokemons) => {
    return pokemons.filter(pokemon => pokemon.type.includes("Fire"))
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

const shortestPokemon = (pokemons) => {
    let newPokemons = JSON.parse(JSON.stringify(pokemons));

    if (!newPokemons.length) return 0;
    let height = newPokemons.map(pokemon => {
        let num = pokemon.height.split(' ')[0]
        return Number(num)
    })

    let shortestNum = Math.min(...height)

    let shortestPokemon = newPokemons.filter(pokemon => {
        return pokemon.height.includes(shortestNum)
    })

    return shortestPokemon[0].name
}


// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

// if !pokemon.candy_count, goes to reduce method as 0 || not count. If it's true, goes to reduce method and sum up

const candyAverage = (pokemons) => {

    if (!pokemons.length) return 0

    let total = pokemons.reduce((acc, pokemon) => {
        if (!pokemon.candy_count) {
            return acc + 0
        } else {
            return acc + pokemon.candy_count
        }
    }, 0)

    let average = total / pokemons.length
    return Number(average.toFixed(2))
}


// Iteration 4: images for the first 10 `Ground`  Pokemons

const getGroundPokeImg = (pokemons) => {
    let newPokemons = JSON.parse(JSON.stringify(pokemons));

    if (!newPokemons.length) return 0

    let groundType = newPokemons
        .filter(pokemon => pokemon.type.includes('Ground'))
        .map(pokemon => pokemon.img)

    return groundType.splice(0, 10)
}

// Iteration 5: Find all pokemon names heavier than Pikachu

// 1. Filter pikachu's weight
// 2. Filter heavier than pikacu

const getHeavyPokemons = (pokemons) => {
    let newPokemons = JSON.parse(JSON.stringify(pokemons));
    if (!newPokemons.length) return 0

    let pikachu = newPokemons.filter(pokemon => pokemon.name === "Pikachu")
    let pikachuWeight = pikachu[0].weight.split(' ')[0]

    let heavier = newPokemons.map(pokemon => {
            pokemon.weight = pokemon.weight.split(' ')[0]
            if (pokemon.weight > pikachuWeight) {}
            return pokemon
        })
        .filter(pokemon => {
            return Number(pokemon.weight) > Number(pikachuWeight)
        })
        .map(pokemon => pokemon.name)
    return heavier
}


// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

const orderAlphabetically = (pokemons) => {
    let newPokemons = JSON.parse(JSON.stringify(pokemons));


    newPokemons.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    });

    let names = newPokemons.map(pokemon => pokemon.name)

    return names.length > 20 ? names.splice(0, 20) : names

}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

const strongPokemons = (pokemons) => {
    if (!pokemons.length) return 0

    let oneWeakness = pokemons
        .filter(pokemon => {
            return pokemon.weaknesses.length === 1
        })
        .map(pokemon => pokemon.name)

    return oneWeakness.splice(0, 15);
}