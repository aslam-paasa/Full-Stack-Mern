/**
 * require vs import :
 *
 *  import { sum } from "./math.js";
 *
 *  => We can't selectively load only the pieces we need with require but with import,
 *     we can selectively load only the pieces we need, which can save memory.
 * 
 *  => Loading is synchronous for 'require' but can be asynchronous for 'import'.
 *     Means 'require' m jiss sequence m chije likhi hui h usi sequence m chije load
 *     hogi. But 'import' is asynchronous means humein 3-4 module likhe hai to usme
 *     se ho skta hai baad wala module agar pehle availabile hai to wo pehle import
 *     hoga. Iss tarah se better management hota hai. 
 * 
 *  => Phle hum sirf require ko use krte the fir ES6 aane k baad humaare paas arrow
 *     function jaisi chije aayi. Similarly, ES6 aane k baad ek aur intresting chij
 *     aayi i.e. "import".
 * 
 *  => Pehle humaari files sirf "require" hoti thi, but after ES6 hum "import" keyword
 *     ka jyda use krte hai.
 * 
 * Note : Hum apni project m yaa to saari chije "require" krte hai ye fir saari
 *        chije "import" krte hai.
 * 
 *  => Kisi v chij ko import krne k liye usse pehle export krna padta hai.
 * 
 *  => "export" krne k liye jiss v function/keyword ko export krna hai uske saamne
 *     "export"  keyword likh dete hai.
 * 
 * Note : Ye "export" koi variable nhi h, ye ek actual "keyword" hone wala hai.
 */


/**
 * Note: Ab ye saari chije individually export hone wali hai
*/

export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const g = 9.8;
export const PI = 3.14;