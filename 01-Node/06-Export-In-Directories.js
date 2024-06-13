/** Transfer data from one directory to another:
 * => Avi tk humne sikha ki ek file se dusri file mai apne data ko kaise transfer krnge.
 * => Ab hum dekhnge ki ek directory se dusre directory mai apne data ko kaise transfer karnge.
 * 
*/

/**
 * Q. "Fruits" naam ki directory ki information mere ye file kaise use kregi?
 * => Jis v directory ki information use krna chahte hai/ jaha se export krna 
 *    chahte hai saari files ki information usi directory k andr hum ek special
 *    file create krte hai i.e. "index.js"
 * 
 * => Fruits folder k andr "index.js" naam ki file bnanege jo baaki saare files se
 *    chije require kregi.
*/

/**
 * Acquire "Fruits" folder/directory :
*/

const info = require("../01-Fruits");
console.log(info);

/**
 * Output : (Array)
 * 
 * [
 *     { name: 'apple', color: 'red' },
 *     { name: 'banana', color: 'yellow' },       
 *     { name: 'orange', color: 'orange' }        
 *   ]
 * 
*/

console.log(info[0].name);  // name