/**
 * Routing :
 * => It is the process of selecting a path for traffic in a network or between or
 *    across multiple networks.
 * 
 *    app.get("/apple", (req, res) => {
 *        res.send({
 *            name: "apple",
 *            color: "red",
 *        });
 *    });
 * 
 * 
 * => Websites k upar jaruri nhi h ki ek hi link k upar saari chije available hogi.
 * => Generally badi website m alag alag tarike ki chije alag alag routes k upar
 *    available hoti hai means alag alag pages k upar available hoti hai.
 *       "/home" => home page/route
 *       "/search" => search page/route
 *    
 * 
 * => Routing means network k upar jb v hum request bhj rhe hai to hm kn se path par
 *    request bhj rhe hai like "/home". Alag alag path m hum request bhjte hai to 
 *    humaare paas alag alag responses aate hai.
*/

/**
 * Q. Alag alag path/route k hisaab se hm alag alag responses kaise bhj skte hai?
 * 
 *    app.use((req, res) => {
 *        console.log("new incoming request");
 *        let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
 *        res.send(code);
 *    })
 * 
 * => Avi hum "app.use()" use kr rhe hai, to jb hm "app.use()" use krte hai aur uske
 *    andr "res.send()" response bhjte hai to ye response hm kisi v route k upar
 *    response bheje, sbke liye ekhi response humaare paas aaega.
 * 
 *    http://www.localhost:8080
 *    http://www.localhost:8080/fruits
 *    http://www.localhost:8080/fruits/apple
 * 
 * => Ye sb same response dega. But generally, alag alag routes k hisaab se hm alag
 *    alag responses send kr rhe hote hai.
 * 
 * Note: 
 * => Ab alag alag routes k alag alag responses ko send krne k liye hum app k
 *    dusre methods ka use kr skte hai.
 * => "app.get(name)" : Isle andr 2 argument hote hai :
 *    (a) path : Ye humare liye humara path define krta hai means kn se route/path par
 *               humari request aane wali hai. ("/" root path : default path jaha shuru m
 *               saari request yha pr aati hai).
 *    (b) callback : Jaise hi request aa gyi/request receive ho "path" k upar waise
 *                   hi ab kya execute hona chaiye wo saare iss callback k andr likhe hote hai.
 * 
 * Note: Ek baar m hm ekhi response bhj skte hai. Alag alag path k liye alag alag
 *       responses bhj skte hai lekin same path k liye alag alag responses nhi bhj skte.
*/

const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// Routing :
app.get("/", (req, res) => {
    res.send("hello, I am root");
})

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
})

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
})

/**
 * Standard response for non-existing route :
 * => '*' means saare k saare path means agar upar wale path se match ho gya aur
 *    response send ho gya to thk h wrna ek specific response bhjnge
*/

app.get("*", (req, res) => {
    res.send("404! This path doesn't exist");
})

app.post("/", (req, res) => {
    res.send("You sent a post request to root");
})

/**
 * Iss tarah se hum request send kr skte hai based on specific path.
*/