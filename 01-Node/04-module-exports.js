/**
 * module.exports :
 * => requiring files:
 *    (a) require() : a built-in function to include external modules that exist in separate files.
 *    (b) module.exports : a special object
 */

/**
 * 1. Create one file "math.js" jiske andr math related functions likhnge.
 * 
 * 2. Hum sum, multi, PI, g ki functions ko baar baar use krna chahte h lekin
 *    hum unko baar baar nhi bnana chahte hai q ki humein pta hai ki humne math.js
 *    m v chijo ko bnaya hua hai. To iss file m hm math.js k functions ko hm use
 *    krnge aur iss usage k liye humaare paas ek special property hoti hai node m
 *    which is "module.exports".
 * 
 *    Hum math.js k last m ek chij likh skte hai i.e. module.exports. Waise to
 *    module.exports ek object hoti hai jiske andr koi properties ya method agar
 *    hum koi aur files ko bhejna chahte hai same directory k andr to hm bhej 
 *    paate hai.
 * 
 *    module.exports kehne k matlab h ye apne dursi file ko kuch information de 
 *    rhi hai aur uss information m ye ek number de rhi hai "123". To ye khud
 *    se export kr hi hai 123 value ko.
 * 
 * 3. Ab iss file ko math.js ki kuch value use krni hai to humein "require" keyword
 *    use krna pdega.
 * */


/**
 * const someValue = require('./05-math');
 * 
 * => Ye likhne se humaari same directory k andr i.e. backend directory k kisi file
 *    ko access kr rhe hai. Aur isse jo v chij "export" hua usko humne "require" kr
 *    liya. Aur usse hum kisi variable m store kra liya i.e. "someValue".
 * 
 * console.log(someValue); // 123
 * 
 * 
 * Note : 
 * => Agar humara file kuch v export nhi krta aur hum unhe require kr lete h to
 *    uss case m humaare paas "{}" empty object print hota hai.
 * 
 * => "module.exports" is an object lekin hum usse string, number etc kuch v bna skte hai
 */


const math = require('./05-math');

console.log(math.sum(2, 2));
console.log(math.PI * 2);
console.log(math);