const apple = require('./apple');
const banana = require('./banana');
const orange = require('./orange');

/**
 * Hum ek array bnanenge fruits naam se aur uske andr hm saare k saare fruits ki
 * value save kr lenge aur fir "fruits" naam k array ko export kr denge jo saari
 * data require kri, combine kri aur fir usse export krti hai.
*/

let fruits = [apple, banana, orange];

module.exports = fruits;