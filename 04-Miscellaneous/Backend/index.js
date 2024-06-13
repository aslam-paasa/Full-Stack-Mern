const express = require("express");
const app = express();
const port = 8080;

// "app.use()" means ye kaam har request k liye hona chaiye.
app.use(express.urlencoded({ extended: true})); // it can read urlencoded data
app.use(express.json()); // now it can read json data also

app.get("/register", (req, res) => {
    // GET request m data "req.query()" k andr aata hai
    // extract username & password and use it
    let { user, password } = req.query;
    res.send(`Standard GET response. Welcome ${user}!`);
})

app.post("/register", (req, res) => {
    console.log(req.body); // Print the data => undefined (form data not displaying)
    // After URL encoding, form data will display in the console
    // To display the data, parse it (means make it readable for express) using :
    // (a) app.use(express.urlencoded({ extended: true}));
    // (b) app.use(express.json());
    let { user, password } = req.body;
    res.send(`Standard POST response. Welcome ${user}!`);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

// 1) http://localhost:8080/register => Standard GET response
// 2) http://localhost:8080/register => Standard POST response

// POST Request k andr body hoti hai (POSTMAN), aur isme bahut saara data hm
// send kr skte hai. Aur data ko send krne k alag alag tarike hote hai :
// 1. JSON
// 2. text
// 3. XML
// etc...

// Let's send a random data :
// {
//     "name": "mohammad"
// }

// => Ye chij humein URL m kvi dikhai nhi dega agar hm POST Request bhj rhe
//    hai to but ye backend k server pe receive hogi