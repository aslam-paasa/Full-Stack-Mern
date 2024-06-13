/**
 * => "require" k andr saari chije as an object aa jaati hai.
 * 
 * => "import" humein choice deta hai ki hum kya kya chije mangwa skte hai.
 *    But isse hum directly aise use ni kr skte hai, means jo v humaari directory
 *    hai uski jo package.json files hai uss file k andr humein "type": "module" likhna
 *    padega and then run the script
*/

import { sum, PI } from "./09-export-modules.js";

console.log(sum(1, 2)); // 3