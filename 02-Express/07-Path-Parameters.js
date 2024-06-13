// Path Parameters :
// => req.params
// => Instagram m bahut saare account hote hai, agar humein instagram m facebook
//    ka account dekhna hai to uske liye humein iss URL m jaana pdega :
//    "https://www.instagram.com/facebook/?hl=en"
// => Agar hum iss URL ko dhang se observe kre to the link is "instagram.com/facebook"
// => Similarly, hum "instagram.com/apple" likh de to "Apple" ka account khul
//    jaega.
// Note : But it doesn't mean har user account k liye ek path likha gya hai.
// => Aise cases m yha par jaha "facebook ya apple" hai, to generally hm apne
//    path k saath kuch variable value send kr skte hai jinki hm "path parameters"
//    kehte hai. Ye Variable change hota rehta hai :
//    "https://www.instagram.com/facebook/?hl=en"
// => To jb v hum variables use krte hai like "facebook", hum use krte hai
//    in the form of path parameters.

// Q) Hm path parameters kaise define krte hai server k andr?
// Sending variable => "./:{variable}"
// app.get("/:username", (req, res) => {
//     console.log(req.params);
//     res.send(`Hello, ${req.params.username}!`);
// });

// POSTMAN :  http://localhost:8080/apnacollege
// Jb hm POSTMAN se URL hit krnge to "apnecollege" username banega jisko
// variable k tarah treat kiya jaega

// GET Response : Hello, apnacollege!

const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`This app is listening on ${port}`);
});

app.get("/", (req, res) => {
    res.send("I am groot!");
});

// Sending variable => "./:{variable}"
// Jiss page m jaana hai wo username likh k hit krnge
app.get("/:username", (req, res) => {
    console.log(req.params);
    res.send(`Hello, ${req.params.username}!`);
});
// Console : { username: 'apnacollege', id: '123'}

// variable k saath "id" v bhj skte hai 
// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     res.send(`Hello, ${req.params.username}!`);
// });
// Console : { username: 'apnacollege', id: '123'}

// Hum chahe to inhein alag variable k andr store krwa skte hai
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username}.</h1>`
    console.log(req.params);
    // res.send(`Welcome to the page of @${username}.`);
    res.send(htmlStr);
});

// http://localhost:8080/apnacollege/234 => hit this URL in browser
// This is how we design custom page.