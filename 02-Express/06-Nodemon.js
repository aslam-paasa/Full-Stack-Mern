/**
 * Nodemon :
 * => To automatically restart server with code changes.
 * 
 * => Avitk hm node k basis par apne server ko start krte aae hai. Aur avi tk humne
 *    ek problem encounter kiya hai ki jb v hm ek chota sa change krna hota hai apne
 *    server-side k upar to humein baar baar server on-off krna hota hai (Problem).
 * 
 * Solution : Nodemon package humein wo power deta hai jisse humaara server
 *            automatically restart ho skta hai.
 * 
 * Note: Generally hum isse globally install krte hai : (recommended)
 *       => npm install -g nodemon
 * 
 * => Aur ab humein server ko restart krne hai to npm k jagha nodemon likhna padega :
 *    -> nodemon 06-Nodemon.js
 * => Koi v changes krnge to server automatically restart hoga
 * 
 * 
 * Issue : nodemon cannot be loaded because running scripts is disabled on this system:
 * Solution : Open Power Shell as admin => Run : Set-ExecutionPolicy Unrestricted
 * 
 */