const products = ['🍎 apple', '🥬 kale', '🍐 pear', '🌽 corn']
const fruits = ['🍐 pear', '🍎 apple']
const veggies = ['🥬 kale', '🧅 onion']

const atLeastOneFruit = fruits.some(i => products.includes(i))
// true
const atLeastOneVeggie = veggies.some(i => products.includes(i))
// true

console.log(atLeastOneFruit, atLeastOneFruit)