/**
 * 1. Create one file "math.js" jiske andr math related functions likhnge
*/

const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

/**
 * Q. How to send objects?
 * => Way-1 to send objects:
 * 
 *    let obj = {
 *         sum: sum,
 *         mul: mul,
 *         g: g,
 *         PI: PI
 *    };
 * 
 *    module.exports = obj;
 * 
 * 
 * => Way 2 to send objects :
 *    
 *    module.exports.sum = (a, b) => a + b;
 *    module.exports.mul = (a, b) => a * b;
 *    module.exports.g = 9.8;
 *    module.exports.PI = 3.14;
 * 
 * Note: We can also write it as :
 *    exports.sum = (a, b) => a + b;
 *    exports.mul = (a, b) => a * b;
 *    exports.g = 9.8;
 *    exports.PI = 3.14;
*/

/**
 * Way-3 to send objects : (recommended)
*/

module.exports = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
}

/**
 * => Hum math.js k last m ek chij likh skte hai i.e. module.exports. Waise to
 *    module.exports ek object hoti hai jiske andr koi properties ya method agar
 *    hum koi aur files ko bhejna chahte hai same directory k andr to hm bhej 
 *    paate hai.
 * 
 * => module.exports kehne k matlab h ye apne dursi file ko kuch information de 
 *    rhi hai aur uss information m ye ek number de rhi hai "123". To ye khud
 *    se export kr hi hai 123 value ko.
*/   
