/**
 * Getting started with Express :
 * 
 * Q. How to create a server using express?
 * (1) First, create a new folder and intialize it with a blank "package.json" file using the command below: npm inti -y
 * (2) The -y flag when passed to NPM commands tells the generator to use the defaults instead of asking question.
 * (3) "npm init -y" will simply generate an empty npm project without going through an interactive process.
 * (4) To install the latest and stable version Express in your project, run the following command: npm i express
 *     => Upon execution of this command, you will have the express framework installed in your project. Let's create
 *        a sample code to test out Express JS Framework.
 * 
 * Web Server:
 * => "express()" is stored in "app" jo humein "server-side" wali web application
 *    create krne m help karega. And this "app" is an object. Iss object k andr
 *    bahut saare functions hai like "listen". Listen ek webserver bnata hai jo
 *    incoming API request k liye listen krta hai aur jaise hi ye webserver start
 *    ho jaega to hm print krwa dete hai "app" is listening. Aur isse clearity mil
 *    jaegi ki humara server start ho gya hai. Basically this express() function 
 *    returns an object which can be used to configure Express application.
 * => The app object includes methods for routing HTTP requests, configuring middleware,
 *    rendering HTML views and registering a template engine.
 * => The app.listen() function creates the Node.JS web server at the specified host 
 *    and port. It's identical to Node's http.Server.listen() method.
 * => Run the above example using "node fileName.js" command and point your browser tp
 *    "http://localhost:8080". It will display "Cannot GET/"  because we have not configured
 *    any routes yet.
*/


const express = require('express');
const app = express();

/**
 * Iske andr express ki saari properties hm dkh skte hai
*/

console.dir(app); 

let port = 8080;

/**
 * => app.listen() aisa function h jo incoming/API request k liye listen krte rehta hai
 * => Iss listen function m 2 arguments lets hai : 
 *    (a) port, 
 *    (b) callback
*/

app.listen (port, () => {
    console.log(`app listening on port ${port}`);
});


/**
 * => "Ports" are the logical endpoints of a network connection that is used to 
 *    exchange information between a web server and a web client.
 *    Humaare computer k andr ports hote hai i.e. physical ports like USB. So,
 *    basically connect kre k points, ki agar mujhe apne laptop k saath kisi aur
 *    device ko like pendrive, charger wire etc ko connect krni hai to uske connect
 *    krne ka kya raasta rahega? Usse hum Physical Ports bolte hai.
 *    Similarly, sea aur land ko connect krne k liye hm bich m ek port bna dete hai,
 *    to ye v connection points hai. Similarly, humaare network k saath v connection
 *    points hote hai means aise points jaha par network k andr ek "request" &
 *    "response" wala connection build ho skta hai or we can say aisa point jaha
 *    se humaara client humaare server k saath baat karega.
 * 
 * => Ports like 3000, 8080 available hote hai jinko hum custom server bnanae k
 *    liye use kr skte hai. Aur iss port k upar jb v request aaegi means 3000 port
 *    ko jb v access kiya jaega request k liye/server start hoga hm ek callback
 *    likhnge jo console m print kr k btaega ki ab "app" listen krna start kr diya hai.
 * 
 * Note : 
 * 1. Basically this file will acts as a "server"
 * 2. Server start hone k baad ruk ni jaega, wo constantly request k liye
 *    krte jaa rha hai. Isse liye humaara kaam ho jaane k baad humein manually
 *    server stop krna padega (Ctrl + C)
*/

/**
 * Q. Ye to humne server-side ka code likh diya ki humne server start kr diya apne
 *    local system k andr aur avi wo request k liye listen kr rha hai lekin iss
 *    server/port pr hum request bhej kaise skte hai?
 * 
 * => Server/Port pe request bhjne k liye hum kisi v window pe jaa skte hai aur
 *    waha likh skte hai "localhost:3000" means jiss v server pe hm request daalne
 *    jaa rhe hai wo humaari hi machine k andr kaam kr rha hai. Means mai apne
 *    hi machine k andr 3000 wale port pe jo server chl rha hai usko access krne ki
 *    request bhjne ki koshish kr rha hu, aur agar wo server band ho jaega to meri
 *    request nhi jaegi.
*/
