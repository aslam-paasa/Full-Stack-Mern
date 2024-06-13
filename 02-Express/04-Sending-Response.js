/**
 * Sending a Response :
 * => Ab response send krne k liye hum apni 2 objects ko detail m dekhnge :
 *    (a) request (req)
 *    (b) response (res)
 * 
 * => Jb v hum API request bhjte hai browser/POSTMAN se kisi URL ko to humaari jo
 *    HTTP request jaati hai ye basically text based hoti hai means jo v humari paas
 *    request aa rhi hai wo shuru m ek text based request thi, lekin ExpressJS uss
 *    request ko object k andr convert kr deta hai jo JavaScript smjh paata hai. And
 *    this process is called "parsing".
 * 
 * Note : Text based isliye qki dusri languages k andr v server likhe hue hai to v inko smjh pae.
*/

const express = require('express');
const app = express();

let port = 8080;

app.listen (port, () => {
    console.log(`app listening on port ${port}`);
});

app.use((req, res) => {

    /**
     * => POSTMAN se hum request bhjnge to yha pe request object print ho k aaegi.
     * => Iss request k andr bahut saari properties and functions hoti hai
     * => console.log(req);
    */

    console.log("new incoming request");

    /**
     * Send response :
     * (a) String format: 
     *  => res.send("this is a basic response");
     * 
     * (b) Object converted to JSON format:
     *  => res.send({
     *        name: "apple",
     *        color: "red",
     *     })
     * 
     * (c) HTML format
    */

    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
    res.send(code);

});

/**
 * => Response ko send krne k liye hum "res" object ko use krte hai.
 * => ExpressJS m response ko send krne k liye ek method hota hai "res.send()"
 * => "res.send()" sends the HTTP response, and it can send multiple types of responses 
 *    like an object, array, boolean, String.
 * => By default ExpressJS uss response ko JSON representation k andr change kr dega.
*/

/**
 * 1.Sending String response :
 * => res.send("this is a basic response");
 * 
 * => Ab browser pe URL open "http://localhost:8080/" krnge to screen pe response 
 *    display hoga "this is a basic response".
*/

/**
 * 2.Sending Object response :
 *  => res.send({
 *        name: "apple",
 *        color: "red",
 *     })
 * 
 * => ExpressJS iss JS k object ko convert kr dega JSON representation m.
 * 
*/

/**
 * 3.Sending HTML response :
 * => let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
 * => res.send(code);
 * 
 * Browser Output :
 * => Fruits
 *      apple
 *      orange
*/
