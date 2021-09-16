const PAPERONI = 'PAPERONI'
const HAWAII = 'HAWAII'
const FIVECHEESE = 'FIVECHEESE'
const CARBONARO = 'CARBONARO'
const TOSCANO = 'TOSCANO'
const SMALL = 'SMALL'
const MEDIUM = 'MEDIUM'
const BIG = 'BIG'
const TIN = 'TIN'
const STANDART = 'STANDART'
function Pizza(name, size, dough_type) {
    const pizza = {}
    pizza.name = name;
    pizza.size = size;
    pizza.dough_type = dough_type;
    pizza.price = getPrice(name, size);
    return pizza
}
function getPriceForSmallPizzaByName(name) {
    switch (name) {
        case HAWAII: {
            return 130
        }
        case PAPERONI: {
            return 115
        }
        case FIVECHEESE: {
            return 121
        }
        case TOSCANO: {
            return 118
        }
        case CARBONARO: {
            return 135
        }
        default: {
            console.log("Unknown pizaa name")
            return -1
        }
    }
}
function getPizzaPriceBySize(size, priceOfSmallOne) {
    switch (size) {
        case SMALL: {
            return priceOfSmallOne
        }
        case MEDIUM: {
            return priceOfSmallOne * 1.3
        }
        case BIG: {
            return priceOfSmallOne * 1.4
        }
        default: {
            console.log("Unknown pizza size")
            return -1
        }
    }
}
function getPrice(name, size) {
    let priceOfSmallPizza = getPriceForSmallPizzaByName(name)
    return getPizzaPriceBySize(size, priceOfSmallPizza)
}
let paperoni = Pizza(PAPERONI, MEDIUM, 'TIN')
let toscano = Pizza(TOSCANO, SMALL, 'STANDART')
let carbonara = Pizza(CARBONARO, BIG, 'TIN')
let hawaii = Pizza(HAWAII, MEDIUM, 'TIN')
console.log(toscano)
console.log(paperoni)
console.log(carbonara)
function Card(arrayOfPizza, adressa) {
    card = {};
    card.arrayOfPizza = arrayOfPizza;
    card.adressa = adressa;
    card.price = calculatePrice(arrayOfPizza);
    console.log(card)
}
const calculatePrice = (arrayOfPizza) => {
   return arrayOfPizza.reduce((acc, el) => acc + el.price,0)
}
console.log(Card([paperoni,toscano], 'Gorodok'))
function addPizza (arrayOfPizza, ) {
    card.arrayOfPizza.push(arrayOfPizza);
}
addPizza(carbonara)
addPizza(hawaii)