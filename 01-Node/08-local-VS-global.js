/**
 * Local vs Global :
 * => npm install -g <-package name->
 * => npm link <-package name->
 * 
 * 
 * 1. Local Installation:
 * => Avi tk jo hum node package install krte aae the unko hum install krte the
 *    local. Local means jiss folder k andr humne package ko install kiya sirf usi
 *    folder k andr hum uss package ko use kr skte hai, usse bahar hm uss package ko
 *    use krnge to humaare paas error aa jaega : Cannot find module 'figlet'
 *    Means jo module/packages jiss directory k andr install hote hai wo sirf wahi
 *    pe use ho skte hai.  (Local Installation => Best Practice)
 *    
 * 2. Global Installation:
 * => Hum packages ko chahe to globally v install kr skte hai. Kisi v package ko
 *    globally install krne k liye humein ye sirf "-g" (means global) wala flag add 
 *    krna hota hai. 
 * 
 *    npm install -g <- package name ->
 *    npm install -g figlet
 * 
 * 
 * Note: Humne install to kr liya lekin uss package ko use nhi kr paenge. Uss package ko
 *       use krne k liye humein pehle uss package ko "link" krna padega. Uske liye
 *       humein run krna padta hai : 
 *       (a) npm link <- package name -> 
 *       (b) npm link figlet (Global Installation (Online) => Not recommended)
*/
