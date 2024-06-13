/**
 * Query Strings :
 * => req.query
 * 
 * => Humne dkha hai ki google pe hm kuch v search krte hai to wo ek query 
 *    string k andr chala jaata hai.
 * 
 * => For example, npm m hm kuch search krte hai aur URL ko notice kre to :
 *    "https://npmjs.com/search?q=express" 
 * => Isme hm dkh skte hai ki "?" k baad  "query string" aata hai i.e. "q=express".
 * 
 * => URL k andr humne kuch request kiya hai with some query string, to unn
 *    query string k liye hum request ko kaise handle krnge?
*/

const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`This app is listening on ${port}`);
});

app.get("/", (req, res) => {
    res.send("I am groot!");
});

app.get("/search", (req, res) => {

    /**
     * Wo saari query print ho k aa jaegi jo ek request k saath aati hai
    */

    console.log(req.query);

    /**
     * 1. console: { q: '"apple"' }
     * 2. console: { q: '"apple"', color: 'green' }
    */

    let searchResult = req.query;
    res.send("No result found!"); // POSTMAN : No result found!
})

/**
 * 1. http://localhost:8080/search?q=apple
 * 2. http://localhost:8080/search?q="apple"
 * 3. http://localhost:8080/search?q="apple"&color=green (Additional information)
*/

app.get("/searchResult", (req, res) => {
    console.log(req.query);

    /**
     * Extracting Value from query params :
    */

    let { q } = req.query;

    /**
     * => Agar humaare paas koi aisa case aate hai jaha search k baad kisi ne 
     *    koi query nhi bheja to aise case m kuch alag response set kr skte hai
    */

    if (!q) {
        res.send("<h1>404: Not Found!</h1>  ");
    }

    res.send(`<h1>Search result for query: ${q}</h1>`); // Check browser
})

/**
 * => http://localhost:8080/searchResult?q=apple
 * => https://npm.com/search?q=nodemon
*/